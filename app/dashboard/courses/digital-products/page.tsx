"use client";

import { useRouter } from "next/navigation";
import { digitalProductsCourse } from "@/lib/courses/digital-products";


/*
  DIGITAL PRODUCTS COURSE PAGE
  Clone of Service Systems course structure
  Purpose: Teach scalable digital product systems
*/

export default function DigitalProductsCoursePage() {
  const router = useRouter();

  const handleResume = () => {
    router.push(
      "/dashboard/courses/digital-products/offer-creation/offer-foundation"
    );
  };

  return (
    <div className="course-shell">
      {/* HERO */}
      <header className="course-hero">
        <span className="course-eyebrow">COURSE · DIGITAL PRODUCTS</span>
        <h1 className="course-title">Digital Product Systems</h1>
        <p className="course-subtitle">
          Build digital products as durable systems, not one-off launches.
          This course focuses on validation, architecture, leverage, and
          expansion — so products compound over time instead of resetting.
        </p>

        <div className="course-hero-bar">
          <ProgressStat label="Progress" value="0%" />
          <ProgressStat label="Modules" value="5" />
          <ProgressStat label="Estimated Time" value="5–7 hrs" />
        </div>

        <div className="course-hero-actions">
          <button className="primary" onClick={handleResume}>
            Start Course
          </button>
          <button className="secondary" onClick={handleResume}>
            Resume
          </button>
        </div>
      </header>

      {/* SYSTEM ORIENTATION */}
      <section className="course-orientation">
        <span className="orientation-eyebrow">SYSTEM ORIENTATION</span>

        <div className="orientation-grid">
          <div className="orientation-card">
            <h4>System Scope</h4>
            <p>
              This system covers scalable digital products — courses, tools,
              templates, and frameworks designed to deliver outcomes without
              manual effort. One‑off PDFs and hustle tactics are excluded by
              design.
            </p>
          </div>

          <div className="orientation-card">
            <h4>Execution Philosophy</h4>
            <p>
              Products are treated as leverage assets. Systems compound when
              structure is prioritized over launches, and clarity over speed.
            </p>
          </div>

          <div className="orientation-card">
            <h4>Success Criteria</h4>
            <p>
              A successful system delivers repeatable value, reduces support
              load, and expands without proportional effort.
            </p>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="course-modules">
        <ModuleCard
          index="01"
          title="Problem & Market Clarity"
          desc="Identify paid problems, define outcomes, and validate demand before building."
          lessons={[
            "Paid problem identification",
            "Outcome promises",
            "Demand validation logic",
          ]}
          state="active"
        />

        <ModuleCard
          index="02"
          title="Product Architecture"
          desc="Design modular products with clear scope and delivery structure."
          lessons={[
            "Modular product design",
            "Scope boundaries",
            "Delivery formats",
          ]}
          state="locked"
        />

        <ModuleCard
          index="03"
          title="Validation & Pricing"
          desc="Sequence validation correctly and set rational pricing."
          lessons={[
            "Validation checkpoints",
            "Pricing logic",
            "Signal confirmation",
          ]}
          state="locked"
        />

        <ModuleCard
          index="04"
          title="Delivery & Leverage"
          desc="Turn products into reusable systems that scale without added effort."
          lessons={[
            "Automation leverage",
            "Support reduction",
            "System reuse",
          ]}
          state="locked"
        />

        <ModuleCard
          index="05"
          title="Iteration & Expansion"
          desc="Improve, expand, and compound products using system feedback loops."
          lessons={[
            "Iteration loops",
            "Product expansion paths",
            "Long-term leverage",
          ]}
          state="locked"
        />
      </section>

      {/* FOOTER CTA */}
      <footer className="course-footer">
        <button className="primary large">Continue Course</button>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        .course-shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 24px 160px;
        }

        .course-hero {
          margin-bottom: 100px;
        }

        .course-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(220, 38, 38, 0.85);
          display: inline-block;
          margin-bottom: 18px;
        }

        .course-title {
          font-size: 46px;
          margin-bottom: 20px;
        }

        .course-subtitle {
          max-width: 860px;
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.8;
        }

        .course-hero-bar {
          display: flex;
          gap: 36px;
          margin-top: 32px;
          margin-bottom: 36px;
        }

        .course-hero-actions {
          display: flex;
          gap: 14px;
        }

        .course-orientation {
          margin-bottom: 96px;
        }

        .orientation-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(220, 38, 38, 0.75);
          display: block;
          margin-bottom: 28px;
        }

        .orientation-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .orientation-card {
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(220, 38, 38, 0.18);
          border-radius: 22px;
          padding: 26px 26px 30px;
        }

        .orientation-card h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .orientation-card p {
          font-size: 14.5px;
          line-height: 1.75;
          opacity: 0.78;
        }

        @media (max-width: 900px) {
          .orientation-grid {
            grid-template-columns: 1fr;
          }
        }

        .course-modules {
          display: grid;
          gap: 28px;
        }

        .course-footer {
          margin-top: 120px;
        }

        .primary {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 22px;
          font-weight: 600;
          cursor: pointer;
        }

        .primary.large {
          padding: 16px 26px;
          font-size: 16px;
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(220, 38, 38, 0.35);
          color: rgba(220, 38, 38, 0.9);
          border-radius: 14px;
          padding: 14px 22px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ProgressStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <strong>{value}</strong>

      <style jsx>{`
        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0.8;
        }

        span {
          font-size: 12px;
        }

        strong {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}

function ModuleCard({
  index,
  title,
  desc,
  lessons,
  state,
}: {
  index: string;
  title: string;
  desc: string;
  lessons: string[];
  state: "active" | "locked";
}) {
  return (
    <div className={`module-card ${state}`}>
      <span className="module-state">
        {state === "active" ? "CURRENT MODULE" : "LOCKED"}
      </span>
      <div className="module-head">
        <span>{index}</span>
        <h3>{title}</h3>
      </div>

      <p className="module-desc">{desc}</p>

      <ul>
        {lessons.map((lesson) => (
          <li key={lesson}>{lesson}</li>
        ))}
      </ul>

      <style jsx>{`
        .module-card {
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(220, 38, 38, 0.18);
          border-radius: 22px;
          padding: 30px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        .module-card.active {
          border-color: rgba(220, 38, 38, 0.45);
          box-shadow:
            0 0 0 1px rgba(220, 38, 38, 0.4),
            0 14px 40px rgba(0, 0, 0, 0.55);
          position: relative;
        }

        .module-card.active::before {
          content: "";
          position: absolute;
          top: 0;
          left: 22px;
          right: 22px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(220,38,38,0.0),
            rgba(220,38,38,0.55),
            rgba(220,38,38,0.0)
          );
        }

        .module-card.locked {
          opacity: 0.55;
        }

        .module-card.active:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(220, 38, 38, 0.55),
            0 18px 50px rgba(0, 0, 0, 0.65);
        }

        .module-state {
          display: block;
          font-size: 11px;
          letter-spacing: 0.24em;
          opacity: 0.45;
          margin-bottom: 10px;
        }

        .module-card.active .module-state {
          opacity: 0.85;
        }

        .module-head span {
          font-size: 12px;
          letter-spacing: 0.22em;
          color: rgba(220, 38, 38, 0.85);
        }

        h3 {
          margin: 6px 0 12px;
          font-size: 22px;
        }

        .module-desc {
          opacity: 0.78;
          margin-bottom: 16px;
          line-height: 1.7;
        }

        li {
          font-size: 14px;
          opacity: 0.7;
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}