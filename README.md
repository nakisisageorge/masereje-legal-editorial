# Masereje & Co. Advocates — website redevelopment draft

Private preview build. Content is drafted from public research and **must be reviewed and approved by the firm before go-live**. Nothing in this checklist appears on the public site.

## Approved-content checklist (draft only)

- [ ] Firm approval of the redevelopment and all visitor-facing copy.
- [ ] Confirm current firm name, practitioners and team roles (only Richard Masereje is profiled; no other team members are shown).
- [ ] Richard Masereje profile: confirm current title and practising status, Bachelor of Laws (Makerere University), Diploma in Legal Practice (Law Development Centre), property valuation and mediation background, and the historical reference to the October 2023 CASLE programme. Supply an authorised portrait if one should replace the initials block.
- [ ] Practice areas (8): confirm each service is offered, its scope, and wording. Notarial Services in particular must not go live unless the relevant authorisation is confirmed.
- [ ] Contact details: Suite 01, 2nd Floor, Airlines House, Plot 6 Colville Street, Kampala; P.O. Box 35370; phones +256 414 253 695, +256 772 505 687, +256 704 282 014; email masereje@gmail.com (taken from a public directory — confirm or replace with a firm domain address).
- [ ] Office directions: Google Maps link searches the written address only — verify it resolves to the correct building.
- [ ] Business hours: none are shown; add only if the firm supplies them.
- [ ] Privacy Notice and Website Disclaimer: legal review of both drafts.
- [ ] Insights articles (3): firm review; add an author only with approval.
- [ ] Images: city, desk and meeting-room photographs are AI-generated atmospheric images, not the firm's office or people. Replace or approve.
- [ ] Logo: confirm the supplied PNG (572×160) is the current approved mark.

## Publish checklist (later)

- [ ] Remove the sitewide `noindex, nofollow` robots meta in `src/routes/__root.tsx` and update `public/robots.txt` to allow crawling.
- [ ] Choose the canonical domain, then add canonical links and absolute `og:url` per page and a sitemap.
- [ ] Add a share image (1200×630) if desired.
- [ ] Re-run tests and a responsive pass (375 / 768 / 1440).
