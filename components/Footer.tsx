export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border2)",
        padding: "28px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          color: "var(--text3)",
          letterSpacing: "0.04em",
        }}
      >
        Tom · Built with Next.js + Framer Motion
      </span>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          color: "var(--text3)",
          letterSpacing: "0.04em",
        }}
      >
        New Zealand · {year}
      </span>
    </footer>
  );
}
