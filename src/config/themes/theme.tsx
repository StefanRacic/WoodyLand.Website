"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5B8D50",
    },
    secondary: {
      main: "#f3a09e",
    },
    text: {
      primary: "#555555",
    },
    error: {
      main: "#FF3131",
    },
    warning: {
      main: "#FAD26C",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontSize: 48,
    },
    h3: {
      fontSize: 38,
    },
    h4: {
      fontSize: 24,
    },
    body1: {
      fontSize: 18,
    },
  },
});
