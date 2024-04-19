import { NavbarSection } from "@/components/UI/header/navbar-section";
import Image from "next/image";

export default function HeaderV1() {
    return (
        <nav className='container flex justify-between items-center'>
            <picture>
            <Image 
                alt='Logo Enteprise' 
                src={'/Logo.png'}
                width={200}
                height={100} 
                className='w-52'
                priority
            />
            </picture>
            <section className="hidden md:block relative w-auto">
                <NavbarSection />
            </section>
            <section className='flex gap-6'>
            <button>
                <Image 
                alt='User' 
                src={'/icons/search.svg'}
                width={25}
                height={25} 
                />
            </button>
            <button>
                <Image 
                alt='User' 
                src={'/icons/shop-car.svg'}
                width={25}
                height={25} 
                />
            </button>
            </section>
        </nav>
    )
}