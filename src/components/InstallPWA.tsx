'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[]
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed'
        platform: string
    }>
    prompt(): Promise<void>
}

export default function InstallPWA() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [showInstallButton, setShowInstallButton] = useState(false)

    useEffect(() => {
        const handler = (e: BeforeInstallPromptEvent) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setShowInstallButton(true)
        }

        window.addEventListener('beforeinstallprompt', handler as any)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler as any)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            console.log('PWA instalada')
        }

        setDeferredPrompt(null)
        setShowInstallButton(false)
    }

    if (!showInstallButton) return null

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
                <div className="flex items-start space-x-3">
                    <div className="text-2xl">📱</div>
                    <div className="flex-1">
                        <h3 className="font-bold text-sm mb-1">¡Instala nuestra App!</h3>
                        <p className="text-xs opacity-90 mb-3">
                            Accede rápido, recibe ofertas y haz pedidos desde tu pantalla de inicio
                        </p>
                        <div className="flex space-x-2">
                            <button
                                onClick={handleInstallClick}
                                className="bg-white text-orange-600 px-3 py-1 rounded text-xs font-semibold hover:bg-orange-50 transition-colors"
                            >
                                Instalar
                            </button>
                            <button
                                onClick={() => setShowInstallButton(false)}
                                className="text-white/80 px-3 py-1 rounded text-xs hover:text-white transition-colors"
                            >
                                Después
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}