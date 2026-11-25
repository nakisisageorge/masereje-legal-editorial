import { createFileRoute, Link } from "@tanstack/react-router";
import kampala from "@/assets/kampala-city-morning.jpg";
import { ContactPanel } from "@/components/site/ContactPanel";
import { pageHead } from "@/data/firm";
import { INSIGHTS } from "@/data/insights";
import { PRACTICES } from "@/data/practices";

export const Route = createFileRoute("/")({
  head: () => pageHead("Masereje & Co. Advocates — Law firm in Kampala, Uganda", "Masereje & Co. Advocates is a law firm based on Colville Street in Kampala, Uganda, offering guidance across property, commercial, dispute resolution and more.", "/"),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-site grid items-end gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 lg:pb-6">
            <p className="eyebrow">Advocates · Kampala</p>
            <h1 className="mt-5 text-[3.25rem] leading-[1.02] sm:text-7xl lg:text-[5.5rem]">
              Considered legal counsel, <em className="text-primary">from the heart of Kampala.</em>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Masereje &amp; Co. Advocates is a law firm based on Colville Street in Kampala, Uganda.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to="/contact" className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep">Contact the firm</Link>
              <Link to="/practice-areas" className="link-arrow">Explore practice areas →</Link>
            </div>
          </div>
          <figure className="lg:col-span-6">
            <img src={kampala} alt="Kampala's central business district at morning, office towers rising above green trees and hills" width={1600} height={1104} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="mt-3 text-xs text-muted-foreground">Central Kampala. Illustrative city view.</figcaption>
          </figure>
        </div>
      </section>

      <section className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Practice areas</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Areas we can discuss with you</h2>
          <p className="mt-5 text-muted-foreground">Contact the firm to confirm scope and availability for your particular matter.</p>
          <Link to="/practice-areas" className="link-arrow mt-6">All practice areas →</Link>
        </div>
        <ul className="border-t border-border lg:col-span-8">
          {PRACTICES.map((p, i) => (
            <li key={p.slug} className="border-b border-border">
              <Link to="/practice-areas/$slug" params={{ slug: p.slug }} className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-4 py-5">
                <span className="text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="block font-display text-2xl text-ink group-hover:text-primary md:text-3xl">{p.title}</span>
                  <span className="mt-1 hidden text-sm text-muted-foreground md:block">{p.summary}</span>
                </span>
                <span aria-hidden className="text-primary transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted">
        <div className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="eyebrow">The firm</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Grounded in property, mediation and practical judgement.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed md:col-span-6 md:col-start-7">
            <p>From offices at Airlines House on Colville Street, the firm works with individuals, families and businesses on questions that call for care, clarity and well-organised documentation.</p>
            <p className="text-muted-foreground">The firm's background includes property valuation and mediation — perspectives that inform how matters are approached from the first conversation.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              <Link to="/about" className="link-arrow">About the firm →</Link>
              <Link to="/team/richard-masereje" className="link-arrow">Richard Masereje →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Practical reading</h2>
          </div>
          <Link to="/insights" className="link-arrow">All insights →</Link>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {INSIGHTS.map((a) => (
            <li key={a.slug} className="border-t-2 border-ink pt-5">
              <p className="eyebrow">{a.category}</p>
              <h3 className="mt-3 text-2xl leading-snug">
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="hover:text-primary">{a.title}</Link>
              </h3>
              <p className="mt-3 text-muted-foreground">{a.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <ContactPanel />
    </>
  );
}
