import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'

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
      <article className='pt-16 border flex flex-col backdrop-blur-sm'>
        <Image className='self-center w-full md:w-[75%] lg:w-[50%]' src={entry.imageLink} alt={entry.imageAlt} height={400} width={600} objectFit="cover" />
        <section className='p-8 md:max-w-[62rem] mx-auto'>
          <h3 className="py-8 border-b">{entry.title}</h3>
          <span className="flex justify-end text-grey pt-2">{date}</span>
          <div className='py-4' dangerouslySetInnerHTML={{ __html: entry?.content?.map(item => item.children.map(child => child.text).join('')).join('') }} />
        </section>
        <button className='flex flex-col items-center font-semibold mx-auto my-8' onClick={() => router.back()}>&larr; Powrót</button>
      </article>
    </Layout>
  )
}

export default NewsDetails