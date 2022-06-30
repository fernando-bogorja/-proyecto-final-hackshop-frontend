import "@fontsource/cormorant-unicase";

const theme = {
  light: {
    black: "#000",
    white: "#fff",
    gray: "#eaeaea",
    fonts: {
      title: "Cormorant Unicase",
    },
  },
  dark: {
    black: "#000",
    white: "#212121",
    gray: "#141414",
  },
};

const currentTheme = theme.light;

export default theme;
export { currentTheme };
