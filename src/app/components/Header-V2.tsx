
export default function HeaderV2() {
    return (
        <nav className="flex justify-between items-center container">
            <h1 className="font-bold text-white text-xl">
                Lenovo Xt80 - Bluetooth 5.3 
            </h1>
            <section className="hidden md:block">
                <ul className="flex items-center text-white gap-4">
                    <li>Caracteristicas</li>
                    <li>Especificaciones</li>
                    <li>Reseñas</li>
                </ul>
            </section>
            <button className="inline-flex h-11 animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Agregar al Carrito
            </button>
        </nav>
    )
}
      