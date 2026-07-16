import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor Vehicle Tax Renewal Nudge Study | Kaibo Tang",
  description: "Research overview of a pragmatic randomized controlled trial evaluating nudge interventions for online motor vehicle tax exemption renewal filing in Osaka Prefecture.",
};

export default function ResearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
