'use client'

interface MapComponentProps {
    lat: number
    lng: number
    name: string
    address: string
}

export default function MapComponent({ lat, lng, name, address }: MapComponentProps) {
    const handleOpenInGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
        window.open(googleMapsUrl, '_blank')
    }

    const handleOpenInWaze = () => {
        const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`
        window.open(wazeUrl, '_blank')
    }

    const handleGetDirections = () => {
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
        window.open(directionsUrl, '_blank')
    }

    // URL del iframe de Google Maps con coordenadas específicas
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.234!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(name)}!5e0!3m2!1ses!2sgt!4v1699123456789!5m2!1ses!2sgt`

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
            {/* Mapa iframe */}
            <div className="relative h-64 lg:h-96">
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${name}`}
                    className="rounded-t-lg"
                ></iframe>
            </div>

            {/* Información y botones */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
                <p className="text-gray-600 mb-4">{address}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                    <button
                        onClick={handleOpenInGoogleMaps}
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all text-sm font-medium"
                    >
                        <span>🗺️</span>
                        <span>Google Maps</span>
                    </button>

                    <button
                        onClick={handleOpenInWaze}
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all text-sm font-medium"
                    >
                        <span>🚗</span>
                        <span>Waze</span>
                    </button>
                </div>

                {/* Información adicional */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>📱 Tap para navegar</span>
                        <span>•</span>
                        <span>🅿️ Estacionamiento disponible</span>
                    </div>
                </div>
            </div>
        </div>
    )
}