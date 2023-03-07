const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [require("daisyui")]
};

module.exports = {
  //...
  daisyui: {
    themes: ["black"],
  },
}