export type Practice = {
  slug: string;
  title: string;
  summary: string;
  intro: string[];
  topics: string[];
  questions: string[];
  related: string[];
};

export const PRACTICES: Practice[] = [
  {
    slug: "land-and-property",
    title: "Land and Property",
    summary: "Guidance around land transactions, title questions, leases and property-related documentation.",
    intro: [
      "Land and property matters often carry long histories: earlier transfers, family arrangements, unregistered interests and documents held in different places. A careful first conversation helps separate what is known from what still needs to be checked.",
      "The firm's background includes a professional grounding in property valuation, which can help frame practical questions about a property alongside the legal ones.",
    ],
    topics: ["Purchases and sales of land or buildings", "Leases and tenancy documentation", "Questions about title and registration records", "Boundary, access and occupancy concerns", "Property held within a family or estate"],
    questions: ["What documents do I already hold, and which are copies?", "Who else may have an interest in the property?", "What do I want to achieve, and by when?"],
    related: ["mediation-and-dispute-resolution", "family-law", "notarial-services"],
  },
  {
    slug: "corporate-and-commercial",
    title: "Corporate and Commercial",
    summary: "Support for businesses on formation, governance, agreements and everyday commercial documents.",
    intro: [
      "Businesses rely on clear documents: how the company is organised, who decides what, and what has been agreed with partners, suppliers and customers.",
      "An initial discussion usually focuses on the business's current structure, the decision at hand and the documents that already exist.",
    ],
    topics: ["Company formation and structure", "Shareholder and partnership arrangements", "Commercial contracts and terms of trade", "Governance records and resolutions", "Reviewing agreements before signature"],
    questions: ["How is the business currently set up and owned?", "Which agreements are already in place?", "Is there a deadline attached to the decision?"],
    related: ["intellectual-property-and-trademarks", "employment-and-labour", "technology-and-it-law"],
  },
  {
    slug: "intellectual-property-and-trademarks",
    title: "Intellectual Property and Trademarks",
    summary: "Conversations about brand names, trademarks and protecting the creative and commercial assets of a business.",
    intro: [
      "A name, logo or product identity can become one of a business's most valuable assets. Thinking about it early can avoid difficult changes later.",
      "Discussions typically begin with what the brand is, where it is used and what the owner hopes to protect.",
    ],
    topics: ["Choosing and clearing a business or brand name", "Trademark applications and records", "Ownership of logos, content and designs", "Licensing and permission to use a brand", "Concerns about similar names or marks"],
    questions: ["When and where did we first use the name?", "Who created the logo, and on what terms?", "Which goods or services will the mark cover?"],
    related: ["corporate-and-commercial", "technology-and-it-law", "mediation-and-dispute-resolution"],
  },
  {
    slug: "mediation-and-dispute-resolution",
    title: "Mediation and Dispute Resolution",
    summary: "Exploring structured, practical ways to resolve disagreements, including mediation.",
    intro: [
      "Not every disagreement needs to escalate. Mediation and negotiated outcomes can offer a measured route that preserves relationships and keeps decisions with the people involved.",
      "The firm's background includes mediation. A first conversation can help clarify the issues, the parties and what a workable outcome might look like.",
    ],
    topics: ["Preparing for a mediation conversation", "Commercial and contractual disagreements", "Property and boundary disputes", "Family and estate disagreements", "Understanding available options for resolution"],
    questions: ["Who are the parties, and what has already been tried?", "Which documents or correspondence relate to the issue?", "What outcome would I consider acceptable?"],
    related: ["land-and-property", "family-law", "employment-and-labour"],
  },
  {
    slug: "employment-and-labour",
    title: "Employment and Labour",
    summary: "Discussion of employment relationships, workplace documents and policies for employers and individuals.",
    intro: [
      "Clear employment documents and fair processes help both employers and employees understand where they stand.",
      "An initial discussion usually looks at the working relationship, the documents involved and the question that has arisen.",
    ],
    topics: ["Employment contracts and offer letters", "Workplace policies and handbooks", "Changes to terms of work", "Ending an employment relationship", "Workplace disagreements"],
    questions: ["What written terms exist for the role?", "What has happened so far, and when?", "Are there internal policies that apply?"],
    related: ["corporate-and-commercial", "mediation-and-dispute-resolution", "technology-and-it-law"],
  },
  {
    slug: "family-law",
    title: "Family Law",
    summary: "Sensitive, discreet conversations about family relationships, arrangements and related property.",
    intro: [
      "Family matters are personal and often time-sensitive. They deserve discretion and a calm, structured first conversation.",
      "Please share only general information when first making contact; details can be discussed once it is confirmed the firm can assist.",
    ],
    topics: ["Family arrangements and agreements", "Matters involving children", "Family property and homes", "Succession and estate questions", "Exploring mediation within families"],
    questions: ["Who is involved, and what is the immediate concern?", "Are there existing agreements or documents?", "Is there anything urgent to be aware of?"],
    related: ["land-and-property", "mediation-and-dispute-resolution", "notarial-services"],
  },
  {
    slug: "technology-and-it-law",
    title: "Technology and IT Law",
    summary: "Questions around technology agreements, digital services, software and data in a business setting.",
    intro: [
      "Technology now runs through almost every business, bringing agreements, responsibilities and risks that are worth understanding early.",
      "A first conversation generally covers the system or service involved, who provides it and what has been agreed.",
    ],
    topics: ["Software, licensing and service agreements", "Website and platform terms", "Handling of personal and business data", "Ownership of code and digital content", "Technology supplier relationships"],
    questions: ["Who supplies or builds the technology?", "What agreements or terms currently apply?", "What information does the system handle?"],
    related: ["intellectual-property-and-trademarks", "corporate-and-commercial", "employment-and-labour"],
  },
  {
    slug: "notarial-services",
    title: "Notarial Services",
    summary: "Enquiries about document certification and related formalities — please confirm availability first.",
    intro: [
      "Some documents need formal certification or witnessing, particularly when they will be used in another country or by an institution with specific requirements.",
      "Please contact the firm to confirm whether this service is currently available and what the receiving institution requires before arranging a visit.",
    ],
    topics: ["Certification of documents", "Witnessing of signatures", "Documents intended for use abroad", "Statutory declarations and affidavits", "Checking an institution's document requirements"],
    questions: ["Who will receive the document, and what do they require?", "Are originals and identification available?", "Is there a deadline for submission?"],
    related: ["land-and-property", "corporate-and-commercial", "family-law"],
  },
];

export const getPractice = (slug: string) => PRACTICES.find((p) => p.slug === slug);
