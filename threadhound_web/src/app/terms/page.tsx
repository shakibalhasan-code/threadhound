import type { Metadata } from "next";
import { ContactLink, DocPage } from "@/components/doc-page";
import { disclaimer, openGraph, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of use",
  alternates: { canonical: "/terms" },
  openGraph: { ...openGraph, title: `Terms of use | ${site.name}`, url: "/terms" },
};

export default function TermsPage() {
  return (
    <DocPage title="Terms of use" showLastUpdated draft>
      <h2>1. The service</h2>
      <p>{site.name} is in development and provided as is.</p>

      <h2>2. Your responsibilities</h2>
      <p>
        You are responsible for everything posted from your Reddit account.
        You must follow Reddit&apos;s User Agreement and each subreddit&apos;s
        rules.
      </p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>No spam.</li>
        <li>No undisclosed promotion.</li>
        <li>No impersonation.</li>
        <li>No attempts to bypass posting limits or rule checks.</li>
        <li>No vote manipulation.</li>
      </ul>

      <h2>4. Disclosure</h2>
      <p>
        You must disclose your affiliation when mentioning your own product.
      </p>

      <h2>5. Suspension</h2>
      <p>We may suspend accounts that break these terms.</p>

      <h2>6. No affiliation</h2>
      <p>{disclaimer}</p>

      <h2>7. Contact</h2>
      <p>
        <ContactLink />
      </p>
    </DocPage>
  );
}
