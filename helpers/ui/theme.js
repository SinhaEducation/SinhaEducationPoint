import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#141E61",
      dark: "#0F044C",
      contrastText: "#EEEEEE",
    },
    secondary: {
      main: "#787A91",
      contrastText: "#EEEEEE",
    },
  },
});

export default theme;
