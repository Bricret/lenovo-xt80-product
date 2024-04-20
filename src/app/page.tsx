import Banner from './components/Banner';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Headers from './components/Header/Headers';
import Information from './components/information/Information';
import InformationV2 from './components/information/InformationV2';
import ProductPresentation from './components/About-Product/ProductPresentation';

export default function Home() {
  return (
    <>
      <Headers />
      <ProductPresentation />
      <Features />
      <Information />
      <InformationV2 />
      <Banner />
      <Footer />
    </>
  );
}