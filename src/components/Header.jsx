import Link from "next/link"

import Logo from "@/components/home/Logo"
import IntroButton from "@/components/home/IntroButton"

const Header = ({ isActive = false }) => {
	return (
		<header className={`${isActive ? "left-1/2 transform -translate-x-1/2 w-[60vw]" : "w-full"} fixed h-12 z-10 backdrop-blur-md`}>
			<section className='max-w-[62rem] grid grid-cols-[1fr_auto_1fr] h-12 items-center justify-items-center mx-auto'>
				<Logo />
				<IntroButton />
				<Link className={`${isActive ? "text-white" : "text-black pr-2"} justify-self-end`} href="/contact">
					<h3 className="transition-transform duration-400 ease-in-out transform hover:scale-110 focus:scale-110">Kontakt</h3>
				</Link>
			</section>
		</header>
	)
}

export default Header