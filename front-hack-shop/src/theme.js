import "@fontsource/cormorant-unicase";
import "@fontsource/abhaya-libre";

const theme = {
  light: {
    black: "#000",
    white: "#fff",
    gray: "rgb(245,245,245)",
    test: "rgb(245,245,245)",
    fonts: {
      title: "Cormorant Unicase",
      dark: {
        black: "#000",
        white: "#212121",
        gray: "#141414",
      },
    },
  },
};

const currentTheme = theme.light;

export default theme;
export { currentTheme };

// const theme = {
//   light: {
//     black: "#000",
//     white: "#fff",
//     fonts: {
// title: "Cormorant Unicase",
// gray: "#eaeaea",
