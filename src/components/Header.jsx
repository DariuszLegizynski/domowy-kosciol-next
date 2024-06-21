import Link from "next/link"

import Logo from "@/components/home/Logo"
import IntroButton from "@/components/home/IntroButton"

import BaseButton from "@/components/base/BaseButton"

const Header = ({ isActive = false, onContactClick }) => {
	return (
		<header className={`${isActive ? "left-1/2 transform -translate-x-1/2 w-full sm:w-[60vw]" : "w-full bg-white-opacity"} fixed h-12 z-10 backdrop-blur-md`}>
			<section className="max-w-[72vw] grid grid-cols-[auto_auto] h-12 items-center justify-self-center mx-auto fadeInFromTop">
				<Logo />
				{/* <IntroButton /> */}
				<Link className={`${isActive ? "text-white" : "text-black pr-2"} justify-self-end`} onClick={onContactClick} href="/contact">
					<BaseButton text="Kontakt" />
				</Link>
			</section>
		</header>
	)
}

export default Header
