"use client";

const links = [
  { href: "#projects", index: "01", label: "Projects" },
  { href: "#about", index: "02", label: "About" },
  { href: "#skills", index: "03", label: "Capabilities" },
  { href: "#contact", index: "04", label: "Contact" },
];

export function Nav() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ block: "start" });
  }

  return (
    <nav aria-label="Section index">
      <span className="nav-id">
        <b>ANMOL · EE</b>
        &nbsp; DS-2029 · REV 4.0
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
