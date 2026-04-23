import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom — Apps & Tools",
  description:
    "14-year-old developer building CLI tools, desktop apps, and mobile software. Go, Rust, Flutter.",
  openGraph: {
    title: "Tom — Apps & Tools",
    description:
      "14-year-old developer building CLI tools, desktop apps, and mobile software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
