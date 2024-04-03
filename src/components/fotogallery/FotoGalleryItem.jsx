import Image from 'next/image'
import Link from "next/link"

import checkImageUrl from '@/helpers/check-image-url'

const FotoGalleryItem = ({gallery}) => {
  const date = gallery.createdAt.split('T')[0]
  const albumId = gallery.galleryLink.split('/a/')[1]
  
  return (
    <Link href={`/fotos/${albumId}`}>
      <article className="flex flex-col items-center justify-between px-6">
        <span className="text-sm text-right text-black pt-2">{date}</span>
        <div>
          <Image src={checkImageUrl(gallery.featuredImageLink)} alt={gallery.featuredImageAlt} height={400} width={600} />
          <p className="text-center py-4 h3">{gallery.title}</p>
        </div>
      </article>
    </Link>
  )
}

export default FotoGalleryItem