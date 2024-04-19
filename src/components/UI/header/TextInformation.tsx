export default function TextInformation({ type }: { type: number}) {


    let HiddenOrNot = 'hidden md:block'
    if (type === 1) {
        HiddenOrNot = 'hidden md:block'
    } else {
        HiddenOrNot = 'block md:hidden'
    }

    return (
        <div className={`${HiddenOrNot}`}>
            <span className='font-semibold text-sm text-green-600'>¡Envio Gratuito!</span>
            <h1 className='font-bold text-2xl'>Lenovo Xt80 Bluetooth 5.3</h1>
            <h3 className='font-light text-base'>Audífonos Deportivos Inalámbricos</h3>
        </div>
    )
}