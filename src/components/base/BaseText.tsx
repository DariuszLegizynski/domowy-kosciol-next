import { useState, useEffect, FocusEvent } from "react"
import { FieldProps } from "formik"

interface BaseTextProps extends FieldProps {
	text: string
	inputFieldType?: string
	isRequired?: boolean
}

const BaseText: React.FC<BaseTextProps> = ({ field, form: { touched, errors }, text, inputFieldType = "text", isRequired = false }) => {
	const [isActive, setIsActive] = useState(!!field.value)

	useEffect(() => {
		setIsActive(!!field.value)
	}, [field.value])

	const handleFocus = () => {
		setIsActive(true)
	}

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setIsActive(false)
		}
		field.onBlur(e)
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
				type={inputFieldType}
				required={isRequired}
			/>
			{touched[field.name] && errors[field.name] && <div className="text-red-500">{String(errors[field.name])}</div>}
		</div>
	)
}

export default BaseText
