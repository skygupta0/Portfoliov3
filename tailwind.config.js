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
					bg: "#0B0F19",
					surface: "#111827",
					border: "#1F2937",
					primary: "#38bdf8", // Sky 400
					secondary: "#818cf8", // Indigo 400
					accent: "#2dd4bf", // Teal 400
					textMain: "#f8fafc", // Slate 50
					textMuted: "#94a3b8", // Slate 400
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
