import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactPanel } from "@/components/site/ContactPanel";
import { PageIntro } from "@/components/site/PageIntro";
import { pageHead } from "@/data/firm";
import { PRACTICES } from "@/data/practices";

export const Route = createFileRoute("/practice-areas/")({
  head: () => pageHead("Practice areas", "Practice areas at Masereje & Co. Advocates, Kampala: land and property, corporate, intellectual property, mediation, employment, family, technology and notarial services.", "/practice-areas"),
  component: Practices,
});

function Practices() {
  return (
    <>
      <PageIntro eyebrow="Practice areas" title="Areas of practice">
        <p>An overview of the matters the firm can discuss. Please contact the firm to confirm the scope and availability of any service for your situation.</p>
      </PageIntro>
      <section className="container-site py-16 md:py-24">
        <ul className="grid border-t border-border md:grid-cols-2">
          {PRACTICES.map((p, i) => (
            <li key={p.slug} className="border-b border-border md:odd:border-r md:odd:pr-10 md:even:pl-10">
              <Link to="/practice-areas/$slug" params={{ slug: p.slug }} className="group block py-8">
                <span className="text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-3xl group-hover:text-primary">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.summary}</p>
                <span className="link-arrow mt-4">Read more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactPanel />
    </>
  );
}
