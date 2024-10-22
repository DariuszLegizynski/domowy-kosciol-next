import BaseImage from "../base/BaseImage"

const IconPage = ({ aboutIcon }) => {
	const { image, content } = aboutIcon?.aboutUsIconContent[0]
	return (
		<article className="px-4 mt-16 fadeInFromBottom  max-w-[1024px]">
			<BaseImage
				imgPath={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image?.foto?.data?.attributes?.url}`}
				imgAlt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${image?.foto?.data?.attributes?.alternativeText}`}
				height={400}
				width={600}
				author={image.author}
			/>
			<section
				className="grid gap-y-4"
				dangerouslySetInnerHTML={{
					__html: content?.map(item => item.children.map(child => child.text).join("")).join(""),
				}}
			/>
		</article>
	)
}

export default IconPage
