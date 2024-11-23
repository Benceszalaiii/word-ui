import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen`}>
        <ThemeProvider attribute={"class"} disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen w-full py-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
