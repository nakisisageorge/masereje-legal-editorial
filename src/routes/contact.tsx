import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { FIRM, mailHref, mapsHref, pageHead, telHref } from "@/data/firm";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact", "Contact Masereje & Co. Advocates by phone or email. Suite 01, 2nd Floor, Airlines House, Plot 6 Colville Street, Kampala, Uganda.", "/contact"),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Get in touch"><p>Call or email the firm with a brief, general description of your enquiry. Please do not include confidential or sensitive information in a first message.</p></PageIntro>
      <section className="container-site grid gap-12 py-16 md:grid-cols-3 md:py-24">
        <div><h2 className="eyebrow">Telephone</h2><ul className="mt-4 grid gap-2 font-display text-2xl">{FIRM.phones.map((p) => (<li key={p}><a href={telHref(p)} className="hover:text-primary">{p}</a></li>))}</ul></div>
        <div><h2 className="eyebrow">Email</h2><a href={mailHref} className="mt-4 block break-all font-display text-2xl hover:text-primary">{FIRM.email}</a></div>
        <div>
          <h2 className="eyebrow">Office</h2>
          <address className="mt-4 not-italic leading-relaxed">{FIRM.addressLines.map((l) => (<span key={l} className="block">{l}</span>))}<span className="mt-3 block text-muted-foreground">{FIRM.postal}</span></address>
          <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="link-arrow mt-4">Directions on Google Maps →<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container-site py-12 text-panel-foreground-muted">
          Contacting the firm does not create a lawyer–client relationship. See the <Link to="/privacy-notice" className="underline text-primary-foreground">Privacy Notice</Link> and <Link to="/website-disclaimer" className="underline text-primary-foreground">Website Disclaimer</Link>.
        </div>
      </section>
    </>
  );
}
