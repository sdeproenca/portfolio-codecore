import { Clock } from "./Clock";

export function TopBar() {
  return (
    <div className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-bone-dim sm:px-6">
        <div className="flex items-center gap-3">
          <span className="text-bone">SOFI_DE_PROENCA</span>
          <span className="text-bone-faint">/</span>
          <span>ROOT_ACCESS</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="status-dot" aria-hidden />
            <span className="text-accent">AVAILABLE</span>
            <span className="hidden text-bone sm:inline">EMEA/EST/ARG</span>
          </div>
          <Clock />
        </div>
      </div>
    </div>
  );
}
