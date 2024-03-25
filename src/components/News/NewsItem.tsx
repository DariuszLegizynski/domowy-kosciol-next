import Link from "next/link"

interface NewsItemProps {
  newsItem: string;
}

const NewsItem: React.FC<NewsItemProps> = ({newsItem}) => {
  // const date = new Date(newsItem.date.seconds * 1000).toISOString().split("T").shift()
  
  
  const getRandomDate = () => {
    let end = new Date();
    let start = new Date();
    start.setFullYear(start.getFullYear() - 10);
  
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0]
  }

  return (
    <article className='news__item'>
      {/* <img src={newsItem.imgSrc} alt="pic of the meeting" /> */}
      <h3>NewsItem Title</h3>
      <span>{getRandomDate()}</span>
      <p>News Item Text</p>
      <p>Więcej...</p>
    </article>
  )
}

export default NewsItem