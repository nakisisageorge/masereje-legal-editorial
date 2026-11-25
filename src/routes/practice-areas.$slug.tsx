import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ContactPanel } from "@/components/site/ContactPanel";
import { pageHead } from "@/data/firm";
import { INSIGHTS } from "@/data/insights";
import { getPractice } from "@/data/practices";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const practice = getPractice(params.slug);
    if (!practice) throw notFound();
    return { practice };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageHead(loaderData.practice.title, loaderData.practice.summary, `/practice-areas/${params.slug}`, "article")
      : { meta: [{ title: "Page not found — Masereje & Co. Advocates" }, { name: "robots", content: "noindex" }] },
  component: PracticeDetail,
});

function PracticeDetail() {
  const { practice } = Route.useLoaderData();
  const related = practice.related.map(getPractice).filter((p) => p !== undefined);
  const reading = INSIGHTS.filter((a) => a.practice === practice.slug);
  return (
    <>
      <section className="border-b border-border">
        <div className="container-site py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/practice-areas" className="hover:text-primary hover:underline">Practice areas</Link> <span aria-hidden>/</span> <span aria-current="page">{practice.title}</span>
          </nav>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{practice.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{practice.summary}</p>
        </div>
      </section>
      <section className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-12">
        <div className="prose-site lg:col-span-7">
          {practice.intro.map((t) => (<p key={t}>{t}</p>))}
          <h2>Topics for discussion</h2>
          <ul>{practice.topics.map((t) => (<li key={t}>{t}</li>))}</ul>
          <h2>Questions to consider beforehand</h2>
          <ul>{practice.questions.map((t) => (<li key={t}>{t}</li>))}</ul>
          <p className="border-l-2 border-primary pl-5 text-muted-foreground">
            This page is a general overview, not legal advice. Please contact the firm to confirm whether it can assist with your matter and the scope of any service.
          </p>
        </div>
        <aside className="space-y-12 lg:col-span-4 lg:col-start-9">
          <div>
            <h2 className="eyebrow">Related areas</h2>
            <ul className="mt-4 border-t border-border">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-border">
                  <Link to="/practice-areas/$slug" params={{ slug: r.slug }} className="flex items-baseline justify-between gap-4 py-4 font-display text-xl text-ink hover:text-primary">
                    {r.title}<span aria-hidden className="text-primary">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {reading.length > 0 && (
            <div>
              <h2 className="eyebrow">Related reading</h2>
              {reading.map((a) => (
                <Link key={a.slug} to="/insights/$slug" params={{ slug: a.slug }} className="mt-4 block font-display text-xl text-ink hover:text-primary">{a.title}</Link>
              ))}
            </div>
          )}
        </aside>
      </section>
      <ContactPanel heading={`Discuss ${practice.title.toLowerCase()}`} />
    </>
  );
}
