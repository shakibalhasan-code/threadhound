# Threadhound landing site: build brief

Build a small marketing and policy site for **Threadhound**, a product by **VensoftAI**. The site will be submitted to Reddit as part of an API access request, so the copy below is exact: do not add claims, features, or marketing language beyond what is written here.

## Goal

A credible, public, static site that explains what Threadhound does and how it uses Reddit data. No backend, no auth, no database, no Reddit API calls.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Fully static pages, deployable to Vercel with zero config
- No analytics or tracking scripts
- Responsive, accessible (semantic HTML, sufficient contrast, keyboard navigable), light and dark mode

## Config

Put these in one file (`src/config/site.ts`) and use them everywhere:

```ts
export const site = {
  name: "Threadhound",
  company: "VensoftAI",
  url: "https://threadhound.vercel.app", // TODO: replace with final URL
  contactEmail: "TODO@TODO",             // TODO: company email
  lastUpdated: "October 8, 2026",
};
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/reddit-data` | How Threadhound uses Reddit data |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

Shared header: logo text "Threadhound", links to How it works (anchor), Reddit data, Privacy.
Shared footer: "© 2026 VensoftAI", links to Reddit data, Privacy, Terms, contact email. Add the line: "Threadhound is not affiliated with or endorsed by Reddit, Inc."

## Design

- Clean, calm, trustworthy. Lots of whitespace, one accent colour, no stock photos, no gradients-everywhere look.
- Do not use Reddit's logo, mascot, or brand orange. Refer to Reddit in plain text only.
- Status badge near the hero: "In development".
- No pricing, no testimonials, no user counts, no signup form. One call to action: "Contact us" (mailto link).

---

## Page copy

### `/` Landing

**Hero**

- Heading: Find the Reddit conversations where you can actually help
- Subheading: Threadhound helps SaaS founders find relevant questions, write a useful reply, and post it themselves, with their affiliation disclosed.
- Button: Contact us

**How it works** (4 steps)

1. **Listen.** Threadhound watches a small set of subreddits you choose for questions related to your product category.
2. **Qualify.** Posts are scored for relevance, so you only see the ones where you have something useful to say.
3. **Draft.** Threadhound suggests a reply that answers the question first. You edit it in your own words.
4. **You post.** Nothing is posted until you review and approve it. Replies go out from your own Reddit account.

**Built to respect communities** (feature grid)

- **Human approved, always.** There is no automated or unattended posting. Every comment is reviewed and approved by a person.
- **Disclosed affiliation.** Drafts that mention your product include a clear statement that you are affiliated with it.
- **Subreddit rule checks.** Threadhound flags communities that do not allow self-promotion and blocks posting there.
- **Daily limits.** Per-account posting limits keep activity low-volume and prevent spam.
- **Helpful first.** A reply should be worth reading even without the product mention.

**What Threadhound does not do** (plain list)

- It does not post without human approval.
- It does not vote, send private messages, or follow users.
- It does not build profiles of Reddit users.
- It does not sell or share Reddit data.
- It does not use Reddit data to train AI models.

**Who it's for**

Solo founders and small SaaS teams who want to take part in relevant discussions honestly, without spending hours searching for them.

**Closing section**

- Heading: Questions?
- Text: Threadhound is built by VensoftAI. Reach us at {contactEmail}.

### `/reddit-data` How we use Reddit data

Title: How Threadhound uses Reddit data

**What we access**

- Public posts and comments in subreddits the user has selected, and public search results for keywords the user has set.
- The connected user's own account identity and their own comment history, to enforce posting limits and show results.

**Permissions requested (OAuth scopes)**

| Scope | Why |
|---|---|
| identity | Show which Reddit account is connected |
| read | Read public posts and comments in selected subreddits |
| submit | Post a comment the user has reviewed and approved |
| history | Read the user's own comments to enforce limits and show performance |

**What we do with it**

- Score posts for relevance to the user's product category.
- Suggest a draft reply for the user to edit and approve.
- Post the approved comment from the user's own account.

**What we store**

- Post ID, subreddit, title, a text excerpt, relevance score, and the user's drafts and posted comments.
- Encrypted OAuth tokens for the connected account.

**What we never do**

- Post, vote, or message without the user's direct action.
- Sell, license, or share Reddit data with third parties.
- Use Reddit data to train AI or machine learning models.
- Collect or profile information about individual Reddit users.

**Retention and deletion**

- Stored post data that is no longer needed is removed on a regular schedule.
- Content deleted on Reddit is removed from Threadhound when we become aware of it.
- Users can disconnect their Reddit account at any time. Disconnecting revokes access and deletes stored tokens.

**AI processing**

Post text is sent to an AI language model provider solely to score relevance and suggest a draft. It is processed under terms that do not permit the provider to train on it.

**Compliance**

Threadhound follows Reddit's Responsible Builder Policy, Developer Terms, and each subreddit's rules.

**Contact:** {contactEmail}

### `/privacy` Privacy policy

Write a short, plain-language privacy policy (no legalese padding) with these sections. Show "Last updated: {lastUpdated}" at the top.

1. **Who we are.** Threadhound is operated by VensoftAI. Contact: {contactEmail}.
2. **Information we collect.** Account details (email, name); the connected Reddit username and OAuth tokens; product information the user enters; drafts and posted comments; basic technical logs.
3. **How we use it.** To provide the service, enforce posting limits, and communicate with the user.
4. **Reddit data.** Summarise and link to `/reddit-data`.
5. **Sharing.** Only with service providers needed to run the product (hosting, database, AI model provider). No selling of personal data.
6. **Retention.** Kept while the account is active; deleted on request or account closure.
7. **Your choices.** Disconnect Reddit, request access or deletion by emailing {contactEmail}.
8. **Security.** Tokens are encrypted; access is restricted.
9. **Changes.** We will update this page and the date when the policy changes.

Add a visible HTML comment at the top: `<!-- Draft policy. Have it reviewed before public launch. -->`

### `/terms` Terms of use

Short, plain-language terms. Show "Last updated: {lastUpdated}". Sections:

1. **The service.** Threadhound is in development and provided as is.
2. **Your responsibilities.** You are responsible for everything posted from your Reddit account. You must follow Reddit's User Agreement and each subreddit's rules.
3. **Acceptable use.** No spam, no undisclosed promotion, no impersonation, no attempts to bypass posting limits or rule checks, no vote manipulation.
4. **Disclosure.** You must disclose your affiliation when mentioning your own product.
5. **Suspension.** We may suspend accounts that break these terms.
6. **No affiliation.** Threadhound is not affiliated with or endorsed by Reddit, Inc.
7. **Contact.** {contactEmail}.

Add the same draft-policy HTML comment as the privacy page.

---

## SEO and meta

- Title: "Threadhound: find Reddit conversations where you can help"
- Description: "Threadhound helps SaaS founders find relevant Reddit questions and write helpful, disclosed replies that they review and post themselves."
- Open Graph tags, a simple text-based favicon, `robots.txt` allowing all, `sitemap.xml` with the four routes.

## Hard rules for copy

- Never use the words "autopilot", "automated posting", "auto-comment", "bot", "growth hack", or "organic traffic" anywhere on the site.
- Never imply partnership with or endorsement by Reddit.
- Do not invent features, numbers, customers, or testimonials.

## Done when

- All four routes render and are linked from header or footer.
- `npm run build` passes with no errors.
- Lighthouse accessibility score is 95 or above.
- All `TODO` values in `site.ts` are listed in the README so they can be filled in before deploy.