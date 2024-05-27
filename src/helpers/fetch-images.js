const fetchImages = async albumId => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/galleries?filters[slug][$eq]=${albumId}&populate=images`)

	const gallery = await response.json()

	return gallery.data[0].attributes.images
}

export default fetchImages
