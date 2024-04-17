import { ImagesPresentation } from "@/data/SectionImage";
import Image from "next/image";

export default function SectionImageProduct() {
    return (
        <section>
        <ul className='flex flex-col gap-1'>
        {
            ImagesPresentation.map(( image ) => (
                <li key={ image.alt }>
                    <button>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={50}
                            height={50}
                            className='rounded-lg shadow-xl object-cover object-center w-auto h-auto p-0.5 bg-white border border-gray-200/80 hover:border-black/80 hover:border focus:outline-none focus:ring- focus:ring-gray-200/80 focus:ring-offset-1 focus:ring-offset-gray-200/80'
                        />
                    </button>
                </li>
            ))
        }
        </ul>
    </section>
    )
}