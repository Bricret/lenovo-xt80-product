'use client'

import { useState } from 'react'
import '../styleModal.css'

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
        <main className="grid grid-row-1 md:grid-cols-custom-2 container pt-10">

            <SectionImageProduct CaptureSrcImage={CaptureSrcImage} />

            <PrincipalImageProduct SrcImage={image} />
            
            <InformationAboutProductMain />

        </main>
    )
}