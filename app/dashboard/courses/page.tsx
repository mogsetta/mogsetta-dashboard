import Link from "next/link";

export default function CoursesPage() {
  return (
    <div style={{ padding: "48px", maxWidth: 1000 }}>
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>Courses</h1>
      <p style={{ opacity: 0.75, marginBottom: 40 }}>
        Choose a system to begin or continue learning.
      </p>

      <div style={{ display: "grid", gap: 24 }}>
        <div
          style={{}}
          onMouseEnter={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.16)";
            (e.currentTarget.firstChild as HTMLElement).style.background =
              "rgba(255,255,255,0.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.08)";
            (e.currentTarget.firstChild as HTMLElement).style.background =
              "rgba(255,255,255,0.01)";
          }}
        >
          <Link
            href="/dashboard/courses/digital-products"
            style={{
              padding: 28,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.01)",
              transition: "border-color 0.2s ease, background 0.2s ease",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Digital Products</h2>
            <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
              Build, price, and launch scalable digital products with clear systems,
              validated offers, and execution discipline.
            </p>
          </Link>
        </div>

        <div
          style={{}}
          onMouseEnter={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.16)";
            (e.currentTarget.firstChild as HTMLElement).style.background =
              "rgba(255,255,255,0.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.08)";
            (e.currentTarget.firstChild as HTMLElement).style.background =
              "rgba(255,255,255,0.01)";
          }}
        >
          <Link
            href="/dashboard/courses/service-systems"
            style={{
              padding: 28,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.01)",
              transition: "border-color 0.2s ease, background 0.2s ease",
              textDecoration: "none",
              color: "inherit",
              opacity: 0.6,
            }}
          >
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Service Systems</h2>
            <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
              Design repeatable service businesses with leverage, delivery clarity,
              and operational structure.
            </p>
          </Link>
        </div>

        <div
          style={{}}
          onMouseEnter={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.16)";
            (e.currentTarget.firstChild as HTMLElement).style.background =
              "rgba(255,255,255,0.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.08)";
            (e.currentTarget.firstChild as HTMLElement).style.background =
              "rgba(255,255,255,0.01)";
          }}
        >
          <Link
            href="/dashboard/courses/ecommerce"
            style={{
              padding: 28,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.01)",
              transition: "border-color 0.2s ease, background 0.2s ease",
              textDecoration: "none",
              color: "inherit",
              opacity: 0.6,
            }}
          >
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>E‑commerce</h2>
            <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
              Build and scale commerce systems focused on conversion, retention,
              and operational signal.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}