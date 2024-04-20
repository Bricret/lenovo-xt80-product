import ButtonShop from "@/components/UI/Button-Shop";
import Link from "next/link";

export default function HeaderV2() {
    return (
        <nav className="flex justify-between items-center container">
            <h1 className="flex gap-x-1 font-bold text-white text-xl">
                Lenovo Xt80<span className="hidden md:block"> - Bluetooth 5.3</span> 
            </h1>
            <ButtonShop title="Agregar al Carrito"/>
        </nav>
    )
}
      