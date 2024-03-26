import Link from "next/link"

interface NewsItemProps {
  newsItem: string;
}

const NewsItem: React.FC<NewsItemProps> = ({newsItem}) => {
  const date = newsItem.createdAt.split('T')[0]

  return (
    <Link href={`/news/${newsItem.slug}`}>
      <article className='p-5 border flex flex-col backdrop-blur-sm'>
        <img src={newsItem.imageLink} alt="pic of the meeting" />
        <h3 className="py-4 border-b">{newsItem.title}</h3>
        <span className="text-sm text-right text-grey pt-2">{date}</span>
        <p className='py-4'>{newsItem.summary}</p>
        <p className='text-center font-bold'>Więcej...</p>
      </article>
      </Link>
    
  )
}

export default NewsItem