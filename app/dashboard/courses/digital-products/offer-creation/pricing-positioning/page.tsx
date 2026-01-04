import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function PricingPositioningLesson() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Pricing & Positioning
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        In this lesson, you’ll lock in pricing and positioning so your offer feels obvious, credible, and worth paying for — without discounting, hesitation, or complexity.
      </p>

      {/* Content */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          How Pricing Shapes Perceived Value
        </h2>
        <p style={{ lineHeight: 1.7, opacity: 0.85 }}>
          Pricing is not just about money — it signals quality, seriousness, and who your offer is for. 
          A strong price anchors your positioning and filters in the right buyers while filtering out the wrong ones.
        </p>
        <ul style={{ marginTop: 16, paddingLeft: 18, opacity: 0.85 }}>
          <li>Does this price feel obvious for the outcome?</li>
          <li>Is it easy to explain why it costs what it costs?</li>
          <li>Does it support profit at low volume?</li>
          <li>Does it attract serious buyers?</li>
        </ul>
      </section>

      <section style={{ marginTop: 36 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The Pricing Mistake Most Creators Make
        </h2>
        <p style={{ lineHeight: 1.7, opacity: 0.85 }}>
          Most creators price based on effort, fear, or comparison — not outcomes. 
          This leads to underpricing, constant justification, and low-quality buyers.
        </p>
        <ul style={{ marginTop: 16, paddingLeft: 18, opacity: 0.85 }}>
          <li>Pricing based on time spent instead of value created</li>
          <li>Copying competitor prices without context</li>
          <li>Lowering price to feel “safe”</li>
        </ul>
      </section>

      <section style={{ marginTop: 36 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Simple Pricing Framework
        </h2>
        <p style={{ lineHeight: 1.7, opacity: 0.85 }}>
          Use this framework to arrive at a clean, confident price without overthinking:
        </p>
        <ol style={{ marginTop: 16, paddingLeft: 18, opacity: 0.85, lineHeight: 1.7 }}>
          <li>Anchor the price to the outcome, not the effort.</li>
          <li>Choose a price that feels uncomfortable—but honest.</li>
          <li>Ensure delivery is simple at low volume.</li>
          <li>Make the decision obvious for the right buyer.</li>
        </ol>
      </section>

      <section style={{ marginTop: 36 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Your Task
        </h2>
        <p style={{ lineHeight: 1.7, opacity: 0.85 }}>
          Write down:
        </p>
        <ol style={{ marginTop: 12, paddingLeft: 18, opacity: 0.85, lineHeight: 1.7 }}>
          <li>Your initial price</li>
          <li>The outcome it delivers in one sentence</li>
          <li>Who this price is perfect for</li>
          <li>Who this price should turn away</li>
        </ol>
        <p style={{ marginTop: 12, opacity: 0.8 }}>
          If you can’t explain your price clearly, the market won’t understand it either.
        </p>
      </section>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 80,
        }}
      >
        <Link href="/dashboard/courses/digital-products/offer-creation/offer-foundation">
          ← Offer Foundation
        </Link>
        <Link href="/dashboard/courses/digital-products/offer-creation/launch-readiness">
          Launch Readiness →
        </Link>
      </div>

      {/* Coach Chat */}
      <CoachChat
        system="digital-products"
        coachId="pricing-positioning"
        lessonContext={{
          system: "digital-products",
          module: "offer-creation",
          lesson: "pricing-positioning",
          intent: "lesson",
        }}
      />
    </div>
  );
}
