import { FIRM, mailHref, mapsHref, telHref } from "@/data/firm";

export function ContactPanel({ heading = "Start a conversation" }: { heading?: string }) {
  return (
    <section aria-labelledby="contact-panel-h" className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-panel-foreground-muted">Contact</p>
          <h2 id="contact-panel-h" className="mt-3 text-4xl leading-tight text-primary-foreground md:text-5xl">{heading}</h2>
          <p className="mt-5 max-w-md text-panel-foreground-muted">
            Call or email with a short, general description of your enquiry. Please do not send confidential or sensitive details in a first message.
          </p>
        </div>
        <div className="grid gap-6 text-base sm:grid-cols-2 md:col-span-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-panel-foreground-muted">Telephone</p>
            <ul className="mt-3 grid gap-1.5">
              {FIRM.phones.map((p) => (<li key={p}><a className="underline-offset-4 hover:underline" href={telHref(p)}>{p}</a></li>))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-panel-foreground-muted">Email</p>
            <a className="mt-3 block break-all underline-offset-4 hover:underline" href={mailHref}>{FIRM.email}</a>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-panel-foreground-muted">Office</p>
            <p className="mt-3">{FIRM.addressLines.join(", ")}</p>
            <a className="mt-3 inline-block font-semibold underline underline-offset-4" href={mapsHref} target="_blank" rel="noopener noreferrer">
              Get directions on Google Maps<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
