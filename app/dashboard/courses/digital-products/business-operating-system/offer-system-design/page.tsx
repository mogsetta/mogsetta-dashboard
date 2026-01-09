import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function OfferSystemDesignPhasePage() {
  const lessons = [
    {
      title: "Define the Core Outcome",
      description:
        "Clarify the specific transformation your offer delivers and why it matters.",
      href: "/dashboard/courses/digital-products/business-operating-system/offer-system-design/core-outcome",
    },
    {
      title: "System Scope & Boundaries",
      description:
        "Decide what your offer includes, excludes, and how it avoids overbuilding.",
      href: "/dashboard/courses/digital-products/business-operating-system/offer-system-design/scope-boundaries",
    },
    {
      title: "Delivery Model Design",
      description:
        "Choose how the offer is delivered in a way that scales without burnout.",
      href: "/dashboard/courses/digital-products/business-operating-system/offer-system-design/delivery-model",
    },
    {
      title: "Leverage & Reuse",
      description:
        "Design the system so effort compounds instead of resetting every time.",
      href: "/dashboard/courses/digital-products/business-operating-system/offer-system-design/leverage-reuse",
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 2</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Offer & System Design
        </h1>
        <p style={{ marginTop: 12, maxWidth: 700, opacity: 0.85 }}>
          This phase turns your decision into structure. You will define the
          outcome, design the delivery system, and ensure the offer can scale
          without unnecessary complexity.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          marginBottom: 64,
        }}
      >
        {lessons.map((lesson) => (
          <div
            key={lesson.title}
            style={{
              border: "1px solid #dc2626",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18 }}>{lesson.title}</h3>
            <p style={{ marginTop: 8, opacity: 0.8 }}>
              {lesson.description}
            </p>

            <Link href={lesson.href}>
              <button
                style={{
                  marginTop: 16,
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 16px",
                  cursor: "pointer",
                }}
              >
                Start Lesson →
              </button>
            </Link>
          </div>
        ))}
      </section>

      <CoachChat
        intent="strategy"
        system="digital-products"
        module="business-operating-system"
        coachId="digital-products"
        title="Offer & System Design Coach"
        description="Use this coach to shape your offer, define boundaries, and design a system that scales cleanly."
      />
    </div>
  );
}
