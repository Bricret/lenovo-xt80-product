'use client'

import { useEffect, useState } from "react";
import Header from "./Header";
import HeaderV2 from "./Header-V2";
import { motion } from 'framer-motion';

export default function Headers() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 250) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
     };

     useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
     }, []);

    return (
        <>
        <motion.header
          className={`transition-all duration-500 ${isScrolled ? 'hidden' : 'block'} p-4 shadow-lg sticky top-0 bg-white`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
        >
          <Header />
        </motion.header>
        <motion.header
          className={`transition-all duration-500 ${isScrolled ? 'block' : 'hidden'} px-4 py-3 bg-black shadow-xl sticky top-0`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
        >
          <HeaderV2 />
        </motion.header>
      </>
    )
}