"use client";

import { useLenis } from "@/lib/lenis-context";

const links = [
  { href: "#projects", index: "01", label: "Projects" },
  { href: "#about", index: "02", label: "About" },
  { href: "#skills", index: "03", label: "Capabilities" },
  { href: "#contact", index: "04", label: "Contact" },
];

export function Nav() {
  const lenis = useLenis();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -24 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav aria-label="Section index">
      <span className="nav-id">
        <b>ANMOL · EE</b>
        &nbsp; DS-2029 · REV 3.0
      </span>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
              <i>{link.index}</i>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
