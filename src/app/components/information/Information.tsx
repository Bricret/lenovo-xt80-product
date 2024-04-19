'use client'

import { useRef } from "react";
import Parallax from "../Parallax/Parallax";
import { useScroll, motion } from 'framer-motion';
import Image from "next/image";

export default function Information() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
    })

    return (
    <div className="bg-zinc-400 w-full flex flex-col items-center justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 pb-8 bg-zinc-400 w-4/5">
            <motion.div 
                className="container"
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
            >
                <h2 className="text-4xl text-zinc-800 font-bold pb-2">Diseñado para la comodidad</h2>
                <p className="text-lg text-zinc-800">está equipado con puntas de ala cómodas y de ajuste seguro que se flexionan para adaptarse a su oreja. El diseño universal de punta de ala fue puesto a prueba por atletas de todo tipo, por lo que puedes confiar en que estos auriculares se mantendrán en su sitio durante los días de trabajo y entrenamiento.</p>
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
                    src={'/ProductMainImage/aboutproduct2.jpg'}
                    alt="Lenovo XT80"
                    width={600}
                    height={600}
                    className="rounded-lg"
                />
            </motion.div>
        </div>
      <Parallax/>
    </div>
    )
}