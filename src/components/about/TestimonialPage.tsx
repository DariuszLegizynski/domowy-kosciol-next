const TestimonialPage = ({ aboutTestimonials }) => {
	const { aboutUsTestimonialsContent } = aboutTestimonials
	return (
		<article className="grid gap-y-8 px-4 mt-16 fadeInFromBottom  max-w-[1024px]">
			{aboutUsTestimonialsContent?.map(({ id, title, content }) => (
				<section key={id}>
					<div className="h2 pb-2">{title}</div>
					<div
						dangerouslySetInnerHTML={{
							__html: content?.map(item => item.children.map(child => child.text).join("")).join(""),
						}}
					/>
				</section>
			))}
		</article>
	)
}

export default TestimonialPage
