import { useEffect, useState } from 'react'

// // Components
import Header from '@/components/home/Header'
import NewsItem from '@/components/news/NewsItem'
import HolyGhost from '@/components/news/HolyGhost'
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
    return (
      <NewsItem
        key={newsItem.id}
        newsItem={newsItem.attributes}
        href={`/${newsItem.attributes.slug}`}
      />)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between news-list">
      <Header />
      <section className='grid grid-cols-[1fr_auto] w-full'>
        <section>
          {renderedListOfNews}
        </section>
        <div className='hidden w-16 xxs:block'>&nbsp;</div>
        <HolyGhost count={count} />
      </section>
    </main>
  );
}

export default News