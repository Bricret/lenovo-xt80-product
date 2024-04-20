'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { IconHeart } from "@/components/UI/icon";

export default function Banner() {
    return (
        <section className="bg-black">
            <div className="container mx-auto py-20">
                <div className="flex flex-col items-center justify-center gap-y-4">
                <motion.svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    animate={{
                        scale: [1, 1.1, 1, 0.9, 1], // Cambia el tamaño del SVG
                        rotate: [0, 0, 0, 0, 0], // Rota el SVG
                    }}
                    transition={{
                        duration: 2, // Duración de cada ciclo de animación
                        repeat: Infinity, // Repite la animación infinitamente
                        ease: "easeInOut", // Suaviza el inicio y el fin de la animación
                    }}
            >
                <IconHeart />
                </motion.svg>
                    <h2 className="text-white text-3xl font-bold">¡Gracias por visitarnos!</h2>
                    <p className="text-white text-lg text-center">Si te gustó el <span className="font-semibold text-[#a9d500] text-lg">producto</span>, no dudes en compartirlo con tus amigos y familiares.</p>
                </div>
            </div>
        </section>
    )
}