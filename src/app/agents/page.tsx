import type { Metadata } from "next";
import { AgentCard } from "@/components/AgentCard";
import { SearchBar } from "@/components/SearchBar";
import {
  filterAgents,
  LANGUAGES,
  POLICY_TYPES,
  SPECIALTIES,
  US_STATES,
} from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browse licensed life insurance agents",
  description:
    "Search and filter thousands of licensed life insurance agents by state, policy type, language, and specialty.",
};

type SearchParams = {
  q?: string;
  state?: string;
  policy?: string;
  specialty?: string;
  language?: string;
  sort?: "rating" | "experience" | "price";
};

export default function AgentsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const agents = filterAgents({
    query: searchParams.q,
    state: searchParams.state,
    policyType: searchParams.policy,
    specialty: searchParams.specialty,
    language: searchParams.language,
    sort: searchParams.sort,
  });

  return (
    <div className="bg-ink-50/50">
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page py-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Find a life insurance agent
          </h1>
          <p className="mt-1 text-ink-500">
            {agents.length} licensed agents
            {searchParams.q ? ` matching "${searchParams.q}"` : ""}
            {searchParams.state ? ` in ${searchParams.state}` : ""}.
          </p>
          <div className="mt-5 max-w-2xl">
            <SearchBar variant="compact" defaultQuery={searchParams.q ?? ""} />
          </div>
        </div>
      </section>

      <div className="container-page grid gap-8 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="card h-fit p-5 lg:sticky lg:top-20">
          <form className="space-y-5" action="/agents" method="get">
            {searchParams.q && (
              <input type="hidden" name="q" defaultValue={searchParams.q} />
            )}
            <FilterSelect
              label="State"
              name="state"
              defaultValue={searchParams.state}
              options={US_STATES.map((s) => ({ value: s, label: s }))}
            />
            <FilterSelect
              label="Policy type"
              name="policy"
              defaultValue={searchParams.policy}
              options={POLICY_TYPES.map((p) => ({ value: p, label: p }))}
            />
            <FilterSelect
              label="Specialty"
              name="specialty"
              defaultValue={searchParams.specialty}
              options={SPECIALTIES.map((s) => ({ value: s, label: s }))}
            />
            <FilterSelect
              label="Language"
              name="language"
              defaultValue={searchParams.language}
              options={LANGUAGES.map((l) => ({ value: l, label: l }))}
            />
            <FilterSelect
              label="Sort by"
              name="sort"
              defaultValue={searchParams.sort ?? "rating"}
              options={[
                { value: "rating", label: "Top rated" },
                { value: "experience", label: "Most experienced" },
                { value: "price", label: "Lowest starting price" },
              ]}
              clearable={false}
            />
            <div className="flex gap-2">
              <button type="submit" className="btn-primary flex-1">
                Apply
              </button>
              <Link href="/agents" className="btn-secondary">
                Reset
              </Link>
            </div>
          </form>
        </aside>

        <section>
          {agents.length === 0 ? (
            <div className="card p-10 text-center">
              <h2 className="text-lg font-semibold">No agents match your filters</h2>
              <p className="mt-2 text-sm text-ink-500">
                Try removing a filter or expanding your search area.
              </p>
              <Link href="/agents" className="btn-primary mt-5">
                Clear filters
              </Link>
            </div>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
              {agents.map((a) => (
                <li key={a.id}>
                  <AgentCard agent={a} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  name,
  defaultValue,
  options,
  clearable = true,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  clearable?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue ?? ""}
        className="input"
      >
        {clearable && <option value="">Any</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
