import { createFileRoute, Link } from "@tanstack/react-router";
import meeting from "@/assets/quiet-meeting-room.jpg";
import { ContactPanel } from "@/components/site/ContactPanel";
import { PageIntro } from "@/components/site/PageIntro";
import { pageHead } from "@/data/firm";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About the firm", "About Masereje & Co. Advocates, a law firm at Plot 6 Colville Street, Kampala, and its approach to property, commercial and dispute resolution matters.", "/about"),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="A Kampala firm on Colville Street.">
        <p>Masereje &amp; Co. Advocates is a law firm based in Kampala, Uganda.</p>
      </PageIntro>
      <section className="container-site grid gap-12 py-20 lg:grid-cols-12">
        <div className="prose-site lg:col-span-6">
          <h2 className="!mt-0">Where the firm works</h2>
          <p>Public records place the firm at Plot 6 Colville Street, Kampala, by 2014. Its office is at Suite 01, 2nd Floor, Airlines House, in the city's central business district.</p>
          <h2>How the firm approaches matters</h2>
          <p>Many legal questions turn on good information: who is involved, what has been agreed and which documents exist. The firm aims to begin each conversation by understanding the situation clearly and setting out options in plain language.</p>
          <p>Its background in property valuation and mediation informs a practical, measured approach — particularly where land, families or ongoing business relationships are involved.</p>
          <h2>Before you get in touch</h2>
          <p>Please share only a short, general description when first contacting the firm. The firm will confirm whether it is able to assist before any details are discussed.</p>
          <p className="flex flex-wrap gap-x-8 gap-y-3 !no-underline">
            <Link to="/practice-areas" className="link-arrow !no-underline">Practice areas →</Link>
            <Link to="/team" className="link-arrow !no-underline">Team →</Link>
          </p>
        </div>
        <figure className="lg:col-span-5 lg:col-start-8">
          <img src={meeting} alt="" width={1408} height={912} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </figure>
      </section>
      <ContactPanel />
    </>
  );
}
