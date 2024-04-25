import type { Metadata } from "next";
import { inter } from "@/constants/fonts";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { metadata as configMetadata } from "@/lib/metadata";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = configMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#756FF7" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
