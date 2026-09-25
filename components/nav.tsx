"use client";

import { identity } from "@/lib/profile";

const links = [
  { href: "#field", index: "1", label: "Field" },
  { href: "#projects", index: "2", label: "Projects" },
  { href: "#skills", index: "3", label: "Pins" },
  { href: "#about", index: "4", label: "About" },
  { href: "#contact", index: "5", label: "Contact" },
];

export function Nav() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ block: "start" });
    history.replaceState(null, "", href);
  }

  return (
    <nav aria-label="Section index">
      <a className="nav-id" href="#top" onClick={(e) => handleClick(e, "#top")}>
        <b>{identity.partNo}</b> Anmol Bhandohal · Rev {identity.rev}
      </a>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
              <i>§{link.index}</i>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a className="nav-cv" href={identity.resume} download>
            Résumé ↓
          </a>
        </li>
      </ul>
    </nav>
  );
}
