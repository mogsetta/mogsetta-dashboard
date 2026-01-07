import CoachChat from "@/components/CoachChat";

export default function OfferStructureLesson() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Offer Structure
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This module sets the foundation for how your offer is organized, communicated, and delivered. 
        Before we engineer value, pricing, or guarantees, the structure must be clear.
      </p>

      <div style={{ marginTop: 36, padding: 20, borderRadius: 12, background: "rgba(0,0,0,0.04)" }}>
        <h2 style={{ fontSize: 22, marginBottom: 10 }}>The Offer Equation</h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
          Every strong offer follows the same equation:
        </p>
        <p style={{ fontSize: 18, fontWeight: 600, marginTop: 10 }}>
          Promise × Structure × Constraints = Clarity
        </p>
        <ul style={{ marginTop: 14, fontSize: 16, lineHeight: 1.7 }}>
          <li><strong>Promise:</strong> The outcome the buyer expects.</li>
          <li><strong>Structure:</strong> How that outcome is delivered.</li>
          <li><strong>Constraints:</strong> Who it is for, and who it is not.</li>
        </ul>
      </div>

      <div style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What You Will Define
        </h2>

        <ul style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
          <li>The single outcome your customer is buying</li>
          <li>How that outcome is delivered</li>
          <li>What is included vs excluded</li>
          <li>Realistic timelines for results</li>
          <li>Who this offer is for — and who it is not</li>
        </ul>
      </div>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The 5-Part Offer Structure
        </h2>

        <ul style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
          <li>
            <strong>Core Promise:</strong> The single outcome your customer is buying.
          </li>
          <li>
            <strong>Delivery Method:</strong> How the value is delivered (course, templates, coaching, system).
          </li>
          <li>
            <strong>Scope:</strong> What is included and, just as importantly, what is not.
          </li>
          <li>
            <strong>Timeframe:</strong> How long it realistically takes to see results.
          </li>
          <li>
            <strong>Constraints:</strong> Who this is for and who it is not for.
          </li>
        </ul>

        <p style={{ marginTop: 16, fontSize: 16, opacity: 0.85 }}>
          A clear structure reduces buyer hesitation and makes every future decision easier — pricing, bonuses, and messaging all depend on this.
        </p>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Why Most Offers Fail</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
          <li>The outcome is vague or undefined.</li>
          <li>The delivery method is unclear.</li>
          <li>The scope is bloated or unfocused.</li>
          <li>The timeline is unrealistic.</li>
          <li>There are no clear constraints.</li>
        </ul>
        <p style={{ marginTop: 12, fontSize: 16, opacity: 0.85 }}>
          Structure is what turns “interest” into confidence. Without it, buyers hesitate.
        </p>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Checkpoint</h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
          Before moving on, make sure you can clearly answer:
        </p>
        <ul style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
          <li>What exact outcome am I selling?</li>
          <li>How is that outcome delivered?</li>
          <li>What is included — and excluded?</li>
          <li>How long should results realistically take?</li>
          <li>Who should not buy this?</li>
        </ul>
      </div>

      <div style={{ marginTop: 40 }}>
        <CoachChat system="digital-products" coachId="offer-structure" />
      </div>

      <div style={{ marginTop: 48 }}>
        <a
          href="/dashboard/courses/digital-products/offer-creation/offer-engineering"
          style={{
            display: "inline-block",
            padding: "14px 20px",
            background: "#111",
            color: "#fff",
            borderRadius: 8,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          Begin Offer Engineering →
        </a>
      </div>
    </div>
  );
}