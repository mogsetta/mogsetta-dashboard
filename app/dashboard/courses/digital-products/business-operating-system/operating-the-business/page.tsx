import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function OperatingTheBusinessPhasePage() {
  const lessons = [
    {
      title: "Operating Cadence",
      description:
        "Design a simple weekly rhythm so the business runs without constant decision fatigue.",
      href: "/dashboard/courses/digital-products/business-operating-system/operating-the-business/operating-cadence",
    },
    {
      title: "Metrics That Matter",
      description:
        "Identify the few numbers that actually indicate health, growth, and risk.",
      href: "/dashboard/courses/digital-products/business-operating-system/operating-the-business/metrics-that-matter",
    },
    {
      title: "System Bottlenecks",
      description:
        "Learn how to diagnose what’s slowing the business down and fix it systematically.",
      href: "/dashboard/courses/digital-products/business-operating-system/operating-the-business/system-bottlenecks",
    },
    {
      title: "Scaling Without Chaos",
      description:
        "Grow output and revenue without burning out or breaking what already works.",
      href: "/dashboard/courses/digital-products/business-operating-system/operating-the-business/scaling-without-chaos",
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 6</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Operating the Business
        </h1>
        <p style={{ marginTop: 12, maxWidth: 720, opacity: 0.85 }}>
          This phase focuses on stability. You’ll create operating rhythms,
          track the right metrics, resolve bottlenecks, and scale the business
          without chaos or burnout.
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
        title="Operating the Business Coach"
        description="Use this coach to stabilize operations, resolve bottlenecks, and scale the business without burnout."
      />
    </div>
  );
}
