import React from "react";

const FONT = "'JetBrains Mono', monospace";
const ACCENT = "#ff2d7a";
const MUTED = "#6e6e6e";

// ── BUENOS AIRES — scale of impact strip ───────────────────────────────────────
const BA_STATS = [
  { num: "10,000+", label: "CAMERAS DEPLOYED"       },
  { num: "300",     label: "W/ AI RECOGNITION"       },
  { num: "595",     label: "FUGITIVES IN 6 WEEKS"    },
  { num: "1,695+",  label: "TOTAL ARRESTS"           },
];

function BuenosAiresSvg() {
  const W = 700, GW = W / 4;
  return (
    <svg viewBox={`0 0 ${W} 128`} xmlns="http://www.w3.org/2000/svg"
      role="img" aria-labelledby="ba-t ba-d">
      <title id="ba-t">Scale of impact: Buenos Aires public security program</title>
      <desc id="ba-d">Four large numbers: 10,000+ cameras deployed, 300 with AI recognition, 595 fugitives in first six weeks, 1,695+ total arrests.</desc>
      <text x={350} y={14} fontFamily={FONT} fontSize={6} fill={MUTED}
        textAnchor="middle" letterSpacing="0.8">
        ONE OF THE EARLIEST LARGE-SCALE COMPUTER VISION AI DEPLOYMENTS IN PUBLIC INFRASTRUCTURE
      </text>
      {[1, 2, 3].map(i => (
        <line key={i} x1={i * GW} y1={22} x2={i * GW} y2={104}
          stroke={ACCENT} strokeWidth={0.5} strokeOpacity={0.18}/>
      ))}
      {BA_STATS.map((s, i) => {
        const cx = (i + 0.5) * GW;
        return (
          <g key={i}>
            <text x={cx} y={72} fontFamily={FONT} fontSize={24} fill={ACCENT}
              textAnchor="middle" fontWeight={700}>{s.num}</text>
            <text x={cx} y={90} fontFamily={FONT} fontSize={6.5} fill={MUTED}
              textAnchor="middle" letterSpacing="0.5">{s.label}</text>
          </g>
        );
      })}
      <text x={350} y={114} fontFamily={FONT} fontSize={7} fill={MUTED} textAnchor="middle">
        April 2019 launch - operated under continuous judicial oversight throughout my tenure
      </text>
    </svg>
  );
}

// ── Router ─────────────────────────────────────────────────────────────────────
const SVG_MAP: Record<string, React.ReactNode> = {
  "buenos-aires-city-government": <BuenosAiresSvg />,
};

export function getRoleSvg(id: string): React.ReactNode {
  return SVG_MAP[id] ?? null;
}
