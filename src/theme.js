import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",

    h1: {
      fontSize: "60px",
      fontWeight: "700",
      lineHeight: "80px",
      "@media (max-width:800px)": {
        fontSize: "40px",
      },
      "@media (max-width:450px)": {
        fontSize: "30px",
        fontWeight: "200",
        // lineHeight: "10.96px",
      },
    },
    h2: {
      fontSize: "35px",
      lineHeight: "50px",
      fontWeight: "500",
      "@media (max-width:1000px)": {
        fontSize: "20px",
        fontWeight: "300",
        lineHeight: "25px",
      },
    },
    h6: {
      "@media (max-width:1000px)": {
        fontSize: "20px",
        fontWeight: "300",
        lineHeight: "25px",
      },
      "@media (max-width:450px)": {
        fontSize: "14px",
        fontWeight: "300",
        lineHeight: "15px",
      },
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "18.96px",
      "@media (max-width:600px)": {
        fontSize: "10px",
        fontWeight: "200",
        lineHeight: "15.96px",
      },
      "@media (max-width:450px)": {
        fontSize: "6px",
        fontWeight: "200",
        lineHeight: "10.96px",
      },
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "30px",

      "@media (max-width:450px)": {
        fontSize: "10px",
        fontWeight: "200",
        lineHeight: "10.96px",
      },
    },
    body1: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "30px",
      "@media (max-width:800px)": {
        fontSize: "8px",
        fontWeight: "200",
        lineHeight: "10.96px",
      },
    },
    body2: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "30px",
    },
  },
  palette: {
    secondary: {
      main: "#E0E0E0",
    },
  },
});

export default theme;
