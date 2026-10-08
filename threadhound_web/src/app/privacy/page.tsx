import type { Metadata } from "next";
import Link from "next/link";
import { ContactLink, DocPage } from "@/components/doc-page";
import { openGraph, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
  openGraph: { ...openGraph, title: `Privacy policy | ${site.name}`, url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <DocPage title="Privacy policy" showLastUpdated draft>
      <h2>1. Who we are</h2>
      <p>
        {site.name} is operated by {site.company}. Contact: <ContactLink />.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>Account details (email, name).</li>
        <li>The connected Reddit username and OAuth tokens.</li>
        <li>Product information you enter.</li>
        <li>Drafts and posted comments.</li>
        <li>Basic technical logs.</li>
      </ul>

      <h2>3. How we use it</h2>
      <p>
        To provide the service, enforce posting limits, and communicate with
        you.
      </p>

      <h2>4. Reddit data</h2>
      <p>
        {site.name} reads public posts and comments in the subreddits you
        select, scores them for relevance, and suggests a draft reply for you
        to edit and approve. We do not sell or share Reddit data, use it to
        train AI models, or build profiles of Reddit users. The full details
        are on the{" "}
        <Link href="/reddit-data">How {site.name} uses Reddit data</Link> page.
      </p>

      <h2>5. Sharing</h2>
      <p>
        We share information only with the service providers needed to run the
        product (hosting, database, AI model provider). We do not sell
        personal data.
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep your information while your account is active. It is deleted
        on request or when the account is closed.
      </p>

      <h2>7. Your choices</h2>
      <p>
        You can disconnect your Reddit account, and you can request access to
        or deletion of your information by emailing <ContactLink />.
      </p>

      <h2>8. Security</h2>
      <p>Tokens are encrypted, and access is restricted.</p>

      <h2>9. Changes</h2>
      <p>
        We will update this page and the date above when the policy changes.
      </p>
    </DocPage>
  );
}
