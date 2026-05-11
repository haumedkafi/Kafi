import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-ink-500">
              The trusted marketplace to find licensed life insurance agents,
              compare quotes, and protect your family — for free.
            </p>
          </div>
          <FooterCol
            title="Buyers"
            links={[
              { href: "/agents", label: "Find an agent" },
              { href: "/quote", label: "Get free quotes" },
              { href: "/learn", label: "Learn the basics" },
              { href: "/how-it-works", label: "How it works" },
            ]}
          />
          <FooterCol
            title="Agents"
            links={[
              { href: "/for-agents", label: "List your profile" },
              { href: "/for-agents#pricing", label: "Pricing" },
              { href: "/for-agents#leads", label: "Get leads" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ]}
          />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-200 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} LifeInsuranceAgents.com. Quotes provided
            by licensed agents. Not an insurer.
          </p>
          <p>
            Need help? Email{" "}
            <a
              href="mailto:hello@lifeinsuranceagents.com"
              className="text-brand-700 hover:underline"
            >
              hello@lifeinsuranceagents.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-900">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-ink-500">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="hover:text-brand-700">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
