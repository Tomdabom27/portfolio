"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "160px",
        paddingBottom: "96px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          style={{
            fontFamily: "var(--mono)",
            fontSize: "12px",
            color: "var(--text3)",
            letterSpacing: "0.08em",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "1px",
              background: "var(--text3)",
            }}
          />
          Building things that work
        </motion.div>

        <motion.h1
          variants={item}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(44px, 9vw, 76px)",
            lineHeight: 1.03,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            marginBottom: "32px",
            fontWeight: 400,
          }}
        >
          Apps. Tools.
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "var(--text2)",
            }}
          >
            Real software.
          </em>
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: "17px",
            color: "var(--text2)",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "48px",
            fontWeight: 300,
          }}
        >
          I&apos;m Tom — a{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            young developer
          </strong>{" "}
          who builds CLI tools in Go, desktop apps in Rust, and mobile apps in
          Flutter. I care about engineering craft, not just shipping fast.
        </motion.p>

        <motion.div
          variants={item}
          style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              fontFamily: "var(--sans)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "100px",
              textDecoration: "none",
              display: "inline-block",
              letterSpacing: "0.01em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.72")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            View my work
          </a>

          <a
            href="https://github.com/Tomdabom27"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text2)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text2)")
            }
          >
            GitHub <span>→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
