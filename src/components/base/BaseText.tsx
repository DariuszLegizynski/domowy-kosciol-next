import { useState } from "react"

interface BaseTextProps {
	text: string
	inputFieldType: string
	isRequired?: boolean
}

const BaseText: React.FC<BaseTextProps> = ({ text, inputFieldType = "text", isRequired = false }) => {
	const [isActive, setIsActive] = useState(false)

	const handleFocus = () => {
		setIsActive(true)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setIsActive(false)
		}
	}
	return (
		<div className="relative max-w-full">
			<label className={`absolute bottom-0 left-1 transition-all duration-500 ease-in-out -translate-y-full text-sm ${isActive ? "opacity-100" : "opacity-0"}`}>
				{text}
				{isRequired ? "*" : ""}
			</label>
			<span className={`absolute left-1 transition-all duration-500 ease-in-out -z-10 text-primary ${isActive ? "opacity-0" : "opacity-100"}`}>
				{text}
				{isRequired ? "*" : ""}
			</span>
			<input
				onFocus={handleFocus}
				onBlur={handleBlur}
				className={`pl-1 w-full border-b border-priamry transition-all duration-300 ease-in-out bg-transparent`}
				type={inputFieldType}
				required={isRequired}
			/>
		</div>
	)
}

export default BaseText
