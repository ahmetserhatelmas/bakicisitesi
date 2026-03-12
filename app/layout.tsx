import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const siteUrl = "https://www.bakicivarmi.com";
const logoUrl = `${siteUrl}/images/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bakıcı Var Mı? | Güvenilir Ana Dili İngilizce Olan Bakıcılar",
  description:
    "Türk aileler için Afrika kökenli, deneyimli ve güvenilir çocuk bakıcısı, bebek bakıcısı ve ev yardımcısı buluyoruz. Türkiye'nin her iline hizmet veriyoruz.",
  keywords:
    "bakıcı, çocuk bakıcısı, bebek bakıcısı, ev yardımcısı, Afrika kökenli bakıcı, İngilizce bakıcı, dil gelişimi",
  openGraph: {
    type: "website",
    title: "Bakıcı Var Mı? | Güvenilir Ana Dili İngilizce Olan Bakıcılar",
    description:
      "Türk aileler için Afrika kökenli, deneyimli ve güvenilir çocuk bakıcısı, bebek bakıcısı ve ev yardımcısı buluyoruz. Türkiye'nin her iline hizmet veriyoruz.",
    url: siteUrl,
    siteName: "Bakıcı Var Mı?",
    images: [
      { url: logoUrl, width: 795, height: 579, alt: "Bakıcı Var Mı?" },
      { url: logoUrl, width: 1200, height: 630, alt: "Bakıcı Var Mı?" },
    ],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakıcı Var Mı? | Güvenilir Ana Dili İngilizce Olan Bakıcılar",
    description:
      "Türk aileler için Afrika kökenli, deneyimli ve güvenilir çocuk bakıcısı, bebek bakıcısı ve ev yardımcısı buluyoruz. Türkiye'nin her iline hizmet veriyoruz.",
    images: [logoUrl],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
