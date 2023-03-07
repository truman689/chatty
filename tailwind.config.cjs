const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

module.exports = {
  ...config,
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#343232",
          "secondary": "#343232",
          "accent": "#343232",
          "neutral": "#272626",
          "base-100": "#000000",
          "info": "#0000FF",
          "success": "#008000",
          "warning": "#FFFF00",
          "error": "#FF0000",
        },
      },
    ],
    theme: "mytheme",
  },
};
