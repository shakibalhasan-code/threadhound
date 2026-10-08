import { site } from "@/config/site";

const DRAFT_COMMENT =
  "<!-- Draft policy. Have it reviewed before public launch. -->";

type DocPageProps = {
  title: string;
  showLastUpdated?: boolean;
  draft?: boolean;
  children: React.ReactNode;
};

export function DocPage({
  title,
  showLastUpdated = false,
  draft = false,
  children,
}: DocPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
      {/* JSX comments are stripped, so the draft notice is injected as raw HTML. */}
      {draft && (
        <div hidden dangerouslySetInnerHTML={{ __html: DRAFT_COMMENT }} />
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h1>
      {showLastUpdated && (
        <p className="mt-3 text-sm text-muted">
          Last updated: {site.lastUpdated}
        </p>
      )}
      <div className="prose mt-8">{children}</div>
    </article>
  );
}

export function ContactLink() {
  return <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>;
}
