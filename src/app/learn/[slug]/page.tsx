import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES, getArticleBySlug } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getArticleBySlug(params.slug);
  if (!a) return { title: "Article not found" };
  return { title: a.title, description: a.excerpt };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="bg-white">
      <div className="container-page max-w-3xl py-12">
        <nav className="text-sm">
          <Link href="/learn" className="text-ink-500 hover:text-brand-700">
            ← All articles
          </Link>
        </nav>
        <header className="mt-6">
          <span className="chip bg-brand-50 text-brand-700">
            {article.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-ink-400">
            {article.readMinutes} min read
          </p>
        </header>
        <div className="prose mt-8 max-w-none">
          {article.body.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-ink-700">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
          <h3 className="text-lg font-semibold">Ready to talk to an agent?</h3>
          <p className="mt-1 text-sm text-ink-600">
            Get matched with up to 3 licensed agents in your state.
          </p>
          <Link href="/quote" className="btn-primary mt-4">
            Get free quotes
          </Link>
        </div>
      </div>

      <section className="border-t border-ink-100 bg-ink-50/40 py-12">
        <div className="container-page">
          <h2 className="text-xl font-semibold">Keep reading</h2>
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/learn/${r.slug}`}
                  className="card flex h-full flex-col gap-2 p-5 transition hover:shadow-lift"
                >
                  <span className="chip self-start bg-brand-50 text-brand-700">
                    {r.category}
                  </span>
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="line-clamp-2 text-sm text-ink-500">
                    {r.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
