import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function GoToMarketPhasePage() {
  const lessons = [
    {
      title: "Choose a Primary Channel",
      description:
        "Select one distribution channel to focus on first and avoid spreading effort too thin.",
      href: "/dashboard/courses/digital-products/business-operating-system/go-to-market/primary-channel",
    },
    {
      title: "Message–Market Match",
      description:
        "Align your messaging with real buyer pain so the offer resonates immediately.",
      href: "/dashboard/courses/digital-products/business-operating-system/go-to-market/message-market-match",
    },
    {
      title: "First Traffic Strategy",
      description:
        "Design a simple, repeatable way to get initial traffic without complex funnels.",
      href: "/dashboard/courses/digital-products/business-operating-system/go-to-market/first-traffic",
    },
    {
      title: "Launch Without Noise",
      description:
        "Launch intentionally, gather signal, and avoid overhyping or overengineering.",
      href: "/dashboard/courses/digital-products/business-operating-system/go-to-market/launch-without-noise",
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 4</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Go to Market
        </h1>
        <p style={{ marginTop: 12, maxWidth: 700, opacity: 0.85 }}>
          This phase focuses on getting your offer in front of real people.
          You’ll choose a primary channel, refine your message, generate initial
          traffic, and launch without unnecessary noise or complexity.
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
        title="Go to Market Coach"
        description="Use this coach to choose a channel, refine messaging, and plan a focused market entry."
      />
    </div>
  );
}
