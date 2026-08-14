import type { Metadata } from "next";

const title = "Justification as a Revisable State | Kaibo Tang";
const description = "A research overview of Kaibo Tang's behavioral risk–friction fit framework for evidence-based, revisable decisions about friction in digital public services.";
const canonical = "https://toukaihaku.github.io/research/risk-friction-fit/";
const preview = "https://toukaihaku.github.io/risk-friction-fit-og.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title,
    description,
    publishedTime: "2026-08-14",
    authors: ["Kaibo Tang"],
    images: [{ url: preview, width: 1200, height: 630, alt: "An abstract sequence of four decision gates representing behavioral risk–friction fit" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [preview],
  },
};

export default function RiskFrictionFitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
