import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

// Components
import IconItems from "@/components/IconItems"
import BaseButton from "@/components/base/BaseButton"
import BaseText from "@/components/base/BaseText"

// Layout
import Layout from "@/components/Layout"

interface ContactContent {
	name: string
	phoneNumber?: string
	email?: string
	curchName?: string
	curchStreet?: string
	curchPlzCity?: string
	curchPriest?: string
	curchPhone?: string
}

interface FormValues {
	name: string
	surname?: string
	phone?: string
	email?: string
	message?: string
}

const Contact = () => {
	const { executeRecaptcha } = useGoogleReCaptcha()
	const [contactContent, setContactContent] = useState<ContactContent | null>(null)
	const [emailSent, setEmailSent] = useState({ loading: false, success: false, error: false })

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Imię jest wymagane"),
		surname: Yup.string(),
		email: Yup.string().email("Nieprawidłowy email").required("Email jest wymagany"),
		phone: Yup.string(),
		message: Yup.string().min(5, "Wymagane przynajmniej 5 znaków"),
	})

	const initialValues: FormValues = {
		name: "",
		surname: "",
		email: "",
		phone: "",
		message: "",
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-pages`)
			const content = await response.json()

			setContactContent(content.data[0].attributes)
		}
		fetchData()
	}, [])

	const revealRefs = useRef<HTMLElement[]>([])
	revealRefs.current = []

	const addToRefs = (el: HTMLElement | null) => {
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

	const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: any) => {
		setEmailSent({ loading: true, success: false, error: false })

		if (!executeRecaptcha) {
			setEmailSent({ loading: false, success: false, error: true })

			return
		}

		const token = await executeRecaptcha("contact")

		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...values, token }),
		})

		const data = await response.json()

		if (data.success) {
			setEmailSent({ loading: false, success: true, error: false })
			resetForm()
		} else {
			setEmailSent({ loading: false, success: false, error: true })
		}
		setSubmitting(false)
	}

	return (
		<Layout>
			<main className="min-h-screen grid grid-rows-[1fr_auto] fadeInFromBottom pt-24 md:pt-36 ">
				<article className="grid grid-cols-1 justify-between">
					<section className="grid grid-cols-1 px-8 justify-items-center lg:order-1 lg:grid-cols-2 lg:gap-x-24 lg:mx-auto lg:pb-8">
						<div className="text-center">
							<p className="pb-6">Skontaktuj się z&nbsp;nami:</p>
							<div className="h4 uppercase py-4">{contactContent?.name}</div>
							<section className="flex flex-col items-center xl:gap-y-4">
								<div className="grid grid-cols-[3rem_12rem] items-center justify-items-start py-4 xl:grid-cols-[3rem_16rem]">
									<IconItems fillColor="hsl(26, 100%, 28%)" type="phone" width="2rem" height="1.8rem" />
									<p className="pl-2 w-fit">{contactContent?.phoneNumber}</p>
								</div>
								<div className="grid grid-cols-[3rem_12rem] items-center justify-items-start xl:grid-cols-[3rem_16rem]">
									<IconItems fillColor="hsl(26, 100%, 28%)" type="email" width="2rem" height="2rem" />
									<p className="pl-2">{contactContent?.email}</p>
								</div>
							</section>
						</div>
						<div className="pb-8 text-center">
							<div className="h4 pt-16 pb-8 lg:pt-0 lg:hidden">Gdzie można nas&nbsp;znaleźć?</div>
							<p className="hidden pb-8 lg:block">Gdzie można nas&nbsp;znaleźć?</p>
							<div className="grid gap-y-1">
								<div className="grid gap-y-4 justify-items-center justify-center">
									<IconItems type="curch" width="2rem" height="2rem" />
									<strong className="p pl-2 uppercase">{contactContent?.curchName}</strong>
								</div>
								<p>{contactContent?.curchStreet}</p>
								<p>{contactContent?.curchPlzCity}</p>
								<p>{contactContent?.curchPriest}</p>
								<p>{contactContent?.curchPhone}</p>
							</div>
							<a className="p flex flex-col w-auto items-center justify-center pt-8" href="https://maps.app.goo.gl/MdC4i2TpQr2CWDsi6" target="_blank">
								<IconItems type="map" width="3rem" height="3rem" />
								<span>Zobacz na mapie</span>
							</a>
						</div>
					</section>
					<section className="grid grid-cols-1 pt-8 justify-items-center lg:order-2 lg:pt-16">
						{!emailSent.loading && !emailSent.success && !emailSent.error && (
							<>
								<p className="h4 pb-4">Napisz do nas:</p>
								<Formik<FormValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
									{({ isSubmitting }) => (
										<Form className="p-2">
											<div ref={addToRefs} className="mb-6 grid grid-rows-[auto_auto]">
												<Field name="name" type="text" component={BaseText} text="Imię" isRequired />
											</div>
											<div ref={addToRefs} className="mb-6">
												<Field name="surname" type="text" component={BaseText} text="Nazwisko" />
											</div>
											<div ref={addToRefs} className="mb-6">
												<Field name="email" type="email" component={BaseText} text="E-mail" isRequired />
											</div>
											<div ref={addToRefs} className="mb-6">
												<Field name="phone" type="text" component={BaseText} text="Telefon" />
											</div>
											<div ref={addToRefs} className="mb-2 max-w-full">
												<label className="span">Wiadomość</label>
												<Field name="message" as="textarea" placeholder="Napisz nam" className="p-1 w-full min-h-36 border border-primary" required />
												<ErrorMessage name="message" component="div" className="text-red-500" />
											</div>
											<button
												ref={addToRefs}
												className="flex flex-col items-center mx-auto bg-primary text-white px-12 py-3 mt-8 round"
												type="submit"
												disabled={isSubmitting}
											>
												<strong className="span">Wyślij</strong>
											</button>
										</Form>
									)}
								</Formik>
							</>
						)}
						{emailSent.loading && <div className="h3">Wysyłam...</div>}
						{emailSent.success && (
							<>
								<div className="h3 py-4 text-primary">Wiadomość została wysłana.</div>
								<div className="h3 pb-4 text-primary">Dziękujemy.</div>
							</>
						)}
						{emailSent.error && (
							<>
								<div className="h3 py-4 text-primary">Wystąpił błąd.</div>
								<div className="h3 pb-4 text-primary">Proszę spróbować później.</div>
							</>
						)}
					</section>
					<div ref={addToRefs} className="py-6 mx-auto">
						<BaseButton type="back" />
					</div>
				</article>
			</main>
		</Layout>
	)
}

export default Contact
