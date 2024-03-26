import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/layout'

// helpers
import fetchNews from '@/helpers/fetch-news'

const NewsDetails = () => {
  const router = useRouter()
  const { slug } = router.query

  const [ entry, setEntry ] = useState({})
  const [ date, setDate ] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = slug ? await fetchNews(`filters[slug][$eq]=${slug}`) : []
      if (response[0]) {
        setEntry(response[0].attributes)
        setDate(response[0].attributes.createdAt.split('T')[0])
      }
    }
    fetchData()
  }, [slug])

  return (
    <Layout>
      <article className='p-5 m-4 mt-16 border flex flex-col backdrop-blur-sm'>
        <img src={entry.imageLink} alt="pic of the meeting" />
        <h3 className="py-4 border-b">{entry.title}</h3>
        <span className="text-sm text-right text-grey pt-2">{date}</span>
        <div className='py-4' dangerouslySetInnerHTML={{ __html: entry?.content?.map(item => item.children.map(child => child.text).join('')).join('') }} />
        <button className='flex flex-col items-center font-semibold' onClick={() => router.back()}>&larr; Powrót</button>
      </article>
    </Layout>
  )
}

export default NewsDetails