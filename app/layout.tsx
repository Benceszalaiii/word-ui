import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import Providers from "../components/providers";
import "./globals.css";
import { geistMono, inter } from "./fonts";

export const metadata: Metadata = {
  title: "WordUI",
  description: "Epic components for your next project",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable}`}>
      <head>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
      </head>
      <body className={`antialiased min-h-screen`}>
        <ThemeProvider attribute={"class"} defaultTheme="dark" disableTransitionOnChange>
          <Providers />
          <Navbar />
          <main className="min-h-screen w-full py-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
