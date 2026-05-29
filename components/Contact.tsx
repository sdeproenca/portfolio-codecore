import { Panel } from "./Panel";

const CONTACTS = [
  {
    label: "BOOK_INTRO_CALL",
    value: "Schedule a call →",
    href: "https://calendar.app.google/6naTQnsgprQ1Cj1q6",
    highlight: true,
  },
  {
    label: "EMAIL",
    value: "sofiadeproenca@gmail.com",
    href: "mailto:sofiadeproenca@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "in/sofiadeproenca",
    href: "https://www.linkedin.com/in/sofiadeproenca/",
  },
  {
    label: "X / TWITTER",
    value: "@sdeproenca",
    href: "https://x.com/sdeproenca",
  },
  {
    label: "TELEGRAM",
    value: "@sofidepro",
    href: "https://t.me/sofidepro",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
      <Panel title="CONTACT.EXE" headerClassName="bg-accent/[0.07]">
        <ul className="divide-y divide-rule/40">
          {CONTACTS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center justify-between gap-4 py-4 transition-colors ${
                  c.highlight
                    ? "bg-accent/10 hover:bg-accent/20"
                    : "hover:bg-accent/5"
                }`}
              >
                <div className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] ${
                  c.highlight ? "text-accent" : "text-bone-dim group-hover:text-bone"
                }`}>
                  <span className={c.highlight ? "text-accent" : "text-accent/50 group-hover:text-accent"}>►</span>
                  {c.label}
                </div>
                <span className={`text-right text-[13px] ${
                  c.highlight ? "font-semibold text-accent" : "text-bone group-hover:text-accent"
                }`}>
                  {c.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Panel>
    </section>
  );
}

