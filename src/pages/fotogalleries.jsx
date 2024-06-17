import { useRef, useState, useEffect } from "react"
import fetchAlbums from "@/helpers/fetch-albums"
import FotoGallery from "@/components/fotogallery/FotoGallery"
import BaseButton from "@/components/base/BaseButton"

import { gsap } from "gsap"

// Layout
import Layout from "@/components/Layout"

const Fotogallery = () => {
	const [galleries, setGalleries] = useState([])

	const revealRefs = useRef([])

	const addToRefs = el => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el)
		}
	}

	useEffect(() => {
		const fetchGalleries = async () => {
			const response = await fetchAlbums()
			setGalleries(response)
		}
		fetchGalleries()
	}, [])

	useEffect(() => {
		revealRefs.current.forEach(el => {
			gsap.fromTo(
				el,
				{ autoAlpha: 0, y: 200 },
				{
					autoAlpha: 1,
					y: 0,
					delay: 0.25,
					duration: 2,
					stagger: 0.25,

					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "bottom center",
					},
				}
			)
		})
	})

	let renderGalleries = galleries?.map(gallery => {
		return (
			<FotoGallery
				addToRefs={addToRefs}
				key={`gallery_${gallery.id}`}
				gallery={gallery.attributes}
				gallerySlug={gallery.attributes.slug}
				galleryId={gallery.id}
			/>
		)
	})

	return (
		<Layout>
			<main className="grid grid-cols-1 items-center justify-between">
				<h1 className="text-center mt-24 mb-12">Zdjęcia</h1>
				<section className="grid sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-y-16">{renderGalleries}</section>
				<BaseButton type="back" />
			</main>
		</Layout>
	)
}

export default Fotogallery
