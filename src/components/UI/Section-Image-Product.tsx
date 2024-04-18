'use client'

import { ImagesPresentation } from "@/data/SectionImage";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

export default function SectionImageProduct({ CaptureSrcImage } : { CaptureSrcImage: (src: string | StaticImport) => void }){
    return (
        <section>
        <ul className='flex flex-col gap-y-1 justify-end items-end pr-4'>
        {
        ImagesPresentation.map(( { src, alt} ) => (
            <li key={ alt }>
                <button 
                 onClick={ () => CaptureSrcImage(src) } 
                 className='rounded-lg shadow-xl  bg-white border border-gray-200/80 hover:border-black/80 hover:border focus:border-black/80 focus:border'
                >
                    <Image
                        src={ src }
                        alt={ alt }
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