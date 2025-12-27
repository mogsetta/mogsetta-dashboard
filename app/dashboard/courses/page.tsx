"use client";

import Link from "next/link";

export default function CoursesPage() {

  const COURSE_MAP = {
    digital: {
      accent: "red",
      href: "/dashboard/courses/digital-products",
    },
    service: {
      accent: "purple",
      href: "/dashboard/courses/service-systems",
    },
    ecommerce: {
      accent: "blue",
      href: "/dashboard/courses/ecommerce",
    },
  } as const;

  return (
    <div className="courses-page">

      {/* HERO */}
      <header className="courses-hero">
        <span className="courses-eyebrow">SYSTEM DOCUMENTATION</span>
        <h1 className="courses-title">Courses</h1>
        <p className="courses-subtitle">
          Each course is structured like internal documentation for a real business system.
          No fluff, no motivation — only frameworks, execution logic, and scalable structure.
        </p>
        <p className="courses-helper">
          Use these courses as reference manuals — return to them as your systems evolve.
        </p>
      </header>

      {/* COURSES COMMAND */}
      <section className="courses-command">
        <div className="courses-command-left">
          <span className="cmd-eyebrow">ACTIVE SYSTEM</span>
          <strong className="cmd-system">
            Select a system
          </strong>
        </div>

        <div className="courses-command-actions">
          <Link href="/dashboard/courses/digital-products" className="cmd-primary">
            View Courses
          </Link>
        </div>
      </section>

      {/* SYSTEM STATUS */}
      <section className="courses-status">
        <div>
          <span>ACTIVE SYSTEM</span>
          <strong>
            Select a system
          </strong>
        </div>

        <div>
          <span>PROGRESS</span>
          <strong>0%</strong>
        </div>

        <div>
          <span>LAST ACCESSED</span>
          <strong>Today</strong>
        </div>
      </section>

      <h2 className="courses-section-label">AVAILABLE SYSTEMS</h2>

      {/* COURSES GRID WRAP */}
      <section className="courses-grid-wrap">
        <div className="courses-grid">

          <CourseCard
            index="01"
            title="Digital Products"
            desc="Design, validate, and scale digital products as long‑term assets with modular structure and leverage logic."
            href="/dashboard/courses/digital-products"
            accent="red"
            active={false}
          />

          <CourseCard
            index="02"
            title="Service Systems"
            desc="Engineer repeatable, productized services with scope discipline, delivery workflows, and delegation readiness."
            href="/dashboard/courses/service-systems"
            accent="purple"
            active={false}
          />

          <CourseCard
            index="03"
            title="E‑Commerce Systems"
            desc="Build conversion‑focused stores using offer design, optimization loops, and operational clarity."
            href="/dashboard/courses/ecommerce"
            accent="blue"
            active={false}
          />

        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .courses-page {
          max-width: 1100px;
          margin: 0 auto;
          padding-bottom: 120px;
        }

        .courses-hero {
          margin-bottom: 56px;
        }

        .courses-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 18px;
        }

        .courses-title {
          font-size: 42px;
          margin-bottom: 14px;
        }

        .courses-subtitle {
          max-width: 900px;
          font-size: 17px;
          line-height: 1.75;
          opacity: 0.72;
        }

        .courses-helper {
          margin-top: 18px;
          font-size: 14px;
          opacity: 0.55;
        }

        .courses-command {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 48px;
          padding: 18px 22px;
          background: linear-gradient(180deg, #0a0b0f, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
        }

        .courses-command-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cmd-eyebrow {
          font-size: 11px;
          letter-spacing: 0.22em;
          opacity: 0.6;
        }

        .cmd-system {
          font-size: 18px;
          font-weight: 600;
        }

        .cmd-system.red { color: #dc2626; }
        .cmd-system.purple { color: #7c6cff; }
        .cmd-system.blue { color: #4da3ff; }

        .courses-command-actions {
          display: flex;
          gap: 12px;
        }

        .cmd-primary {
          padding: 10px 16px;
          border-radius: 12px;
          font-weight: 600;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          text-decoration: none;
        }

        .courses-status {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 56px;
        }

        .courses-status div {
          background: linear-gradient(180deg, #0a0b0f, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px 18px;
        }

        .courses-status span {
          font-size: 11px;
          letter-spacing: 0.22em;
          opacity: 0.55;
        }

        .courses-status strong {
          display: block;
          margin-top: 6px;
          font-size: 16px;
          font-weight: 600;
        }

        .courses-section-label {
          font-size: 12px;
          letter-spacing: 0.32em;
          opacity: 0.45;
          margin-bottom: 18px;
        }

        .courses-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap: 18px;
          margin-bottom: 64px;
        }

        .courses-strip div {
          background: linear-gradient(180deg, #0a0b0f, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 18px;
        }

        .courses-strip span {
          font-size: 11px;
          letter-spacing: 0.22em;
          opacity: 0.6;
        }

        .courses-strip p {
          font-size: 15px;
          margin-top: 6px;
        }

        .courses-grid-wrap {
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
      `}</style>
    </div>
  );
}

/* =====================
   COURSE CARD
===================== */

function CourseCard({
  index,
  title,
  desc,
  href,
  accent,
  active,
}: {
  index: string;
  title: string;
  desc: string;
  href: string;
  accent: "red" | "purple" | "blue";
  active: boolean;
}) {
  return (
    <Link href={href} className={`course-card ${accent} ${active ? "active" : ""}`}>
      <span className="course-index">SYSTEM {index}</span>
      <h3 className="course-title">{title}</h3>
      <p className="course-desc">{desc}</p>
      <span className="course-status">
        {active ? "ACTIVE SYSTEM" : "NOT STARTED"}
      </span>
      <div className="course-link">Enter System →</div>
      <span className="course-meta">System Documentation</span>

      <style jsx>{`
        .course-card {
          display: block;
          background: linear-gradient(
            180deg,
            rgba(14,15,20,0.95),
            #050506
          );
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          padding: 28px;
          color: #fff;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .course-card:hover {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.12);
        }

        .course-card.active {
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.18),
            0 22px 60px rgba(0,0,0,0.65);
        }

        .course-index {
          font-size: 11px;
          letter-spacing: 0.28em;
          opacity: 0.7;
          display: inline-block;
          margin-bottom: 14px;
        }

        .course-title {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .course-desc {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.75;
          margin-bottom: 18px;
        }

        .course-status {
          display: block;
          font-size: 11px;
          letter-spacing: 0.22em;
          opacity: 0.55;
          margin-bottom: 10px;
        }

        .course-card.active .course-status {
          opacity: 0.85;
        }

        .course-link {
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .course-meta {
          display: block;
          margin-top: 10px;
          font-size: 11px;
          letter-spacing: 0.18em;
          opacity: 0.45;
        }

        .gold .course-link {
          color: #d4af37;
        }

        .purple .course-link {
          color: #7c6cff;
        }

        .blue .course-link {
          color: #4da3ff;
        }

        .red .course-link {
          color: #dc2626;
        }
      `}</style>
    </Link>
  );
}