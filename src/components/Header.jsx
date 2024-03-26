import Link from "next/link"

import Logo from "@/components/home/Logo"
import IntroButton from "@/components/home/IntroButton"

const Header = ({ isActive = false }) => {
	console.log(isActive)
	return (
		<header className="fixed top-0 left-0 grid grid-cols-3 items-center justify-items-center w-full h-12 z-10 backdrop-blur-md">
			<Logo />
			<IntroButton />
			<Link className={isActive ? "text-white" : "text-black"} href="/contact">
				<h3 className="transition-transform duration-400 ease-in-out transform hover:scale-110 focus:scale-110">Kontakt</h3>
			</Link>
		</header>
	)
}

export default Header