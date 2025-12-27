type CoachHeaderProps = {
  pill: string;
  title: string;
  subtitle: string;
};

export default function CoachHeader({
  pill,
  title,
  subtitle,
}: CoachHeaderProps) {
  return (
    <header style={{ marginBottom: 40 }}>
      <span
        style={{
          display: "inline-block",
          padding: "6px 12px",
          borderRadius: 999,
          background: "rgba(212,175,55,0.12)",
          color: "#d4af37",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {pill}
      </span>

      <h1
        style={{
          fontSize: 42,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: 16,
          opacity: 0.75,
          maxWidth: 720,
        }}
      >
        {subtitle}
      </p>
    </header>
  );
}