import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageHead } from "@/data/firm";
import { CATEGORIES, INSIGHTS, type Insight } from "@/data/insights";

type Search = { category?: Insight["categorySlug"] };

export const Route = createFileRoute("/insights/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const c = CATEGORIES.find((x) => x.slug === s["category"]);
    return c ? { category: c.slug } : {};
  },
  head: () => pageHead("Insights", "Practical, general reading from Masereje & Co. Advocates on property documents, mediation and choosing a business name.", "/insights"),
  component: Insights,
});

function Insights() {
  const { category } = Route.useSearch();
  const list = category ? INSIGHTS.filter((a) => a.categorySlug === category) : INSIGHTS;
  const pill = "rounded-full border px-4 py-1.5 text-sm font-medium";
  return (
    <>
      <PageIntro eyebrow="Insights" title="Practical reading"><p>General information to help you prepare. Not legal advice.</p></PageIntro>
      <section className="container-site py-14 md:py-20">
        <nav aria-label="Categories" className="flex flex-wrap gap-2">
          <Link to="/insights" search={{}} aria-current={!category ? "page" : undefined} className={`${pill} ${!category ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>All</Link>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/insights" search={{ category: c.slug }} aria-current={category === c.slug ? "page" : undefined} className={`${pill} ${category === c.slug ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{c.label}</Link>
          ))}
        </nav>
        <ul className="mt-12 border-t border-border">
          {list.map((a) => (
            <li key={a.slug} className="border-b border-border py-8">
              <p className="eyebrow">{a.category} · <span className="text-muted-foreground">{a.readingTime}</span></p>
              <h2 className="mt-3 text-3xl md:text-4xl"><Link to="/insights/$slug" params={{ slug: a.slug }} className="hover:text-primary">{a.title}</Link></h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{a.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
