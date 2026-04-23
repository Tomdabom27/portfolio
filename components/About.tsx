import Reveal from "./Reveal";

const skills = [
  { name: "Go", pct: 55 },
  { name: "Python", pct: 70 },
  { name: "Rust", pct: 35 },
  { name: "Flutter", pct: 40 },
  { name: "Logic / arch", pct: 82 },
];

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <div style={{ padding: "80px 0 48px", borderTop: "1px solid var(--border)" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "28px",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              fontWeight: 400,
              marginBottom: "48px",
            }}
          >
            The story
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "56px",
              alignItems: "start",
            }}
          >
            {/* Story */}
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  fontWeight: 300,
                }}
              >
                I started with{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Scratch
                </strong>{" "}
                — really mastered it. Then Python. Then I started asking a
                different question: not{" "}
                <em style={{ fontStyle: "italic" }}>what can I build</em>, but{" "}
                <em style={{ fontStyle: "italic" }}>
                  what&apos;s the right tool to build it with?
                </em>
              </p>

              <blockquote
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "20px",
                  color: "var(--text)",
                  lineHeight: 1.45,
                  letterSpacing: "-0.02em",
                  borderLeft: "2px solid var(--border)",
                  paddingLeft: "20px",
                  margin: "28px 0",
                  fontStyle: "italic",
                }}
              >
                &ldquo;I chose Go and Rust because they force you to think
                clearly.&rdquo;
              </blockquote>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  fontWeight: 300,
                }}
              >
                That shift changed how I approach every project. BoltX
                isn&apos;t a school project — it&apos;s engineered with real
                architecture. Notes isn&apos;t a web app wrapper — it&apos;s a
                native Rust binary. I care about{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  doing it properly
                </strong>
                .
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                I&apos;m in high school, based in New Zealand, and settling on{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Go
                </strong>{" "}
                as my primary language. Early stage, but not early in thinking.
              </p>
            </div>

            {/* Skills */}
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "var(--text3)",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Technical depth
              </span>

              <div>
                {skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 0",
                      borderTop: i === 0 ? "1px solid var(--border2)" : undefined,
                      borderBottom: "1px solid var(--border2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "13px",
                        color: "var(--text)",
                      }}
                    >
                      {skill.name}
                    </span>
                    <div
                      style={{
                        width: "88px",
                        height: "3px",
                        background: "var(--bg3)",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.pct}%`,
                          height: "100%",
                          background: "var(--text)",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text3)",
                  marginTop: "16px",
                  fontFamily: "var(--mono)",
                  letterSpacing: "0.02em",
                }}
              >
                * Bars are approximate, not certifications.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
