import Image from "next/image";


export default function PrincipalImageProduct() {
    return (
    <section>
        <button>
            <Image 
                src={'/ProductMainImage/image2.webp'}
                alt='Main image of the product'
                width={450}
                height={450}
                className='w-full h-auto cursor-pointer object-cover'
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