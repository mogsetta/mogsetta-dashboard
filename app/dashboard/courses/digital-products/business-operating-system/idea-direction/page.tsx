import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function IdeaDirectionPhasePage() {
  const lessons = [
    {
      title: "Idea Reality Check",
      description:
        "Pressure-test your idea against real-world constraints before you invest time or money.",
      href: "/dashboard/courses/digital-products/business-operating-system/idea-direction/idea-reality-check",
    },
    {
      title: "Founder–Market Fit",
      description:
        "Evaluate whether this business fits your skills, interests, and tolerance for risk.",
      href: "/dashboard/courses/digital-products/business-operating-system/idea-direction/founder-market-fit",
    },
    {
      title: "Market Signal vs Noise",
      description:
        "Learn how to tell the difference between real demand and false signals.",
      href: "/dashboard/courses/digital-products/business-operating-system/idea-direction/market-signal-vs-noise",
    },
    {
      title: "Kill or Commit Decision",
      description:
        "Make a clear decision to either pursue this idea fully or walk away early.",
      href: "/dashboard/courses/digital-products/business-operating-system/idea-direction/kill-or-commit",
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 1</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Idea & Direction
        </h1>
        <p style={{ marginTop: 12, maxWidth: 700, opacity: 0.85 }}>
          This phase helps you avoid building the wrong thing. You will
          pressure-test ideas, assess founder fit, and decide whether an idea
          is worth committing to before moving forward.
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
        title="Idea & Direction Coach"
        description="Use this coach to pressure-test ideas, clarify direction, and decide whether an idea is worth committing to."
      />
    </div>
  );
}
