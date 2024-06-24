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
			<article ref={addToRefs} className="relative flex flex-col items-center justify-between mx-6">
				<div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
				<section className="absolute flex flex-col justify-between inset-0 px-4 py-4">
					<p className="text-white text-sm self-end">{date}</p>
					<div className="grid grid-rows-2">
						<h2 className="text-white font-black uppercase">{gallery.title}</h2>
						<p className="text-white">{gallery.shortDescription}</p>
					</div>
				</section>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${gallery.coverImage.data.attributes.url}`}
					alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${gallery.coverImage.data.attributes.alternativeText}`}
					height={600}
					width={400}
					layout="responsive"
					className="rounded-3xl max-h-[32rem]"
				/>
			</article>
		</Link>
	)
}

export default FotoGallery
