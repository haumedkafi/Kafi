import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-500">
        That page doesn't exist or has moved. Let's get you back on track.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-secondary">
          Home
        </Link>
        <Link href="/agents" className="btn-primary">
          Browse agents
        </Link>
      </div>
    </div>
  );
}
