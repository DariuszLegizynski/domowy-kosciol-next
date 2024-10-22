import { useState, useEffect } from "react"

import BaseButton from "@/components/base/BaseButton"
import Layout from "@/components/layout"

import { getStrapiData } from "@/utils/getStrapiData"

const Impressum = () => {
	const [impressumData, setImpressumData] = useState([])

	useEffect(() => {
		const fetchImpressumData = async () => {
			const response = await getStrapiData(`impressum?populate=*`)
			setImpressumData(response.data?.attributes?.impressum)
		}
		fetchImpressumData()
	}, [])

	const { title, content } = impressumData

	console.log({ title, content })

	return (
		<Layout>
			<article className="max-w-[1024px] pt-24 px-4 mx-auto">
				<h1 className="text-center">{title}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: content?.map(item => item.children.map(child => child.text).join("")).join(""),
					}}
				/>
			</article>
			<div className="py-6 flex flex-col items-center">
				<BaseButton type="back" />
			</div>
		</Layout>
	)
}

export default Impressum
