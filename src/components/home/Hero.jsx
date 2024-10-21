import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import { getStrapiData } from "@/utils/getStrapiData"

const Hero = () => {
	const [heroContentData, setHeroContentData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const response = await getStrapiData(`home-page?populate[heroImage][populate]=*&populate[heroContent][populate]=*`)
			setHeroContentData(response?.data?.attributes)
		}
		fetchData()
	}, [])

	const { heroImage, heroContent } = heroContentData

	return (
		<motion.article
			className="hero w-[60vw] h-[60vh] flex flex-col p-3 text-white hero-border relative"
			initial={{ height: 0 }}
			animate={{ height: "60vh" }}
			transition={{ type: "spring", duration: 2, delay: 1 }}
		>
			<h1 className="header-italic mt-8">{heroContent?.title}</h1>
			<section
				className="z-10 text-center pt-2"
				dangerouslySetInnerHTML={{
					__html: heroContent?.content?.map(item => item.children.map(child => child.text).join("")).join(""),
				}}
			/>
			<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 2 }}>
				{heroImage?.foto?.data?.attributes?.url && (
					<Image
						className="absolute z-[1] w-64 h-auto -bottom-16 left-1/2 transform hero-img-transform"
						src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${heroImage?.foto?.data?.attributes?.url}`}
						alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${heroImage?.foto?.data?.attributes?.alternativeText}`}
						width={400}
						height={600}
					/>
				)}
			</motion.section>
		</motion.article>
	)
}

export default Hero
