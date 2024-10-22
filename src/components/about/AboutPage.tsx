import BaseImage from "../base/BaseImage"

const AboutPage = ({ aboutMainData }) => {
	const { title, aboutUsContent } = aboutMainData
	return (
		<article className="fadeInFromBottom mt-16 px-4 pb-4 grid gap-y-2 max-w-[1024px]">
			{title && <h2 className="text-primary text-[2.6rem] leading-[3rem] pb-2">{title}</h2>}
			{aboutUsContent?.map(({ id, content, image }) => (
				<section key={id}>
					<BaseImage
						imgPath={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image?.foto?.data?.attributes?.url}`}
						imgAlt={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${image?.foto?.data?.attributes?.alternativeText}`}
						height={400}
						width={600}
						author={image.author}
					/>
					<div
						className="grid gap-y-2 text-justify"
						dangerouslySetInnerHTML={{
							__html: content?.map(item => item.children.map(child => child.text).join("")).join(""),
						}}
					/>
				</section>
			))}
		</article>
	)
}

export default AboutPage
