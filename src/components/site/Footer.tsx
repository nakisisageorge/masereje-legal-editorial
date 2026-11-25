import { Link } from "@tanstack/react-router";
import logo from "@/assets/masereje-logo.png.asset.json";
import { FIRM, mailHref, mapsHref, telHref } from "@/data/firm";
import { PRACTICES } from "@/data/practices";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={logo.url} alt="Masereje & Co. Advocates" width={572} height={160} loading="lazy" className="h-auto w-[190px]" />
          <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
            {FIRM.addressLines.map((l) => (<span key={l} className="block">{l}</span>))}
            <span className="mt-2 block">{FIRM.postal}</span>
          </address>
        </div>
        <div className="md:col-span-4">
          <h2 className="eyebrow">Practice areas</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {PRACTICES.map((p) => (
              <li key={p.slug}>
                <Link to="/practice-areas/$slug" params={{ slug: p.slug }} className="text-foreground hover:text-primary hover:underline">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-4 md:grid-cols-1">
          <div>
            <h2 className="eyebrow">Contact</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {FIRM.phones.map((p) => (<li key={p}><a href={telHref(p)} className="hover:text-primary hover:underline">{p}</a></li>))}
              <li><a href={mailHref} className="break-all hover:text-primary hover:underline">{FIRM.email}</a></li>
              <li><a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">Directions (Google Maps)</a></li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Firm</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              <li><Link to="/about" className="hover:text-primary hover:underline">About</Link></li>
              <li><Link to="/team" className="hover:text-primary hover:underline">Team</Link></li>
              <li><Link to="/insights" search={{}} className="hover:text-primary hover:underline">Insights</Link></li>
              <li><Link to="/privacy-notice" className="hover:text-primary hover:underline">Privacy Notice</Link></li>
              <li><Link to="/website-disclaimer" className="hover:text-primary hover:underline">Website Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {FIRM.name}. Kampala, Uganda.</p>
          <p>Information on this website is general and is not legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
