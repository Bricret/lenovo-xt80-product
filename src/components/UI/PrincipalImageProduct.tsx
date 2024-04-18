import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


export default function PrincipalImageProduct({ SrcImage }: { SrcImage: string | StaticImport }) {
    return (
    <section>
        <button className="flex items-center justify-center w-full p-2">
            <Image 
                src={SrcImage || '/ProductMainImage/image1.webp'}
                alt='Main image of the product'
                width={450}
                height={450}
                className='w-auto h-auto object-cover cursor-pointer items-center justify-center'
            />
        </button>
        <h6 className='text-sm text-zinc-700  pt-3 flex gap-x-2 cursor-default items-center justify-center'>
            Presiona la imagen para expandirla
            <Image
                src={'/icons/expanded.svg'}
                alt='Icon to expand the image'
                width={20}
                height={20}
                className='w-5 h-5 text-zinc-700'
            />
        </h6>
    </section>
    )
}