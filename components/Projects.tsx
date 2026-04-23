import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" style={{ paddingBottom: "0" }}>
      <Reveal>
        <div
          style={{
            padding: "80px 0 44px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "28px",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              fontWeight: 400,
            }}
          >
            Selected work
          </h2>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--text3)",
            }}
          >
            01 — 03
          </span>
        </div>
      </Reveal>

      <div style={{ borderBottom: "1px solid var(--border)" }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
