'use client'

import { ImagesPresentation } from "@/data/SectionImage";
import { ImageSectionProps } from "@/interfaces/ImagesProps";
import Image from "next/image";
import TextInformation from "./header/TextInformation";

export default function SectionImageProduct({ CaptureSrcImage }: { CaptureSrcImage: ( imageInfo: ImageSectionProps ) => void }){
    return (
        <section>
        <TextInformation type={2} />
        <ul className='flex flex-row gap-x-1 justify-center items-center py-4 md:flex md:flex-col md:gap-y-1 md:justify-end md:items-end md:pr-4'>
        {
        ImagesPresentation.map(( image ) => (
            <li key={ image.alt }>
                <button 
                 onClick={ () => CaptureSrcImage(image) } 
                 className='rounded-lg shadow-xl  bg-white border border-gray-200/80 hover:border-black/80 hover:border focus:border-black/80 focus:border'
                >
                    <Image
                        src={ image.src }
                        alt={ image.alt }
                        width={50}
                        height={50}
                        className="object-cover object-center w-auto h-auto p-0.5"
                    />
                </button>
            </li>
        ))
        }
        </ul>
    </section>
    )
}