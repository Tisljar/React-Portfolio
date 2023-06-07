/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                blue: '#40bcf4',
                green: '#00c030',
                red: '#DC4492',
                yellow: '#ff8000',
                grey: '#ededed',
                white: '#ffffff',
                'dark-bg': '#14181c',
                'light-grey': '#2c3440',
                'deep-blue': '#99aabb',
                'dark-grey': '#757575',
                'opaque-black': 'rgba(0,0,0,0.35)',
                'form-grey': '#202830',
                'deep-blue-opaque': 'rgba(153,170,187,0.6)',
            },
            backgroundImage: (theme) => ({
                'gradient-rainbow': 'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
                'gradient-rainblue': 'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.3%)',
            }),
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            content: {
                project1: "url('./assets/project1.png')",
                pokemonbattlesimulator: "url('./assets/pokemonsimulator.png')",
                obiteljskekonstelacije: "url('./assets/obiteljskekonstelacije.png')",
                chatapp: "url('./assets/chatapp.png')",
            },
        },
        screens: {
            xs: '480px',
            sm: '768px',
            md: '1060px',
        },
    },
    plugins: [],
};

