import './style.css'

import InformationAboutProductMain from '@/components/UI/InformationAboutProduct'
import PrincipalImageProduct from '@/components/UI/PrincipalImageProduct'
import SectionImageProduct from '@/components/UI/Section-Image-Product'

export default function ProductPresentation() {
    return (
        <main className="parent container pt-10">

            <SectionImageProduct />

            <PrincipalImageProduct />
            
            <InformationAboutProductMain />

        </main>
    )
}