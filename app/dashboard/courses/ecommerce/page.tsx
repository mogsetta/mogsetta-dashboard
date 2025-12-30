"use client";

import { useRouter } from "next/navigation";
import { getResumePath } from "@/lib/progress";

/*
  E‑COMMERCE COURSE PAGE
  Purpose: Foundational course template to clone for Digital Products & Service Systems
*/

export default function EcommerceCoursePage() {
  const router = useRouter();


  const handleStart = () => {
    router.push("/dashboard/courses/ecommerce/offer-engineering");
  };

  const handleResume = () => {
    const resumePath = getResumePath(
      "ecommerce",
      "offer-engineering"
    );

    router.push(
      resumePath ?? "/dashboard/courses/ecommerce/offer-engineering"
    );
  };

  return (
    <div className="course-shell">
      {/* HERO */}
      <header className="course-hero">
        <span className="course-eyebrow">COURSE · E‑COMMERCE SYSTEMS</span>
        <h1 className="course-title">E‑Commerce Growth Engine</h1>
        <p className="course-subtitle">
          Build and scale e‑commerce businesses as durable systems. This course
          focuses on offer leverage, conversion mechanics, retention loops, and
          operational clarity — not tactics or trends.
        </p>

        <div className="course-hero-bar">
          <ProgressStat label="Progress" value="0%" />
          <ProgressStat label="Modules" value="5" />
          <ProgressStat label="Estimated Time" value="6–8 hrs" />
        </div>

        <div className="course-hero-actions">
          <button className="primary" onClick={handleStart}>
            Start Course
          </button>
          <button className="secondary" onClick={handleResume}>
            Resume
          </button>
        </div>
      </header>

      {/* SYSTEM ORIENTATION */}
      <section className="course-orientation">
        <div className="orientation-grid">
          <div>
            <span className="orientation-label">SYSTEM SCOPE</span>
            <p>
              This system governs how offers are structured, how conversion is
              engineered, and how revenue compounds over time in an e‑commerce
              business.
            </p>
          </div>

          <div>
            <span className="orientation-label">SUCCESS CRITERIA</span>
            <p>
              Clarity of offer, predictable conversion, controlled scaling, and
              repeatable retention — not short‑term spikes.
            </p>
          </div>

          <div>
            <span className="orientation-label">NOT THE FOCUS</span>
            <p>
              Tools, platforms, hacks, or trends. Those are downstream decisions
              made after system integrity is established.
            </p>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="course-modules">
        <div
          onClick={() =>
            router.push(
              "/dashboard/courses/ecommerce/offer-engineering"
            )
          }
          style={{ cursor: "pointer" }}
        >
          <ModuleCard
            index="01"
            title="Offer Engineering"
            desc="Design high‑leverage offers before touching products, traffic, or ads."
            lessons={[
              "Why offers beat products",
              "Value stacking & pricing logic",
              "Guarantees & positioning",
            ]}
            state="active"
          />
        </div>

        <ModuleCard
          index="02"
          title="Storefront Conversion"
          desc="Turn visitors into buyers using clarity, trust, and friction removal."
          lessons={[
            "Product page anatomy",
            "Trust & proof systems",
            "UX for decisive action",
          ]}
          state="locked"
        />

        <ModuleCard
          index="03"
          title="Checkout & AOV"
          desc="Increase revenue per customer without hurting conversion."
          lessons={[
            "Order bumps & upsells",
            "Checkout psychology",
            "Post‑purchase flows",
          ]}
          state="locked"
        />

        <ModuleCard
          index="04"
          title="Traffic & Signal"
          desc="Deploy traffic correctly and read signal before scaling."
          lessons={[
            "Cold vs warm traffic",
            "Interpreting conversion data",
            "When not to scale",
          ]}
          state="locked"
        />

        <ModuleCard
          index="05"
          title="Retention & Scale"
          desc="Build compounding growth loops instead of one‑off wins."
          lessons={[
            "Email & SMS systems",
            "Repeat purchase loops",
            "Scaling with stability",
          ]}
          state="locked"
        />
      </section>


      {/* STYLES */}
      <style jsx>{`
        .course-shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 24px 160px;
        }

        /* HERO */

        .course-hero {
          margin-bottom: 100px;
        }

        .course-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(0, 102, 204, 0.85);
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

        /* SYSTEM ORIENTATION */

        .course-orientation {
          margin: 72px 0 96px;
        }

        .orientation-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          padding: 28px 32px;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 14px 40px rgba(0,0,0,0.55);
        }

        .orientation-label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(59,130,246,0.85);
          margin-bottom: 10px;
        }

        .orientation-grid p {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.8;
        }

        @media (max-width: 900px) {
          .orientation-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
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
          background: linear-gradient(135deg, #0066cc, #004a99);
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
          border: 1px solid rgba(0, 102, 204, 0.35);
          color: #0066cc;
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
          border: 1px solid rgba(0, 102, 204, 0.18);
          border-radius: 22px;
          padding: 30px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        .module-card.active {
          border-color: rgba(0, 102, 204, 0.45);
          box-shadow:
            0 0 0 1px rgba(0, 102, 204, 0.4),
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
            rgba(0,102,204,0.0),
            rgba(0,102,204,0.55),
            rgba(0,102,204,0.0)
          );
        }

        .module-card.locked {
          opacity: 0.55;
        }

        .module-card.active:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(0, 102, 204, 0.55),
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
          color: rgba(0, 102, 204, 0.85);
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