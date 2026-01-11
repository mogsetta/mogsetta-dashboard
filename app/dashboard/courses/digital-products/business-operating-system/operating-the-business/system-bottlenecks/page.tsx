

import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function SystemBottlenecksLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 6 · Operating the Business
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          System Bottlenecks
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Growth exposes constraints. This lesson helps you identify the true
          bottleneck in your system so you fix the right problem instead of
          optimizing everything at once.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Bottlenecks move as you grow
        </h2>
        <p style={{ opacity: 0.85 }}>
          Early bottlenecks are often marketing or conversion issues. As volume
          increases, constraints shift to fulfillment, support, or operations.
          The goal is to fix the current bottleneck — not future ones.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          How to identify the real constraint
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>Where work piles up or slows down</li>
          <li>Where customers experience delays or friction</li>
          <li>Where you personally become the limiter</li>
        </ul>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Fixing bottlenecks systematically
        </h2>
        <p style={{ opacity: 0.85 }}>
          Remove constraints one at a time. Fixing the bottleneck increases
          throughput, but it will also reveal the next constraint. This is a
          normal and healthy progression — not a failure.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/operating-the-business">
          <button
            style={{
              border: "1px solid #dc2626",
              background: "transparent",
              color: "#dc2626",
              borderRadius: 8,
              padding: "10px 16px",
              cursor: "pointer",
            }}
          >
            ← Back to Phase
          </button>
        </Link>
      </div>

      <CoachChat
        intent="lesson"
        system="digital-products"
        module="business-operating-system"
        lesson="system-bottlenecks"
        coachId="digital-products"
        title="System Bottleneck Coach"
        description="Use this coach to identify the true constraint in your business and fix the right problem at the right time."
      />
    </div>
  );
}