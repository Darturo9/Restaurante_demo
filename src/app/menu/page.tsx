import MenuDynamic from '@/components/MenuDynamic'

export default function MenuPage() {
    return (
        <main className="min-h-screen">
            {/* 🔥 HEADER SIMPLE DE LA PÁGINA MENÚ */}
            <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Nuestro <span className="text-orange-400">Menú</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Hamburguesas artesanales, alitas crujientes, camarones frescos y más.
                        Todo preparado con amor y los mejores ingredientes
                    </p>
                </div>
            </section>

            {/* 🔥 MENÚ DINÁMICO COMPLETO DESDE SUPABASE */}
            <MenuDynamic />
        </main>
    )
}