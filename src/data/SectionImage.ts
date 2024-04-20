import { EspecificationsAboutProductProps, FeatureProductProps, ImageSectionProps, InformationAboutProductProps, InformationProduct } from "@/interfaces/ImagesProps";

const price = 89.690

export const ImagesPresentation: ImageSectionProps[] = [
    {
        src: '/ProductMainImage/image1.webp',
        alt: 'Lenovo Xt80 Bluetooth 5.3',
        price
    },
    {
        src: '/ProductMainImage/image2.webp',
        alt: 'Lenovo Xt80 High Quality Sound',
        price
    },
    {
        src: '/ProductMainImage/image3.webp',
        alt: 'Lenovo Xt80 Best Sound Quality',
        price
    },
    {
        src: '/ProductMainImage/image4.webp',
        alt: 'Lenovo Xt80 Amazing Sound Quality',
        price
    },
    {
        src: '/ProductMainImage/image5.webp',
        alt: 'Lenovo Xt80 More Sound Quality',
        price
    },
    {
        src: '/ProductMainImage/image6.webp',
        alt: 'Lenovo Xt80 cool sound quality',
        price
    },
]

export const InformationAboutProduct: InformationAboutProductProps[] = [
    {
        title: "Despacho a domicilio",
        description: "Contamos con entrega a domicilio",
        src: "/icons/truck-delivery.svg"
    },
    {
        title: "Retira tu compra",
        description: "No disponible por el momento",
        src: "/icons/location-off.svg"
    },
    {
        title: "Devoluciones",
        description: "Devoluciones en un plazo de 30 días",
        src: "/icons/truck-return.svg"
    }
]

export const FeaturesProduct: FeatureProductProps[] = [
    {
        src: "/icons/headset.svg",
        title: "Hechos para moverte"
    },
    {
        src: "/icons/battery.svg",
        title: "Hasta 7 horas de uso y 300 horas en standby"
    },
    {
        src: "/icons/mobiles.svg",
        title: "Compatible con todos los dispositivos"
    },
    {
        src: "/icons/sound.svg",
        title: "Cancelación de ruido"
    },
]


export const EspecificationsAboutProduct: EspecificationsAboutProductProps[] = [
    {
        title: "Audio",
        description: [
            {
                title: "Cantidad de Micrófonos",
                description: "2"
            },
            {
                title: "Sonido ambiental",
                description: "Si"
            },
            {
                title: "Voice Detect",
                description: "Si"
            },
            {
                title: "Speaker",
                description: "10mm speaker"
            },
            {
                title: "ANC",
                description: "No"
            },
            {
                title: "360 audio",
                description: "No"
            },
            {
                title: "AirVent",
                description: "No"
            },
            {
                title: "Audio Codec",
                description: "SBC (Subband Codec)"
            }
        ]
    },
    {
        title: "Batería",
        description: [
            {
                title: "Capacidad de la batería",
                description: "50mAh"
            },
            {
                title: "Tiempo de carga",
                description: "1.5 horas"
            },
            {
                title: "Tiempo de uso",
                description: "7 horas"
            },
            {
                title: "Tiempo en standby",
                description: "300 horas"
            }
        ]
    },
    {
        title: "Conexión",
        description: [
            {
                title: "Bluetooth",
                description: "5.3"
            },
            {
                title: "Distancia de conexión",
                description: "10 metros"
            },
            {
                title: "Compatibilidad",
                description: "Android, iOS"
            }
        ]
    },
    {
        title: "Datos fisicos",
        description: [
            {
                title: "Peso",
                description: "4.1g"
            },
            {
                title: "Dimensiones",
                description: "16.5 x 20.5 x 21.5 mm"
            },
            {
                title: "Color",
                description: "Negro"
            }
        ]
    }
]


export const informationProduct: InformationProduct[] = [
    {
        title: 'Diseñado para la comodidad',
        description: 'Está equipado con puntas de ala cómodas y de ajuste seguro que se flexionan para adaptarse a su oreja. El diseño universal de punta de ala fue puesto a prueba por atletas de todo tipo, por lo que puedes confiar en que estos auriculares se mantendrán en su sitio durante los días de trabajo y entrenamiento.',
        src: '/ProductMainImage/Lenovo-XT80.webp',
        dmn: 400
    }
]