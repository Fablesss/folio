import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(68126902,'init',{webvisor:true,clickmap:true,referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
        </Script>
      </head>
      <body className="min-h-screen antialiased">
        <noscript>
          <img src="https://mc.yandex.ru/watch/68126902" style={{ position: "absolute", left: "-9999px" }} alt="" />
        </noscript>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
