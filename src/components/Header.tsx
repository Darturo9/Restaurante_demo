'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 bg-blue-900/95 backdrop-blur-md shadow-lg z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl">🍔</span>
                        <span className="text-xl font-bold text-white">
                            Danilo´s <span className="text-orange-400">Burger</span>
                        </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                            Inicio
                        </Link>
                        <Link href="/menu" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                            Menú
                        </Link>
                        <Link href="/nosotros" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                            Nosotros
                        </Link>
                        <Link href="/contacto" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                            Contacto
                        </Link>
                        <Link href="/contacto" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-lg hover:from-orange-400 hover:to-orange-300 transition-all font-bold">
                            Reservar
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-orange-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="text-2xl">☰</span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-blue-700">
                        <nav className="flex flex-col space-y-3">
                            <Link href="/" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                                Inicio
                            </Link>
                            <Link href="/menu" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                                Menú
                            </Link>
                            <Link href="/nosotros" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                                Nosotros
                            </Link>
                            <Link href="/contacto" className="text-blue-100 hover:text-orange-400 transition-colors font-medium">
                                Contacto
                            </Link>
                            <Link href="/contacto" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-lg hover:from-orange-400 hover:to-orange-300 transition-all font-bold w-fit">
                                Reservar
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}