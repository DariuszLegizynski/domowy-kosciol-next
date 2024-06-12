import { useRouter } from "next/router"

interface BaseButtonProps {
	type: string
	text?: string
	step?: number
	onClick?: (step: number) => void
}

const BaseButton: React.FC<BaseButtonProps> = ({ type, text, step = 0, onClick }) => {
	const router = useRouter()

	const handleClick = (newStep: number) => {
		if (onClick) {
			onClick(newStep)
		}
	}

	return (
		<>
			{type === "back" && (
				<button className="py-8" onClick={() => router.back()}>
					<div className="h3 before:content-['←']">Powrót</div>
				</button>
			)}
			{type === "step" && (
				<button className="text-white" onClick={() => handleClick(step)}>
					<p>{text}</p>
				</button>
			)}
			{!type && (
				<button className="transition-transform duration-300 ease-in-out transform hover:scale-110 focus:scale-110 relative">
					<h3>{text}</h3>
					<span className="absolute h-1 bg-accent bottom-0 left-0 w-0 transition-all duration-300 ease-in-out transform origin-center hover:w-full focus:w-full"></span>
				</button>
			)}
		</>
	)
}

export default BaseButton
