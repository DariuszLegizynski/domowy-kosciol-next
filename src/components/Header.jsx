import Link from "next/link"

import Logo from "@/components/home/Logo"
import IntroButton from "@/components/home/IntroButton"

import BaseButton from "@/components/base/BaseButton"

const Header = ({ isActive = false }) => {
	return (
		<header className={`${isActive ? "left-1/2 transform -translate-x-1/2 w-full sm:w-[60vw]" : "w-full"} fixed h-12 z-10 backdrop-blur-md`}>
			<section className="max-w-[62rem] grid grid-cols-[1fr_auto_1fr] h-12 items-center justify-items-center px-4 mx-auto fadeInFromTop">
				<Logo />
				<IntroButton />
				<Link className={`${isActive ? "text-white" : "text-black pr-2"} justify-self-end`} href="/contact">
					<BaseButton text="Kontakt" />
				</Link>
			</section>
		</header>
	)
}

export default Header
