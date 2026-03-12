import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const siteUrl = "https://www.bakicivarmi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bakıcı Var Mı? | Güvenilir Ana Dili İngilizce Olan Bakıcılar",
  description:
    "Türk aileler için Afrika kökenli, deneyimli ve güvenilir çocuk bakıcısı, bebek bakıcısı ve ev yardımcısı buluyoruz. Türkiye'nin her iline hizmet veriyoruz.",
  keywords:
    "bakıcı, çocuk bakıcısı, bebek bakıcısı, ev yardımcısı, Afrika kökenli bakıcı, İngilizce bakıcı, dil gelişimi",
  openGraph: {
    title: "Bakıcı Var Mı? | Güvenilir Ana Dili İngilizce Olan Bakıcılar",
    description:
      "Türk aileler için Afrika kökenli, deneyimli ve güvenilir çocuk bakıcısı, bebek bakıcısı ve ev yardımcısı buluyoruz. Türkiye'nin her iline hizmet veriyoruz.",
    url: siteUrl,
    siteName: "Bakıcı Var Mı?",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Bakıcı Var Mı?" }],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary",
    title: "Bakıcı Var Mı? | Güvenilir Ana Dili İngilizce Olan Bakıcılar",
    description:
      "Türk aileler için Afrika kökenli, deneyimli ve güvenilir çocuk bakıcısı, bebek bakıcısı ve ev yardımcısı buluyoruz. Türkiye'nin her iline hizmet veriyoruz.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${nunito.variable} font-[var(--font-nunito)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
