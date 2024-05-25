import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import BackButton from "@/components/base/BackButton"

// Layout
import Layout from "@/components/layout"

// helpers
import fetchImages from "@/helpers/fetch-images"

const Fotos = () => {
	const router = useRouter()
	const { slug } = router.query

	const [images, setImages] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = slug ? await fetchImages(`filters[slug][$eq]=${slug}`) : []
			setImages(response.data)
		}
		fetchData()
	}, [slug])

	let renderFotos = images?.map(image => {
		return (
			<Image
				key={image.id}
				src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.coverImage?.data.attributes.url}`}
				alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.coverImage?.data.attributes.alternativeText}`}
				width={800}
				height={600}
			/>
		)
	})

	return (
		<Layout>
			<article className="pt-16 mx-auto">
				<section className="px-8 columns-1 xs:columns-2 md:columns-3 3xl:columns-4">{renderFotos}</section>
				<BackButton />
			</article>
		</Layout>
	)
}

export default Fotos
