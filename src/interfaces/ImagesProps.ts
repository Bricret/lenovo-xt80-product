import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageSectionProps {
    src: string;
    alt: string;
    price: number;
}

export interface InformationAboutProductProps {
    title: string;
    description: string;
    src: string;
}


export interface SectionImageProductProps {
    src: string | StaticImport;
    alt: string;
    price: number;
}