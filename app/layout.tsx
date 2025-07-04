import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZO Accelerator",
  description:
    "ZO Accelerator - Fueling the next wave of innovation at the intersection of AI and blockchain",
  generator: "ZO Accelerator",
  icons: {
    icon: [{ url: "/zo-logo.png" }, { url: "/zo-logo.png" }],
    shortcut: "/zo-logo.png",
    apple: "/zo-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/tt-hoves-pro-trial"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/zo-logo.png" />
        <link rel="apple-touch-icon" href="/zo-logo.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
