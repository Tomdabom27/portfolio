"use client";

import Reveal from "./Reveal";

const stats = [
  { num: "3+", label: "Projects shipped" },
  { num: "4", label: "Languages used" },
  { num: "7+", label: "Years of experience" },
];

export default function Stats() {
  return (
    <Reveal style={{ width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--border)",
          borderBottom: "1px solid var(--border)",
          width: "100%",
        }}
      >
        {stats.map(({ num, label }) => (
          <div
            key={label}
            style={{
              background: "var(--bg)",
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--serif)",
                fontSize: "36px",
                color: "var(--text)",
                letterSpacing: "-0.04em",
                marginBottom: "6px",
              }}
            >
              {num}
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                fontWeight: 500,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}