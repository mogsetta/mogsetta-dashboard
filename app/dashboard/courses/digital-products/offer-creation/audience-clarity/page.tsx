import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function AudienceClarityLesson() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Audience Clarity
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This lesson helps you get extremely specific about who your product is
        for. Strong offers are built for a single type of person with a single
        dominant problem — not vague audiences.
      </p>

      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What You Need to Decide
        </h2>

        <ul style={{ lineHeight: 1.8, opacity: 0.85 }}>
          <li>The exact situation your ideal customer is currently in</li>
          <li>The primary problem they are actively trying to solve</li>
          <li>What outcome they want as fast as possible</li>
          <li>Why existing solutions are not working for them</li>
        </ul>
      </div>

      <div style={{ marginTop: 40 }}>
        <CoachChat system="digital-products" coachId="audience-clarity" />
      </div>

      <div
        style={{
          marginTop: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="../problem-selection"
          style={{ opacity: 0.7 }}
        >
          ← Problem Selection
        </Link>

        <Link
          href="../offer-foundation"
          style={{ fontWeight: 500 }}
        >
          Offer Foundation →
        </Link>
      </div>
    </div>
  );
}
