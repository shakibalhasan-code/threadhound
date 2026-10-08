import { site } from "@/config/site";

const steps = [
  {
    title: "Listen.",
    body: "Threadhound watches a small set of subreddits you choose for questions related to your product category.",
  },
  {
    title: "Qualify.",
    body: "Posts are scored for relevance, so you only see the ones where you have something useful to say.",
  },
  {
    title: "Draft.",
    body: "Threadhound suggests a reply that answers the question first. You edit it in your own words.",
  },
  {
    title: "You post.",
    body: "Nothing is posted until you review and approve it. Replies go out from your own Reddit account.",
  },
];

const principles = [
  {
    title: "Human approved, always.",
    body: "There is no automated or unattended posting. Every comment is reviewed and approved by a person.",
  },
  {
    title: "Disclosed affiliation.",
    body: "Drafts that mention your product include a clear statement that you are affiliated with it.",
  },
  {
    title: "Subreddit rule checks.",
    body: "Threadhound flags communities that do not allow self-promotion and blocks posting there.",
  },
  {
    title: "Daily limits.",
    body: "Per-account posting limits keep activity low-volume and prevent spam.",
  },
  {
    title: "Helpful first.",
    body: "A reply should be worth reading even without the product mention.",
  },
];

const doesNot = [
  "It does not post without human approval.",
  "It does not vote, send private messages, or follow users.",
  "It does not build profiles of Reddit users.",
  "It does not sell or share Reddit data.",
  "It does not use Reddit data to train AI models.",
];

const section = "mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20";
const sectionHeading =
  "text-2xl font-semibold tracking-tight text-balance sm:text-3xl";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pb-14 pt-14 sm:px-8 sm:pb-24 sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-muted">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          In development
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Find the Reddit conversations where you can actually help
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
          Threadhound helps SaaS founders find relevant questions, write a
          useful reply, and post it themselves, with their affiliation
          disclosed.
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 text-base font-semibold text-accent-contrast transition-opacity hover:opacity-90 sm:w-auto"
        >
          Contact us
        </a>
      </section>

      <div className="border-y border-border bg-surface">
        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className={`${section} scroll-mt-4`}
        >
          <h2 id="how-it-works-heading" className={sectionHeading}>
            How it works
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent ring-1 ring-inset ring-border"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section aria-labelledby="respect-heading" className={section}>
        <h2 id="respect-heading" className={sectionHeading}>
          Built to respect communities
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-border p-6"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-y border-border bg-surface">
        <section aria-labelledby="does-not-heading" className={section}>
          <h2 id="does-not-heading" className={sectionHeading}>
            What Threadhound does not do
          </h2>
          <ul className="mt-8 max-w-2xl space-y-3 text-lg leading-relaxed text-muted">
            {doesNot.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-3 h-0.5 w-4 shrink-0 rounded bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section aria-labelledby="who-heading" className={section}>
        <h2 id="who-heading" className={sectionHeading}>
          Who it&apos;s for
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          Solo founders and small SaaS teams who want to take part in relevant
          discussions honestly, without spending hours searching for them.
        </p>
      </section>

      <div className="border-t border-border bg-surface">
        <section aria-labelledby="questions-heading" className={section}>
          <h2 id="questions-heading" className={sectionHeading}>
            Questions?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Threadhound is built by {site.company}. Reach us at{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="break-all text-accent underline underline-offset-4"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
