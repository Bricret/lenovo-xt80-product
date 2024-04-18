'use client'

import { useState } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import './style.css'

import InformationAboutProductMain from '@/components/UI/InformationAboutProduct'
import PrincipalImageProduct from '@/components/UI/PrincipalImageProduct'
import SectionImageProduct from '@/components/UI/Section-Image-Product'
import { ImageSectionProps } from '@/interfaces/ImagesProps'

export default function ProductPresentation() {

    const [image, setImage] = useState({} as ImageSectionProps)

    const CaptureSrcImage = ( imageInfo: ImageSectionProps ) => {
        setImage( imageInfo )
    }

    return (
        <main className="parent container pt-10">

            <SectionImageProduct CaptureSrcImage={CaptureSrcImage} />

            <PrincipalImageProduct SrcImage={image} />
            
            <InformationAboutProductMain />

        </main>
    )
}