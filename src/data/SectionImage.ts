import { InformationAboutProductProps } from "@/interfaces/ImagesProps";
import { ImageProps } from "next/image";

export const ImagesPresentation: ImageProps[] = [
    {
        src: '/ProductMainImage/image1.webp',
        alt: 'Ilustration of product 1'
    },
    {
        src: '/ProductMainImage/image2.webp',
        alt: 'Ilustration of product 2'
    },
    {
        src: '/ProductMainImage/image3.webp',
        alt: 'Ilustration of product 3'
    },
    {
        src: '/ProductMainImage/image4.webp',
        alt: 'Ilustration of product 4'
    },
    {
        src: '/ProductMainImage/image5.webp',
        alt: 'Ilustration of product 5'
    },
    {
        src: '/ProductMainImage/image6.webp',
        alt: 'Ilustration of product 6'
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