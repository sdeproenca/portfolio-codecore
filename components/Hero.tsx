import { Panel } from "./Panel";
import { MenuNav } from "./MenuNav";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-[7fr_3fr]"
    >
      <Panel title="WHOAMI.TERMINAL" trailing="BASH // 80X24" headerClassName="bg-accent/[0.07]">
        <div className="space-y-5">
          <div className="text-xs text-bone-faint">&gt; whoami</div>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.4rem]">
            Sofi de Proença
          </h1>

          <div className="text-[11px] uppercase tracking-[0.16em] text-accent">
            product <span className="text-bone-faint">·</span> project{" "}
            <span className="text-bone-faint">·</span> operations management
          </div>

          <p className="max-w-prose text-[15px] leading-relaxed text-bone">
            Product and operations manager.{" "}
            <span className="text-accent">Eight+ years</span> across Web3 infrastructure,
            ecommerce, enterprise data, and public-sector technology, but with much in common:{" "}
            <span className="text-accent">high impact, high stakes, high pace, high agency</span>.
            Exactly how I operate.
          </p>

          <p className="max-w-prose text-[14px] leading-relaxed text-bone-dim">
            I work at the{" "}
            <span className="text-bone">intersection of product, delivery, and operations</span>.
            Roadmaps, release playbooks, cross-functional coordination, and{" "}
            <span className="text-bone">AI in the loop</span> in high ambiguity scenarios.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/Sofi_de_Proenca_CV.pdf"
              className="border border-accent bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-ink"
            >
              FETCH_CURRICULUM_VITAE ↓
            </a>
            <a
              href="#contact"
              className="border border-rule px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-bone transition hover:border-accent hover:text-accent"
            >
              INITIALIZE_CONTACT →
            </a>
          </div>
        </div>
      </Panel>

      <div className="hidden h-full lg:flex lg:flex-col">
        <MenuNav />
      </div>
    </section>
  );
}
