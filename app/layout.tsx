import type { Metadata } from "next";
import { inter } from "@/lib/constants/fonts";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { metadata as configMetadata } from "@/lib/metadata";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { auth } from "@/lib/auth";

export const metadata: Metadata = configMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" richColors />
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
