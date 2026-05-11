import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "LifeInsuranceAgents.com — Find a trusted life insurance agent",
    template: "%s · LifeInsuranceAgents.com",
  },
  description:
    "Compare quotes and connect with licensed life insurance agents near you. Real reviews, transparent pricing, and free guidance for term, whole, and final expense policies.",
  metadataBase: new URL("https://lifeinsuranceagents.com"),
  openGraph: {
    title: "LifeInsuranceAgents.com",
    description:
      "The marketplace to find licensed life insurance agents, compare quotes, and protect your family.",
    url: "https://lifeinsuranceagents.com",
    siteName: "LifeInsuranceAgents.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
