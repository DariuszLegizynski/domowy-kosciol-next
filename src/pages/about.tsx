import { useState, useEffect } from "react"

import AboutPage from "@/components/about/AboutPage"
import IconPage from "@/components/about/IconPage"
import TestimonialPage from "@/components/about/TestimonialPage"

import Layout from "@/components/Layout"
import BaseButton from "@/components/base/BaseButton"
import { getStrapiData } from "@/utils/getStrapiData"

const About = () => {
	const [step, setStep] = useState(0)
	const [aboutContentData, setAboutContentData] = useState({})
	const [aboutUsMainData, setAboutUsMainData] = useState([])

	const handleClick = (newStep: number) => {
		setStep(newStep)
	}

	useEffect(() => {
		const fetchData = async () => {
			const responseAboutUs = await getStrapiData(`about-us?populate=title`)
			setAboutContentData(responseAboutUs?.data?.attributes)
			const responseAboutUsMain = await getStrapiData(`about-us?populate[aboutUsMain][populate][aboutUsContent][populate][image][populate]=*`)
			setAboutUsMainData(responseAboutUsMain?.data?.attributes?.aboutUsMain)
		}
		fetchData()
	}, [])

	const { title } = aboutContentData

	console.log({ aboutUsMainData })

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-center">
				<section className="fadeIn about-background-image w-full mt-12 flex flex-col items-center justify-center">
					<div
						className="px-4 max-w-[1024px] text-white text-center"
						dangerouslySetInnerHTML={{
							__html: title?.map(item => item.children.map(child => child.text).join("")).join(""),
						}}
					/>
				</section>
				<nav className="fadeIn grid grid-cols-3 justify-items-center py-3 text-white bg-primary w-full">
					<BaseButton onClick={handleClick} type="step" step={0} text="O nas" />
					<BaseButton onClick={handleClick} type="step" step={1} text="Nasza Ikona" />
					<BaseButton onClick={handleClick} type="step" step={2} text="Świadectwa" />
				</nav>
				{step === 0 && <AboutPage aboutMainData={aboutUsMainData} />}
				{step === 1 && <IconPage />}
				{step === 2 && <TestimonialPage />}
				<BaseButton type="back" />
			</main>
		</Layout>
	)
}

export default About
