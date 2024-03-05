"use client";

import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5b8d50",
    },
    secondary: {
      main: "#f3a09e",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
    error: {
      main: "#e61a1a",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
};

export const theme = createTheme(themeOptions);
