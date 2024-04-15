/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                syne: ['var(--font-syne)'],
            },
            colors: {
                mauve: {
                    DEFAULT: '#d4bbfc',
                    100: '#220454',
                    200: '#4507a8',
                    300: '#6912f5',
                    400: '#9e66f9',
                    500: '#d4bbfc',
                    600: '#dcc8fd',
                    700: '#e5d6fd',
                    800: '#eee4fe',
                    900: '#f6f1fe',
                },
                lavender: {
                    DEFAULT: '#a38ad0',
                    100: '#1e1432',
                    200: '#3c2863',
                    300: '#5b3b95',
                    400: '#7c59bd',
                    500: '#a38ad0',
                    600: '#b5a2da',
                    700: '#c8b9e3',
                    800: '#dad0ec',
                    900: '#ede8f6',
                },
                white: {
                    DEFAULT: '#fbfaff',
                    100: '#140065',
                    200: '#2800ca',
                    300: '#5930ff',
                    400: '#aa95ff',
                    500: '#fbfaff',
                    600: '#fcfbff',
                    700: '#fdfcff',
                    800: '#fdfdff',
                    900: '#fefeff',
                },
                black: {
                    DEFAULT: '#202020',
                    100: '#070707',
                    200: '#0d0d0d',
                    300: '#141414',
                    400: '#1b1b1b',
                    500: '#202020',
                    600: '#4e4e4e',
                    700: '#7a7a7a',
                    800: '#a6a6a6',
                    900: '#d3d3d3',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
    ],
}
