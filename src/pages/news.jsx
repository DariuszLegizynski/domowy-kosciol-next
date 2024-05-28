import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

// Layout
import Layout from "@/components/layout"

// Components
import NewsItem from "@/components/news/NewsItem"
import HolyGhost from "@/components/news/HolyGhost"
import BackButton from "@/components/base/BackButton"

// helpers
import fetchNews from "@/helpers/fetch-news"

const News = () => {
	const [news, setNews] = useState([])
	const [count, setCount] = useState(0)

	const revealRefs = useRef([])
	revealRefs.current = []

	const addToRefs = el => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el)
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetchNews()
			setNews(response)
		}
		fetchData()

		let num = (window.innerHeight - 70) / 30
		setCount(parseInt(num))
	}, [])

	useEffect(() => {
		revealRefs.current.forEach(el => {
			gsap.fromTo(
				el,
				{ autoAlpha: 0, y: 200 },
				{
					autoAlpha: 1,
					y: 0,
					delay: 0.25,
					duration: 2,
					stagger: 0.25,

					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "bottom center",
					},
				}
			)
		})
	})

	let renderedListOfNews = news.map(newsItem => {
		return <NewsItem addToRefs={addToRefs} key={newsItem.id} newsItem={newsItem.attributes} />
	})

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between news-list pb-8">
				<section className="grid grid-cols-[1fr_auto] w-full mt-20">
					<section className="grid grid-cols-1 gap-x-4 gap-y-4 mx-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{renderedListOfNews}
					</section>
					<div className="hidden w-16 xxs:block">&nbsp;</div>
					<HolyGhost count={count} />
				</section>
				<BackButton />
			</main>
		</Layout>
	)
}

export default News

