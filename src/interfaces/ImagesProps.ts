
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
    src: string;
    alt: string;
    price: number;
}

export interface FeatureProductProps {
    src: string;
    title: string;
}

export interface EspecificationsAboutProductProps {
    title: string;
    description: DescriptionProps[];
}

interface DescriptionProps {
    title: string;
    description: string;
}