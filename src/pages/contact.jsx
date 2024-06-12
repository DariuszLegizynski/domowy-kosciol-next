import { useRef, useState, useEffect } from "react"
import IconItems from "@/components/IconItems"
import BaseButton from "@/components/base/BaseButton"
import BaseText from "@/components/base/BaseText"
import { gsap } from "gsap"

// Layout
import Layout from "@/components/Layout"

const Contact = () => {
	const [contactContent, setContactContent] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-pages`)
			const content = await response.json()

			setContactContent(content.data[0].attributes)
		}
		fetchData()
	}, [])

	const revealRefs = useRef([])
	revealRefs.current = []

	const addToRefs = el => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el)
		}
	}

	// useEffect(() => {
	// 	revealRefs.current.forEach(el => {
	// 		gsap.fromTo(
	// 			el,
	// 			{ autoAlpha: 0, y: 200 },
	// 			{
	// 				autoAlpha: 1,
	// 				y: 0,
	// 				delay: 0.25,
	// 				duration: 2,
	// 				stagger: 0.25,
	// 				scrollTrigger: {
	// 					trigger: el,
	// 					start: "-75px bottom",
	// 					end: "bottom center",
	// 				},
	// 			}
	// 		)
	// 	})
	// })

	return (
		<Layout>
			<main className="min-h-screen grid grid-rows-[1fr_auto]">
				<section className="mt-16 flex flex-col items-center lg:mt-20 lg:mb-8 fadeIn">
					{/* <IconItems type="family_2" width="16rem" height="8rem" /> */}
				</section>
				<article className="grid grid-cols-1 justify-between">
					<section className="grid grid-cols-1 pt-8 px-8 justify-items-center lg:order-1 lg:grid-cols-2 lg:gap-x-24 lg:mx-auto lg:pb-8">
						<div className="text-center">
							<div className="h4 pb-6">Skontaktuj się z&nbsp;nami:</div>
							<span>{contactContent.name}</span>
							<section className="flex flex-col items-center">
								<div className="grid grid-cols-[3rem_12rem] items-center justify-items-start py-4">
									<IconItems fillColor="hsl(26, 100%, 28%)" type="phone" width="2rem" height="1.8rem" />
									<p className="pl-2">{contactContent.phoneNumber}</p>
								</div>
								<div className="grid grid-cols-[3rem_12rem] items-center justify-items-start">
									<IconItems fillColor="hsl(26, 100%, 28%)" type="email" width="2rem" height="2rem" />
									<p className="pl-2">{contactContent.email}</p>
								</div>
							</section>
						</div>
						<div className="pb-8 text-center">
							<div className="h4 pt-16 pb-8 lg:pt-0">Gdzie można nas&nbsp;znaleźć?</div>
							<div className="grid gap-y-1">
								<div className="grid gap-y-4 justify-items-center justify-center">
									<IconItems type="curch" width="2rem" height="2rem" />
									<strong className="p pl-2">{contactContent.curchName}</strong>
								</div>
								<p>{contactContent.curchStreet}</p>
								<p>{contactContent.curchPlzCity}</p>
								<p>{contactContent.curchPriest}</p>
								<p>{contactContent.curchPhone}</p>
							</div>
							<a className="p flex flex-col w-auto items-center justify-center pt-8" href="https://maps.app.goo.gl/MdC4i2TpQr2CWDsi6" target="_blank">
								<IconItems type="map" width="3rem" height="3rem" />
								<div className="p lg:h3">Zobacz na mapie</div>
							</a>
						</div>
					</section>
					<section className="grid grid-cols-1 pt-8 pb-24 justify-items-center lg:order-2 lg:pt-16">
						<p className="h4 pb-4">Napisz do nas:</p>
						<form className="p-2">
							<div ref={addToRefs} className="mb-6 grid grid-rows-[auto_auto]">
								<BaseText text="Imię" inputFieldType="text" isRequired />
							</div>
							<div ref={addToRefs} className="mb-6">
								<BaseText text="Nazwisko" inputFieldType="text" />
							</div>
							<div ref={addToRefs} className="mb-6">
								<BaseText text="E-mail" inputFieldType="email" isRequired />
							</div>
							<div ref={addToRefs} className="mb-6">
								<BaseText text="Telefon" inputFieldType="number" />
							</div>
							<div ref={addToRefs} className="mb-2 max-w-full">
								<label className="span">Wiadomość</label>
								<textarea placeholder="Napisz nam" className="p-1 w-full min-h-36 border border-secondary" required />
							</div>
							<button ref={addToRefs} className="flex flex-col items-center mx-auto bg-primary text-white px-12 py-3 mt-8 round" type="submit">
								<strong className="span">Wyślij</strong>
							</button>
						</form>
						<BaseButton type="back" />
					</section>
				</article>
			</main>
		</Layout>
	)
}

export default Contact
