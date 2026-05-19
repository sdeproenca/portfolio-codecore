import { ReactNode } from "react";

type Props = {
  title: string;
  trailing?: string;
  id?: string;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  children: ReactNode;
};

export function Panel({ title, trailing, id, className = "", bodyClassName = "", headerClassName = "", children }: Props) {
  return (
    <section
      id={id}
      className={`relative flex flex-col border border-accent/25 bg-[#141414]/60 shadow-[0_0_0_1px_rgba(255,61,139,0.08),0_0_18px_rgba(255,61,139,0.10),inset_0_0_40px_rgba(255,61,139,0.02)] ${className}`}
    >
      <header className={`flex items-center justify-between border-b border-rule px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-bone-dim ${headerClassName}`}>
        <div className="flex items-center gap-3">
          <span>{title}</span>
          {trailing ? <span className="hidden sm:inline text-bone-faint">{trailing}</span> : null}
        </div>
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="block h-2 w-2 bg-rule" />
          <span className="block h-2 w-2 bg-rule" />
          <span className="block h-2 w-2 bg-accent" />
        </div>
      </header>
      <div className={`flex-1 p-5 sm:p-6 ${bodyClassName}`}>{children}</div>
    </section>
  );
}
