import CoachChat from "@/components/CoachChat";
import Link from "next/link";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "offer-creation",
  lesson: "problem-selection",
} satisfies {
  intent: "lesson" | "strategy";
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
};

export default function ProblemSelectionLesson() {
  return (
    <div style={{ padding: "48px", maxWidth: 920, margin: "0 auto" }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 8 }}>
        Digital Products · Offer Creation · Lesson 1 of 4
      </div>

      <h1 style={{ fontSize: 36, marginBottom: 12 }}>
        Problem Selection
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, marginBottom: 32 }}>
        Every strong digital product starts with a painful, specific problem.
        Most people fail here because they chase ideas instead of problems.
        This lesson fixes that permanently.
      </p>

      {/* SECTION 1 */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The Core Rule
        </h2>
        <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
          If people are not actively trying to solve a problem right now,
          they will not pay for a solution.
          Interest is not pain. Curiosity is not urgency.
        </p>
      </div>

      {/* SECTION 2 */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 40,
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>
          Problem Filters (Non-Negotiable)
        </h2>

        <ul style={{ opacity: 0.8, lineHeight: 1.8 }}>
          <li>The problem costs time, money, or emotional energy</li>
          <li>People already try to solve it without you</li>
          <li>There is a clear “before” and “after” state</li>
          <li>You can describe the pain in one sentence</li>
        </ul>
      </div>

      {/* SECTION 2.5 */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 40,
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>
          The 3 Problem Types That Sell
        </h2>

        <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 16 }}>
          Almost every successful digital product solves one of these three problem categories.
          If your idea does not clearly fit at least one, it is weak.
        </p>

        <ul style={{ opacity: 0.8, lineHeight: 1.9 }}>
          <li>
            <strong>Pain-of-Loss Problems</strong> — People are actively losing money, time,
            or opportunities if they do nothing.
            <br />
            <span style={{ opacity: 0.7 }}>Example: missed sales, wasted ad spend, failed launches.</span>
          </li>

          <li>
            <strong>Time-Collapse Problems</strong> — People already know the solution,
            but want it faster, simpler, or with fewer mistakes.
            <br />
            <span style={{ opacity: 0.7 }}>Example: compressing years of trial-and-error into weeks.</span>
          </li>

          <li>
            <strong>Status-Risk Problems</strong> — People fear looking incompetent,
            falling behind peers, or making the wrong visible decision.
            <br />
            <span style={{ opacity: 0.7 }}>Example: choosing the wrong niche, pricing wrong, public failure.</span>
          </li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 48,
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>
          Your Task
        </h2>

        <p style={{ opacity: 0.8, marginBottom: 12 }}>
          Write down <strong>three problems</strong> you have personally experienced
          or repeatedly observed.
        </p>

        <p style={{ opacity: 0.7 }}>
          Avoid vague ideas like “motivation” or “confidence.”
          Be concrete. Real pain has details.
        </p>
      </div>

      {/* SECTION 4 */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 48,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>
          Lock Your Problem (No Switching)
        </h2>

        <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: 14 }}>
          Choose <strong>one problem</strong> to build around. You are not allowed to switch
          until you finish the next three lessons.
        </p>

        <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 14 }}>
          Most failed products don’t fail because the idea was bad — they fail because
          the creator kept changing direction before the offer had time to mature.
        </p>

        <p style={{ opacity: 0.75 }}>
          Write your chosen problem in one sentence and commit to it. You can change it later,
          but not now.
        </p>
      </div>

      {/* COACH */}
      <div style={{ marginBottom: 56 }}>
        <CoachChat
          system="digital-products"
          module="offer-creation"
          lesson="problem-selection"
          intent="lesson"
          coachId="problem-selection"
        />
      </div>

      {/* FOOTER NAV */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 24,
          marginBottom: 120,
        }}
      >
        <div style={{ opacity: 0.4, fontSize: 14 }}>
          ← Previous
        </div>

        <Link
          href="/dashboard/courses/digital-products/offer-creation/audience-clarity"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            borderRadius: 14,
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Next Lesson →
        </Link>
      </div>
    </div>
  );
}
