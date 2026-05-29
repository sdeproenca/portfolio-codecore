"use client";

import { useState } from "react";
import { Panel } from "./Panel";

const NAV_ITEMS = [
  { idx: "01", node: "whoami",        ptr: "IDENTITY / BIO",  href: "#hero" },
  { idx: "02", node: "runtime.log",   ptr: "CAREER TIMELINE", href: "#timeline" },
  { idx: "03", node: "about.md",      ptr: "BACKGROUND",      href: "#about" },
  { idx: "04", node: "contact.exe",   ptr: "OPEN CHANNEL",    href: "#contact" },
  { idx: "05", node: "curriculum.pdf",ptr: "DOWNLOAD CV",     href: "/Sofi_de_Proenca_CV.pdf", newTab: true },
];

export function MenuNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Panel title="MENU.NAV" trailing="// INDEX" className="h-full">
      <nav aria-label="Site navigation">
        {/* Column headers */}
        <div className="mb-2 grid grid-cols-[2rem_1fr_auto] gap-x-3 border-b border-rule pb-2 text-[9px] uppercase tracking-[0.18em] text-bone-faint">
          <span>IDX</span>
          <span>NODE</span>
          <span>PTR</span>
        </div>

        {/* Rows */}
        <ul className="divide-y divide-rule/40">
          {NAV_ITEMS.map((item) => {
            const active = hovered === item.idx;
            return (
              <li key={item.idx}>
                <a
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHovered(item.idx)}
                  onMouseLeave={() => setHovered(null)}
                  className={`
                    grid grid-cols-[2rem_1fr_auto] gap-x-3 items-center
                    px-1.5 py-2.5 text-[11px] transition-colors duration-100
                    ${active
                      ? "bg-accent/10 text-accent"
                      : "text-bone-dim hover:text-accent"}
                  `}
                >
                  <span className={`tracking-[0.1em] ${active ? "text-accent/60" : "text-bone-faint"}`}>
                    {item.idx}
                  </span>
                  <span className={`font-medium ${active ? "text-accent" : "text-bone"}`}>
                    {item.node}
                  </span>
                  <span className={`flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] ${active ? "text-accent" : "text-bone-faint"}`}>
                    {item.ptr}
                    <span className={`transition-transform duration-100 ${active ? "translate-x-0.5" : ""}`}>→</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer hint */}
        <div className="mt-3 flex items-center justify-between border-t border-rule pt-2.5 text-[9px] uppercase tracking-[0.16em] text-bone-faint">
          <span>↑↓ SELECT</span>
          <span>↵ ENTER</span>
        </div>
      </nav>
    </Panel>
  );
}
