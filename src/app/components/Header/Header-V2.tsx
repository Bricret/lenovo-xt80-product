import ButtonShop from "@/components/UI/Button-Shop";
import Link from "next/link";

export default function HeaderV2() {
    return (
        <nav className="flex justify-between items-center container">
            <h1 className="flex gap-x-1 font-bold text-white text-xl">
                Lenovo Xt80<span className="hidden md:block"> - Bluetooth 5.3</span> 
            </h1>
            <section className="hidden md:block">
                <nav className="flex flx-row gap-x-3 md:gap-x-10 py-1.5 px-3 md:px-6 text-base text-white rounded-full backdrop-blur-sm">
                    <Link href="#feature" className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5">Caracteristicas</Link>
                    <Link href="#" className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5">Especificaciones</Link>
                    <Link href="#" className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5">Reseñas</Link>
                </nav>
            </section>
            <ButtonShop title="Agregar al Carrito"/>
        </nav>
    )
}
      