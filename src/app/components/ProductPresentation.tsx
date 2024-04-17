import SectionImageProduct from '@/components/UI/Section-Image-Product'
import './style.css'
import Image from 'next/image'

export default function ProductPresentation() {
    return (
        <main className="parent container pt-10">

            <SectionImageProduct />

            <section>
                <button>

                </button>
                <h6 className='text-sm text-zinc-700 flex gap-x-2 cursor-default'>
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
            <h1>hola3</h1>
        </main>
    )
}