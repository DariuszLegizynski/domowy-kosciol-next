"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Cookies from "js-cookie"

const ConsentBanner = () => {
	const [isBannerVisible, setIsBannerVisible] = useState(false)

	const isCookie = Cookies.get("cookieConsent")
	useEffect(() => {
		setIsBannerVisible(isCookie ? false : true)
	}, [isCookie])

	const handleConsent = () => {
		Cookies.set("cookieConsent", "true", { expires: 30 })
		setIsBannerVisible(false)
	}

	return (
		<>
			{isBannerVisible ? (
				<article className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
					<div className="w-full bg-primary p-4 mx-auto md:mx-16 lg:mx-64 md:p-32 z-50">
						<div className="max-w-[1024px] mx-auto flex flex-col justify-center h-full">
							<p className="text-white pb-4 text-sm">
								Pliki cookie służą do optymalizacji doświadczeń użytkownika. Kontynuując korzystanie z tej strony internetowej akceptujesz naszą{" "}
								<Link href="/privacypolicy" className="cursor-pointer text-accent">
									politykę prywatności
								</Link>
								.
							</p>
							<div className="flex justify-center py-4 md:pt-12">
								<button onClick={handleConsent} className="bg-white px-3 py-2.5 rounded-xl text-primary max-w-44">
									Akceptuję
								</button>
							</div>
						</div>
					</div>
				</article>
			) : null}
		</>
	)
}

export default ConsentBanner
