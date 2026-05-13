import type { Metadata } from "next";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get free life insurance quotes",
  description:
    "Compare quotes from up to 3 licensed life insurance agents in your area. Free, no-obligation, 90 seconds.",
};

export default function QuotePage({
  searchParams,
}: {
  searchParams: { agent?: string };
}) {
  return (
    <div className="bg-ink-50/40">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_360px]">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Get free life insurance quotes
          </h1>
          <p className="mt-2 max-w-xl text-ink-500">
            Answer a few quick questions and we'll match you with up to 3
            licensed agents who can quote you today.
          </p>
          <div className="mt-8">
            <QuoteForm presetAgent={searchParams.agent} />
          </div>
        </div>
        <aside className="space-y-4 lg:sticky lg:top-20 lg:h-fit">
          <div className="card p-5">
            <h3 className="font-semibold">Why use LifeInsuranceAgents.com?</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              <li>✓ 100% free for buyers</li>
              <li>✓ Match with licensed local agents</li>
              <li>✓ No spam — your info is shared only with matched agents</li>
              <li>✓ Compare quotes side-by-side</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Privacy promise</h3>
            <p className="mt-2 text-sm text-ink-600">
              We never sell your information. Your contact details are only
              shared with the agents you choose to connect with.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
