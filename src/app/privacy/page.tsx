import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <article className="container-page max-w-3xl py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Privacy policy</h1>
      <p className="mt-2 text-sm text-ink-400">Last updated: May 11, 2026</p>
      <div className="mt-8 space-y-5 text-ink-700">
        <p>
          We take your privacy seriously. This policy explains what information
          we collect when you use LifeInsuranceAgents.com, how we use it, and
          your rights.
        </p>
        <h2 className="mt-6 text-xl font-semibold">What we collect</h2>
        <p>
          When you request quotes, we collect basic profile information (name,
          age, ZIP, coverage needs, contact info) so we can match you with
          appropriate licensed agents.
        </p>
        <h2 className="mt-6 text-xl font-semibold">How we use it</h2>
        <p>
          We share your information only with the agents you're matched with —
          never with third-party marketers or lead resellers. We do not sell
          your data.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Your rights</h2>
        <p>
          You can request access, correction, or deletion of your data at any
          time by emailing privacy@lifeinsuranceagents.com.
        </p>
      </div>
    </article>
  );
}
