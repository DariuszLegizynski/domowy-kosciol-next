import { useEffect, useState } from 'react'

// Layout
import Layout from '@/components/layout'

// Components
import NewsItem from '@/components/news/NewsItem'
import HolyGhost from '@/components/news/HolyGhost'

// helpers
import fetchNews from '@/helpers/fetch-news'

const News = () => {
  const [ news, setNews ] = useState([])
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchNews()
      setNews(response)
    }
    fetchData()

    let num = (window.innerHeight - 70)/30;
    setCount(parseInt(num));
  }, [])

  let renderedListOfNews = news.map(newsItem => {
    return (
      <NewsItem
        key={newsItem.id}
        newsItem={newsItem.attributes}
        href={`/${newsItem.attributes.slug}`}
      />
      )
  })

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between news-list">
        <section className='grid grid-cols-[1fr_auto] w-full'>
          <section className='grid gap-y-4 px-4 mt-16'>
            {renderedListOfNews}
          </section>
          <div className='hidden w-16 xxs:block'>&nbsp;</div>
          <HolyGhost count={count} />
        </section>
      </main>
    </Layout>
  );
}

export default News