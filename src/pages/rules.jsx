import { useRouter } from "next/router"

const BackButton = () => {
	const router = useRouter()

	return (
		<button
			className="flex flex-col items-center font-semibold py-8"
			onClick={() => router.back()}
		>
			<p className="h3 flex before:content-['←']">Powrót</p>
		</button>
	)
}

export default BackButton

