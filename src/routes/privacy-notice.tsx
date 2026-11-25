import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { FIRM, pageHead } from "@/data/firm";

export const Route = createFileRoute("/privacy-notice")({
  head: () => pageHead("Privacy Notice", "How Masereje & Co. Advocates handles information when you contact the firm by phone or email.", "/privacy-notice"),
  component: () => (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Notice" />
      <section className="container-site py-16"><div className="prose-site max-w-3xl">
        <h2 className="!mt-0">What this website collects</h2>
        <p>This website has no contact form or account system and does not ask you to submit information through it.</p>
        <h2>When you contact the firm</h2>
        <p>If you call or email {FIRM.name}, the firm receives the information you choose to share, such as your name, contact details and a description of your enquiry. It uses this to respond and to consider whether it can assist.</p>
        <p>Please keep your first message brief and general. Do not send sensitive personal information, confidential documents or details of a matter until the firm has confirmed it can assist.</p>
        <h2>Third-party services</h2>
        <p>Email is delivered through your provider and the firm's email provider. The directions link opens Google Maps, which is governed by Google's own privacy terms.</p>
        <h2>Questions</h2>
        <p>For questions about this notice, contact the firm at {FIRM.email} or by post at {FIRM.postal}.</p>
      </div></section>
    </>
  ),
});
