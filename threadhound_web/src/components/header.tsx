import Link from "next/link";
import { site } from "@/config/site";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/reddit-data", label: "Reddit data" },
  { href: "/privacy", label: "Privacy" },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="py-2 text-lg font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="-mx-2 flex flex-wrap items-center text-sm sm:gap-x-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block px-2 py-2 text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
