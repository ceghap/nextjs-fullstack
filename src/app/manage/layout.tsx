import React from "react";
import "../globals.css";

export const metadata = {
  title: "Nextjs fullstack SSR",
  description: "just a simple SSR nextjs fullstack",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
