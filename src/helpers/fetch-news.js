const fetchNews = async params => {
	const reqOptions = {
		Headers: {
			Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
		},
	}

	const newsData = await fetch(
		`${process.env.API_URL}/api/news?populate=*&${params}`,
		reqOptions
	)
	const response = await newsData.json()

	return response.data
}

export default fetchNews

