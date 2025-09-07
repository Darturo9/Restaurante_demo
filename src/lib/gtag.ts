export const GA_TRACKING_ID = 'G-RGJ6PT0P5F' // 🔥 TU ID REAL

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Eventos específicos para restaurantes
export const trackWhatsAppClick = (location: string) => {
    event({
        action: 'whatsapp_click',
        category: 'contact',
        label: location
    })
}

export const trackPWAInstall = () => {
    event({
        action: 'pwa_install',
        category: 'engagement',
        label: 'app_install'
    })
}

export const trackMenuView = (item: string) => {
    event({
        action: 'menu_view',
        category: 'menu',
        label: item
    })
}

export const trackFormSubmit = (formType: string) => {
    event({
        action: 'form_submit',
        category: 'leads',
        label: formType
    })
}

// Declarar gtag en window
declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event',
            targetId: string,
            config?: any
        ) => void;
    }
}