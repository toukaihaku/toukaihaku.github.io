import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaibo Tang | 唐楷博",
  description: "Academic profile of Kaibo Tang, an undergraduate economics student at The University of Osaka researching behavioral economics, labor economics, and digital government.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
