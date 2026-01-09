import Link from "next/link";

export default function DigitalProductsPage() {
  return (
    <div style={{ padding: "48px 56px" }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Digital Products
      </h1>
      <p style={{ opacity: 0.7, marginBottom: 32 }}>
        Design leverage-based products that scale without trading time.
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
          href="/dashboard/courses/digital-products/offer-creation"
          style={{
            textDecoration: "none",
            borderRadius: 18,
            padding: 28,
            background: "linear-gradient(135deg, #7f1d1d, #991b1b)",
            color: "#fff",
            boxShadow: "0 12px 40px rgba(127,29,29,0.45)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>
            CORE COURSE
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>
            Offer Creation
          </h2>

          <p style={{ marginTop: 8, fontSize: 15, opacity: 0.9 }}>
            Define the right problem, design a clear offer, and build a product
            customers are willing to pay for.
          </p>

          <div style={{ marginTop: 18, fontWeight: 600 }}>
            Start building →
          </div>
        </Link>

        {/* Business Operating System */}
        <Link
          href="/dashboard/courses/digital-products/business-operating-system"
          style={{
            textDecoration: "none",
            borderRadius: 18,
            padding: 28,
            background: "linear-gradient(135deg, #991b1b, #b91c1c)",
            color: "#fff",
            boxShadow: "0 12px 40px rgba(185,28,28,0.45)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>
            FULL BUILD COURSE
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>
            Business Operating System
          </h2>

          <p style={{ marginTop: 8, fontSize: 15, opacity: 0.9 }}>
            Turn your offer into a real business. Build the asset, go to market,
            get your first sales, and operate sustainably with an AI partner.
          </p>

          <div style={{ marginTop: 18, fontWeight: 600 }}>
            Enter system →
          </div>
        </Link>
      </div>
    </div>
  );
}