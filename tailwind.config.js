/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				display: ["Outfit", "sans-serif"],
			},
			colors: {
				premium: {
					bg: "#0f172a", // Slate 900 main background
					surface: "#1e293b", // Slate 800 surface
					border: "#334155", // Slate 700 border
					primary: "#0ea5e9", // Sky 500 main brand
					secondary: "#0284c7", // Sky 600 secondary
					accent: "#f43f5e", // Rose 500 accent
					textMain: "#f8fafc", // Slate 50 text
					textMuted: "#cbd5e1", // Slate 300 muted text
				}
			},
			backgroundImage: {
				homeBg: "url('/src/data/assets/bg.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			animation: {
				'blob': 'blob 7s infinite',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'smooth-spin': 'spin 12s linear infinite',
			},
			keyframes: {
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [],
};
