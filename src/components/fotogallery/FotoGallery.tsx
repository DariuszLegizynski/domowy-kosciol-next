import Link from "next/link"
import Image from "next/image"

import { FotoGalleryAttributes } from "@/types/fotoGallery"

interface Props {
	addToRefs: (el: HTMLElement | null) => void
	gallery: FotoGalleryAttributes
	gallerySlug: string
	galleryId: number
}

const FotoGallery: React.FC<Props> = ({ addToRefs, gallery, gallerySlug }) => {
	const date = gallery.createdAt.split("T")[0]

	return (
		<Link href={`/fotos/${gallerySlug}`}>
			<article ref={addToRefs} className="flex flex-col items-center justify-between px-6">
				<span className="text-sm text-right text-black pt-2">{date}</span>
				<h3>{gallery.title}</h3>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${gallery.coverImage.data.attributes.url}`}
					alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${gallery.coverImage.data.attributes.alternativeText}`}
					height={400}
					width={600}
				/>
			</article>
		</Link>
	)
}

export default FotoGallery
