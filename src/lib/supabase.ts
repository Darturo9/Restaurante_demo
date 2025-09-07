import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos TypeScript para el menú
export interface MenuItem {
    id: number
    name: string
    description: string
    price: number
    category: string
    image_url?: string
    emoji: string
    available: boolean
    featured: boolean
    created_at: string
    updated_at: string
}

// Tipos para autenticación
export interface AdminUser {
    id: string
    email: string
    role: string
    restaurant_name?: string
    created_at: string
}

// Funciones helper para el menú
export const menuHelpers = {
    // Obtener todos los items del menú
    async getMenuItems() {
        const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('available', true)
            .order('featured', { ascending: false })
            .order('category', { ascending: true })
            .order('name', { ascending: true })

        return { data, error }
    },

    // Obtener items por categoría
    async getItemsByCategory(category: string) {
        const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('category', category)
            .eq('available', true)
            .order('name', { ascending: true })

        return { data, error }
    },

    // Obtener items destacados
    async getFeaturedItems() {
        const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('featured', true)
            .eq('available', true)
            .order('name', { ascending: true })

        return { data, error }
    },

    // Obtener estadísticas del menú
    async getMenuStats() {
        const { data, error } = await supabase
            .from('menu_items')
            .select('id, price, category, available, featured')

        if (error) return { data: null, error }

        const stats = {
            totalItems: data.length,
            availableItems: data.filter(item => item.available).length,
            categories: new Set(data.map(item => item.category)).size,
            avgPrice: data.reduce((sum, item) => sum + item.price, 0) / data.length || 0
        }

        return { data: stats, error: null }
    }
}

// Funciones para administración
export const adminHelpers = {
    // Verificar si el usuario es admin
    async checkAdminUser(userId: string) {
        const { data, error } = await supabase
            .from('admin_users')
            .select('*')
            .eq('id', userId)
            .single()

        return { data, error }
    },

    // Crear usuario admin
    async createAdminUser(userId: string, email: string, restaurantName?: string) {
        const { data, error } = await supabase
            .from('admin_users')
            .insert({
                id: userId,
                email: email,
                restaurant_name: restaurantName || 'Danilo\'s Burger'
            })

        return { data, error }
    }
}

// Log para verificar conexión
console.log('🔗 Supabase configurado:', {
    url: supabaseUrl,
    hasKey: !!supabaseAnonKey
})