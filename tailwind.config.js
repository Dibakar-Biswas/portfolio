/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#00eeff", // Vibrant Cyan
                "background-light": "#f7f7f7",
                "background-dark": "#020305", // Very dark, almost black
                "text-light": "#333333",
                "text-dark": "#ffffff", // White text for dark mode
                "text-secondary-light": "#666666",
                "text-secondary-dark": "#a1a1aa", // Light gray for secondary text
            },
            fontFamily: { display: "Space Grotesk" },
            borderRadius: {
                DEFAULT: "1rem",
                lg: "2rem",
                xl: "3rem",
                full: "9999px",
            },
            boxShadow: {
                "primary-glow": "0 0 20px 5px rgba(0, 238, 255, 0.5)", // Cyan glow
            },
        },
    },
    plugins: [],
}
