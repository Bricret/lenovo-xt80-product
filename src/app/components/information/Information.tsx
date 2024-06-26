'use client'

import { useRef } from "react";
import Parallax from "../Parallax/Parallax";
import { useScroll, motion } from 'framer-motion';
import Image from "next/image";
import { informationProduct } from "@/data/SectionImage";

export default function Information() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
    })

    return (
    <div className="bg-zinc-400 w-full flex flex-col items-center justify-center mt-10 pt-20 ">
        {
            informationProduct.map((info) => (
            <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 bg-zinc-400 w-4/5"
                key={info.title}>
            <motion.div 
                className="container"
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
            >
                <h2 className="text-4xl text-zinc-800 font-bold pb-2">{ info.title }</h2>
                <p className="text-lg text-zinc-800">{ info.description }</p>
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
                    src={ info.src }
                    alt="Lenovo XT80"
                    width={info.dmn}
                    height={info.dmn}
                    className="rounded-lg object-cover w-full h-full md:h-96"
                />
            </motion.div>
        </div>
            ))
        }
      <Parallax/>
    </div>
    )
}