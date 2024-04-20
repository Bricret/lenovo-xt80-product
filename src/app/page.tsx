import Headers from './components/Header/Headers';
import ProductPresentation from './components/About-Product/ProductPresentation';
import Features from './components/features/Features';
import Information from './components/information/Information';
import InformationV2 from './components/information/InformationV2';

export default function Home() {
  return (
    <>
      <Headers />
      <ProductPresentation />
      <Features />
      <Information />
      <InformationV2 />
    </>
  );
}