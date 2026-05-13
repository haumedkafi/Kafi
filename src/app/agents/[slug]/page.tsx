import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { AGENTS, getAgentBySlug } from "@/lib/data";
import { AgentAvatar } from "@/components/AgentAvatar";
import { Stars } from "@/components/Stars";

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const agent = getAgentBySlug(params.slug);
  if (!agent) return { title: "Agent not found" };
  return {
    title: `${agent.name} — ${agent.city}, ${agent.state} Life Insurance Agent`,
    description: agent.bio,
  };
}

export default function AgentProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) notFound();

  return (
    <article className="bg-ink-50/40">
      <nav className="container-page pt-6 text-sm">
        <Link href="/agents" className="text-ink-500 hover:text-brand-700">
          ← Back to all agents
        </Link>
      </nav>

      <header className="container-page mt-4">
        <div className="card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center sm:p-8">
          <AgentAvatar name={agent.name} size={104} />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-bold">{agent.name}</h1>
              {agent.badges.includes("Top Rated") && (
                <span className="chip bg-amber-100 text-amber-800">★ Top Rated</span>
              )}
              {agent.badges.includes("Verified") && (
                <span className="chip bg-emerald-100 text-emerald-800">
                  ✓ Verified
                </span>
              )}
              {agent.badges.includes("Independent") && (
                <span className="chip bg-brand-50 text-brand-700">Independent</span>
              )}
            </div>
            <p className="mt-1 text-ink-500">
              {agent.title} · {agent.agency}
            </p>
            <p className="mt-1 text-sm text-ink-500">
              Based in {agent.city}, {agent.state} · {agent.yearsExperience} years
              experience
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Stars rating={agent.rating} />
              <span className="font-semibold">{agent.rating.toFixed(1)}</span>
              <span className="text-ink-400">
                ({agent.reviewCount} reviews)
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-xs text-ink-400">Quotes starting at</p>
            <p className="text-3xl font-bold">
              ${agent.startingMonthlyPremium}
              <span className="text-base font-medium text-ink-500">/mo</span>
            </p>
            <Link
              href={`/quote?agent=${agent.slug}`}
              className="btn-primary mt-2 px-5 py-3"
            >
              Get a free quote
            </Link>
            <p className="text-xs text-ink-400">{agent.responseTime}</p>
          </div>
        </div>
      </header>

      <div className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <Section title="About">
            <p className="text-ink-700">{agent.bio}</p>
          </Section>

          <Section title="Policy types offered">
            <div className="flex flex-wrap gap-2">
              {agent.policyTypes.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </Section>

          <Section title="Specialties">
            <div className="flex flex-wrap gap-2">
              {agent.specialties.map((s) => (
                <span key={s} className="chip bg-brand-50 text-brand-700">{s}</span>
              ))}
            </div>
          </Section>

          <Section title="Carriers represented">
            <ul className="grid grid-cols-2 gap-2 text-sm text-ink-700 sm:grid-cols-3">
              {agent.carriers.map((c) => (
                <li key={c} className="rounded-md bg-white px-3 py-2 ring-1 ring-ink-100">
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={`Reviews (${agent.reviewCount})`}>
            <div className="space-y-4">
              {agent.reviews.map((r) => (
                <div key={r.id} className="card p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold">{r.author}</p>
                    <span className="text-xs text-ink-400">
                      {new Date(r.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-ink-500">
                    <Stars rating={r.rating} size={14} />
                    <span>
                      {r.city}, {r.state}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-ink-700">{r.body}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <aside className="space-y-5">
          <div className="card p-5">
            <h3 className="text-sm font-semibold">Licensed in</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {agent.licensedStates.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {agent.languages.map((l) => (
                <span key={l} className="chip">{l}</span>
              ))}
            </div>
          </div>
          <div className="card border-2 border-brand-100 bg-brand-50/50 p-5">
            <h3 className="text-base font-semibold">
              Talk to {agent.name.split(" ")[0]} today
            </h3>
            <p className="mt-1 text-sm text-ink-600">
              Free, no-obligation quote. Usually responds within hours.
            </p>
            <Link
              href={`/quote?agent=${agent.slug}`}
              className="btn-primary mt-4 w-full"
            >
              Request a quote
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
