import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EAK Accelerator",
  description:
    "EAK Accelerator - Fueling the next wave of innovation at the intersection of AI and blockchain",
  generator: "EAK Accelerator",
  icons: {
    icon: [{ url: "/logo.png" }, { url: "/favicon.png" }],
    shortcut: "/favicon.png",
    apple: "/logo.png",
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
