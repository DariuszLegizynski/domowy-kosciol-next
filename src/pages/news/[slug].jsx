import { useState, useEffect } from "react"
import Image from "next/image"

import BackButton from "@/components/base/BackButton"

// Layout
import Layout from "@/components/layout"

// helpers
import fetchNews from "@/helpers/fetch-news"

const NewsDetails = () => {
	const { slug } = router.query

	const [entry, setEntry] = useState({})
	const [date, setDate] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			const response = slug ? await fetchNews(`filters[slug][$eq]=${slug}`) : []

			if (response[0]) {
				setEntry(response[0].attributes)
				setDate(response[0].attributes.createdAt.split("T")[0])
			}
		}
		fetchData()
	}, [slug])

	return (
		<Layout>
			<article className="pt-16 border flex flex-col backdrop-blur-sm">
				<Image
					className="self-center w-full md:w-[75%] lg:w-[50%]"
					src={entry.imageLink}
					alt={entry.imageAlt}
					height={400}
					width={600}
				/>
				<section className="p-8 md:max-w-[62rem] mx-auto">
					<h3 className="py-8 border-b">{entry.title}</h3>
					<span className="flex justify-end text-grey pt-2">{date}</span>
					<div
						className="py-4"
						dangerouslySetInnerHTML={{
							__html: entry?.content
								?.map(item => item.children.map(child => child.text).join(""))
								.join(""),
						}}
					/>
				</section>
				<BackButton />
			</article>
		</Layout>
	)
}

export default NewsDetails
