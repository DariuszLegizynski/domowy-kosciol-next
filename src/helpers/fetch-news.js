const fetchNews = async (filterOption = "") => {
	const newsData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/news?populate[coverImage][populate]=*${filterOption}`)
	const response = await newsData.json()

	return response.data
}

export default fetchNews
