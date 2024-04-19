import ButtonShop from "@/components/UI/Button-Shop";

export default function HeaderV2() {
    return (
        <nav className="flex justify-between items-center container">
            <h1 className="flex gap-x-1 font-bold text-white text-xl">
                Lenovo Xt80<span className="hidden md:block"> - Bluetooth 5.3</span> 
            </h1>
            <section className="hidden md:block">
                <ul className="flex items-center text-white gap-4">
                    <li>Caracteristicas</li>
                    <li>Especificaciones</li>
                    <li>Reseñas</li>
                </ul>
            </section>
            <ButtonShop title="Agregar al Carrito"/>
        </nav>
    )
}
      