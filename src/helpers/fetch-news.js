import config from '@/config'

const fetchNews = async (params) => {
  const reqOptions = {
    Headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    },
  }

  const newsData = await fetch(`${config.api}/api/news?populate=*&${params}`, reqOptions)
  const response = await newsData.json()

  return response.data
}

export default fetchNews