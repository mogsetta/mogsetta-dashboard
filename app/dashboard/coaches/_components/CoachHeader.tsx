type CoachHeaderProps = {
  pill: string;
  title: string;
  subtitle: string;
  accent?: string; // hex or rgba for system color
  status?: "ACTIVE" | "DIAGNOSING" | "OPTIMIZING";
};

export default function CoachHeader({
  pill,
  title,
  subtitle,
  accent = "rgba(212,175,55,0.9)",
  status = "ACTIVE",
}: CoachHeaderProps) {
  return (
    <header
      style={{
        position: "relative",
        marginBottom: 72,
        padding: "36px 40px",
        borderRadius: 20,
        background:
          "linear-gradient(180deg, rgba(15,16,22,0.9), rgba(6,7,10,0.95))",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: "-40% -20% auto -20%",
          height: 260,
          background: `radial-gradient(circle at top, ${accent.replace(
            "0.9",
            "0.18"
          )}, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 18,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: accent,
            opacity: 0.85,
          }}
        >
          {pill}
        </span>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            letterSpacing: "0.18em",
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 8px ${accent}`,
            }}
          />
          {status}
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 42,
          lineHeight: 1.15,
          marginBottom: 14,
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          maxWidth: 820,
          fontSize: 16,
          lineHeight: 1.7,
          opacity: 0.75,
          position: "relative",
          zIndex: 1,
        }}
      >
        {subtitle}
      </p>
    </header>
  );
}