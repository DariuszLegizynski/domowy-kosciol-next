export const getStrapiData = async (query: string) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${query}`)
		const data = await response.json()
		return data
	} catch (error) {
		throw new Error(`Fehler bei fetchen der Daten: ${error}`)
	}
}
