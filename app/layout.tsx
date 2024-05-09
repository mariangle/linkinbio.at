import type { Metadata } from "next";
import { inter } from "@/lib/constants/fonts";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { metadata as configMetadata } from "@/lib/metadata";

import { Toaster } from "@/components/ui/sonner";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" richColors closeButton />
          <NextTopLoader color="#3F51B5" showSpinner={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
