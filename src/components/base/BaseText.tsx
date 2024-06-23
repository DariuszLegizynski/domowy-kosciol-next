import { useState, FocusEvent } from "react"

interface BaseTextProps {
	name: string
	text: string
	inputFieldType: string
	isRequired?: boolean
	field?: {
		onBlur?: (e: FocusEvent<HTMLInputElement>) => void
		onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
		value?: string
	}
	form?: any
}

const BaseText: React.FC<BaseTextProps> = ({ name, text, inputFieldType = "text", isRequired = false, field = {} }) => {
	const [isActive, setIsActive] = useState(false)

	const handleFocus = () => {
		setIsActive(true)
	}

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setIsActive(false)
		}
		field.onBlur?.(e)
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
				{...field}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className={`pl-1 w-full border-b border-primary transition-all duration-300 ease-in-out bg-transparent`}
				name={name}
				type={inputFieldType}
				required={isRequired}
			/>
		</div>
	)
}

export default BaseText
