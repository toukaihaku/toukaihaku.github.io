import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Directional Accuracy | Kaibo Tang",
  description: "Research overview of an audit of archived GPT-4 forecasts for behavioral intervention choice, forecast calibration, and decision regret.",
};

export default function ForecastAuditLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
