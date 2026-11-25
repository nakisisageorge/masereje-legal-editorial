import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageHead } from "@/data/firm";

export const Route = createFileRoute("/website-disclaimer")({
  head: () => pageHead("Website Disclaimer", "The information on the Masereje & Co. Advocates website is general and is not legal advice.", "/website-disclaimer"),
  component: () => (
    <>
      <PageIntro eyebrow="Legal" title="Website Disclaimer" />
      <section className="container-site py-16"><div className="prose-site max-w-3xl">
        <h2 className="!mt-0">General information only</h2>
        <p>The content of this website is for general information. It is not legal advice and should not be relied on as a substitute for advice on your specific circumstances.</p>
        <h2>No lawyer–client relationship</h2>
        <p>Visiting this website, reading its content, or calling or sending a message to the firm does not create a lawyer–client relationship. A relationship is only formed once the firm has expressly agreed to act.</p>
        <h2>Services</h2>
        <p>Descriptions of practice areas are an overview. Please contact the firm to confirm whether a service is available and its scope for your matter.</p>
        <h2>External links</h2>
        <p>Links to other websites are provided for convenience; the firm is not responsible for their content.</p>
      </div></section>
    </>
  ),
});
