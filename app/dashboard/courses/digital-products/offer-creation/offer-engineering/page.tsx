import Link from "next/link";

export default function OfferEngineeringHub() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Offer Engineering
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Offer Engineering is where your offer is refined into something that
        feels obvious, valuable, and easy to say yes to.
      </p>

      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Link href="./offer-engineering/value-stacking">
          → Value Stacking
        </Link>

        <Link href="./offer-engineering/pricing-logic">
          → Pricing Logic
        </Link>

        <Link href="./offer-engineering/guarantees">
          → Guarantees & Risk Reversal
        </Link>
      </div>
    </div>
  );
}