import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "offer-creation",
  lesson: "launch-readiness",
} satisfies {
  intent: "lesson" | "strategy";
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
};

export default function LaunchReadinessPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Launch Readiness</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Pressure-test your offer before launch. You’ll validate clarity, pricing,
        objections, and execution readiness so you don’t ship something fragile.
      </p>

      {/* Section 1 */}
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>What “Launch Ready” Actually Means</h2>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
          Launch readiness is not about perfection. It’s about eliminating unknowns.
          A launch-ready offer is one where confusion, hesitation, and friction have
          been intentionally reduced before money is exchanged.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>The 4 Failure Points to Test</h2>
        <ul style={{ opacity: 0.85, lineHeight: 1.8 }}>
          <li><strong>Clarity:</strong> Can someone explain your offer in one sentence after hearing it once?</li>
          <li><strong>Pricing:</strong> Does the price feel obvious, not justified?</li>
          <li><strong>Objections:</strong> Are doubts being addressed before they arise?</li>
          <li><strong>Execution:</strong> Can you deliver this consistently without burnout?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Minimum Proof Before Launch</h2>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
          You don’t need case studies or scale. You need signals.
          Conversations, reactions, early yeses, and resistance patterns are
          all forms of proof at this stage.
        </p>
      </section>

      {/* Section 4 */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Your Readiness Checklist</h2>
        <ul style={{ opacity: 0.85, lineHeight: 1.8 }}>
          <li>One clear promise you can confidently repeat</li>
          <li>A price you won’t hesitate to say out loud</li>
          <li>A simple explanation of how results are achieved</li>
          <li>A delivery method you can sustain weekly</li>
        </ul>
      </section>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId="launch-readiness"
          lessonContext={lessonContext}
        />
      </div>

      <div style={{ marginTop: 48, display: "flex", gap: 16 }}>
        <Link href="/dashboard/courses/digital-products/offer-creation/pricing-positioning">
          ← Back: Pricing & Positioning
        </Link>
        <Link href="/dashboard/courses/digital-products">Finish Module →</Link>
      </div>
    </div>
  );
}