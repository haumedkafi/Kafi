import Link from "next/link";
import type { Agent } from "@/lib/types";
import { AgentAvatar } from "./AgentAvatar";
import { Stars } from "./Stars";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className="card flex flex-col gap-4 p-5 transition hover:shadow-lift">
      <div className="flex items-start gap-4">
        <AgentAvatar name={agent.name} size={64} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-lg font-semibold text-ink-900">
              <Link href={`/agents/${agent.slug}`} className="hover:underline">
                {agent.name}
              </Link>
            </h3>
            {agent.badges.includes("Top Rated") && (
              <span className="chip bg-amber-100 text-amber-800">★ Top Rated</span>
            )}
            {agent.badges.includes("Verified") && (
              <span className="chip bg-emerald-100 text-emerald-800">
                ✓ Verified
              </span>
            )}
          </div>
          <p className="truncate text-sm text-ink-500">
            {agent.title} · {agent.agency}
          </p>
          <p className="mt-0.5 truncate text-sm text-ink-500">
            {agent.city}, {agent.state} · Serves{" "}
            {agent.licensedStates.slice(0, 3).join(", ")}
            {agent.licensedStates.length > 3 ? "…" : ""}
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Stars rating={agent.rating} />
            <span className="font-semibold text-ink-900">{agent.rating.toFixed(1)}</span>
            <span className="text-ink-400">({agent.reviewCount})</span>
          </div>
        </div>
        <div className="hidden text-right sm:block">
          <p className="text-xs text-ink-400">Quotes from</p>
          <p className="text-xl font-bold text-ink-900">
            ${agent.startingMonthlyPremium}
            <span className="text-sm font-medium text-ink-500">/mo</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {agent.policyTypes.slice(0, 4).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
        {agent.specialties.slice(0, 2).map((s) => (
          <span key={s} className="chip bg-brand-50 text-brand-700">{s}</span>
        ))}
      </div>

      <p className="line-clamp-2 text-sm text-ink-600">{agent.bio}</p>

      <div className="flex items-center justify-between gap-3 border-t border-ink-100 pt-4 text-sm">
        <span className="text-ink-500">{agent.responseTime}</span>
        <div className="flex items-center gap-2">
          <Link
            href={`/agents/${agent.slug}`}
            className="btn-secondary px-3 py-2 text-sm"
          >
            View profile
          </Link>
          <Link
            href={`/quote?agent=${agent.slug}`}
            className="btn-primary px-3 py-2 text-sm"
          >
            Get quote
          </Link>
        </div>
      </div>
    </article>
  );
}
