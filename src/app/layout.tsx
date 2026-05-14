import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import MetaPixelRouteTracker from "@/components/MetaPixelRouteTracker";
import { META_PIXEL_ID } from "@/lib/pixel";

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

const pixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Meta Pixel Code - inline in head for reliable detection */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pixelScript }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <MetaPixelRouteTracker />
        {children}
      </body>
    </html>
  );
}
