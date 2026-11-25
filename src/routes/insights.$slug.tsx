import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import documents from "@/assets/organised-documents-desk.jpg";
import meeting from "@/assets/quiet-meeting-room.jpg";
import { ContactPanel } from "@/components/site/ContactPanel";
import { pageHead } from "@/data/firm";
import { getInsight, INSIGHTS } from "@/data/insights";
import { getPractice } from "@/data/practices";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getInsight(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) =>
    loaderData ? pageHead(loaderData.article.title, loaderData.article.summary, `/insights/${params.slug}`, "article") : { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] },
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData();
  const img = article.image === "documents" ? documents : article.image === "meeting" ? meeting : null;
  const practice = getPractice(article.practice);
  const others = INSIGHTS.filter((a) => a.slug !== article.slug);
  return (
    <>
      <article className="container-site py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/insights" search={{}} className="hover:text-primary hover:underline">Insights</Link> / <Link to="/insights" search={{ category: article.categorySlug }} className="hover:text-primary hover:underline">{article.category}</Link>
          </nav>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl">{article.title}</h1>
          <p className="mt-6 text-xl text-muted-foreground">{article.summary}</p>
          <p className="mt-4 text-sm text-muted-foreground">{article.readingTime}</p>
        </div>
        {img && <img src={img} alt="" width={1408} height={912} className="mx-auto mt-12 aspect-[16/8] w-full max-w-5xl object-cover" />}
        <div className="prose-site mx-auto mt-12 max-w-3xl">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((p) => (<p key={p}>{p}</p>))}
              {s.list && <ul>{s.list.map((l) => (<li key={l}>{l}</li>))}</ul>}
            </section>
          ))}
          <p className="border-l-2 border-primary pl-5 text-muted-foreground">This article is general information only and is not legal advice.</p>
          {practice && <p>Related practice area: <Link to="/practice-areas/$slug" params={{ slug: practice.slug }}>{practice.title}</Link></p>}
        </div>
      </article>
      <section className="border-t border-border">
        <div className="container-site py-14">
          <h2 className="eyebrow">Related reading</h2>
          <ul className="mt-6 grid gap-8 md:grid-cols-2">
            {others.map((a) => (
              <li key={a.slug} className="border-t-2 border-ink pt-4">
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="font-display text-2xl text-ink hover:text-primary">{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
