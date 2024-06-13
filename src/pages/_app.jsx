import "@/styles/tailwind.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default MyApp
