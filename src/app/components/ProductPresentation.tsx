'use client'

import { useState } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import './style.css'

import InformationAboutProductMain from '@/components/UI/InformationAboutProduct'
import PrincipalImageProduct from '@/components/UI/PrincipalImageProduct'
import SectionImageProduct from '@/components/UI/Section-Image-Product'

export default function ProductPresentation() {

    const [image, setImage] = useState('' as string | StaticImport)

    const CaptureSrcImage = ( src: string | StaticImport ) => {
        setImage( src )
    }

    return (
        <main className="parent container pt-10">

            <SectionImageProduct CaptureSrcImage={CaptureSrcImage} />

            <PrincipalImageProduct SrcImage={image} />
            
            <InformationAboutProductMain />

        </main>
    )
}