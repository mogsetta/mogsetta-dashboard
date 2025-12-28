"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/*
  SERVICE SYSTEMS COURSE PAGE
  Clone of E-Commerce course structure
  Purpose: Teach productized service design & delivery systems
*/

export default function ServiceSystemsCoursePage() {
  const router = useRouter();
  const [activeModule, setActiveModule] = useState("01");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedModule = localStorage.getItem("service_active_module");
    const savedProgress = localStorage.getItem("service_progress");

    if (savedModule) setActiveModule(savedModule);
    if (savedProgress) setProgress(Number(savedProgress));
  }, []);

  useEffect(() => {
    localStorage.setItem("service_active_module", activeModule);
    localStorage.setItem("service_progress", String(progress));
  }, [activeModule, progress]);

  const handleResume = () => {
    // Default first lesson
    let nextPath =
      "/dashboard/courses/service-systems/client-acquisition/offer-clarity";

    const completed = JSON.parse(
      localStorage.getItem("service_completed_lessons") || "[]"
    ) as string[];

    // Future-proof: if offer-clarity is complete, move forward later
    if (completed.includes("offer-clarity")) {
      nextPath =
        "/dashboard/courses/service-systems/client-acquisition/offer-clarity";
    }

    router.push(nextPath);
  };

  return (
    <div className="course-shell">
      {/* COMMAND HEADER */}
      <header className="course-command">
        <span className="course-eyebrow">SERVICE SYSTEM</span>
        <h1 className="course-title">Service Systems Operator</h1>
        <p className="course-subtitle">
          Build productized services that deliver predictable outcomes without founder dependency.
        </p>

        <div className="course-command-action">
          <button className="primary large" onClick={handleResume}>
            Resume Execution
          </button>
        </div>
      </header>

      <section className="system-brief">
        <p>
          This system teaches how to design, deliver, and scale services using
          standardized scope, defined outcomes, and repeatable delivery architecture.
        </p>
      </section>

      {/* MODULES */}
      <section className="course-modules">
        <ModuleCard
          index="01"
          title="Service Offer Design"
          desc="Define clear outcomes, scope boundaries, and pricing logic before delivery begins."
          lessons={[
            "Outcome-based offers",
            "Scope definition & exclusions",
            "Pricing for clarity & margin",
          ]}
          state={activeModule === "01" ? "active" : "locked"}
        />

        <ModuleCard
          index="02"
          title="Delivery Architecture"
          desc="Systemize fulfillment so services can be delivered consistently and delegated."
          lessons={[
            "Standard delivery steps",
            "SOP creation",
            "Reducing variability",
          ]}
          state="locked"
        />

        <ModuleCard
          index="03"
          title="Onboarding & Alignment"
          desc="Set expectations early to prevent revisions, confusion, and scope creep."
          lessons={[
            "Client onboarding systems",
            "Expectation alignment",
            "Handoff & kickoff flows",
          ]}
          state="locked"
        />

        <ModuleCard
          index="04"
          title="Delegation & Capacity"
          desc="Remove founder dependency and build a service that runs without you."
          lessons={[
            "Role definition",
            "Delegation frameworks",
            "Quality control loops",
          ]}
          state="locked"
        />

        <ModuleCard
          index="05"
          title="Retention & Expansion"
          desc="Design ongoing value so services compound instead of resetting every month."
          lessons={[
            "Renewal logic",
            "Service expansion paths",
            "Churn reduction systems",
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

        /* COMMAND HEADER */

        .course-command {
          margin-bottom: 80px;
        }

        .course-command-action {
          margin-top: 32px;
        }

        /* HERO */

        .course-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(124, 108, 255, 0.85);
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

        /* SYSTEM BRIEF */

        .system-brief {
          max-width: 760px;
          margin-bottom: 72px;
          font-size: 16px;
          line-height: 1.8;
          opacity: 0.75;
        }

        /* MODULES */

        .course-modules {
          display: grid;
          gap: 28px;
        }

        /* FOOTER */

        .course-footer {
          margin-top: 120px;
        }

        /* BUTTONS */

        .primary {
          background: linear-gradient(135deg, #7c6cff, #5a4de6);
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
          border: 1px solid rgba(124, 108, 255, 0.35);
          color: rgba(124, 108, 255, 0.9);
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
          border: 1px solid rgba(124, 108, 255, 0.18);
          border-radius: 22px;
          padding: 30px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        .module-card.active {
          border-color: rgba(124, 108, 255, 0.45);
          box-shadow:
            0 0 0 1px rgba(124, 108, 255, 0.4),
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
            rgba(124,108,255,0.0),
            rgba(124,108,255,0.55),
            rgba(124,108,255,0.0)
          );
        }

        .module-card.locked {
          opacity: 0.55;
        }

        .module-card.active:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(124, 108, 255, 0.55),
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
          color: rgba(124, 108, 255, 0.85);
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