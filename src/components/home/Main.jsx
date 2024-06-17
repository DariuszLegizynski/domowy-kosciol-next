import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// components
import Hero from "@/components/home/Hero"
import Header from "@/components/Header"
import IconItems from "@/components/IconItems"

const Main = () => {
	const [isActive, setIsActive] = useState(false)
	const [transitioning, setTransitioning] = useState("")
	const router = useRouter()

	const handleActive = () => {
		setIsActive(current => !current)
	}

	const handleTransition = (e, path, direction) => {
		e.preventDefault()
		setTransitioning(direction)
		setTimeout(() => {
			router.push(path)
		}, 600) // duration of the transition
	}

	console.log({ transitioning })

	return (
		<article
			className={`relative grid grid-rows-[1fr_auto] w-full h-svh p-[0.4rem] overflow-hidden transition-transform duration-600 ease-in-out page-transition-${transitioning}`}
		>
			<section
				className={`absolute top-0 left-0 h-0 w-0 transition-height duration-500 ease-in-out transition-width delay-500 ${
					isActive ? "absolute top-0 left-0 bg-primary h-1/2 w-full z-[-1]" : ""
				}`}
			/>
			{isActive && <Header isActive={isActive} />}
			<section className="grid grid-cols-[2rem_1fr_2rem] items-center justify-items-center px-1 w-full">
				{isActive && (
					<Link className="underline-effect flex rotate-[270deg]" href="/fotogalleries" onClick={e => handleTransition(e, "/fotogalleries", "right")}>
						<h4 className="text-primary fadeInFromTop">Zd</h4>
						<h4 className="text-white fadeInFromTop">jęcia</h4>
						<span />
					</Link>
				)}
				<section className={isActive ? "" : "invisible"}>
					{isActive && (
						<Link href="/about">
							<Hero />
						</Link>
					)}
				</section>
				<section
					className={`absolute flex flex-col items-center w-32 cursor-pointer transition-transform duration-1000 ease-in-out z-10 ${
						isActive ? "transform move-fish" : ""
					}`}
					onClick={() => handleActive(isActive)}
				>
					<IconItems type="fish" animationType="rotate" width={isActive ? "2rem" : null} height={isActive ? "2rem" : null} />
					<span className={`pt-4 ${isActive ? "invisible" : ""}`}>kliknij</span>
				</section>
				{isActive && (
					<Link className="underline-effect flex rotate-90 translate-y-1.5 fadeInFromRight" href="/news" onClick={e => handleTransition(e, "/news", "left")}>
						<h4 className="text-white fadeInFromTop">Aktual</h4>
						<h4 className="text-primary fadeInFromTop">ności</h4>
						<span />
					</Link>
				)}
			</section>
			<footer className="grid grid-cols-[auto_auto] gap-x-8 items-center justify-self-center sm:w-[60vw]">
				{isActive && (
					<Link href="/about" className="underline-effect fadeInFromBottom" onClick={e => handleTransition(e, "/about", "up")}>
						<h4 className="text-primary">O Nas</h4>
						<span />
					</Link>
				)}
				{isActive && (
					<Link href="/rules" className="underline-effect justify-self-end fadeInFromBottom">
						<h4 className="text-primary">Nasze zasady</h4>
						<span />
					</Link>
				)}
			</footer>
		</article>
	)
}

export default Main
