import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				path: {
					'0%': {
						transform: 'scale(0.3)',
						backgroundColor: '#1d4ed8bf',
						borderRadius: '100%'
					},
					'50%': {
						backgroundColor: '#2563ebbf'
					},
					'75%': {
						transform: 'scale(1.2)',
						backgroundColor: '#3b82f6bf'
					},
					'90%': {
						transform: 'scale(0.8)',
						backgroundColor: '#60a5fa'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				wall: {
					'0%': {
						transform: 'scale(0.7)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				traversed: {
					'0%': {
						backgroundColor: '#7c3aedbf',
						transform: 'scale(0.3)',
						borderRadius: '100%'
					},
					'50%': {
						backgroundColor: '#8b5cf6bf'
					},
					'75%': {
						transform: 'scale(1.2)',
						backgroundColor: '#a78bfa'
					},
					'100%': {
						transform: 'scale(1)',
						backgroundColor: '#c4b5fd'
					}
				}
			},
			animation: {
				traversed: 'traversed 0.5s ease-in',
				path: 'path 1.5s ease-in',
				wall: 'wall 0.3s ease-in'
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				text: '#F3F4F6',
				textDim: '#6B7280',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}