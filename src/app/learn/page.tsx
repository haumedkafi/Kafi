import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learn about life insurance",
  description:
    "Plain-English guides on term, whole, no-exam, and final expense life insurance — written by licensed experts.",
};

export default function LearnPage() {
  const categories = Array.from(new Set(ARTICLES.map((a) => a.category)));
  return (
    <div className="bg-white">
      <section className="border-b border-ink-100 bg-ink-50/40">
        <div className="container-page py-12">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Life insurance, in plain English
          </h1>
          <p className="mt-2 max-w-2xl text-ink-500">
            Free guides from licensed experts. Whether you're just exploring or
            ready to apply, start here.
          </p>
        </div>
      </section>

      <div className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="chip bg-brand-50 text-brand-700">
              {c}
            </span>
          ))}
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/learn/${a.slug}`}
                className="card group flex h-full flex-col gap-3 p-6 transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="chip self-start bg-brand-50 text-brand-700">
                  {a.category}
                </span>
                <h2 className="text-lg font-semibold group-hover:text-brand-700">
                  {a.title}
                </h2>
                <p className="text-sm text-ink-500">{a.excerpt}</p>
                <p className="mt-auto text-xs text-ink-400">
                  {a.readMinutes} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
