import Link from "next/link";

export default function DigitalProductsCoursePage() {
  const digitalProductsCourse = {
    startLesson: {
      slug: "offer-creation/problem-selection"
    }
  };

  const startPath = `/dashboard/courses/digital-products/${digitalProductsCourse.startLesson.slug}`;

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 24px 120px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>
        Digital Products
      </h1>

      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        Learn how to turn ideas into sellable digital products using clear frameworks
        and execution-focused lessons.
      </p>

      <div style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>Course Modules</h2>

        <div style={{ display: "grid", gap: 16 }}>
          {/* Offer Creation */}
          <Link
            href="/dashboard/courses/digital-products/offer-creation"
            style={{
              display: "block",
              padding: 20,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "inherit",
              transition: "background 0.15s ease, border 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.border = "1px solid rgba(37,99,235,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <strong>Offer Creation</strong>
            <p style={{ opacity: 0.7, marginTop: 6 }}>
              Define the problem, engineer the offer, price it correctly, and prepare it for launch.
            </p>
          </Link>

          {/* Pricing & Positioning */}
          <Link
            href="/dashboard/courses/digital-products/pricing-positioning"
            style={{
              display: "block",
              padding: 20,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "inherit",
              transition: "background 0.15s ease, border 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.border = "1px solid rgba(37,99,235,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <strong>Pricing & Positioning</strong>
            <p style={{ opacity: 0.7, marginTop: 6 }}>
              Lock in pricing and positioning so your offer feels obvious, credible, and worth paying for.
            </p>
          </Link>

          {/* Distribution & Validation */}
          <Link
            href="/dashboard/courses/digital-products/distribution-validation"
            style={{
              display: "block",
              padding: 20,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "inherit",
              transition: "background 0.15s ease, border 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.border = "1px solid rgba(37,99,235,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <strong>Distribution & Validation</strong>
            <p style={{ opacity: 0.7, marginTop: 6 }}>
              Test messaging, choose channels, gather feedback, and prove conversion.
            </p>
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
        <Link
          href={startPath}
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: 14,
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Start Course
        </Link>

        <span
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: 14,
            border: "1px solid rgba(37, 99, 235, 0.25)",
            color: "rgba(37, 99, 235, 0.6)",
            fontWeight: 500,
            cursor: "not-allowed",
          }}
        >
          Resume
        </span>
      </div>

      <p style={{ opacity: 0.6, fontSize: 14, marginTop: 14 }}>
        Start begins at the first lesson. Resume will continue where you left off once progress tracking is enabled.
      </p>
    </div>
  );
}
