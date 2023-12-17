/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                circular: ['CircularStd', 'sans-serif'],
                circularmedium: ['CircularStdMedium', 'sans-serif'],
                circularbold: ['CircularStdBold', 'sans-serif'],
                circularblack: [
                    'CircularStdBlack',
                    {
                        fontFeatureSettings: '"ss01"',
                    },
                ],
            },
            colors: {
                glovooker: {
                    blue: {
                        100: '#11123F',
                    },
                    green: {
                        100: '#4B7877',
                    },
                    chamoisee: {
                        100: '#A37756',
                    },
                    silver: {
                        100: '#D1C9B3',
                    },
                },
            },
            screens: {
                '3xl': '1800px',
                '4xl': '2100px',
            }
        },
    },
    plugins: [],
};
