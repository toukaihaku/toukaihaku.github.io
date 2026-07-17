import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaibo Tang | 唐楷博",
  description: "Academic profile of Kaibo Tang, an undergraduate economics student at The University of Osaka researching behavioral economics, labor economics, and digital government.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
