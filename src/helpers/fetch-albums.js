const fetchAlbums = async () => {
	const reqOptions = {
		Headers: {
			Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
		},
	}

	const albumsData = await fetch(
		`${process.env.API_URL}/api/galleries`,
		reqOptions
	)
	const albums = await albumsData.json()

	return albums.data
}

export default fetchAlbums

