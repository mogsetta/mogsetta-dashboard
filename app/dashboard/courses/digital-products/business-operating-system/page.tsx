import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function BusinessOperatingSystemPage() {
  const phases = [
    {
      id: 1,
      title: "Idea & Direction",
      description: "Pressure-test ideas and choose a direction worth pursuing.",
      href: "/dashboard/courses/digital-products/business-operating-system/idea-direction",
    },
    {
      id: 2,
      title: "Offer & System Design",
      description: "Turn your idea into a clear offer and delivery system.",
      href: "/dashboard/courses/digital-products/business-operating-system/offer-system-design",
    },
    {
      id: 3,
      title: "Build the Asset",
      description: "Create the minimum viable website or product to sell.",
      href: "/dashboard/courses/digital-products/business-operating-system/build-the-asset",
    },
    {
      id: 4,
      title: "Go to Market",
      description: "Get traffic, test demand, and avoid wasted ad spend.",
      href: "/dashboard/courses/digital-products/business-operating-system/go-to-market",
    },
    {
      id: 5,
      title: "First Sales & Feedback",
      description: "Interpret results, adjust intelligently, and learn fast.",
      href: "/dashboard/courses/digital-products/business-operating-system/first-sales-feedback",
    },
    {
      id: 6,
      title: "Operating the Business",
      description: "Stabilize, automate, and operate without burnout.",
      href: "/dashboard/courses/digital-products/business-operating-system/operating-the-business",
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 36, fontWeight: 600 }}>
          Business Operating System
        </h1>
        <p style={{ marginTop: 12, opacity: 0.8, maxWidth: 700 }}>
          Turn your offer into a real, working business. Follow the phases in
          order, revisit them when you get stuck, and use the AI coach as your
          thinking partner.
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
        {phases.map((phase) => (
          <div
            key={phase.id}
            style={{
              border: "1px solid #dc2626",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.7 }}>
              Phase {phase.id}
            </div>
            <h3 style={{ marginTop: 8, fontSize: 20 }}>{phase.title}</h3>
            <p style={{ marginTop: 8, opacity: 0.8 }}>
              {phase.description}
            </p>

            <Link href={phase.href}>
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
                Enter Phase →
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
        title="Business Operating Coach"
        description="Use this coach to think through where you are, what matters next, and which phase you should focus on."
      />
    </div>
  );
}
