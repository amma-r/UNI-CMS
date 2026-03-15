import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1b1b1b",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#b2c6e057",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
        "#root": {
          height: "100%",
        },
      },
    },
  },
});

export default theme;
