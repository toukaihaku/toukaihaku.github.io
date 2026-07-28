import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information Frictions & Part-Time Wage Gaps | Kaibo Tang",
  description: "A trilingual research overview and pre-analysis plan on job-search channels, ethnic networks, and part-time wages among Chinese international students in Japan.",
  openGraph: {
    title: "Information Frictions & Part-Time Wage Gaps | Kaibo Tang",
    description: "Research design and pre-analysis plan on job-search channels, ethnic networks, and part-time wages among Chinese international students in Japan.",
    type: "article",
    url: "https://toukaihaku.github.io/research/information-frictions/",
    images: [{
      url: "https://toukaihaku.github.io/information-frictions-og.png",
      width: 1536,
      height: 1024,
      alt: "Information Frictions research design by Kaibo Tang",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Information Frictions & Part-Time Wage Gaps | Kaibo Tang",
    description: "Research design and pre-analysis plan on information networks and part-time wages in Japan.",
    images: ["https://toukaihaku.github.io/information-frictions-og.png"],
  },
};

export default function InformationFrictionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
