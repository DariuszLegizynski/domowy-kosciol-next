import Link from "next/link"
import Image from "next/image"

const NewsItem = ({ newsItem, addToRefs }) => {
	const date = newsItem.createdAt.split("T")[0]

	return (
		<Link href={`/news/${newsItem.slug}`}>
			<article ref={addToRefs} className="p-5 border flex flex-col backdrop-blur-sm sm:min-h-[60rem]">
				<div>
					<Image
						className="h-[16rem]"
						src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${newsItem.coverImage.data.attributes.url}`}
						alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${newsItem.coverImage.data.attributes.alternativeText}`}
						height={400}
						width={600}
					/>
					<h3 className="sm:h-40 py-4 border-b">{newsItem.title}</h3>
				</div>

				<span className="text-sm text-right text-grey pt-2">{date}</span>
				<p className="py-4">{newsItem.summary}</p>
				<p className="text-center font-bold mt-auto">Więcej...</p>
			</article>
		</Link>
	)
}

export default NewsItem

