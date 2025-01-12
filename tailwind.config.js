/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},

		// boxShadow: {
		// 	primary: [
		// 		"0px 345px 97px 0px rgba(0, 0, 0, 0.00)",
		// 		"0px 221px 88px 0px rgba(0, 0, 0, 0.01)",
		// 		"0px 124px 74px 0px rgba(0, 0, 0, 0.05)",
		// 		"0px 55px 55px 0px rgba(0, 0, 0, 0.09)",
		// 		"0px 14px 30px 0px rgba(0, 0, 0, 0.10)",
		// 	],
		// },

		colors: {
			primary: "#FFC294",
			white: "#FFFFFF",
			shadow: "#F6F6F6",
			secondary: "#DAB287",
			accent: "#E9D37C",
			copyright: "#BFBFBF",
			primarySoft: "#daa67e",
			primarySoftSoft: "#e5c1a5",
			primarySoftSoftSoft: "#edd3bf",
			nothing: "#fbf4f0",
			hover: "#D39464",
		},

		borderRadius: {
			none: "0",
			sm: "0.125rem",
			default: "0.25rem",
			lg: "0.5rem",
			full: "9999px",

			primary: "1.25rem",
		},

		fontFamily: {
			title: ["Dancing Script", "cursive"],
			text: ["Fustat", "sans-serif"],
		},
	},
	plugins: [],
};
