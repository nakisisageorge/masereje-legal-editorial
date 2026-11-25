export const FIRM = {
  name: "Masereje & Co. Advocates",
  addressLines: ["Suite 01, 2nd Floor, Airlines House", "Plot 6 Colville Street", "Kampala, Uganda"],
  postal: "P.O. Box 35370, Kampala, Uganda",
  phones: ["+256 414 253 695", "+256 772 505 687", "+256 704 282 014"],
  email: "masereje@gmail.com",
} as const;

export const FULL_ADDRESS = "Suite 01, 2nd Floor, Airlines House, Plot 6 Colville Street, Kampala, Uganda";

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
export const mailHref = `mailto:${FIRM.email}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;

export function pageHead(title: string, description: string, path: string, type = "website") {
  const full = path === "/" ? title : `${title} — ${FIRM.name}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
