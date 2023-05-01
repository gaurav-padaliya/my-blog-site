module.exports = {

    plugins: [
        require('flowbite/plugin')
    ],
    theme: {
        extend: {},
    },
    content: [
        "./node_modules/flowbite/**/*.js",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],

}