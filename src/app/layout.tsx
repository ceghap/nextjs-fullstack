import React from "react";
import "./globals.css";

export const metadata = {
  title: "Nextjs fullstack SSR",
  description: "just a simple SSR nextjs fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <main>{children}</main>
      </body>
    </html>
  );
}
