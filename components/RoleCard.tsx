import type { Role } from "@/data/roles";
import { getRoleSvg } from "./RoleSvg";

export function RoleCard({ role }: { role: Role }) {
  return (
    <article id={role.id}>
      {/* Stamp header */}
      <div className="mb-5">
        <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-accent">
          {role.company}
        </div>
        <h3 className="text-lg font-semibold text-bone">
          {role.title}
        </h3>
        <div className="mt-0.5 text-[11px] tracking-wide text-bone-faint">
          {role.period}
        </div>
        <div className="mt-0.5 text-[11px] italic text-bone-faint">
          {role.context}
        </div>
      </div>

      {/* Stamp / lead quote */}
      <blockquote className="mb-6 border-l-2 border-accent pl-4 text-[13px] leading-relaxed text-bone">
        {role.stamp}
      </blockquote>

      {/* Sections */}
      <div className="space-y-4 text-[13px] leading-relaxed">
        {role.sections.map((s) => (
          <div key={s.heading}>
            <h4 className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-accent/80">
              {s.heading}
            </h4>
            <p className="text-bone-dim">{s.body}</p>
          </div>
        ))}
      </div>

      {/* SVG visual */}
      {getRoleSvg(role.id) && (
        <div className="mt-6 mb-1 overflow-hidden border border-accent/10">
          {getRoleSvg(role.id)}
        </div>
      )}

      {/* Outcomes */}
      <div className="mt-4">
        <div className="mb-2 text-[9px] uppercase tracking-[0.2em] text-bone-faint">
          WHAT LANDED
        </div>
        <ul className="space-y-1">
          {role.outcomes.map((o) => (
            <li key={o} className="flex gap-2 text-[12px] text-bone">
              <span className="mt-0.5 shrink-0 text-accent">›</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="mt-4 text-[11px]">
        <span className="text-[9px] uppercase tracking-[0.14em] text-bone-faint">STACK  </span>
        <span className="text-bone-dim">{role.stack}</span>
      </div>

      {/* Skills */}
      <div className="mt-2 text-[11px]">
        <span className="text-[9px] uppercase tracking-[0.14em] text-bone-faint">SKILLS  </span>
        <span className="text-bone-dim">{role.skills}</span>
      </div>

      {/* Links */}
      {role.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
          {role.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 underline decoration-dashed underline-offset-2 hover:text-accent"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
