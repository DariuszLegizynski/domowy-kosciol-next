import Image from "next/image"

interface BaseImageProps {
	width: number
	height: number
	imgPath: string
	imgAlt: string
	author?: string
}

const BaseImage = ({ width, height, imgPath, imgAlt, author }: BaseImageProps) => {
	return (
		<div className="flex flex-col items-center py-8">
			<Image className="max-w-[640px]" src={imgPath} alt={imgAlt} height={height} width={width} />
			{author && <small className="pt-1">Bild von {author}</small>}
		</div>
	)
}

export default BaseImage
