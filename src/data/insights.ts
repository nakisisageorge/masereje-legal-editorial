export type Section = { heading: string; paragraphs?: string[]; list?: string[] };
export type Insight = {
  slug: string;
  title: string;
  category: "Property" | "Dispute resolution" | "Business";
  categorySlug: "property" | "dispute-resolution" | "business";
  summary: string;
  readingTime: string;
  image?: "documents" | "meeting";
  practice: string;
  sections: Section[];
};

export const CATEGORIES = [
  { slug: "property", label: "Property" },
  { slug: "dispute-resolution", label: "Dispute resolution" },
  { slug: "business", label: "Business" },
] as const;

export const INSIGHTS: Insight[] = [
  {
    slug: "organising-documents-before-a-property-discussion",
    title: "Organising your documents before a property discussion",
    category: "Property",
    categorySlug: "property",
    summary: "A practical way to gather, sort and describe property papers so a first conversation is focused and productive.",
    readingTime: "5 min read",
    image: "documents",
    practice: "land-and-property",
    sections: [
      { heading: "Why preparation helps", paragraphs: ["Property questions often depend on paperwork collected over many years, sometimes by different people. Arriving with documents in order lets a first conversation focus on your actual question rather than on working out what exists.", "You do not need to understand every document. The aim is simply to know what you have, where it came from and what might be missing."] },
      { heading: "Start with a simple inventory", paragraphs: ["Lay everything out and make a short list. For each item, note what it appears to be, its date if visible, and whether it is an original or a copy."], list: ["Agreements of sale or transfer", "Title or registration documents", "Receipts and records of payment", "Leases, tenancy agreements or rent records", "Survey plans, sketches or maps", "Letters or messages about the property"] },
      { heading: "Arrange by time", paragraphs: ["Placing documents in date order often reveals the story of the property — who held it, when it changed hands and where there are gaps. A one-page timeline in your own words is extremely useful."] },
      { heading: "Note people and questions", paragraphs: ["Write down the names of people connected with the property: previous owners, family members, neighbours, tenants or agents. Then list the questions you want answered. Keeping these separate from the documents makes the conversation easier to follow."] },
      { heading: "Keep originals safe", paragraphs: ["Bring copies to an initial meeting unless you are asked for originals. Store originals somewhere secure, and avoid writing on or altering them."] },
      { heading: "When making first contact", paragraphs: ["A short description of the property and your question is enough at first. Please avoid sending full documents or sensitive personal details until the firm has confirmed it can assist."] },
    ],
  },
  {
    slug: "preparing-for-an-initial-mediation-conversation",
    title: "Preparing for an initial mediation conversation",
    category: "Dispute resolution",
    categorySlug: "dispute-resolution",
    summary: "How to think through the issues, your priorities and the other side's perspective before a first mediation discussion.",
    readingTime: "5 min read",
    image: "meeting",
    practice: "mediation-and-dispute-resolution",
    sections: [
      { heading: "What a first conversation is for", paragraphs: ["An initial mediation conversation is usually about understanding — what the disagreement is, who is involved and whether a structured discussion could help. It is rarely the moment when everything is decided."] },
      { heading: "Describe the issue plainly", paragraphs: ["Try writing a short, neutral summary of the disagreement, as though explaining it to someone who knows neither party. Neutral language often helps clarify what the real issue is."] },
      { heading: "Separate positions from interests", paragraphs: ["A position is what you are asking for. An interest is why it matters to you. Listing your interests — security, fairness, time, a continuing relationship — can open more options than positions alone."], list: ["What matters most to me here?", "What could I live with?", "What might matter most to the other party?", "What happens if no agreement is reached?"] },
      { heading: "Gather relevant material", paragraphs: ["Collect the key documents and correspondence, ordered by date. Bring what is relevant rather than everything; you can always provide more later."] },
      { heading: "Consider the relationship", paragraphs: ["Many disagreements involve people who will continue to deal with each other — relatives, neighbours, business partners or colleagues. Thinking about the relationship you want afterwards can shape a more durable outcome."] },
      { heading: "Approach with an open mind", paragraphs: ["Mediation works best when each person is willing to listen, even where they disagree. Coming prepared, calm and clear about your priorities is often the most useful thing you can do."] },
    ],
  },
  {
    slug: "questions-before-choosing-a-business-name-or-trademark",
    title: "Questions to consider when choosing a business name or trademark",
    category: "Business",
    categorySlug: "business",
    summary: "A checklist of practical questions to think through before committing to a name, logo or brand.",
    readingTime: "4 min read",
    practice: "intellectual-property-and-trademarks",
    sections: [
      { heading: "A name is a long-term decision", paragraphs: ["Signage, packaging, websites and reputation all build around a name. Asking a few questions before committing can save significant cost and disruption later."] },
      { heading: "Is it distinctive?", paragraphs: ["Names that simply describe the product or service can be harder to set apart from competitors. A more distinctive name is often easier to recognise and to protect."] },
      { heading: "Is anyone else already using something similar?", paragraphs: ["Look at businesses in your sector and market, online and offline. Similar names in the same field may cause confusion for customers."], list: ["Search business listings and online marketplaces", "Check social media handles and domain names", "Note similar logos or colour schemes in your sector"] },
      { heading: "Where and how will it be used?", paragraphs: ["Think about the goods or services you offer now and those you may offer in future, and whether you plan to trade beyond your current location."] },
      { heading: "Who owns the logo and design?", paragraphs: ["If a designer or agency created your logo, consider what has been agreed about ownership and use. Keep a record of when the name and logo were first used."] },
      { heading: "Discuss before you invest", paragraphs: ["Before printing, registering domains or launching, it can help to discuss the name and your plans so that you understand the options available."] },
    ],
  },
];

export const getInsight = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
