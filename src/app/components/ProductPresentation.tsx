import SectionImageProduct from '@/components/UI/Section-Image-Product'
import './style.css'
import Image from 'next/image'
import PrincipalImageProduct from '@/components/UI/PrincipalImageProduct'
import ButtonShop from '@/components/UI/Button-Shop'

export default function ProductPresentation() {
    return (
        <main className="parent container pt-10">

            <SectionImageProduct />

           <PrincipalImageProduct />
            <section className='px-4 w-10/12'>
                <div>
                    <span className='font-semibold text-sm text-green-600'>¡Envio Gratuito!</span>
                    <h1 className='font-bold text-3xl'>Lenovo Xt80 Bluetooth 5.3</h1>
                    <h3 className='font-light text-base'>Audífonos Deportivos Inalámbricos</h3>
                </div>
                <div className='py-6'>
                    <h4 className='font-semibold text-base'>$ 89.690</h4>
                </div>
                <div className='flex flex-col'>
                    <span className='font-light text-sm'>Color: <span className='font-bold'>Negro</span></span>
                    <div className='bg-black rounded-full w-9 h-9 border-2 border-green-600 mt-2 mb-4 mx-2 cursor-pointer' />
                <ButtonShop title='Agregar al Carrito'/>
                </div>
            </section>
        </main>
    )
}