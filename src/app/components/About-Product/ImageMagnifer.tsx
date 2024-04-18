'use client'

import Image from 'next/image'
import '../styleModal.css'
import { useState } from "react"

export default function ImageMagnifer({ srcImage = '/ProductMainImage/image1.webp' }: { srcImage: string }) {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [showMagnifier, setShowMagnifier] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleMouseHover = ( e: React.MouseEvent<HTMLDivElement> ) => {

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = (( e.pageX - left ) / width) * 100
        const y = (( e.pageY - top ) / height) * 100
        setPosition({ x, y })

        setCursorPosition({ x: e.pageX - left, y: e.pageY - top })
    }

    return(
        <div 
            className='img-magnifer-container'
            onMouseEnter={
                () => setShowMagnifier(true)
            }
            onMouseLeave={
                () => setShowMagnifier(false)
            }
            onMouseMove={handleMouseHover}
        >
            <Image
                className='magnifer-img'
                src={ srcImage }
                alt='Product image'
                width={500}
                height={500}
            />
            {showMagnifier && <div
                style={{
                    position: 'absolute',
                    left: `${cursorPosition.x - 100}px`,
                    top: `${cursorPosition.y - 100}px`,
                    pointerEvents: 'none',
                }}>
                <div 
                    className='magnifer-image'
                    style={{
                    backgroundImage: `url(${ srcImage })`,
                    backgroundPosition: `${position.x}% ${position.y}%`,
                    }}
                />
            </div>}
        </div>
    )
}