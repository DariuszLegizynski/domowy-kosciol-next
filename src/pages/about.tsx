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
				<section className="about-background-image py-4 px-4 mt-12">
					<h1 className="text-start text-primary pt-2 pl-8">O nas,</h1>
					<h1 className="text-center text-white pb-2">czyli kim właściwie jesteśmy?</h1>
				</section>
				<nav className="grid grid-cols-3 py-3 text-white bg-tertiary w-full">
					<BaseButton onClick={handleClick} type="link" step={0} text="O nas" />
					<BaseButton onClick={handleClick} type="link" step={1} text="Nasza Ikona" />
					<BaseButton onClick={handleClick} type="link" step={2} text="Świadectwa" />
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
