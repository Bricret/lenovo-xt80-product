import { Link } from "lucide-react";
import React from "react";

export default function Button({ children, handleClick }: { children: React.ReactNode, handleClick: () => void}) {
    return(
        <a 
            className="shadow-[0_0_0_1px_#000000_inset] px-6 border py-2 bg-transparent text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" 
            onClick={handleClick}
            href="#feature"
        >
            { children }
        </a>
    )
}