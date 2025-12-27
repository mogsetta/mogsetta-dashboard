function getUserSystems() {
  return [
    {
      id: "digital-products",
      title: "Digital Products System",
      description: "Turn knowledge into scalable assets that sell without your time.",
      status: "Active" as const,
      bullets: [
        "Offer engineering & positioning",
        "Product structure & delivery",
        "Sales page + launch workflows",
        "AI-assisted asset creation",
      ],
      primaryHref: "/dashboard/coaches/digital-products",
      secondaryHref: "/dashboard/courses",
    },
    {
      id: "service-systems",
      title: "Service Business System",
      description: "Build repeatable services you can sell, deliver, and scale cleanly.",
      status: "Available" as const,
      bullets: [
        "Offer ladders & scope control",
        "Client onboarding pipelines",
        "Delivery SOPs & workflows",
        "Retention & expansion logic",
      ],
      primaryHref: "/dashboard/coaches/service-systems",
      secondaryHref: "/dashboard/courses",
    },
    {
      id: "ecommerce",
      title: "E-Commerce System",
      description: "Design stores and offers that convert with structure, not guessing.",
      status: "Available" as const,
      bullets: [
        "Product & brand positioning",
        "Conversion-focused page structure",
        "Offer stacking & bundles",
        "Testing & iteration frameworks",
      ],
      primaryHref: "/dashboard/coaches/ecommerce",
      secondaryHref: "/dashboard/courses",
    },
  ];
}

export default function SystemsPage() {
  const systems = getUserSystems();
  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Systems</h1>
        <p style={{ opacity: 0.7, maxWidth: 760 }}>
          Mogsetta systems are complete operating models — not ideas or tactics.
          Choose one system, build the core assets, validate, then expand with AI execution.
        </p>
      </header>

      {/* Systems Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {systems.map((system) => (
          <SystemCard
            key={system.id}
            title={system.title}
            description={system.description}
            status={system.status}
            bullets={system.bullets}
            primaryHref={system.primaryHref}
            secondaryHref={system.secondaryHref}
            primaryLabel={
              system.status === "Active" ? "Continue System" : "Activate System"
            }
            secondaryLabel="View Course"
          />
        ))}
      </section>

      {/* Bottom Explanation */}
      <section style={{ marginTop: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>How to Use These Systems</h2>
        <p style={{ opacity: 0.7, maxWidth: 860, lineHeight: 1.7 }}>
          You don’t run all systems at once. Pick one, ship the core assets, validate demand,
          then scale. Courses provide the blueprint. AI coaches help you execute and adapt
          in real time.
        </p>
      </section>
    </div>
  );
}

/* =====================
   Components
===================== */

function SystemCard({
  title,
  description,
  bullets,
  status,
  primaryHref,
  secondaryHref,
  primaryLabel,
  secondaryLabel,
}: {
  title: string;
  description: string;
  bullets: string[];
  status: "Active" | "Available" | "Locked";
  primaryHref: string;
  secondaryHref?: string;
  primaryLabel: string;
  secondaryLabel?: string;
}) {
  const statusColor =
    status === "Active"
      ? "#2ecc71"
      : status === "Available"
      ? "#d4af37"
      : "rgba(255,255,255,0.4)";

  return (
    <div
      style={{
        background: "#0b0c10",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 24,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Title Row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <h3 style={{ fontSize: 20, margin: 0 }}>{title}</h3>
        <span
          style={{
            fontSize: 12,
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            color: statusColor,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {status}
        </span>
      </div>

      <p style={{ opacity: 0.7 }}>{description}</p>

      {/* Progress */}
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 12, opacity: 0.6, marginBottom: 6 }}>
          System Progress
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          {["Plan", "Build", "Ship", "Scale"].map((stage, i) => {
            const isActive = status === "Active" && i <= 1;
            return (
              <div
                key={stage}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  opacity: isActive ? 1 : 0.35,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: isActive ? "#d4af37" : "#666",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: 12 }}>{stage}</span>
              </div>
            );
          })}
        </div>
      </div>

      <ul style={{ paddingLeft: 18, marginBottom: 8 }}>
        {bullets.map((item, i) => (
          <li key={i} style={{ opacity: 0.75, marginBottom: 6 }}>
            {item}
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 12, marginTop: "auto", flexDirection: "column" }}>
        <p style={{ fontSize: 12, opacity: 0.6 }}>
          {status === "Active"
            ? "Resume your active system"
            : "Start building this system"}
        </p>
        <a
          href={primaryHref}
          style={{
            textDecoration: "none",
            background: "#d4af37",
            color: "#000",
            padding: "10px 14px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            boxShadow: status === "Active"
              ? "0 0 0 1px rgba(46,204,113,0.4)"
              : "0 0 0 1px rgba(212,175,55,0.4)",
          }}
        >
          {primaryLabel}
        </a>

        {secondaryHref && secondaryLabel && (
          <a
            href={secondaryHref}
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
}