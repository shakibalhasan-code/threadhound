import Link from "next/link";
import { disclaimer, site } from "@/config/site";

const links = [
  { href: "/reddit-data", label: "Reddit data" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-10 text-sm text-muted sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.company}</p>
          <nav aria-label="Footer">
            <ul className="-mx-2 flex flex-wrap items-center gap-x-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block px-2 py-2 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="inline-block break-all px-2 py-2 transition-colors hover:text-foreground"
                >
                  {site.contactEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-6">{disclaimer}</p>
      </div>
    </footer>
  );
}
