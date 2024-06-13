import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
	const [heroContent, setHeroContent] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-pages?populate=heroImage`)
			const content = await response.json()

			setHeroContent(content.data[0].attributes)
		}
		fetchData()
	}, [])

	return (
		<motion.article
			className="hero w-[60vw] h-[60vh] flex flex-col p-3 text-white hero-border relative"
			initial={{ height: 0 }}
			animate={{ height: "60vh" }}
			transition={{ type: "spring", duration: 2, delay: 1 }}
		>
			<section
				className="z-10"
				dangerouslySetInnerHTML={{
					__html: heroContent?.content?.map(item => item.children.map(child => child.text).join("")).join(""),
				}}
			></section>
			<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 2 }}>
				{heroContent.heroImage?.data.attributes.url && (
					<Image
						className="absolute z-[1] w-64 h-auto -bottom-12 left-1/2 transform hero-img-transform"
						src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${heroContent.heroImage?.data.attributes.url}`}
						alt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${heroContent.heroImage?.data.attributes.alternativeText}`}
						width={400}
						height={600}
					/>
				)}
			</motion.section>
		</motion.article>
	)
}

export default Hero
