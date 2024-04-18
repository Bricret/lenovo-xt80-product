import Image from "next/image";
import ButtonShop from "./Button-Shop";
import { InformationAboutProduct } from "@/data/SectionImage";

export default function InformationAboutProductMain() {

    return (
        <section className='px-4 w-10/12'>
            <div>
                <span className='font-semibold text-sm text-green-600'>¡Envio Gratuito!</span>
                <h1 className='font-bold text-2xl'>Lenovo Xt80 Bluetooth 5.3</h1>
                <h3 className='font-light text-base'>Audífonos Deportivos Inalámbricos</h3>
            </div>
            <div className='py-6'>
                <h4 className='font-semibold text-base'>$ 89.690</h4>
            </div>
            <div className='flex flex-col pb-8'>
                <span className='font-light text-sm'>Color: <span className='font-bold'>Negro</span></span>
                <div className='bg-black rounded-full w-9 h-9 border-2 border-green-600 mt-2 mb-6 mx-2 cursor-pointer' />
                <ButtonShop title='Agregar al Carrito'/>
            </div>
            <div className='pt-4 border-t-2 border-b-2'>
                <ul>
                {
                InformationAboutProduct.map(({ description, src, title }) => (
                    <li className='flex gap-x-2 items-center pb-4' key={ title }>
                        <span>
                            <Image 
                                src={ src }
                                alt={ title }
                                width={30}
                                height={30}
                            />
                        </span>
                        <div className='cursor-default'>
                            <h2 className='font-bold text-sm'>{ title }</h2>
                            <p 
                                className='font-light text-sm text-zinc-700'>
                                { description }
                            </p>
                    </div>
                    </li>
                ))
                }
                </ul>
            </div>
        </section>
    )

}