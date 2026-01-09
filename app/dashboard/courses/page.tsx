import Link from "next/link";

export default function CoursesPage() {
  return (
    <div style={{ padding: "48px 56px" }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Courses</h1>
      <p style={{ opacity: 0.7, marginBottom: 32 }}>
        Choose a system to build.
      </p>

      {/* Systems */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {/* Digital Products */}
        <Link
          href="/dashboard/courses/digital-products"
          style={{
            textDecoration: "none",
            borderRadius: 18,
            padding: 28,
            background: "linear-gradient(135deg, #7f1d1d, #991b1b)",
            color: "#fff",
            boxShadow: "0 12px 40px rgba(127,29,29,0.45)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>SYSTEM 01</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>
            Digital Products
          </h2>
          <p style={{ marginTop: 8, fontSize: 15, opacity: 0.9 }}>
            Build, validate, and scale leverage-based digital products.
          </p>
          <div style={{ marginTop: 18, fontWeight: 600 }}>Enter system →</div>
        </Link>

        {/* Service Systems */}
        <Link
          href="/dashboard/courses/service-systems"
          style={{
            textDecoration: "none",
            borderRadius: 18,
            padding: 28,
            background: "linear-gradient(135deg, #5b21b6, #7c3aed)",
            color: "#fff",
            boxShadow: "0 12px 40px rgba(91,33,182,0.45)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>SYSTEM 02</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>
            Service Systems
          </h2>
          <p style={{ marginTop: 8, fontSize: 15, opacity: 0.9 }}>
            Productize services, control scope, and scale fulfillment.
          </p>
          <div style={{ marginTop: 18, fontWeight: 600 }}>Enter system →</div>
        </Link>

        {/* E-Commerce */}
        <Link
          href="/dashboard/courses/ecommerce"
          style={{
            textDecoration: "none",
            borderRadius: 18,
            padding: 28,
            background: "linear-gradient(135deg, #1e40af, #2563eb)",
            color: "#fff",
            boxShadow: "0 12px 40px rgba(30,64,175,0.45)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>SYSTEM 03</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>
            E-Commerce
          </h2>
          <p style={{ marginTop: 8, fontSize: 15, opacity: 0.9 }}>
            Build scalable stores, offers, and revenue engines.
          </p>
          <div style={{ marginTop: 18, fontWeight: 600 }}>Enter system →</div>
        </Link>
      </div>
    </div>
  );
}
