import "@fontsource/abhaya-libre";

const theme = {
  light: {
    black: "#000",
    black30: "rgb(30, 30, 30)",
    transp: "transparent",
    white: "#fff",
    gray: "rgb(230,230,230)",
    black_hover: "#575757",
    text: "rgba(128, 128, 128, 0.9)",
    green: "#40BD66",
    fonts: {
      title: "Bodoni Moda",
      text: "Raleway",
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
