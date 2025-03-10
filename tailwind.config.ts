
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'mono': ['Space Mono', 'Courier New', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				retro: {
					background: 'hsl(var(--retro-background))',
					foreground: 'hsl(var(--retro-foreground))',
					primary: 'hsl(var(--retro-primary))',
					'primary-foreground': 'hsl(var(--retro-primary-foreground))',
					secondary: 'hsl(var(--retro-secondary))',
					'secondary-foreground': 'hsl(var(--retro-secondary-foreground))',
					accent: 'hsl(var(--retro-accent))',
					'accent-foreground': 'hsl(var(--retro-accent-foreground))',
					muted: 'hsl(var(--retro-muted))',
					'muted-foreground': 'hsl(var(--retro-muted-foreground))',
					card: 'hsl(var(--retro-card))',
					'card-foreground': 'hsl(var(--retro-card-foreground))',
					border: 'hsl(var(--retro-border))',
					tertiary: 'hsl(var(--retro-tertiary))',
					'tertiary-foreground': 'hsl(var(--retro-tertiary-foreground))',
					quaternary: 'hsl(var(--retro-quaternary))',
					'quaternary-foreground': 'hsl(var(--retro-quaternary-foreground))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'retro-sm': 'var(--shadow-retro-sm)',
				'retro-md': 'var(--shadow-retro-md)',
				'retro-lg': 'var(--shadow-retro-lg)',
				'retro-inset': 'var(--shadow-retro-inset)',
				'retro-glow': 'var(--shadow-retro-glow)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				pulse: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'scale-in': {
					from: { transform: 'scale(0.9)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse-slow': 'pulse 5s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards'
			},
			backgroundImage: {
				'retro-dots': 'radial-gradient(rgba(155, 135, 245, 0.2) 2px, transparent 2px)',
				'retro-stripes': 'repeating-linear-gradient(45deg, rgba(155, 135, 245, 0.05), rgba(155, 135, 245, 0.05) 10px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0) 20px)',
				'retro-grid': 'linear-gradient(rgba(155, 135, 245, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(155, 135, 245, 0.05) 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
