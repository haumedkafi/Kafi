import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <article className="container-page max-w-3xl py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Terms of service</h1>
      <p className="mt-2 text-sm text-ink-400">Last updated: May 11, 2026</p>
      <div className="mt-8 space-y-5 text-ink-700">
        <p>
          By using LifeInsuranceAgents.com you agree to these terms. We are a
          marketplace that connects buyers with licensed insurance agents — we
          are not an insurer and do not issue policies.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Eligibility</h2>
        <p>
          You must be 18 or older and a U.S. resident to request quotes.
        </p>
        <h2 className="mt-6 text-xl font-semibold">No professional advice</h2>
        <p>
          Content on this site is for informational purposes only and is not
          financial, legal, or insurance advice. Always consult a licensed
          professional.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Limitation of liability</h2>
        <p>
          LifeInsuranceAgents.com is not liable for the accuracy of quotes or
          the conduct of independent agents on the platform.
        </p>
      </div>
    </article>
  );
}
