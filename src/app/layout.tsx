import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Re:pure bubble+ | サロン専用アクアトリートメントシステム",
  description:
    "塩素除去とウルトラファインバブルを両立した、トリミングサロン向けアクアトリートメントシステム。1週間無料体験受付中。",
  openGraph: {
    title: "Re:pure bubble+ | サロン専用アクアトリートメントシステム",
    description:
      "塩素を、抜く。バブルで、包む。見えないところまで、ちゃんと届ける水へ。",
    locale: "ja_JP",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${notoSerifJp.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-svh">{children}</body>
    </html>
  );
}
