import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How LifeInsuranceAgents.com works",
  description:
    "We match you with licensed local life insurance agents who compete for your business. Free for buyers, always.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      n: "1",
      title: "Tell us about you",
      body: "Answer a short 90-second questionnaire about your age, ZIP, and coverage goals. No SSN, no credit check.",
    },
    {
      n: "2",
      title: "We match you with vetted agents",
      body: "Our algorithm matches your needs to licensed agents in your state who specialize in your situation.",
    },
    {
      n: "3",
      title: "Compare quotes side-by-side",
      body: "Each agent reaches out within 24 hours with a personalized quote. Compare carriers, rates, and policy types.",
    },
    {
      n: "4",
      title: "Apply with the agent you trust",
      body: "Pick the agent that feels right. They handle the application paperwork. Coverage typically starts in 1-4 weeks.",
    },
  ];

  const faqs = [
    {
      q: "Is this really free?",
      a: "Yes — 100% free for buyers. Agents pay us a small subscription fee to list on the platform; you never pay extra for using us.",
    },
    {
      q: "Will I get spam calls?",
      a: "No. Your contact information is only shared with up to 3 agents you're matched with, and you can opt out at any time.",
    },
    {
      q: "How are agents vetted?",
      a: "Every agent is required to provide their active state license, E&O insurance, and 3+ verified policyholder references before being listed.",
    },
    {
      q: "What if I don't like any of the matches?",
      a: "Ask for new matches at no cost. You can also browse our directory directly and reach out to any agent you find.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="border-b border-ink-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-16 text-center">
          <h1 className="text-3xl font-bold sm:text-5xl">
            How LifeInsuranceAgents.com works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-500">
            We make finding the right life insurance agent as easy as finding a
            place to live. Transparent, free, and built for buyers.
          </p>
          <Link href="/quote" className="btn-primary mt-8 px-6 py-3">
            Get started — it's free
          </Link>
        </div>
      </section>

      <section className="container-page py-16">
        <ol className="grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.n} className="card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {s.n}
              </span>
              <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-ink-500">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink-50/40 py-16">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">FAQ</h2>
          <dl className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="card p-5">
                <dt className="font-semibold">{f.q}</dt>
                <dd className="mt-2 text-sm text-ink-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
