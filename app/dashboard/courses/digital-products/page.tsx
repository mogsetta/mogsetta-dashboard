"use client";
import Link from "next/link";

const moduleCardStyle: React.CSSProperties = {
  display: "block",
  padding: 24,
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.02)",
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
};

export default function DigitalProductsCoursePage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 24px 140px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <span style={{ fontSize: 13, opacity: 0.6, letterSpacing: 0.4 }}>
          COURSE
        </span>
        <h1 style={{ fontSize: 40, marginTop: 8, marginBottom: 12 }}>
          Digital Products
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.75, maxWidth: 720 }}>
          Learn how to turn ideas into sellable digital products using clear,
          execution‑focused systems — not theory, trends, or fluff.
        </p>
      </div>

      {/* Course Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          marginBottom: 48,
        }}
      >
        <Stat label="Modules" value="3" />
        <Stat label="Lessons" value="8" />
        <Stat label="Estimated Time" value="6–7 hrs" />
        <Stat label="Difficulty" value="Beginner → Intermediate" />
      </div>

      {/* Modules */}
      <h2 style={{ fontSize: 22, marginBottom: 18 }}>Course Modules</h2>

      <div style={{ display: "grid", gap: 20 }}>
        <ModuleCard
          title="Offer Creation"
          description="Define the problem, engineer a compelling offer, and prepare it for launch."
          href="/dashboard/courses/digital-products/offer-creation"
          status="available"
        />

        <ModuleCard
          title="Pricing & Positioning"
          description="Set pricing and positioning so the value feels obvious to buyers."
          href="/dashboard/courses/digital-products/pricing-positioning"
          status="locked"
        />

        <ModuleCard
          title="Distribution & Validation"
          description="Validate demand and confirm conversion before scaling."
          href="/dashboard/courses/digital-products/distribution-validation"
          status="locked"
        />
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 14, marginTop: 48 }}>
        <Link
          href="/dashboard/courses/digital-products/offer-creation/problem-selection"
          style={{
            padding: "14px 22px",
            borderRadius: 14,
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Start Course
        </Link>

        <span
          style={{
            padding: "14px 22px",
            borderRadius: 14,
            border: "1px solid rgba(37,99,235,0.3)",
            color: "rgba(37,99,235,0.5)",
            fontWeight: 600,
          }}
        >
          Resume (Coming Soon)
        </span>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: 18,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.6 }}>{label}</div>
      <div style={{ fontSize: 18, marginTop: 6 }}>{value}</div>
    </div>
  );
}

function ModuleCard({
  title,
  description,
  href,
  status,
}: {
  title: string;
  description: string;
  href: string;
  status: "available" | "locked";
}) {
  return (
    <Link
      href={status === "available" ? href : "#"}
      style={{
        padding: 24,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        color: "inherit",
        opacity: status === "locked" ? 0.5 : 1,
        pointerEvents: status === "locked" ? "none" : "auto",
      }}
    >
      <strong style={{ fontSize: 18 }}>{title}</strong>
      <p style={{ marginTop: 8, opacity: 0.75 }}>{description}</p>
    </Link>
  );
}
