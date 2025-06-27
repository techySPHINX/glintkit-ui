import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import "./globals.css"; 
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: {
        template: "%s | glintkit UI - Open Source Components",
        default: "glintkit UI - Open Source Components",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className="bg-white dark:bg-black">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="relative w-full pt-0 md:pt-0">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    );
}
