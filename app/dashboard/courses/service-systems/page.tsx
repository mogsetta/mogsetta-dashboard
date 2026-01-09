import Link from "next/link";

export default function ServiceSystemsPage() {
  return (
    <div style={{ padding: "48px 56px" }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Service Systems
      </h1>
      <p style={{ opacity: 0.7, marginBottom: 32 }}>
        Build scalable service businesses using clear offers, repeatable systems,
        and leverage-driven delivery.
      </p>

      {/* Courses */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {/* Offer Creation */}
        <Link
          href="/dashboard/courses/service-systems/offer-creation"
          style={{
            textDecoration: "none",
            borderRadius: 18,
            padding: 28,
            background: "linear-gradient(135deg, #5b21b6, #7c3aed)",
            color: "#fff",
            boxShadow: "0 12px 40px rgba(91,33,182,0.45)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>
            CORE COURSE
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>
            Offer Creation
          </h2>

          <p style={{ marginTop: 8, fontSize: 15, opacity: 0.9 }}>
            Define the right problem, design a clear service offer, and build
            a system clients are willing to pay for.
          </p>

          <div style={{ marginTop: 18, fontWeight: 600 }}>
            Start building →
          </div>
        </Link>
      </div>
    </div>
  );
}