import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "List your profile — for agents",
  description:
    "Get matched with high-intent life insurance buyers in your state. Verified leads, transparent pricing.",
};

export default function ForAgentsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-ink-100 bg-gradient-to-b from-brand-900 to-brand-700 text-white">
        <div className="container-page py-16">
          <div className="max-w-2xl">
            <p className="chip bg-white/10 text-brand-100">For licensed agents</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Get matched with buyers who are ready to apply.
            </h1>
            <p className="mt-4 text-lg text-brand-100">
              Stop chasing cold leads. LifeInsuranceAgents.com sends you
              high-intent buyers in your licensed states — and only buyers who
              fit your specialties.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#signup" className="btn bg-white text-brand-700 hover:bg-brand-50">
                Apply to list
              </a>
              <Link href="#pricing" className="btn ring-1 ring-inset ring-white/30 text-white hover:bg-white/10">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16" id="leads">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              title: "Pre-qualified buyers",
              body: "Every lead has filled out a full intake — age, state, coverage goals, health profile. No bait-and-switch.",
            },
            {
              title: "Geo and specialty matched",
              body: "We only send leads in states you're licensed in and that match your specialties (e.g., diabetics, seniors, HNW).",
            },
            {
              title: "Build a verified reputation",
              body: "Earn reviews from real policyholders. Top Rated agents see 3-5x more matches.",
            },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50/40 py-16" id="pricing">
        <div className="container-page">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Simple, flat pricing</h2>
            <p className="mt-2 text-ink-500">
              No bidding, no surprise fees. Cancel anytime.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            <div className="card p-8">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-ink-500">
                Single state, up to 15 matched leads/month
              </p>
              <p className="mt-4 text-4xl font-bold">
                $149<span className="text-base font-medium text-ink-500">/mo</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-600">
                <li>✓ Verified profile listing</li>
                <li>✓ Up to 15 matched buyer leads</li>
                <li>✓ Review collection</li>
              </ul>
              <a href="#signup" className="btn-secondary mt-6 w-full">
                Choose Starter
              </a>
            </div>
            <div className="card border-2 border-brand-500 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Pro</h3>
                <span className="chip bg-brand-100 text-brand-800">Most popular</span>
              </div>
              <p className="mt-1 text-sm text-ink-500">
                Up to 5 states, unlimited leads
              </p>
              <p className="mt-4 text-4xl font-bold">
                $349<span className="text-base font-medium text-ink-500">/mo</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-600">
                <li>✓ Everything in Starter</li>
                <li>✓ Multi-state coverage (up to 5)</li>
                <li>✓ Unlimited matched leads</li>
                <li>✓ Featured placement in search</li>
                <li>✓ Top Rated badge eligibility</li>
              </ul>
              <a href="#signup" className="btn-primary mt-6 w-full">
                Choose Pro
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16" id="signup">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Apply to list your profile</h2>
          <p className="mt-2 text-ink-500">
            Tell us about your practice. We verify every agent before
            activation.
          </p>
          <form
            className="card mt-6 space-y-4 p-6"
            action="mailto:agents@lifeinsuranceagents.com"
            method="post"
          >
            <div>
              <label className="label">Full name</label>
              <input className="input" required placeholder="Jane Smith" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label">Email</label>
                <input type="email" className="input" required />
              </div>
              <div>
                <label className="label">Phone</label>
                <input type="tel" className="input" />
              </div>
            </div>
            <div>
              <label className="label">Primary state license number</label>
              <input className="input" required />
            </div>
            <div>
              <label className="label">Tell us about your practice</label>
              <textarea className="input min-h-[100px]" />
            </div>
            <button type="submit" className="btn-primary w-full">
              Submit application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
