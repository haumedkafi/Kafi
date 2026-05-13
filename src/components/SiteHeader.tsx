import Link from "next/link";
import { Logo } from "./Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-100 bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 md:flex">
            <Link href="/agents" className="hover:text-brand-700">
              Find an Agent
            </Link>
            <Link href="/quote" className="hover:text-brand-700">
              Get Quotes
            </Link>
            <Link href="/learn" className="hover:text-brand-700">
              Learn
            </Link>
            <Link href="/how-it-works" className="hover:text-brand-700">
              How it works
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/for-agents"
            className="hidden text-sm font-medium text-ink-700 hover:text-brand-700 sm:inline"
          >
            For agents
          </Link>
          <Link href="/quote" className="btn-primary">
            Get free quotes
          </Link>
        </div>
      </div>
    </header>
  );
}
