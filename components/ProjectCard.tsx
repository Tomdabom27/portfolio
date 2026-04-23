"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          borderTop: "1px solid var(--border)",
          padding: "44px 0",
          textDecoration: "none",
          cursor: "pointer",
        }}
        whileHover="hovered"
        initial="rest"
        animate="rest"
      >
        {/* Meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "24px",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  background: "var(--tag-bg)",
                  color: "var(--text3)",
                  padding: "4px 10px",
                  borderRadius: "100px",
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "var(--text3)",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: project.status === "shipped" ? "#4caf50" : "#ff9800",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {project.status === "shipped" ? "Shipped" : "In progress"}
          </div>
        </div>

        {/* Name row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "var(--text3)",
                letterSpacing: "0.06em",
                marginBottom: "6px",
              }}
            >
              {project.index}
            </div>
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(28px, 5vw, 38px)",
                letterSpacing: "-0.03em",
                color: "var(--text)",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              {project.name}
            </h3>
          </div>

          <motion.span
            variants={{
              rest: { x: 0, y: 0 },
              hovered: { x: 5, y: -5 },
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "22px",
              color: "var(--text3)",
              flexShrink: 0,
              marginTop: "20px",
              display: "block",
            }}
          >
            ↗
          </motion.span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "15px",
            color: "var(--text2)",
            lineHeight: 1.7,
            maxWidth: "540px",
            fontWeight: 300,
            marginBottom: "24px",
          }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {project.highlights.map((h) => (
            <span
              key={h}
              style={{
                fontSize: "13px",
                color: "var(--text3)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "var(--border)", userSelect: "none" }}>—</span>
              {h}
            </span>
          ))}
        </div>
      </motion.a>
    </Reveal>
  );
}
