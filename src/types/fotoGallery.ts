interface FormatImage {
	ext: string
	hash: string
	height: number
	mime: string
	name: string
	path: string | null
	size: number
	sizeInBytes: number
	url: string
	width: number
}

interface Format {
	large?: FormatImage
	medium?: FormatImage
	small?: FormatImage
	thumbnail?: FormatImage
}

export interface CoverImage {
	alternativeText: string
	caption: null
	createdAt: string
	ext: string
	formats: Format
	hash: string
	height: number
	mime: string
	name: string
	previewUrl: null
	provider: string
	provider_metadata: null
	size: number
	updatedAt: string
	url: string
	width: number
}

export interface FotoGalleryAttributes {
	createdAt: string
	title: string
	coverImage: {
		data: {
			attributes: CoverImage
			id: number
		}
	}
	description: string
	shortDescription: string
	publishedAt: string
	slug: string
	updatedAt: string
}

export interface FotoGallery {
	attributes: FotoGalleryAttributes
	id?: number
}
