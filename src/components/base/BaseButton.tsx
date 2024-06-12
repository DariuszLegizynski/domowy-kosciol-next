import { useState } from "react"
import { useRouter } from "next/router"

interface BaseButtonProps {
	type: string
	text?: string
	step?: number
	onClick?: (step: number) => void
}

const BaseButton: React.FC<BaseButtonProps> = ({ type, text, step = 0, onClick }) => {
	const router = useRouter()

	// const [currentStep, setCurrentStep] = useState(step)

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
			{type === "link" && (
				<button className="text-white" onClick={() => handleClick(step)}>
					<p>{text}</p>
				</button>
			)}
		</>
	)
}

export default BaseButton
