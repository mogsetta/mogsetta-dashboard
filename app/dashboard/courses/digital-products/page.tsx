/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";


/*
  DIGITAL PRODUCTS COURSE PAGE
  Clone of Service Systems course structure
  Purpose: Teach scalable digital product systems
*/

export default function DigitalProductsCoursePage() {
  const [activeModule, setActiveModule] = useState("01");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedModule = localStorage.getItem("digital_active_module");
    const savedProgress = localStorage.getItem("digital_progress");
    if (savedModule) setActiveModule(savedModule);
    if (savedProgress) setProgress(Number(savedProgress));
  }, []);

  useEffect(() => {
    localStorage.setItem("digital_active_module", activeModule);
    localStorage.setItem("digital_progress", String(progress));
  }, [activeModule, progress]);

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
          <ProgressStat label="Progress" value={`${progress}%`} />
          <ProgressStat label="Modules" value="5" />
          <ProgressStat label="Estimated Time" value="5–7 hrs" />
        </div>

        <div className="course-hero-actions">
          <button className="primary">Start Course</button>
          <button className="secondary">Resume</button>
        </div>
      </header>

      {/* COURSE COMMAND */}
      <section className="course-command">
        <div className="course-command-left">
          <span className="cmd-eyebrow">CURRENT MODULE</span>
          <strong className="cmd-title">
            {activeModule}. Problem & Market Clarity
          </strong>
        </div>

        <div className="course-command-right">
          <div className="cmd-progress">
            <span>PROGRESS</span>
            <strong>{progress}%</strong>
          </div>

          <button
            className="primary cmd-primary"
            onClick={() => {
              setProgress(Math.min(progress + 20, 100));
            }}
          >
            Continue Module
          </button>
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
          state={activeModule === "01" ? "active" : "locked"}
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

        /* COURSE COMMAND */

        .course-command {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 64px;
          padding: 20px 22px;
          background: linear-gradient(180deg, #0a0b0f, #050506);
          border: 1px solid rgba(220,38,38,0.18);
          border-radius: 18px;
        }

        .course-command-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cmd-eyebrow {
          font-size: 11px;
          letter-spacing: 0.28em;
          opacity: 0.6;
        }

        .cmd-title {
          font-size: 18px;
          font-weight: 600;
        }

        .course-command-right {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .cmd-progress span {
          font-size: 11px;
          letter-spacing: 0.22em;
          opacity: 0.55;
        }

        .cmd-progress strong {
          display: block;
          font-size: 16px;
          margin-top: 4px;
        }

        .cmd-primary {
          padding: 12px 18px;
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
          opacity: 0.55;
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