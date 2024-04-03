import { useState, useEffect } from 'react'
import fetchAlbums from '@/helpers/fetch-albums'
import FotoGalleryItem from '@/components/fotogallery/FotoGalleryItem'

import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/layout'

const Fotogallery = () => {
  const router = useRouter()

  const [ galleries, setGalleries ] = useState([])

  useEffect(() => {
    const fetchGalleries = async () => {
      const response = await fetchAlbums()
      setGalleries(response)
    }
    fetchGalleries()

  }, [])

  let renderGalleries = galleries?.map((gallery) => {
    return (
      <FotoGalleryItem
        key={`gallery_${gallery.id}`}
        gallery={gallery.attributes}
      />
    )
  })

  return (
    <Layout>
      <main className="grid grid-cols-1 items-center justify-between">
        <h1 className='text-center mt-24 mb-12'>Zdjęcia</h1>
        <section className='grid sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-y-16'>
          {renderGalleries}
        </section>
        <button className='flex flex-col items-center font-semibold py-8' onClick={() => router.back()}><p className="h3">&larr; Powrót</p></button>
      </main>
    </Layout>
  );
}

export default Fotogallery