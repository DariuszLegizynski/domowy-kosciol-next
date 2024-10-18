import { useState } from "react"

import AboutPage from "@/components/about/AboutPage"
import IconPage from "@/components/about/IconPage"
import TestimonialPage from "@/components/about/TestimonialPage"

import Layout from "@/components/Layout"
import BaseButton from "@/components/base/BaseButton"

const About = () => {
	const [step, setStep] = useState(0)

	const handleClick = (newStep: number) => {
		setStep(newStep)
	}

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-center">
				<section className="fadeIn about-background-image py-4 w-full mt-12 flex flex-col items-center justify-end ">
					<div className="px-4 max-w-[1024px]">
						<h1 className="text-start text-white">O nas</h1>
						<h1 className="text-center text-white pl-8 pb-2 px-1">czyli kim właściwie jesteśmy?</h1>
					</div>
				</section>
				<nav className="fadeIn grid grid-cols-3 justify-items-center py-3 text-white bg-primary w-full">
					<BaseButton onClick={handleClick} type="step" step={0} text="O nas" />
					<BaseButton onClick={handleClick} type="step" step={1} text="Nasza Ikona" />
					<BaseButton onClick={handleClick} type="step" step={2} text="Świadectwa" />
				</nav>
				{step === 0 && <AboutPage />}
				{step === 1 && <IconPage />}
				{step === 2 && <TestimonialPage />}
				<BaseButton type="back" />
			</main>
		</Layout>
	)
}

export default About
