"use client";

import Reveal from "./Reveal";

const links = [
  { label: "✉ Email me", href: "thomasandrewhodgson@hotmail.com" },
  { label: "GitHub", href: "https://github.com/Tomdabom27" },
];

export default function Contact() {
  return (
    <section id="contact">
      <Reveal>
        <div
          style={{
            padding: "80px 0 56px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(32px, 6vw, 52px)",
              letterSpacing: "-0.035em",
              color: "var(--text)",
              fontWeight: 400,
              marginBottom: "18px",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s talk.
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "var(--text2)",
              marginBottom: "40px",
              maxWidth: "420px",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Whether you&apos;re a recruiter, a collaborator, or just
            curious — I&apos;m always happy to chat about code, projects,
            or ideas.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 22px",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  fontSize: "14px",
                  color: "var(--text2)",
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.2s, color 0.2s, border-color 0.2s",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--bg2)";
                  el.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--text2)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
