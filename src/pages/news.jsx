import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/layout'

// Components
import NewsItem from '@/components/news/NewsItem'
import HolyGhost from '@/components/news/HolyGhost'

// helpers
import fetchNews from '@/helpers/fetch-news'

const News = () => {
  const router = useRouter()

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
      <main className="flex min-h-screen flex-col items-center justify-between news-list pb-8">
        <section className='grid grid-cols-[1fr_auto] w-full mt-20'>
          <section className='grid grid-cols-1 gap-x-4 gap-y-4 mx-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {renderedListOfNews}
          </section>
          <div className='hidden w-16 xxs:block'>&nbsp;</div>
          <HolyGhost count={count} />
        </section>
        <button className='flex flex-col items-center font-semibold' onClick={() => router.back()}><p className="h3">&larr; Powrót</p></button>
      </main>
    </Layout>
  );
}

export default News