import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      // main: "#3E2C41",
      // dark: "#261C2C",
      // contrastText: "#EEEEEE",
      main: "#2A2E35",
      dark: "#12181B",
      contrastText: "#EEEEEE",
    },
    secondary: {
      // main: "#6E85B2",
      // contrastText: "#222222",
      main: "#6E85B2",
      contrastText: "#222222",
    },
  },
});

export default theme;
