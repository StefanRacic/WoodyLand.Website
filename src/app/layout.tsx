import Navbar from "@/components/layout/navbar";
import { Container, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { theme } from "../config/themes/theme";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Woodyland - Mesto Kvalitetne Zabave",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        />
      </head>
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
