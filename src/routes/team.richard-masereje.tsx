import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactPanel } from "@/components/site/ContactPanel";
import { pageHead } from "@/data/firm";

export const Route = createFileRoute("/team/richard-masereje")({
  head: () => pageHead("Richard Masereje", "Profile of Richard Masereje of Masereje & Co. Advocates: Bachelor of Laws (Makerere University), Diploma in Legal Practice (Law Development Centre), background in property valuation and mediation.", "/team/richard-masereje", "profile"),
  component: Profile,
});

function Profile() {
  return (
    <>
      <section className="container-site grid gap-12 py-14 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div aria-hidden className="grid aspect-[4/5] place-items-center bg-primary font-display text-8xl text-primary-foreground">RM</div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/team" className="hover:text-primary hover:underline">Team</Link> / <span aria-current="page">Richard Masereje</span></nav>
          <h1 className="mt-6 text-5xl md:text-7xl">Richard Masereje</h1>
          <div className="prose-site mt-8">
            <p>Richard Masereje is associated with Masereje &amp; Co. Advocates in Kampala. A Continuing Legal Education programme of the Commonwealth Association of Surveying and Land Economy (CASLE) in October 2023 identified him as the firm's Managing Partner.</p>
            <p>His professional background includes property valuation and mediation, perspectives relevant to land, property and dispute resolution matters.</p>
            <h2>Education</h2>
            <ul>
              <li>Bachelor of Laws — Makerere University</li>
              <li>Diploma in Legal Practice — Law Development Centre</li>
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/practice-areas/$slug" params={{ slug: "land-and-property" }} className="link-arrow">Land and Property →</Link>
            <Link to="/practice-areas/$slug" params={{ slug: "mediation-and-dispute-resolution" }} className="link-arrow">Mediation →</Link>
          </div>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
