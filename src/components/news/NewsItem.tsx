import Link from "next/link"
import Image from 'next/image'


interface NewsItemProps {
  newsItem: string;
}

const NewsItem: React.FC<NewsItemProps> = ({newsItem}) => {
  const date = newsItem.createdAt.split('T')[0]

  return (
    <Link href={`/news/${newsItem.slug}`}>
      <article className='p-5 border flex flex-col backdrop-blur-sm min-h-[54rem]'>
        <div>
        <Image className="h-[16rem]" src={newsItem.imageLink} alt={newsItem.imageAlt} height={400} width={600} objectFit="cover" />
        <h3 className="h-40 py-4 border-b">{newsItem.title}</h3>
        </div>

        <span className="text-sm text-right text-grey pt-2">{date}</span>
        <p className='py-4'>{newsItem.summary}</p>
        <p className='text-center font-bold mt-auto'>Więcej...</p>
      </article>
      </Link>
    
  )
}

export default NewsItem