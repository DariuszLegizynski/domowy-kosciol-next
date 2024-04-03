import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'

// Layout
import Layout from '@/components/layout'

// helpers
import fetchImages from '@/helpers/fetch-images'

const Fotos = () => {
  const router = useRouter()
  const { albumId } = router.query

  const [ images, setImages ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = albumId ? await fetchImages(albumId) : []

      setImages(response.data)
    }
    fetchData()
  }, [albumId])

  console.log(images)

  let renderFotos = images?.map((image) => {
    return (
      <Image key={image.id} src={image.link} alt="image from gallery" width={800} height={600} />
    )
  })

  return (
    <Layout>
      <article className='pt-16 mx-auto'>
        <section className='px-8 columns-1 xs:columns-2 md:columns-3 3xl:columns-4'>
          {renderFotos}
        </section>
        <button className='flex flex-col items-center font-semibold mx-auto my-8' onClick={() => router.back()}>&larr; Powrót</button>
      </article>
    </Layout>
  )
}

export default Fotos