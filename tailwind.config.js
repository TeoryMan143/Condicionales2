/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'battleship-gray': {
                    50: '#f4f6f3',
                    100: '#e6eae1',
                    200: '#ccd4c6',
                    300: '#a8b69f',
                    400: '#7c9070',
                    500: '#5f7554',
                    600: '#485c3f',
                    700: '#394933',
                    800: '#2f3b2a',
                    900: '#273123',
                    950: '#151b13',
                },
            },
        },
    },
    plugins: [],
};
