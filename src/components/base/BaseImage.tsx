import Image from "next/image"

interface BaseImageProps {
	width: number
	height: number
	imgPath: string
	imgAlt: string
	author: string
}

const BaseImage = ({ width, height, imgPath, imgAlt, author }: BaseImageProps) => {
	return (
		<div className="flex flex-col items-center">
			<Image className="pb-8 mx-auto max-w-[640px]" src={imgPath} alt={imgAlt} height={height} width={width} />
			<small>Bild von {author}</small>
		</div>
	)
}

export default BaseImage
