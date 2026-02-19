import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-4 font-mono text-sm text-accent">404</p>
        <h1 className="mb-4 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-light">
          Sidan hittades inte
        </h1>
        <p className="mb-8 text-muted">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
        <Link
          href="/"
          className="bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </section>
  );
}
