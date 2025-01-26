/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
    content: ["./src/**/*.{html,js,ts}", "./libs/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                "accent-blue" : "#516CF7",
                "accent-blue-light": "#D5DCFE"
            },
        },
    },
    plugins: [],
}
