import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-2xl py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Get in touch</h1>
      <p className="mt-2 text-ink-500">
        Questions, feedback, or partnership ideas? We'd love to hear from you.
      </p>
      <form
        className="card mt-8 space-y-4 p-6"
        action="mailto:hello@lifeinsuranceagents.com"
        method="post"
      >
        <div>
          <label className="label">Name</label>
          <input className="input" required />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" type="email" required />
        </div>
        <div>
          <label className="label">Message</label>
          <textarea className="input min-h-[140px]" required />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send
        </button>
      </form>
      <p className="mt-6 text-sm text-ink-500">
        Or email us directly at{" "}
        <a className="text-brand-700 hover:underline" href="mailto:hello@lifeinsuranceagents.com">
          hello@lifeinsuranceagents.com
        </a>
        .
      </p>
    </div>
  );
}
