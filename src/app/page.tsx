import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { AgentCard } from "@/components/AgentCard";
import { AGENTS, ARTICLES } from "@/lib/data";

export default function HomePage() {
  const featured = [...AGENTS]
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, 3);

  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedAgents featured={featured} />
      <HowItWorks />
      <PolicyExplorer />
      <Testimonials />
      <LearnSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(47,118,255,0.18),transparent)]"
      />
      <div className="container-page relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip mb-4 bg-white text-brand-700 ring-1 ring-brand-100">
            Trusted by 38,000+ families this year
          </span>
          <h1 className="text-4xl font-bold leading-tight text-ink-900 sm:text-5xl md:text-6xl">
            Find the right life insurance{" "}
            <span className="text-brand-600">agent</span> near you.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-500">
            Compare quotes from licensed local agents. Read real reviews. Protect
            your family — all for free.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <SearchBar />
        </div>
        <div className="mx-auto mt-4 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon /> Always free for buyers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon /> Licensed agents only
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon /> No spam calls
          </span>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      title: "Compare side-by-side",
      body: "Get quotes from 3+ licensed agents and compare carrier, coverage, and price in one place.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-7" />
        </svg>
      ),
    },
    {
      title: "Real reviews you can trust",
      body: "Every review is from a verified policyholder. No anonymous bots, no fake five-stars.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    },
    {
      title: "Independent agents, more options",
      body: "Most of our agents are independent — meaning they shop 10-30 carriers to find your best rate.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ];
  return (
    <section className="container-page py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-700">
              {it.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedAgents({ featured }: { featured: typeof AGENTS }) {
  return (
    <section className="bg-ink-50/50 py-16">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Featured agents this month
            </h2>
            <p className="mt-1 text-ink-500">
              Top-rated, verified, and ready to help today.
            </p>
          </div>
          <Link href="/agents" className="text-sm font-semibold text-brand-700 hover:underline">
            Browse all agents →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Tell us about you",
      body: "Quick 90-second form — age, ZIP, coverage goals. No SSN required.",
    },
    {
      n: "2",
      title: "Match with 3 agents",
      body: "We hand-pick licensed agents in your state who match your needs.",
    },
    {
      n: "3",
      title: "Compare & apply",
      body: "Talk to each, compare quotes, pick the one that feels right. No pressure.",
    },
  ];
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          How LifeInsuranceAgents.com works
        </h2>
        <p className="mt-2 text-ink-500">
          A simple, transparent way to find the right agent and policy.
        </p>
      </div>
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="card p-6">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {s.n}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 text-center">
        <Link href="/quote" className="btn-primary px-6 py-3">
          Get free quotes
        </Link>
      </div>
    </section>
  );
}

function PolicyExplorer() {
  const types = [
    {
      title: "Term Life",
      desc: "Affordable coverage for a fixed 10-30 year period. Best for parents and homeowners.",
      from: "$15/mo",
      href: "/agents?policy=Term",
    },
    {
      title: "Whole Life",
      desc: "Lifelong coverage that also builds tax-deferred cash value.",
      from: "$85/mo",
      href: "/agents?policy=Whole",
    },
    {
      title: "Final Expense",
      desc: "Small policies ($5k–$25k) to cover funeral costs. Often no exam.",
      from: "$25/mo",
      href: "/agents?policy=Final%20Expense",
    },
    {
      title: "No-Exam",
      desc: "Skip the medical exam. Approval in days, slightly higher rates.",
      from: "$22/mo",
      href: "/agents?policy=No-Exam",
    },
  ];
  return (
    <section className="bg-ink-50/50 py-16">
      <div className="container-page">
        <h2 className="text-2xl font-bold sm:text-3xl">Explore policy types</h2>
        <p className="mt-1 text-ink-500">
          Not sure what fits? Start with a type that matches your situation.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="card group flex flex-col gap-2 p-5 transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <h3 className="text-lg font-semibold group-hover:text-brand-700">
                {t.title}
              </h3>
              <p className="flex-1 text-sm text-ink-500">{t.desc}</p>
              <p className="text-sm font-semibold text-brand-700">
                From {t.from} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "I'd been putting off life insurance for years because it felt overwhelming. Found a great agent in 10 minutes — and locked in a 30-year policy the same week.",
      name: "Jordan T.",
      city: "Phoenix, AZ",
    },
    {
      quote:
        "Comparing three agents side-by-side saved me about $1,200/year on the same coverage. Wish I'd done this sooner.",
      name: "Aisha M.",
      city: "Charlotte, NC",
    },
    {
      quote:
        "My agent walked me through term vs. whole life without any pressure. Just honest advice. Highly recommend.",
      name: "Marco D.",
      city: "Brooklyn, NY",
    },
  ];
  return (
    <section className="container-page py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">What buyers are saying</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="card p-6">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-300" fill="currentColor">
              <path d="M7 7h4v4H7c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm9 0h4v4h-4c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z" />
            </svg>
            <blockquote className="mt-3 text-sm text-ink-700">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ink-900">
              {t.name}
              <span className="ml-2 font-normal text-ink-400">{t.city}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function LearnSection() {
  return (
    <section className="bg-ink-50/50 py-16">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Learn the basics</h2>
            <p className="mt-1 text-ink-500">
              Free guides from licensed experts. No jargon, no upsell.
            </p>
          </div>
          <Link href="/learn" className="text-sm font-semibold text-brand-700 hover:underline">
            All articles →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/learn/${a.slug}`}
              className="card group flex flex-col gap-2 p-5 transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="chip self-start bg-brand-50 text-brand-700">
                {a.category}
              </span>
              <h3 className="mt-1 text-base font-semibold text-ink-900 group-hover:text-brand-700">
                {a.title}
              </h3>
              <p className="line-clamp-3 text-sm text-ink-500">{a.excerpt}</p>
              <p className="mt-auto text-xs text-ink-400">
                {a.readMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-page py-20">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-10 text-white sm:p-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to protect what matters most?
            </h2>
            <p className="mt-2 max-w-md text-brand-100">
              Get matched with up to 3 licensed agents and compare quotes in
              under 24 hours. Free, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/quote" className="btn bg-white text-brand-700 hover:bg-brand-50">
              Get free quotes
            </Link>
            <Link
              href="/agents"
              className="btn bg-brand-600 text-white ring-1 ring-inset ring-brand-400 hover:bg-brand-500"
            >
              Browse agents
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-accent-500"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
