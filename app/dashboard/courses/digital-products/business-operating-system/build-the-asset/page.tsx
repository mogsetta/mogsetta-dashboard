import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function BuildTheAssetPhasePage() {
  const lessons = [
    {
      title: "Minimum Viable Asset",
      description:
        "Define the smallest version of your website or product that can actually sell.",
      href: "/dashboard/courses/digital-products/business-operating-system/build-the-asset/minimum-viable-asset",
    },
    {
      title: "What Actually Converts",
      description:
        "Focus on the pages, elements, and messaging that drive action—not aesthetics.",
      href: "/dashboard/courses/digital-products/business-operating-system/build-the-asset/what-converts",
    },
    {
      title: "Build Order & Priorities",
      description:
        "Decide what must be built first, what can wait, and what should be skipped entirely.",
      href: "/dashboard/courses/digital-products/business-operating-system/build-the-asset/build-order",
    },
    {
      title: "Shipping Without Perfection",
      description:
        "Learn how to launch before everything feels finished—without damaging trust.",
      href: "/dashboard/courses/digital-products/business-operating-system/build-the-asset/shipping-without-perfection",
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 3</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Build the Asset
        </h1>
        <p style={{ marginTop: 12, maxWidth: 700, opacity: 0.85 }}>
          This phase turns your offer into something real. You’ll build the
          minimum viable asset, focus only on what drives conversion, and ship
          without getting stuck chasing perfection.
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
        title="Build the Asset Coach"
        description="Use this coach to decide what to build first, avoid overengineering, and ship a usable asset."
      />
    </div>
  );
}
