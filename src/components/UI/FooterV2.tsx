import Image from "next/image";
import Link from "next/link";


export default function FooterV2() {

    return (
        <footer className=" mt-32 flex items-center bg-black/70 justify-between">
        <div className="flex gap-x-2 py-4 text-sm text-white/55 container">
          <h1>© 2024-2024 </h1>
          <Link
            className="hover:text-white/70"
            href="https://portfolio-brian-rico.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brian Rico
          </Link>
        </div>
        <div className="flex gap-x-6 py-4 text-sm pr-4">
          <Link
            className="transition hover:scale-110"
            href="https://www.linkedin.com/in/brian-rico-51396426a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image alt="Linkedin Logo" height={20} src="/icons/social/Linkedin.svg" width={20} />
          </Link>
          <Link
            className="transition hover:scale-110"
            href="https://twitter.com/Bricret_"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image alt="Linkedin Logo" height={20} src="/icons/social/X.svg" width={20} />
          </Link>
          <Link
            className="transition hover:scale-110"
            href="https://www.instagram.com/briaantoni/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image alt="Linkedin Logo" height={20} src="/icons/social/Instagram.svg" width={20} />
          </Link>
        </div>
      </footer>
    )
}