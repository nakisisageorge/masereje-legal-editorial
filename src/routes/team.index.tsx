import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactPanel } from "@/components/site/ContactPanel";
import { PageIntro } from "@/components/site/PageIntro";
import { pageHead } from "@/data/firm";

export const Route = createFileRoute("/team/")({
  head: () => pageHead("Team", "The people of Masereje & Co. Advocates, Kampala.", "/team"),
  component: Team,
});

function Team() {
  return (
    <>
      <PageIntro eyebrow="Team" title="People" />
      <section className="container-site py-16 md:py-24">
        <Link to="/team/richard-masereje" className="group grid max-w-3xl grid-cols-[6rem_minmax(0,1fr)] items-center gap-6 border-y border-border py-8 sm:grid-cols-[8rem_minmax(0,1fr)]">
          <span aria-hidden className="grid aspect-square place-items-center bg-primary font-display text-4xl text-primary-foreground sm:text-5xl">RM</span>
          <span className="min-w-0">
            <span className="block font-display text-3xl text-ink group-hover:text-primary md:text-4xl">Richard Masereje</span>
            <span className="mt-2 block text-muted-foreground">LLB (Makerere University) · Dip. Legal Practice (LDC)</span>
            <span className="link-arrow mt-3">View profile →</span>
          </span>
        </Link>
      </section>
      <ContactPanel />
    </>
  );
}
