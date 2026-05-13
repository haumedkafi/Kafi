"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar({
  variant = "hero",
  defaultQuery = "",
}: {
  variant?: "hero" | "compact";
  defaultQuery?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState(defaultQuery);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    router.push(`/agents?${params.toString()}`);
  }

  if (variant === "compact") {
    return (
      <form onSubmit={submit} className="flex w-full max-w-md gap-2">
        <input
          aria-label="ZIP code or city"
          className="input"
          placeholder="Enter ZIP, city, or agent name"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          Search
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-lift ring-1 ring-ink-100 sm:flex-row"
    >
      <div className="flex flex-1 items-center gap-3 rounded-xl border border-ink-100 px-4 py-2">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-ink-400"
        >
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <input
          aria-label="ZIP code, city, or agent name"
          className="w-full border-0 bg-transparent text-base text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-0"
          placeholder="ZIP code, city, or agent name"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary px-6 py-3 text-base">
        Find agents
      </button>
    </form>
  );
}
