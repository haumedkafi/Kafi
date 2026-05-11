import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
  description: "Our mission: make finding the right life insurance agent simple, transparent, and free for every American family.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="container-page max-w-3xl py-16">
        <h1 className="text-3xl font-bold sm:text-5xl">About us</h1>
        <p className="mt-5 text-lg text-ink-600">
          LifeInsuranceAgents.com was founded on a simple belief: every family
          deserves honest, accessible advice when protecting their loved ones.
        </p>
        <p className="mt-4 text-ink-600">
          The life insurance industry is built around commissions, jargon, and
          opaque pricing. We're changing that by giving buyers the same kind of
          transparent marketplace experience they're used to from booking a
          hotel or finding a home.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Our principles</h2>
        <ul className="mt-4 space-y-3 text-ink-600">
          <li>
            <strong>Buyers come first.</strong> Our service is and always will be
            free for buyers. Agents pay a flat subscription, never per-lead
            bidding.
          </li>
          <li>
            <strong>Real reviews only.</strong> Every review is from a verified
            policyholder, not anonymous internet traffic.
          </li>
          <li>
            <strong>Licensed and independent first.</strong> We prioritize
            independent brokers who can shop the whole market — not captive
            agents pushing one product.
          </li>
          <li>
            <strong>No spam, ever.</strong> Your information is only shared with
            the agents you're matched with.
          </li>
        </ul>
        <div className="mt-10 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
          <h3 className="text-lg font-semibold">Get started in 90 seconds</h3>
          <p className="mt-1 text-sm text-ink-600">
            Match with up to 3 licensed agents in your state.
          </p>
          <Link href="/quote" className="btn-primary mt-4">
            Get free quotes
          </Link>
        </div>
      </section>
    </div>
  );
}
