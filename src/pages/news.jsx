import { useEffect, useState } from 'react'

// // Components
import Header from '@/components/Home/Header'
import NewsItem from '@/components/News/NewsItem'
import HolyGhost from '@/components/News/HolyGhost'
import config from '@/config'


const News = () => {
  const [ news, setNews ] = useState([])
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    const getNews = async () => {
      const reqOptions = {
        Headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        },
      }

      const newsData = await fetch(`${config.api}/api/news`, reqOptions)
      const response = await newsData.json()
      setNews(response.data)
    }

    getNews()

    let num = (window.innerHeight - 70)/30;
    setCount(parseInt(num));
  }, [])

  let renderedListOfNews = news?.map(newsItem => {
    return (<NewsItem key={newsItem.id} newsItem={newsItem.attributes} />)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HolyGhost count={count} />
      <section className='news__list'>
        {renderedListOfNews}
      </section>
    </main>
  );
}

export default News