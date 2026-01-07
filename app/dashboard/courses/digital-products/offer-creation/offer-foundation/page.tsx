import CoachChat from "@/components/CoachChat";

export default function OfferFoundationPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Offer Foundation
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        In this lesson, you’ll build the structural foundation of your offer.
        This is where vague ideas become a clear, sellable mechanism that
        supports pricing, messaging, and scale.
      </p>

      <div style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          What an Offer Actually Is
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          An offer is not the product. It is the complete value exchange: the
          problem being solved, the promised outcome, the mechanism that delivers
          it, and the tradeoff required from the buyer.
        </p>

        <ul style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.7 }}>
          <li>The painful problem</li>
          <li>The specific outcome promised</li>
          <li>The mechanism that creates the outcome</li>
          <li>The cost (money, time, effort, risk)</li>
        </ul>
      </div>

      <div style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          The Biggest Offer Mistake
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Most creators sell features instead of transformation. Buyers do not
          want information — they want relief, speed, or certainty.
        </p>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          If your offer cannot be explained as a clear before-and-after change,
          it will struggle to convert regardless of quality.
        </p>
      </div>

      <div style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          The Outcome Statement
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          A strong offer can be summarized in one sentence:
        </p>
        <p style={{ opacity: 0.85, lineHeight: 1.7, fontStyle: "italic" }}>
          “I help [who] achieve [specific outcome] without [main obstacle].”
        </p>
      </div>

      <div style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          Your Task
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Write down:
        </p>
        <ul style={{ opacity: 0.85, lineHeight: 1.7 }}>
          <li>The core problem you are solving</li>
          <li>The exact outcome your buyer wants</li>
          <li>The mechanism you will teach or deliver</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: 56,
          padding: 28,
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>
          The Offer Stack
        </h2>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              title: "Outcome",
              desc: "The specific result your buyer wants to achieve.",
            },
            {
              title: "Mechanism",
              desc: "How your product delivers that outcome differently.",
            },
            {
              title: "Proof",
              desc: "Why the buyer should believe this will work for them.",
            },
            {
              title: "Risk Reversal",
              desc: "How you reduce fear, doubt, or perceived downside.",
            },
            {
              title: "Friction Removal",
              desc: "What makes saying yes easy right now.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 18,
                borderRadius: 12,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <strong style={{ display: "block", marginBottom: 6 }}>
                {item.title}
              </strong>
              <span style={{ opacity: 0.8 }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId="offer-foundation"
          title="Offer Foundation"
          description="Clarify the core structure of your offer so it can scale."
          lessonContext={{
            system: "digital-products",
            module: "offer-creation",
            lesson: "offer-foundation",
            intent: "lesson",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 48,
        }}
      >
        <a
          href="/dashboard/courses/digital-products/offer-creation/problem-selection"
          style={{ opacity: 0.7 }}
        >
          ← Problem Selection
        </a>

        <a
          href="/dashboard/courses/digital-products/offer-creation/offer-structure"
          style={{ fontWeight: 500 }}
        >
          Offer Structure →
        </a>
      </div>
    </div>
  );
}