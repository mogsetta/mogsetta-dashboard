"use client";
import Link from "next/link";

const cardStyle: React.CSSProperties = {
  padding: 24,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "#0b0c10",
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
};

export default function CoursesPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", paddingBottom: 120 }}>
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>Courses</h1>
      <p style={{ opacity: 0.7, marginBottom: 40 }}>
        Choose a system to begin or continue learning.
      </p>

      <div style={{ display: "grid", gap: 24 }}>
        <Link
          href="/dashboard/courses/digital-products"
          style={cardStyle}
          className="course-card"
        >
          <h2 style={{ marginBottom: 8 }}>Digital Products</h2>
          <p style={{ opacity: 0.75 }}>
            Build, price, and launch scalable digital products with clear
            systems and validated offers.
          </p>
        </Link>

        <Link
          href="/dashboard/courses/service-systems"
          style={cardStyle}
          className="course-card"
        >
          <h2 style={{ marginBottom: 8 }}>Service Systems</h2>
          <p style={{ opacity: 0.75 }}>
            Design repeatable service businesses with leverage and operational
            clarity.
          </p>
        </Link>

        <Link
          href="/dashboard/courses/ecommerce"
          style={cardStyle}
          className="course-card"
        >
          <h2 style={{ marginBottom: 8 }}>E-commerce</h2>
          <p style={{ opacity: 0.75 }}>
            Build and scale commerce systems focused on conversion and
            retention.
          </p>
        </Link>
      </div>

      <style jsx>{`
        .course-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.16);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </div>
  );
}