import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching at Chinichi Juku Osaka | Kaibo Tang",
  description: "Teaching profile of Kaibo Tang at Chinichi Juku Osaka, covering EJU Japanese, Japan and the World, and Mathematics Course 1.",
  openGraph: {
    title: "Teaching at Chinichi Juku Osaka | Kaibo Tang",
    description: "EJU Japanese, Japan and the World, and Mathematics Course 1 in Osaka.",
    url: "https://toukaihaku.github.io/teaching/chinichi-osaka/",
    type: "website",
    images: [{
      url: "https://toukaihaku.github.io/teaching-og.png",
      width: 1536,
      height: 1024,
      alt: "Kaibo Tang — Teaching at Chinichi Juku Osaka",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teaching at Chinichi Juku Osaka | Kaibo Tang",
    description: "EJU Japanese, Japan and the World, and Mathematics Course 1 in Osaka.",
    images: ["https://toukaihaku.github.io/teaching-og.png"],
  },
};

export default function TeachingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
