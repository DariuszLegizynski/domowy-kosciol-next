import { useState, useEffect } from "react"

const NewsDetails = async(props) => {
  const date = newsItem.createdAt.split('T')[0]

  const [newsDetail, setNewsDetails] = useState({})

  useEffect(() => {
    const getNewsDetails = async () => {
      const reqOptions = {
        Headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        },
      }

      const newsData = await fetch(`${config.api}/api/news?filters[slug][$eq]=${props.params.slug}`, reqOptions)
      const response = await newsData.json()
      setNewsDetails(response.data)
    }

    getNewsDetails()
  }, [])

  console.log(newsDetail)

  return (
    <article className='p-5 m-4 border flex flex-col backdrop-blur-sm'>
      <img src={newsItem.imageLink} alt="pic of the meeting" />
      <h3 className="py-4 border-b">{newsItem.title}</h3>
      <span className="text-sm text-right text-grey pt-2">{date}</span>
      <p className='py-4'>{newsItem.summary}</p>
      <p className='text-center'>Więcej...</p>
    </article>
  )
}

export default NewsDetails