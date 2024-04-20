import { FooterSvg } from "@/components/UI/FooterSvg"
import FooterV2 from "@/components/UI/FooterV2";
import { footerSections } from "@/data/SectionImage";

export default function Footer() {

  return (
    <footer className="bg-white">
        <FooterSvg  />
        <div className="container grid grid-cols-4 gap-x-28 mt-16">
        {
        footerSections.map(( section ) => (
            <div key={section.title} className="col-span-1">
                <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
                <ul className="mt-4">
                    {
                        section.description.map(( item, index ) => (
                            <li 
                                key={index} 
                                className="text-sm text-gray-500 pb-2 cursor-pointer hover:text-gray-700"
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        
        ))
        }
        </div>
        <FooterV2 />
    </footer>
  );
}