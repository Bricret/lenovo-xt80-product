import { ImageSectionProps, InformationAboutProductProps } from "@/interfaces/ImagesProps";

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