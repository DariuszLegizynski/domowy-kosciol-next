import "@/styles/tailwind.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { AppProps } from "next/app"

gsap.registerPlugin(ScrollTrigger)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTURE_SITE_KEY as string

	return (
		<GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
			<Component {...pageProps} />
		</GoogleReCaptchaProvider>
	)
}

export default MyApp
