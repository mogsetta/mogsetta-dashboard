"use client";

import Link from "next/link";
import { useActiveSystem } from "../layout";

export default function CoursesPage() {

  const { activeSystem } = useActiveSystem();

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

      {/* OPERATOR PANEL */}
      <section className={`courses-operator-panel ${activeSystem}`}>
        <Link
          href={
            activeSystem === "digital"
              ? "/dashboard/coaches/digital-products"
              : activeSystem === "service"
              ? "/dashboard/coaches/service-systems"
              : "/dashboard/coaches/ecommerce"
          }
          className="operator-panel-inner"
        >
          <div className="operator-left">
            <span className="operator-eyebrow">ACTIVE SYSTEM</span>
            <strong className="operator-system">
              {activeSystem === "digital" && "Digital Products"}
              {activeSystem === "service" && "Service Systems"}
              {activeSystem === "ecommerce" && "E‑Commerce Systems"}
            </strong>
          </div>
        </Link>
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
            active={activeSystem === "digital"}
          />

          <CourseCard
            index="02"
            title="Service Systems"
            desc="Engineer repeatable, productized services with scope discipline, delivery workflows, and delegation readiness."
            href="/dashboard/courses/service-systems"
            accent="purple"
            active={activeSystem === "service"}
          />

          <CourseCard
            index="03"
            title="E‑Commerce Systems"
            desc="Build conversion‑focused stores using offer design, optimization loops, and operational clarity."
            href="/dashboard/courses/ecommerce"
            accent="blue"
            active={activeSystem === "ecommerce"}
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
          margin-bottom: 42px;
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
          font-size: 38px;
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

        .courses-operator-panel {
          margin-bottom: 64px;
        }

        .courses-operator-panel.digital .operator-panel-inner {
          box-shadow:
            0 0 0 1px rgba(239,68,68,0.35),
            0 22px 60px rgba(0,0,0,0.75);
        }

        .courses-operator-panel.service .operator-panel-inner {
          box-shadow:
            0 0 0 1px rgba(168,85,247,0.35),
            0 22px 60px rgba(0,0,0,0.75);
        }

        .courses-operator-panel.ecommerce .operator-panel-inner {
          box-shadow:
            0 0 0 1px rgba(59,130,246,0.35),
            0 22px 60px rgba(0,0,0,0.75);
        }

        .operator-panel-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 26px 28px;
          border-radius: 22px;
          background: linear-gradient(180deg, #0a0b0f, #050506);
          border: 1px solid rgba(255,255,255,0.14);
          text-decoration: none;
          color: #fff;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .operator-panel-inner:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.25),
            0 22px 60px rgba(0,0,0,0.75);
        }

        .operator-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .operator-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          opacity: 0.55;
        }

        .operator-system {
          font-size: 20px;
          font-weight: 600;
        }

        .operator-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(120px, 1fr));
          gap: 28px;
        }

        .operator-stats span {
          font-size: 11px;
          letter-spacing: 0.22em;
          opacity: 0.55;
        }

        .operator-stats strong {
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
      <div className="course-link">View Documentation →</div>
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
            0 0 0 1px rgba(255,255,255,0.22),
            0 26px 64px rgba(0,0,0,0.7);
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