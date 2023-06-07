import { createTheme } from "@mui/material";
import { neutral } from "./colors";

const customtheme = createTheme({
    status:{
        danger: "#880808",
    },

    palette: {
        primary: {
          light: "#880808",
          main: "#880808",
          dark: neutral[300],
          contrastText: neutral[400],
        },
        secondary: {
          light: neutral[900],
          main: neutral[800],
          dark: neutral[700],
          contrastText: neutral[600],
        },
        background : "#880808",
      },
})

export default customtheme;