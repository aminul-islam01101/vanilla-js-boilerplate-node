const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./public/**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            width: {
                '95': '95%',
                '90': '90%',
                '85': '85%',
                '80': '80%',
                '70': '70%',
                '60': '60%',
                '40': '40%',
            },
            maxWidth: {
                '95': '95%',
                '90': '90%',
                '85': '85%',
                '80': '80%',
                '70': '70%',
                '60': '60%',
                '40': '40%',
            },
        },
    },
    plugins: [],
};
