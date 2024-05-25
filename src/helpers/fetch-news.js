const fetchNews = async params => {
	const newsData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/news?populate=coverImage`)
	const response = await newsData.json()
	console.log(response.data)
	return response.data
}

export default fetchNews
