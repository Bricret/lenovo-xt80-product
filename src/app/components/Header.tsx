import { NavbarSection } from "@/components/navbar-section";
import Image from "next/image";

export default function Header() {
    return (
        <header className='p-4 shadow-lg'>
            <nav className='flex justify-between items-center'>
                <picture>
                <Image 
                    alt='Logo Enteprise' 
                    src={'/Logo.png'}
                    width={200}
                    height={100} 
                    className='w-52 md:w-auto'
                    priority
                />
                </picture>
                <section className="hidden md:block">
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
        </header>
    )
}