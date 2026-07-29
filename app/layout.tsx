import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-context";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denis Mokrinsky — Low-Code Engineer · Business & Systems Analyst",
  description:
    "I turn business processes into deployed automation: low-code/no-code, JavaScript, REST/webhook integrations. The bridge between business and engineering.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Denis Mokrinsky — Low-Code Engineer",
    description:
      "The bridge between business and automation. Low-code/no-code, JavaScript, integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
