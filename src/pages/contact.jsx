import { useRef, useEffect } from "react"
import { useRouter } from "next/router"
import IconItems from "@/components/IconItems"
import { gsap } from "gsap"

// Layout
import Layout from "@/components/layout"

const Contact = () => {
	const router = useRouter()

	const revealRefs = useRef([])
	revealRefs.current = []

	const addToRefs = el => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el)
		}
	}

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
						start: "-75px bottom",
						end: "bottom center",
					},
				}
			)
		})
	})

	return (
		<Layout>
			<main className="min-h-screen grid grid-rows-[1fr_auto]">
				<section className="mt-16 flex flex-col items-center lg:mt-20 lg:mb-8 fadeIn">
					<IconItems
						type="family_2"
						width="16rem"
						height="8rem"
					/>
				</section>
				<article className="grid grid-cols-1 justify-between">
					<section className="grid grid-cols-1 pt-8 px-8 justify-items-center lg:order-1 lg:grid-cols-2 lg:gap-x-24 lg:mx-auto lg:pb-8">
						<div className="fadeInFromLeft">
							<div className="h3 pb-5">Skontaktuj się z nami:</div>
							<strong className="p">Joanna i Michał Kucharkowie</strong>
							<div className="flex py-2 pl-1.5 items-center">
								<IconItems
									type="phone"
									width="1.5rem"
									height="1.5rem"
								/>
								<p className="pl-2">+43 699 11100283</p>
							</div>
							<div className="flex items-center">
								<IconItems
									type="email"
									width="1.8rem"
									height="1.8rem"
								/>
								<p className="pl-2">jmkucharko@gmail.com</p>
							</div>
						</div>
						<div className="pb-8 fadeInFromRight">
							<div className="h3 pt-8 pb-4 lg:pt-0">
								Gdzie można nas znaleźć?
							</div>
							<div>
								<div className="flex items-baseline justify-start">
									<IconItems
										type="curch"
										width="2rem"
										height="2rem"
									/>
									<strong className="p pl-2">Polska Misja Katolicka</strong>
								</div>
								<p>Rennweg 5a</p>
								<p>1030 Wien</p>
								<p>ks Szczepan Matuła</p>
								<p>01/7123158</p>
							</div>
							<a
								className="p flex flex-col w-auto items-center justify-center pt-8"
								href="https://maps.app.goo.gl/MdC4i2TpQr2CWDsi6"
								target="_blank"
							>
								<IconItems
									type="map"
									width="3rem"
									height="3rem"
								/>
								<div className="p lg:h3">Zobacz na mapie</div>
							</a>
						</div>
					</section>
					<section className="grid grid-cols-1 pt-8 pb-24  justify-items-center bg-primary lg:order-2 lg:pt-16">
						<p className="h3 text-gold pb-4 fadeInFromBottom">Napisz do nas:</p>
						<form className="p-2">
							<div
								ref={addToRefs}
								className="mb-2 grid grid-rows-[auto_auto] max-w-full"
							>
								<label className="p text-gold">Imię (wymagane)</label>
								<input
									className="p-1 w-full rounded"
									type="text"
									required
								/>
							</div>
							<div
								ref={addToRefs}
								className="mb-2 max-w-full"
							>
								<label className="p text-gold">Nazwisko</label>
								<input
									className="p-1 w-full rounded"
									type="text"
								/>
							</div>
							<div
								ref={addToRefs}
								className="mb-2 max-w-full"
							>
								<label className="p text-gold">E-mail (wymagane)</label>
								<input
									className="p-1 w-full rounded"
									type="email"
									required
								/>
							</div>
							<div
								ref={addToRefs}
								className="mb-2 max-w-full"
							>
								<label className="p text-gold">Telefon</label>
								<input
									className="p-1 w-full rounded"
									type="number"
								/>
							</div>
							<div
								ref={addToRefs}
								className="mb-2 max-w-full"
							>
								<label className="p text-gold">Wiadomość</label>
								<textarea
									className="p-1 w-full min-h-36 rounded"
									required
								/>
							</div>
							<button
								ref={addToRefs}
								className="flex flex-col items-center mx-auto bg-gold text-primary px-12 py-3 mt-8 round"
								type="submit"
							>
								<strong className="p">Wyślij</strong>
							</button>
						</form>
						<button
							className="flex flex-col items-center font-semibold mx-auto mt-20 text-white"
							onClick={() => router.back()}
						>
							&larr; Powrót
						</button>
					</section>
				</article>
			</main>
		</Layout>
	)
}

export default Contact

