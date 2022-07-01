import "@fontsource/abhaya-libre";

const theme = {
  light: {
    black: "#000",
    white: "#fff",
    gray: "rgb(245,245,245)",
    black_hover: "#575757",
    fonts: {
      title: "Abhaya Libre",
    },
  },
  dark: {
    black: "#000",
    white: "#212121",
    gray: "#141414",
  }
}

const effects = {
  zoom: "zoomOnHover",
}

const toastConfig = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const currentTheme = theme.light;

export default theme;
export { currentTheme, effects, toastConfig };
