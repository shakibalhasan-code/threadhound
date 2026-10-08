import type { Metadata } from "next";
import { ContactLink, DocPage } from "@/components/doc-page";
import { openGraph } from "@/config/site";

const title = "How Threadhound uses Reddit data";

export const metadata: Metadata = {
  title: "How we use Reddit data",
  alternates: { canonical: "/reddit-data" },
  openGraph: { ...openGraph, title, url: "/reddit-data" },
};

const scopes = [
  { scope: "identity", why: "Show which Reddit account is connected" },
  {
    scope: "read",
    why: "Read public posts and comments in selected subreddits",
  },
  {
    scope: "submit",
    why: "Post a comment the user has reviewed and approved",
  },
  {
    scope: "history",
    why: "Read the user's own comments to enforce limits and show performance",
  },
];

export default function RedditDataPage() {
  return (
    <DocPage title={title}>
      <h2>What we access</h2>
      <ul>
        <li>
          Public posts and comments in subreddits the user has selected, and
          public search results for keywords the user has set.
        </li>
        <li>
          The connected user&apos;s own account identity and their own comment
          history, to enforce posting limits and show results.
        </li>
      </ul>

      <h2>Permissions requested (OAuth scopes)</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[22rem] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-surface">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Scope
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Why
              </th>
            </tr>
          </thead>
          <tbody>
            {scopes.map((row) => (
              <tr key={row.scope} className="border-t border-border">
                <th
                  scope="row"
                  className="px-4 py-3 align-top font-mono text-sm font-medium"
                >
                  {row.scope}
                </th>
                <td className="px-4 py-3 text-muted">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What we do with it</h2>
      <ul>
        <li>
          Score posts for relevance to the user&apos;s product category.
        </li>
        <li>Suggest a draft reply for the user to edit and approve.</li>
        <li>Post the approved comment from the user&apos;s own account.</li>
      </ul>

      <h2>What we store</h2>
      <ul>
        <li>
          Post ID, subreddit, title, a text excerpt, relevance score, and the
          user&apos;s drafts and posted comments.
        </li>
        <li>Encrypted OAuth tokens for the connected account.</li>
      </ul>

      <h2>What we never do</h2>
      <ul>
        <li>Post, vote, or message without the user&apos;s direct action.</li>
        <li>Sell, license, or share Reddit data with third parties.</li>
        <li>Use Reddit data to train AI or machine learning models.</li>
        <li>Collect or profile information about individual Reddit users.</li>
      </ul>

      <h2>Retention and deletion</h2>
      <ul>
        <li>
          Stored post data that is no longer needed is removed on a regular
          schedule.
        </li>
        <li>
          Content deleted on Reddit is removed from Threadhound when we become
          aware of it.
        </li>
        <li>
          Users can disconnect their Reddit account at any time. Disconnecting
          revokes access and deletes stored tokens.
        </li>
      </ul>

      <h2>AI processing</h2>
      <p>
        Post text is sent to an AI language model provider solely to score
        relevance and suggest a draft. It is processed under terms that do not
        permit the provider to train on it.
      </p>

      <h2>Compliance</h2>
      <p>
        Threadhound follows Reddit&apos;s Responsible Builder Policy, Developer
        Terms, and each subreddit&apos;s rules.
      </p>

      <p className="!mt-10">
        <strong>Contact:</strong> <ContactLink />
      </p>
    </DocPage>
  );
}
