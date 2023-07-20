const { fontFamily } = require("tailwindcss/defaultTheme")
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")


/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,vue,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "lucide", "vscode-icons", "heroicons"]),
    }),
  ],
}
