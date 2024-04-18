'use client'

import { ImageSectionProps } from "@/interfaces/ImagesProps";
import Image from "next/image";
import { DirectionAwayHover } from "./DirectionHover";
import DialogProduct from "@/app/components/About-Product/DialogProduct";


export default function PrincipalImageProduct({ SrcImage }: { SrcImage: ImageSectionProps }) {

    const onClickImage = ( src: string = '/ProductMainImage/image1.webp' ) => {
        console.log('Image clicked', src)
    }

    return (
    <section>
        <DialogProduct onClickImage={onClickImage} SrcImage={SrcImage} />
        <h6 className='text-sm text-zinc-700  pt-3 flex gap-x-2 cursor-default items-center justify-center'>
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