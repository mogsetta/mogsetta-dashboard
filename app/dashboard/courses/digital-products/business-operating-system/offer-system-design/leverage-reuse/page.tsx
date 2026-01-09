import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function LeverageReuseLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 2 · Lesson 4</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Leverage & Reuse
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Sustainable businesses are built on systems that compound. This lesson
          helps you design your offer so work is reused, standardized, and
          leveraged instead of recreated each time.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why leverage separates businesses from jobs
        </h2>
        <p style={{ opacity: 0.85 }}>
          If every sale requires the same level of effort, attention, or
          customization, growth will eventually stall. Leverage allows your
          business to grow without a linear increase in workload.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          The goal is not to remove all human involvement — it’s to ensure your
          effort compounds rather than resets.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Common sources of leverage
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Reusable Assets:</strong> Templates, frameworks, recordings,
            and documentation used repeatedly.
          </li>
          <li>
            <strong>Standardized Processes:</strong> Clear steps that reduce
            decision-making and errors.
          </li>
          <li>
            <strong>Automation:</strong> Tools that handle repetitive tasks
            without constant oversight.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Identify reuse opportunities
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use the questions below to uncover where leverage already exists or
          could be introduced:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            What work do I repeat for every customer or project?
          </li>
          <li>
            Which explanations, steps, or deliverables are mostly the same?
          </li>
          <li>
            What could be documented once instead of explained repeatedly?
          </li>
          <li>
            Where does personalization add real value — and where does it not?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Design for compounding effort
        </h2>
        <p style={{ opacity: 0.85 }}>
          Leverage doesn’t mean removing care or quality. It means designing your
          system so each improvement benefits future customers automatically.
          Over time, this creates stability, scalability, and freedom.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/offer-system-design">
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
        lesson="leverage-reuse"
        coachId="digital-products"
        title="Leverage & Reuse Coach"
        description="Use this coach to design systems that compound effort, increase leverage, and avoid rebuilding from scratch."
      />
    </div>
  );
}
