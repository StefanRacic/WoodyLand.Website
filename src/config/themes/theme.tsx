"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5b8d50",
    },
    secondary: {
      main: "#f3a09e",
    },
    text: {
      primary: "#555555",
    },
    error: {
      main: "#e61a1a",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial",
  },
});
