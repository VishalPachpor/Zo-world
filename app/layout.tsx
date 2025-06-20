import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EAK Accelerator",
  description: "EAK Accelerator",
  generator: "EAK Accelerator",
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
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
