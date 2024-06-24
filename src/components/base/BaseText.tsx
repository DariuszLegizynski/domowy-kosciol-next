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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		field.onChange?.(e)
		setIsActive(!!e.target.value)
	}

	return (
		<section>
			<div className="relative max-w-full">
				<label
					className={`absolute bottom-0 left-1 transition-all duration-500 ease-in-out -translate-y-full text-sm ${isActive ? "opacity-100" : "opacity-0"} ${
						isRequired ? "after:content-['*']" : ""
					}`}
				>
					{text}
				</label>
				<span
					className={`absolute left-1 transition-all duration-500 ease-in-out -z-10 text-primary ${isActive ? "opacity-0" : "opacity-100"} ${
						isRequired ? "after:content-['*']" : ""
					}`}
				>
					{text}
				</span>
				<input
					{...field}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={handleChange}
					className={`pl-1 w-full border-b border-primary transition-all duration-300 ease-in-out bg-transparent`}
					type={inputFieldType}
					required={isRequired}
				/>
			</div>
			{touched[field.name] && errors[field.name] && <div className="pl-1 text-red-500">{String(errors[field.name])}</div>}
		</section>
	)
}

export default BaseText
