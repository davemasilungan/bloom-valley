import type { Metadata } from "next";
import "@styles/globals.css";
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "Bloom Valley Nursery",
  description: "Your Local, Family-Owned Nursery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
