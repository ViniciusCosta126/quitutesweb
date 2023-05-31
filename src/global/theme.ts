export type ThemeType = typeof light; 
export const light = {
  color: {
    success:"#439D4B",
    background: "#F5F4F2",
    dark: "#000",
    light: "#f5f4f2",
    primary: {
      main: "#D65C0A",
      contrastText: "#F5F4F2",
    },
    secondary: {
      main: "#410F0737",
      contrastText: "#f5f4f2",
    },
  },
  font: {
    small: "12px",
    default: "1rem",
    big: "2rem",
    bigger: "3rem",
  },
  container:{
    small:"24px",
    medium:"48px",
    large:"96px",
    big:"calc((100% - 1366px)/2)"
  }
};

const theme = light
export default theme
