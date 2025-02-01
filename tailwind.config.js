/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{ejs,html,js}"], // Adjust paths based on your project structure
    theme: {
        extend: {
            colors: {
                primary: "#B91C1C",  
                secondary: "#F59E0B", 
                accent: "#166534", 
                background: "#FFF8E1",
                text: "#333333",
            },
        },
    },
    plugins: [],
};