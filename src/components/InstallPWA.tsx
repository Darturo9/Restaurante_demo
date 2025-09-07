'use client'

import { useState, useEffect } from 'react'

export default function InstallPWA() {
    const [showInstallButton, setShowInstallButton] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        // Solo en el cliente
        if (typeof window === 'undefined') return;

        // Detectar iOS
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        setIsIOS(iOS)

        // Detectar si ya está instalado (standalone)
        const standalone = window.matchMedia('(display-mode: standalone)').matches
        setIsStandalone(standalone)

        // Para Android/Chrome
        const handler = (e: any) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setShowInstallButton(true)
        }

        window.addEventListener('beforeinstallprompt', handler)

        // Para iOS - mostrar instrucciones si no está instalado
        if (iOS && !standalone) {
            setShowInstallButton(true)
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            // Android/Chrome
            try {
                deferredPrompt.prompt()
                const { outcome } = await deferredPrompt.userChoice

                if (outcome === 'accepted') {
                    console.log('PWA instalada')
                }

                setDeferredPrompt(null)
                setShowInstallButton(false)
            } catch (error) {
                console.error('Error installing PWA:', error)
            }
        }
    }

    // No mostrar si ya está instalado o en servidor
    if (typeof window === 'undefined' || isStandalone || !showInstallButton) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                    <div className="text-2xl">📱</div>
                    <div className="flex-1">
                        <h3 className="font-bold text-sm mb-1">¡Instala nuestra App!</h3>

                        {isIOS ? (
                            // Instrucciones para iOS
                            <div>
                                <p className="text-xs opacity-90 mb-3">
                                    Para instalar en iPhone:
                                </p>
                                <div className="text-xs opacity-90 mb-3 space-y-1">
                                    <div>1. Toca el botón <span className="font-semibold">⎖ Compartir</span></div>
                                    <div>2. Selecciona <span className="font-semibold">"Añadir a pantalla de inicio"</span></div>
                                    <div>3. ¡Confirma y listo! 🎉</div>
                                </div>
                            </div>
                        ) : (
                            // Para Android/Chrome
                            <p className="text-xs opacity-90 mb-3">
                                Accede rápido, recibe ofertas y haz pedidos desde tu pantalla de inicio
                            </p>
                        )}

                        <div className="flex space-x-2">
                            {!isIOS && (
                                <button
                                    onClick={handleInstallClick}
                                    className="bg-white text-orange-600 px-3 py-1 rounded text-xs font-semibold hover:bg-orange-50 transition-colors"
                                >
                                    Instalar
                                </button>
                            )}
                            <button
                                onClick={() => setShowInstallButton(false)}
                                className="text-white/80 px-3 py-1 rounded text-xs hover:text-white transition-colors"
                            >
                                {isIOS ? 'Entendido' : 'Después'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}