import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "hsl(26, 100%, 28%)",
				secondary: "hsl(26, 100%, 38%)",
				tertiary: "hsl(26, 100%, 38%)",
				gold: "hsl(51, 100%, 50%)",
				black: "hsl(5, 0%, 0%)",
				white: "hsl(5, 0%, 100%)",
				grey: "hsl(0, 5%, 50%)",
			},
			borderWidth: {
				"3": "3px",
			},
			screens: {
				xxs: "375px",
				xs: "425px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}
export default config
