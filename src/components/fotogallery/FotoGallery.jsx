import Link from "next/link"
import Image from "next/image"

// import checkImageUrl from "@/helpers/check-image-url"

const FotoGallery = ({ addToRefs, gallery, gallerySlug, galleryId }) => {
	const date = gallery.createdAt.split("T")[0]

	console.log({ galleryId })
	// console.log({process.env.STRAPI_API_URL/gallery.coverImage.data.attributes.url}`)

	return (
		<Link href={`/fotos/${gallerySlug}?id=${galleryId}`}>
			<article ref={addToRefs} className="flex flex-col items-center justify-between px-6">
				<span className="text-sm text-right text-black pt-2">{date}</span>
				<h3>{gallery.title}</h3>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${gallery.coverImage.data.attributes.url}`}
					alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${gallery.coverImage.data.attributes.alternativeText}`}
					height={400}
					width={600}
				/>
			</article>
		</Link>
	)
}

export default FotoGallery
