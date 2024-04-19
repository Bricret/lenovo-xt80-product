'use client'

import Button from "@/components/UI/Button";
import { EspecificationsAboutProduct, FeaturesProduct } from "@/data/SectionImage";
import Image from "next/image";
import { useState } from "react";


export default function Features() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <section className='feature pt-16 container'>
        <h1 
          className='font-extrabold text-2xl text-pretty tracking-widest text-center container w-4/5'>
            Lenovo Xt80 - Unos auténticos auriculares inalámbricos con sonido de alta fidelidad que se mantienen cómodamente en su sitio.
          </h1>
        <div className='pt-6 grid grid-cols-4 gap-4 items-center justify-center'>
        {
            FeaturesProduct.map(( feature ) => (
                <div className='grid grid-rows-2 grid-flow-col gap-3' key={feature.title}>
                <p className='mb-4 w-full h-full flex items-center justify-center'>
                  <Image 
                    src={ feature.src }
                    alt='Icono de auriculares'
                    width={30}
                    height={30}
                    className='object-cover object-center w-auto h-auto'
                  />
                </p>
                <span className='uppercase text-center'>
                    { feature.title }
                </span>
              </div>
            ))
        }
        </div>
        <article className="flex flex-col items-center justify-center pt-4 container w-full">
            <div className={`grid grid-rows-4 grid-flow-col gap-4 w-full pb-6 ${ click ? '' : 'hidden' }`}>
            {
                EspecificationsAboutProduct.map(( { title, description } ) => (
                    <div className="grid grid-cols-custom gap-4 border-b py-10" key={ title }>
                    <h1 className="font-bold text-2xl">{ title }</h1>
                    <ul className="grid grid-rows-2 grid-flow-col flex-col gap-y-10 gap-x-12">
                    {
                        description.map(( { title, description } ) => (
                            <li key={ title }>
                                <h2 className="font-semibold">{ title }</h2>
                                <p>{ description }</p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                ))
            }
            </div>
            <Button handleClick={handleClick}>
                <p className="flex gap-x-2">
                    <span className="text-black font-normal">
                        { click ? 'Ver menos' : 'Ver más' }
                    </span>
                    <Image
                        src={`/icons/arrow-${click ? 'up' : 'down'}.svg`}
                        alt='Icono de flecha derecha'
                        width={20}
                        height={20}
                        className='object-cover object-center w-auto h-auto'
                    />
                </p>
            </Button>
        </article>
      </section>
    )
}