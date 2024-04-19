'use client'

import { ImageSectionProps } from "@/interfaces/ImagesProps";
import Image from "next/image";
import { DirectionAwayHover } from "./DirectionHover";
import DialogProduct from "@/app/components/About-Product/DialogProduct";


export default function PrincipalImageProduct({ SrcImage }: { SrcImage: ImageSectionProps }) {

    return (
    <section>
        <DialogProduct SrcImage={SrcImage} />
        <button 
            className="z-0 flex items-center justify-center w-full p-2 md:hidden"
        >
            <DirectionAwayHover SectionImageProduct={SrcImage} />
        </button>
        <h6 className='text-sm text-zinc-7009  md:flex  pt-3 hidden  gap-x-2 cursor-default items-center justify-center'>
            Presiona la imagen para expandirla
            <Image
                src={'/icons/expanded.svg'}
                alt='Icon to expand the image'
                width={20}
                height={20}
                className='w-5 h-5 text-zinc-700 cursor-zoom-in'
            />
        </h6>
    </section>
    )
}