/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		STRAPI_TOKEN: process.env.STRAPI_TOKEN,
		API_URL: process.env.API_URL,
	},
	images: {
		domains: ["i.imgur.com", "imgur.com", "localhost"],
	},
}

module.exports = nextConfig
