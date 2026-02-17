import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Vibe Coding App",
  description: "My Vibe Coding App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
