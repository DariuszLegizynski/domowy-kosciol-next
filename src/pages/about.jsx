import { useState } from "react"

import AboutPage from "@/components/about/AboutPage"
import IconPage from "@/components/about/IconPage"
import TestimonialPage from "@/components/about/TestimonialPage"

import Layout from "../components/Layout"
import BackButton from "@/components/base/BackButton"

const About = () => {
	const [step, setStep] = useState(1)

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-center">
				<section className="about-background-image py-4 px-4 mt-12">
					<h1 className="text-start text-primary pt-2 pl-8">O nas,</h1>
					<h1 className="text-center text-white pb-2">czyli kim właściwie jesteśmy?</h1>
				</section>
				<section className="flex gap-x-8 py-16">
					<button onClick={() => setStep(1)}>O Nas</button>
					<button onClick={() => setStep(2)}>Nasza Ikona</button>
					<button onClick={() => setStep(3)}>Świadectwa</button>
				</section>
				{step === 1 && <AboutPage />}
				{step === 2 && <IconPage />}
				{step === 3 && <TestimonialPage />}
				<BackButton />
			</main>
		</Layout>
	)
}

export default About
