import { useRouter } from "next/router"

interface BaseButtonProps {
	type?: string
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
				<button className="underline-effect w-fit relative text-white" onClick={() => handleClick(step)}>
					<p>{text}</p>
					<span className="absolute bottom-0" />
				</button>
			)}
			{!type && (
				<button className="underline-effect transition-colors duration-200 ease-in-out transform relative">
					<h4>{text}</h4>
					<span />
				</button>
			)}
		</>
	)
}

export default BaseButton
