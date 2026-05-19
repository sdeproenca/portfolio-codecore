"use client";

import { useState } from "react";
import { Panel } from "./Panel";
import { WorkModal } from "./WorkModal";
import { ROLES, type Role } from "@/data/roles";

type Entry = {
  timestamp: string;
  module: string;
  entity: string;
  sector: string;
  result: "COMPLETE" | "ARCHIVED";
  slug?: string;
};

const ENTRIES: Entry[] = [
  {
    timestamp: "2024.04 - 2026.03",
    module: "PRODUCT_DELIVERY",
    entity: "ANDROMEDA_PROTOCOL",
    sector: "WEB3_PRODUCT",
    result: "COMPLETE",
    slug: "andromeda",
  },
  {
    timestamp: "2023.03 - 2024.06",
    module: "PROJECT_OPS_MGR",
    entity: "PARKFIELD_LABS",
    sector: "ECOMMERCE",
    result: "COMPLETE",
    slug: "parkfield",
  },
  {
    timestamp: "2022.06 - 2022.12",
    module: "PRODUCT_MANAGER",
    entity: "COMPOSABLE_FINANCE",
    sector: "WEB3_INFRA",
    result: "COMPLETE",
    slug: "composable-finance",
  },
  {
    timestamp: "2022.03 - 2022.06",
    module: "DESIGN_TEAM_MGR",
    entity: "ADVANCED_BLOCKCHAIN",
    sector: "WEB3_DESIGN",
    result: "COMPLETE",
    slug: "advanced-blockchain",
  },
  {
    timestamp: "2021.06 - 2022.03",
    module: "PROGRAM_MGR",
    entity: "CODERIO",
    sector: "ENT_DATA",
    result: "COMPLETE",
    slug: "coderio",
  },
  {
    timestamp: "2021.02 - 2021.06",
    module: "DIGITAL_PM",
    entity: "TONIC3",
    sector: "PHARMA_MKT",
    result: "COMPLETE",
  },
  {
    timestamp: "2017.12 - 2021.02",
    module: "GOVTECH_PM",
    entity: "GCBA_ARGENTINA",
    sector: "GOV_TECH",
    result: "COMPLETE",
    slug: "buenos-aires-city-government",
  },
  {
    timestamp: "2017.08 - 2017.12",
    module: "STAFF_ANALYST",
    entity: "GCBA_ARGENTINA",
    sector: "GOV_TECH",
    result: "ARCHIVED",
  },
];

export function Timeline() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeRole, setActiveRole] = useState<Role | null>(null);

  const openRole = (slug?: string) => {
    if (!slug) return;
    const role = ROLES[slug];
    if (role) setActiveRole(role);
  };

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
      <Panel title="RUNTIME.LOG" trailing="// VERBOSE" headerClassName="bg-accent/[0.07]">
        <div className="overflow-x-auto">
          {/* Column headers */}
          <div className="mb-0 grid min-w-[760px] grid-cols-[9rem_11rem_11rem_6rem_1fr_auto] gap-x-3 border-b border-rule pb-2 text-[9px] uppercase tracking-[0.2em] text-bone-faint">
            <span>TIMESTAMP</span>
            <span>MODULE</span>
            <span>ENTITY</span>
            <span>SECTOR</span>
            <span />
            <span>RESULT</span>
          </div>

          {/* Rows */}
          <ul className="min-w-[760px] divide-y divide-rule/30">
            {ENTRIES.map((entry, i) => {
              const active = hovered === i;
              const isArchived = entry.result === "ARCHIVED";
              const clickable = !!entry.slug;

              const onActivate = () => openRole(entry.slug);

              return (
                <li
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={clickable ? onActivate : undefined}
                  onKeyDown={(e) => {
                    if (clickable && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      onActivate();
                    }
                  }}
                  tabIndex={clickable ? 0 : -1}
                  role={clickable ? "button" : undefined}
                  aria-label={clickable ? `Open case study: ${entry.entity}` : undefined}
                  className={`grid grid-cols-[9rem_11rem_11rem_6rem_1fr_auto] gap-x-3 py-3 text-[11px] transition-colors duration-100 outline-none ${
                    active ? "bg-accent/5" : ""
                  } ${clickable ? "cursor-pointer focus-visible:bg-accent/10" : ""}`}
                >
                  <span className={`tabular-nums tracking-wider ${active ? "text-bone" : "text-bone-dim"}`}>
                    {entry.timestamp}
                  </span>

                  <span className={active ? "text-bone" : "text-bone-dim"}>
                    {entry.module}
                  </span>

                  <span className={`font-medium tracking-wide ${active ? "text-accent" : "text-accent/80"}`}>
                    {entry.entity}
                  </span>

                  <span className={`text-[10px] tracking-[0.1em] ${active ? "text-bone-dim" : "text-bone-faint"}`}>
                    {entry.sector}
                  </span>

                  <span />

                  <span
                    className={`flex items-center gap-1.5 text-[10px] tracking-[0.12em] transition-colors ${
                      isArchived
                        ? "text-bone-faint"
                        : active
                        ? "text-bone"
                        : "text-bone-dim"
                    } ${clickable ? "hover:text-accent" : ""}`}
                  >
                    [{entry.result}]
                    {clickable && (
                      <span className={`transition-transform duration-100 ${active ? "translate-x-0.5 text-accent" : "text-bone-faint"}`}>
                        →
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Footer */}
          <div className="mt-3 flex items-center justify-between border-t border-rule pt-2.5 text-[9px] uppercase tracking-[0.16em] text-bone-faint">
            <span>{ENTRIES.length} entries</span>
            <span>click rows marked with arrow to open case study</span>
          </div>
        </div>
      </Panel>

      <WorkModal role={activeRole} onClose={() => setActiveRole(null)} />
    </section>
  );
}
