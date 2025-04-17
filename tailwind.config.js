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
  					backgroundColor: '#e11d48bf',
  					borderRadius: '100%'
  				},
  				'50%': {
  					backgroundColor: '#ea580cbf'
  				},
  				'75%': {
  					transform: 'scale(1.2)',
  					backgroundColor: '#fb923cbf'
  				},
  				'90%': {
  					transform: 'scale(0.8)',
  					backgroundColor: '#fde68a'
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
  					backgroundColor: '#9333eabf',
  					transform: 'scale(0.3)',
  					borderRadius: '100%'
  				},
  				'50%': {
  					backgroundColor: '#4f46e5bf'
  				},
  				'75%': {
  					transform: 'scale(1.2)',
  					backgroundColor: '#3b82f6bf'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					backgroundColor: '#22d3ee'
  				}
  			}
  		},
  		animation: {
  			traversed: 'traversed 0.5s cubic-bezier(0, 0, 0.2, 1)',
  			path: 'path 1.5s cubic-bezier(0, 0, 0.2, 1)',
  			wall: 'wall 0.3s cubic-bezier(0, 0, 0.2, 1)'
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
  			text: '#EBF5EE',
  			textDim: '#9CA3AF',
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