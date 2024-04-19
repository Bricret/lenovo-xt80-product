import '../styleModal.css'
import { Dialog, DialogContent, DialogTrigger } from "@/components/UI/dialog"
import { DirectionAwayHover } from "@/components/UI/DirectionHover"
import { ImageSectionProps } from "@/interfaces/ImagesProps"
import ImageMagnifer from "./ImageMagnifer"

export default function DialogProduct({ SrcImage }: { SrcImage: ImageSectionProps }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
            className="z-0 hidden md:flex items-center justify-center w-full p-2"
        >
            <DirectionAwayHover SectionImageProduct={SrcImage} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-10/12 h-full">
        <main className="divModal">
            <ImageMagnifer srcImage={SrcImage.src} />
        </main>
      </DialogContent>
    </Dialog>
  )
}
