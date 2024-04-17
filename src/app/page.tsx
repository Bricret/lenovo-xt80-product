import Image from 'next/image';

export default function Home() {
  return (
    <header className='bg-zinc-200 p-4 '>
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
        <section>
          <ul className='flex gap-3'>
            <li>Tienda</li>
            <li>Soporte</li>
          </ul>
        </section>
        <div className='flex gap-3'>
          <button>
            <Image 
              alt='User' 
              src={'/icons/search.svg'}
              width={30}
              height={30} 
            />
          </button>
          <button>
            <Image 
              alt='User' 
              src={'/icons/shop-car.svg'}
              width={30}
              height={30} 
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
