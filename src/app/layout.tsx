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
  const pages = ["Početna", "Galerija", "Usluge", "Kontakt"];

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Navbar pages={pages} />
          {children}
          <Footer pages={pages} />
        </ThemeProvider>
      </body>
    </html>
  );
}
