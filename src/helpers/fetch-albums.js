const fetchAlbums = async () => {
	const albumsData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/galleries?populate=coverImage`)
	const albums = await albumsData.json()

	return albums.data
}

export default fetchAlbums
