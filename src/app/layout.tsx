import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI広告起業スクール｜未経験から3ヶ月で広告代理店を立ち上げる",
  description:
    "AIで広告マーケティングを自動化し、未経験から3ヶ月で広告代理店として起業するためのスクール。弊社開発の高品質マーケAIツール×プロによる個別コンサルティング付き。無料ウェビナー開催中",
  openGraph: {
    title: "AI広告起業スクール",
    description:
      "AIで広告マーケを自動化、未経験から3ヶ月で広告代理店を立ち上げる。無料ウェビナー開催中",
    type: "website",
    locale: "ja_JP",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
