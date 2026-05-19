"use client";

import { useEffect } from "react";
import type { Role } from "@/data/roles";
import { Panel } from "./Panel";
import { RoleCard } from "./RoleCard";

type Props = {
  role: Role | null;
  onClose: () => void;
};

export function WorkModal({ role, onClose }: Props) {
  // ESC to close + body scroll lock when open
  useEffect(() => {
    if (!role) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [role, onClose]);

  if (!role) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
    >
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="fixed inset-0 z-0 cursor-default bg-black/80 backdrop-blur-sm"
      />

      {/* Modal panel */}
      <div className="relative z-10 my-auto w-full max-w-3xl">
        <Panel
          title={`WORK.LOG`}
          trailing={`// ${role.entity}`}
          headerClassName="bg-accent/[0.07]"
        >
          {/* Close hint bar */}
          <div className="mb-5 flex items-center justify-between border-b border-rule pb-2 text-[9px] uppercase tracking-[0.18em] text-bone-faint">
            <span>CASE_STUDY // PROOF_OF_WORK</span>
            <button
              onClick={onClose}
              className="border border-rule px-2 py-1 text-bone-dim transition hover:border-accent hover:text-accent"
            >
              [ESC] CLOSE ✕
            </button>
          </div>

          <div id="work-modal-title">
            <RoleCard role={role} />
          </div>
        </Panel>
      </div>
    </div>
  );
}
