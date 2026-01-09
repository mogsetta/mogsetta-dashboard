import Link from "next/link";

export default function OfferCreationPage() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Offer Creation
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        Learn how to design service offers that are clear, valuable, and easy to sell —
        before you spend time building the wrong system.
      </p>

      {/* Overview */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          What You’ll Build
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Offer Creation is about choosing the right problem, defining the right
          client, and structuring a service solution clients already want to buy.
          This course helps you avoid wasted time, unclear positioning, and weak demand.
        </p>
      </section>

      {/* Steps */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
          How the Course Works
        </h2>

        <ol style={{ paddingLeft: 20, lineHeight: 1.8, opacity: 0.9 }}>
          <li><strong>Problem Selection</strong> — Identify a painful, valuable problem worth solving.</li>
          <li><strong>Audience Clarity</strong> — Define exactly who experiences that problem.</li>
          <li><strong>Solution Definition</strong> — Design the outcome your offer delivers.</li>
          <li><strong>Offer Structure</strong> — Package the solution into a clear, logical offer.</li>
          <li><strong>Offer Engineering</strong> — Refine value, pricing, and guarantees.</li>
        </ol>
      </section>

      {/* Start */}
      <div>
        <Link
          href="/dashboard/courses/service-systems/offer-creation/problem-selection"
          style={{
            textDecoration: "none",
            padding: "16px 24px",
            borderRadius: 12,
            background: "#7c3aed",
            color: "#fff",
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          Begin with Problem Selection →
        </Link>
      </div>
    </div>
  );
}
