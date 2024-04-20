'use client'

import { useRef } from "react";
import { useScroll, motion } from 'framer-motion';
import Image from "next/image";

export default function InformationV2() {
    
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
    })

    return (
    <div className="bg-zinc-400 w-full flex flex-col items-center justify-center">
            <div 
                className="grid grid-cols-1 md:grid-cols-2  gap-10 py-32 bg-zinc-400 w-4/5">
            <motion.div 
                className="container"
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
            >
                <h2 className="text-4xl text-zinc-800 font-bold pb-2">Diseño ergonomico y practico</h2>
                <p className="text-lg text-zinc-800">Una combinación de comodidad y estabilidad durante los entrenamientos intensos. El diseño liviano y ergonómico, junto con los ganchos de silicona suaves, garantizan un uso cómodo y seguro incluso en entrenamientos extenuantes</p>
            </motion.div>
            <motion.div 
                className="container"
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
            >
                <Image 
                    src={'/ProductMainImage/detailProduct.png'}
                    alt="Lenovo XT80"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover w-full h-full md:h-60"
                />
            </motion.div>
        </div>
    </div>
    )
}