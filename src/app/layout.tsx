import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { theme } from "../config/themes/theme";

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
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
