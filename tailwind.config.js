/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Inter", " sans-serif"],
				alertBody: ["Nunito Sans", "sans-serif"],
				filters: ["Poppins", "sans-serif"],
			},
			colors: {
				background: "#202020",
				sections: "#181818",
			},
			backgroundImage: {
				"news-gradient": "url('./src/assets/gradient.png')",
			},
		},
	},
	plugins: [],
};
