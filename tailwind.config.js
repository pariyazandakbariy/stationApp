/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        88: "22rem",
        128: "32rem",
        200: "50rem",
        260: "65rem",
        280: "70rem",
      },
      width: {
        424: "81rem",
        300: "60rem",
        88: "22rem",
      },
      height: {
        "screen/96": "96vh",
        "screen/90": "90vh",
        "screen/86": "86vh",
        "screen/80": "80vh",
        "screen/9": "9vh",
      },
      flex: {
        4: "4 4 0%",
        6: "6 6 0%",
      },
      colors: {
        "background-color": "#EDF2F9",
        "background-hover-color": "#d9dee5",
        "primary-text-color": "#1D1D1D",
        "secondary-text-color": "#5E6E82",
        "table-warning-color": "#91959b",
        "icon-color": "#5E6E82",
        "side-menu-active-color": "#2C7BE5",
        "table-header-background-color": "#EDF2F9",
        "table-header-text-color": "#1D1D1D",
        "success-button-color": "#00ae65",
        "warning-button-color": "#f5803e",
        "danger-button-color": "#e63757",
        "primary-button-color": "#2c7be5",
        "default-button-color": "#4d5969",
        "selected-item-color": "#cbd5e1",
        "sort-arrow-color": "#B6C2D2",
        "price-color": "#2e7b32",
        "master-bill-color": "#a7c2e3",
        "background-card-color": "#f9fafd",
        "login-color": "#005192",
      },
    },
  },
  plugins: [],
};
