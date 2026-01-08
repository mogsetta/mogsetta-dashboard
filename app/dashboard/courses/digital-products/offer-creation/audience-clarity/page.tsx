
import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function AudienceClarityPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Audience Clarity</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        If the audience is fuzzy, the offer is fuzzy. This lesson forces precision:
        who it&apos;s for, what they want, and what they&apos;ll pay to solve.
      </p>

      <div
        style={{
          marginTop: 28,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 18,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 10 }}>
          Framework
        </div>
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, opacity: 0.9 }}>
          <li>
            <strong>Specific person</strong> — role, stage, constraints.
          </li>
          <li>
            <strong>Specific pain</strong> — what hurts today (not theory).
          </li>
          <li>
            <strong>Specific outcome</strong> — what “better” looks like.
          </li>
          <li>
            <strong>Specific blocker</strong> — what keeps them stuck.
          </li>
        </ol>
      </div>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          intent="lesson"
          system="digital-products"
          module="offer-creation"
          coachId="audience-clarity"
          lesson="audience-clarity"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 60 }}>
        <Link
          href="/dashboard/courses/digital-products/offer-creation/solution-definition"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid rgba(255,80,80,0.35)",
            background: "rgba(255,80,80,0.10)",
            fontWeight: 600,
          }}
        >
          Next → Solution Definition
        </Link>
      </div>
    </div>
  );
}