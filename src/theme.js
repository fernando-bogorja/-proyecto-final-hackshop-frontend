import "@fontsource/abhaya-libre";

const theme = {
  light: {
    black: "#000",
    white: "#fff",
    gray: "rgb(245,245,245)",
    black_hover: "#575757",
    fonts: {
      title: "Bodoni Moda",
    },
  },
  dark: {
    black: "#000",
    white: "#6f6f70",
    gray: "#141414",
    fonts: {
      title: "Bodoni Moda",
    },
  },
};

const effects = {
  zoom: "zoomOnHover",
};

const toastConfig = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const currentTheme = theme.light;

export default theme;
export { currentTheme, effects, toastConfig };