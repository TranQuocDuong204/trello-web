import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { deepOrange, teal, cyan, orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
    };
  }

  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }
}

// Create the theme with custom properties
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  spacing: (factor: number): string => `${0.25 * factor}rem`,
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "56px",
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
