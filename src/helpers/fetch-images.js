const fetchImages = async slug => {
	console.log(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/galleries/${slug}?populate=images`)
	const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/galleries?populate=images`)
	const images = await response.json()
	console.log(images)
	return images.data?.attributes.images
}

export default fetchImages
