const fetchImages = async filterOption => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/galleries${filterOption}`)

	const gallery = await response.json()

	return gallery.data[0].attributes.images
}

export default fetchImages
