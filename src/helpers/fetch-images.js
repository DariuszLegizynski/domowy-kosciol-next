const fetchImages = async galleryId => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/galleries/${galleryId}?populate=images`)
	const images = await response.json()

	return images.data.attributes.images
}

export default fetchImages
