module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        tea: "url('/hobbies/tea.jpg')",
        blog: "url('/hobbies/myblog.webp')",
        music:
          "url('/hobbies/photo.jpg')",
        grocer: "url('/hobbies/grocer.webp')",
        journaling: "url('/hobbies/traveling.jpg')",
        programming: "url('/hobbies/programming.jpg')",
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
      },
      screens: {
        iphone: "414px",
        "3xl": "1680px",
      },
      boxShadow: {
        "btm-right": "8px 12px 24px -12px #666565",
        "top-right": "-12px -8px 24px -12px #666565",
        around: "0px 0px 17px 2px rgba(255, 255, 255, 0.43)",
      },
    },
  },
};
