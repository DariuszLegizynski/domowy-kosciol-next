/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		STRAPI_TOKEN: process.env.STRAPI_TOKEN,
		API_URL: process.env.API_URL,
	},
	images: {
		domains: [process.env.NEXT_PUBLIC_STRAPI_API_URL],
	},
}

module.exports = nextConfig
