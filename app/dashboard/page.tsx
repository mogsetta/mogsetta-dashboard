// PHASE 1 — DYNAMIC ACTIVE SYSTEM
"use client";
import Link from "next/link";
import { useActiveSystem } from "./layout";

/**
 * MOGSETTA OS — OPERATOR CONTROL ROOM
 * Premium SaaS command-center dashboard
 */

export default function DashboardPage() {
  const { activeSystem } = useActiveSystem();

  const SYSTEM_MAP = {
    digital: {
      label: "Digital Products",
      slug: "digital-products",
    },
    service: {
      label: "Service Systems",
      slug: "service-systems",
    },
    ecommerce: {
      label: "E‑Commerce",
      slug: "ecommerce",
    },
  } as const;

  const system = SYSTEM_MAP[activeSystem];

  return (
    <main className="os">
      {/* COMMAND STRIP */}
      <section
        className={`os-command os-command-primary os-command-dominant lane-${activeSystem}`}
      >
        <div className="os-command-left">
          <span className="os-command-eyebrow">PRIMARY DIRECTIVE · LOCKED</span>
          <h3 className="os-command-title">
            Execute {system.label} System
          </h3>
          <p className="os-command-desc">
            You are in <strong>Build Mode</strong> for the
            <strong> {system.label} System</strong>.
            All other systems are secondary until this execution completes.
          </p>
          <div className="os-command-meta">
            <span className="meta-dot" />
            <span className="meta-text">Execution locked · AI standing by</span>
          </div>
        </div>

        <div className="os-command-right">
          <Link
            href={`/dashboard/coaches/${system.slug}`}
            className="btn-primary os-command-btn"
          >
            Execute System →
          </Link>
        </div>
      </section>

      <section className="os-pulse">
        <div className="os-metrics">
          <Metric label="Active Systems" value="3" accent="gold" />
          <Metric label="AI Layer" value="Online" accent="indigo" />
          <Metric label="Execution Mode" value="Build" accent="emerald" />
          <Metric label="Last Sync" value="Live" accent="blue" />
        </div>
      </section>

      {/* OPERATOR STATUS BAR */}
      <section className="os-status">
        <div className="status-item status-primary">
          <span className="label">Active System</span>
          <strong className="primary">{system.label}</strong>
          <span className="sub">SYSTEM 01 · Operator Online</span>
        </div>

        <div className="status-item">
          <span className="label">Execution Mode</span>
          <strong>Build</strong>
          <span className="sub">Focus window: locked</span>
        </div>

        <div className="status-item status-live">
          <span className="label">AI State</span>
          <strong className="status-text">Awaiting Input</strong>
          <span className="sub">Listening for next action</span>
        </div>

        <div className="status-item">
          <span className="label">Last Action</span>
          <strong>Digital Operator · 12m ago</strong>
          <span className="sub">Checkpoint saved</span>
        </div>
      </section>

      {/* HERO / STATUS */}
      <section className="os-hero os-hero-primary" style={{ opacity: 0.82 }}>
        <div className="os-hero-left">
          <span className="os-eyebrow">MOGSETTA · OPERATOR OS</span>
          <h1>Command Center</h1>
          <p>
            Centralized visibility, execution control, and AI‑assisted decision
            making. Every system, operator, and action flows through this interface.
          </p>

          <div className="os-hero-actions">
            <Link
              href={`/dashboard/courses/${system.slug}`}
              className="btn-secondary"
            >
              Resume Active System →
            </Link>
            <Link
              href={`/dashboard/coaches/${system.slug}`}
              className="btn-secondary"
            >
              View Active Operators →
            </Link>
          </div>
        </div>
      </section>

      {/* SYSTEM CONTEXT */}
      <section className="os-context">
        <div className="context-card">
          <span className="context-label">System Context</span>
          <h3>Digital Products System</h3>
          <p>
            You are currently building a scalable digital asset. Focus is on
            structure, validation, and leverage — not volume.
          </p>
        </div>

        <div className="context-card">
          <span className="context-label">AI Insight</span>
          <h3>Execution Recommended</h3>
          <p>
            Your last interaction indicates readiness to continue system
            architecture. Resume with the active operator.
          </p>
        </div>
      </section>

      {/* OPERATOR TIMELINE */}
      <section className="os-timeline">
        <div className="os-timeline-head">
          <div>
            <span className="os-timeline-eyebrow">Operator Timeline</span>
            <h2 className="os-section-title" style={{ marginBottom: 10 }}>
              Live Activity Feed
            </h2>
            <p className="os-timeline-sub">
              System events, AI signals, and execution milestones — ordered by impact.
            </p>
          </div>

          <div className="os-timeline-actions">
            <Link href="/dashboard/coaches" className="btn-secondary">
              View All Operators
            </Link>
            <Link href="/dashboard/coaches/ecommerce#operator" className="btn-primary">
              Jump to Operator →
            </Link>
          </div>
        </div>

        <div className="os-timeline-rail">
          {TIMELINE.map((e) => (
            <TimelineEvent key={e.id} {...e} />
          ))}
        </div>
      </section>

      {/* COMMAND DOCK */}
      <section className="os-command-dock">
        <span className="os-command-dock-label">Quick Access</span>

        <div className="os-command-dock-rail">
          <Link href={`/dashboard/coaches/${system.slug}`} className="dock-pill">
            AI Coaches
          </Link>

          <Link href={`/dashboard/courses/${system.slug}`} className="dock-pill">
            Courses & Playbooks
          </Link>

          <Link href="/dashboard/account" className="dock-pill">
            Account & Access
          </Link>
        </div>
      </section>

      <style jsx>{`
        /* COMMAND DOCK */
        .os-command-dock {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 28px 36px;
          border-radius: 28px;
          background:
            radial-gradient(600px 160px at 20% -40%, rgba(212,175,55,0.25), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(212,175,55,0.35);
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.25),
            0 24px 80px rgba(0,0,0,0.65);
        }

        .os-command-dock-label {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.85);
        }

        .os-command-dock-rail {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .dock-pill {
          padding: 14px 22px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.35);
          background:
            radial-gradient(300px 80px at 20% -30%, rgba(212,175,55,0.18), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .dock-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(212,175,55,0.65);
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.45),
            0 18px 50px rgba(0,0,0,0.7);
        }
        /* SUBSYSTEM DOCK */
        .os-dock {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .os-dock-head {
          max-width: 640px;
        }

        .os-dock-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.75);
          margin-bottom: 8px;
          display: inline-block;
        }

        .os-dock-sub {
          font-size: 16px;
          line-height: 1.7;
          opacity: 0.78;
        }

        .os-dock-rail {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 22px;
        }

        /* OPERATIONAL DOCK — ELEVATED */
        .os-dock-shell {
          padding: 56px 56px 64px;
          border-radius: 42px;
          background:
            radial-gradient(
              900px 260px at 20% -30%,
              rgba(212,175,55,0.28),
              transparent 60%
            ),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(212,175,55,0.45);
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.25),
            0 36px 110px rgba(0,0,0,0.75);
          position: relative;
        }

        .os-dock-shell::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 44px;
          background: linear-gradient(
            120deg,
            rgba(212,175,55,0.55),
            rgba(99,102,241,0.22),
            transparent 65%
          );
          opacity: 0.35;
          pointer-events: none;
        }

        .dock-item {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 26px 30px;
          border-radius: 22px;
          background:
            radial-gradient(
              420px 140px at 10% -30%,
              var(--dock-accent),
              transparent 60%
            ),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          color: #fff;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .dock-item:hover {
          transform: translateY(-2px);
          border-color: rgba(212,175,55,0.45);
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.35),
            0 20px 60px rgba(0,0,0,0.65);
        }

        .dock-left h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }

        .dock-left p {
          font-size: 15px;
          opacity: 0.75;
          max-width: 420px;
          line-height: 1.6;
        }

        .dock-action {
          font-size: 16px;
          font-weight: 700;
          color: #d4af37;
          white-space: nowrap;
        }
        .os {
          max-width: 1320px;
          margin: 0 auto;
          padding: 64px 28px 160px;
          display: flex;
          flex-direction: column;
          gap: 104px;
        }

        .os-pulse {
          margin-bottom: 24px;
          opacity: 0.92;
        }

        /* HERO */
        .os-hero {
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          padding: 64px 64px;
          border-radius: 40px;
          background:
            radial-gradient(1000px 420px at 50% -20%, rgba(212,175,55,0.22), transparent 62%),
            radial-gradient(900px 360px at 80% 0%, rgba(99,102,241,0.28), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .os-hero-primary {
          position: relative;
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.35),
            0 32px 96px rgba(0,0,0,0.65);
        }

        .os-hero-primary::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 42px;
          background: linear-gradient(
            120deg,
            rgba(212,175,55,0.55),
            rgba(99,102,241,0.25),
            transparent 60%
          );
          opacity: 0.25;
          pointer-events: none;
        }

        .os-hero-primary::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 40px;
          background: radial-gradient(
            900px 300px at 20% -30%,
            rgba(212,175,55,0.28),
            transparent 65%
          );
          opacity: 0.35;
          pointer-events: none;
        }

        .os-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.75);
        }

        .os-hero h1 {
          font-size: 44px;
          margin: 18px 0 14px;
          letter-spacing: 0.02em;
        }

        .os-hero p {
          max-width: 620px;
          font-size: 18px;
          line-height: 1.75;
          opacity: 0.82;
        }

        .os-hero-actions {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        /* METRICS */
        .os-metrics {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .os-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .os-metrics {
            grid-template-columns: 1fr;
          }
        }

        .metric {
          position: relative;
          padding: 24px 26px;
          border-radius: 22px;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .metric::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(200px 60px at 20% -20%, var(--accent), transparent 60%);
          opacity: 0.35;
          pointer-events: none;
        }

        .metric span {
          font-size: 12px;
          opacity: 0.6;
        }

        .metric strong {
          display: block;
          font-size: 20px;
          margin-top: 8px;
        }

        /* SECTIONS */
        .os-section-title {
          font-size: 28px;
          margin-bottom: 32px;
        }

        .os-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .op-card {
          position: relative;
          padding: 56px 56px 60px;
          border-radius: 40px;
          background:
            radial-gradient(800px 300px at 85% -40%, rgba(212,175,55,0.38), transparent 60%),
            linear-gradient(180deg, #0d0e14, #050507);
          border: 2px solid rgba(212,175,55,0.55);
          text-decoration: none;
          color: #fff;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.45),
            0 30px 80px rgba(0,0,0,0.75);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .op-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 40px;
          pointer-events: none;
          background: radial-gradient(
            600px 200px at 15% -20%,
            rgba(212,175,55,0.22),
            transparent 65%
          );
        }

        .op-card h3 {
          font-size: 28px;
          margin-bottom: 16px;
          letter-spacing: 0.01em;
        }

        .op-card p {
          font-size: 17px;
          line-height: 1.75;
          opacity: 0.9;
          max-width: 460px;
        }

        .op-card span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 36px;
          font-size: 18px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.05em;
        }

        .op-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212,175,55,0.85);
          box-shadow:
            0 0 0 2px rgba(212,175,55,0.75),
            0 40px 110px rgba(0,0,0,0.85);
        }

        /* COMMAND STRIP */
        .os-command {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 48px;
          padding: 64px 72px;
          border-radius: 42px;
          background:
            radial-gradient(
              1100px 320px at 20% -45%,
              rgba(212,175,55,0.45),
              transparent 62%
            ),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 2px solid rgba(212,175,55,0.55);
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.45),
            0 40px 120px rgba(0,0,0,0.75);
          position: relative;
          overflow: hidden;
          margin-top: -24px;
          margin-bottom: 64px;
        }

        /* =========================
           PHASE 1 — LANE AWARE COMMAND STRIP
           Digital Products (Red)
        ========================= */

        .lane-digital.os-command {
          border-color: rgba(220,38,38,0.45);
          box-shadow:
            0 0 0 1px rgba(220,38,38,0.35),
            0 40px 120px rgba(0,0,0,0.75);
        }

        .lane-digital.os-command::before {
          background: linear-gradient(
            120deg,
            rgba(220,38,38,0.65),
            rgba(99,102,241,0.22),
            transparent 65%
          );
          opacity: 0.32;
        }

        .lane-digital .os-command-eyebrow,
        .lane-digital .os-command-meta {
          color: rgba(220,38,38,0.9);
        }

        .lane-digital .meta-dot {
          background: #dc2626;
          box-shadow:
            0 0 8px rgba(220,38,38,0.65),
            0 0 18px rgba(220,38,38,0.35);
        }

        .lane-digital .btn-primary.os-command-btn {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: #fff;
          box-shadow:
            0 0 0 1px rgba(220,38,38,0.45),
            0 14px 40px rgba(0,0,0,0.65);
        }

        /* =========================
           Service Systems (Purple)
        ========================= */

        .lane-service.os-command {
          border-color: rgba(124,108,255,0.45);
          box-shadow:
            0 0 0 1px rgba(124,108,255,0.35),
            0 40px 120px rgba(0,0,0,0.75);
        }

        .lane-service.os-command::before {
          background: linear-gradient(
            120deg,
            rgba(124,108,255,0.65),
            rgba(99,102,241,0.22),
            transparent 65%
          );
          opacity: 0.32;
        }

        .lane-service .os-command-eyebrow,
        .lane-service .os-command-meta {
          color: rgba(124,108,255,0.9);
        }

        .lane-service .meta-dot {
          background: #7c6cff;
          box-shadow:
            0 0 8px rgba(124,108,255,0.65),
            0 0 18px rgba(124,108,255,0.35);
        }

        .lane-service .btn-primary.os-command-btn {
          background: linear-gradient(135deg, #7c6cff, #4f46e5);
          color: #fff;
          box-shadow:
            0 0 0 1px rgba(124,108,255,0.45),
            0 14px 40px rgba(0,0,0,0.65);
        }

        /* =========================
           E‑Commerce (Blue)
        ========================= */

        .lane-ecommerce.os-command {
          border-color: rgba(0,102,204,0.45);
          box-shadow:
            0 0 0 1px rgba(0,102,204,0.35),
            0 40px 120px rgba(0,0,0,0.75);
        }

        .lane-ecommerce.os-command::before {
          background: linear-gradient(
            120deg,
            rgba(0,102,204,0.65),
            rgba(99,102,241,0.22),
            transparent 65%
          );
          opacity: 0.32;
        }

        .lane-ecommerce .os-command-eyebrow,
        .lane-ecommerce .os-command-meta {
          color: rgba(0,102,204,0.9);
        }

        .lane-ecommerce .meta-dot {
          background: #0066cc;
          box-shadow:
            0 0 8px rgba(0,102,204,0.65),
            0 0 18px rgba(0,102,204,0.35);
        }

        .lane-ecommerce .btn-primary.os-command-btn {
          background: linear-gradient(135deg, #0066cc, #004a99);
          color: #fff;
          box-shadow:
            0 0 0 1px rgba(0,102,204,0.45),
            0 14px 40px rgba(0,0,0,0.65);
        }

        .os-command-dominant {
          transform: scale(1.015);
          box-shadow:
            0 0 0 2px rgba(212,175,55,0.85),
            0 50px 140px rgba(0,0,0,0.85);
        }

        .os-command-primary::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 44px;
          background: linear-gradient(
            120deg,
            rgba(212,175,55,0.85),
            rgba(99,102,241,0.35),
            transparent 65%
          );
          opacity: 0.45;
          pointer-events: none;
        }

        .os-command::after {
          content: "";
          position: absolute;
          inset: -35%;
          background: radial-gradient(
            520px 160px at 20% 0%,
            rgba(212,175,55,0.38),
            transparent 65%
          );
          opacity: 0.22;
          animation: commandPulse 8s ease-in-out infinite;
          pointer-events: none;
        }

        .os-command-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.95);
          display: inline-block;
          margin-bottom: 12px;
        }

        .os-command-title {
          font-size: 34px;
          margin-bottom: 10px;
          letter-spacing: 0.01em;
        }

        .os-command-desc {
          max-width: 640px;
          font-size: 17px;
          line-height: 1.75;
          opacity: 0.85;
          letter-spacing: 0.01em;
        }
        .os-command-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.85);
        }

        .meta-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #d4af37;
          box-shadow:
            0 0 8px rgba(212,175,55,0.65),
            0 0 18px rgba(212,175,55,0.35);
        }

        .meta-text {
          opacity: 0.9;
        }

        .os-command-right {
          display: flex;
          align-items: center;
        }

        .os-command-btn {
          padding: 18px 32px;
          font-size: 18px;
          border-radius: 18px;
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.45),
            0 12px 36px rgba(0,0,0,0.65);
        }

        /* BUTTONS */
        .btn-primary {
          background: linear-gradient(135deg, #d4af37, #9f7a1f);
          color: #000;
          border-radius: 16px;
          padding: 16px 26px;
          font-weight: 700;
          text-decoration: none;
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 16px;
          padding: 16px 26px;
          text-decoration: none;
          color: #fff;
        }

        .os-status {
          background-clip: padding-box;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          padding: 22px 30px;
          border-radius: 20px;
          background:
            linear-gradient(180deg, rgba(212,175,55,0.14), rgba(0,0,0,0.0)),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(212,175,55,0.45);
          box-shadow:
            0 0 0 1px rgba(212,175,55,0.28),
            0 18px 42px rgba(0,0,0,0.65);
          overflow: hidden;
        }
        .os-status::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          pointer-events: none;
        }

        .status-item {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 14px 18px;
          min-height: 74px;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        /* Ensure no pseudo-elements on .status-item */

        .os-status {
          isolation: isolate;
        }

        .status-item:not(:last-child) {
          border-right: none;
        }

        .status-item:last-child {
          border-right: none;
        }

        .status-item .label {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .status-item strong {
          font-size: 19px;
          font-weight: 750;
          letter-spacing: 0.02em;
        }

        .status-item .sub {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.55;
        }


        /* === Custom Status Bar Enhancements === */
        .status-item strong.primary {
          color: #d4af37;
        }

        .status-item.live {
          isolation: isolate;
        }

        @keyframes breatheGlow {
          0% {
            opacity: 0.82;
            filter: drop-shadow(0 0 6px rgba(212,175,55,0.16));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(212,175,55,0.28));
          }
          100% {
            opacity: 0.82;
            filter: drop-shadow(0 0 6px rgba(212,175,55,0.16));
          }
        }

        .status-text {
          color: #d4af37;
          animation: breatheGlow 8.5s ease-in-out infinite;
        }

        .status-text {
          text-shadow:
            0 0 8px rgba(212,175,55,0.35),
            0 0 18px rgba(212,175,55,0.18);
        }

        .os-status .status-item strong.status-text {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .os-status {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .os-status {
            grid-template-columns: 1fr;
          }
        }

        .os-context {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 28px;
          opacity: 0.86;
        }

        .context-card {
          padding: 36px 40px;
          border-radius: 28px;
          background:
            radial-gradient(600px 200px at 20% -30%, rgba(212,175,55,0.18), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .context-label {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.85);
        }

        .context-card h3 {
          font-size: 24px;
          margin: 14px 0 10px;
        }

        .context-card p {
          font-size: 16px;
          line-height: 1.75;
          opacity: 0.82;
          max-width: 520px;
        }

        /* TIMELINE */
        .os-timeline {
          padding: 42px 42px;
          border-radius: 34px;
          background:
            radial-gradient(900px 260px at 20% -40%, rgba(99,102,241,0.16), transparent 60%),
            radial-gradient(800px 240px at 70% -40%, rgba(212,175,55,0.16), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08),
            0 14px 46px rgba(0,0,0,0.45);
          opacity: 0.94;
        }

        .os-timeline-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 26px;
        }

        .os-timeline-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .os-timeline-eyebrow {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.88);
          margin-bottom: 10px;
        }

        .os-timeline-sub {
          opacity: 0.78;
          line-height: 1.65;
          max-width: 680px;
          margin: 0;
        }

        .os-timeline-rail {
          position: relative;
          display: grid;
          gap: 16px;
          padding-left: 22px;
        }

        .os-timeline-rail::before {
          content: "";
          position: absolute;
          left: 8px;
          top: 4px;
          bottom: 4px;
          width: 2px;
          background: linear-gradient(
            180deg,
            rgba(212,175,55,0.45),
            rgba(99,102,241,0.22),
            rgba(255,255,255,0.06)
          );
          opacity: 0.45;
        }

        .tl {
          position: relative;
          border-radius: 20px;
          padding: 18px 18px 18px 18px;
          background:
            radial-gradient(520px 200px at 15% 0%, rgba(212,175,55,0.12), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.10);
          display: grid;
          gap: 10px;
        }

        .tl::before {
          content: "";
          position: absolute;
          left: -22px;
          top: 22px;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: var(--dot);
          box-shadow:
            0 0 0 3px rgba(0,0,0,0.65),
            0 0 26px var(--glow);
        }

        .tl-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .tl-kind {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          opacity: 0.75;
        }

        .tl-badge {
          font-size: 11px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          opacity: 0.92;
        }

        .tl-title {
          font-size: 18px;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .tl-desc {
          margin: 0;
          opacity: 0.78;
          line-height: 1.65;
        }

        .tl-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          opacity: 0.72;
          font-size: 13px;
        }

        .tl-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: #d4af37;
          text-decoration: none;
        }

        .tl-clickable {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }

        .tl-clickable:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.18);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.16),
            0 14px 36px rgba(0,0,0,0.5);
        }

        .tl-live {
          position: relative;
          overflow: hidden;
        }

        .tl-live::after {
          content: "";
          position: absolute;
          inset: -50%;
          background: radial-gradient(
            520px 160px at 20% 0%,
            rgba(99,102,241,0.22),
            transparent 60%
          );
          opacity: 0.22;
          animation: tlPulse 6.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes tlPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.55; }
        }

        @media (max-width: 860px) {
          .os-timeline {
            padding: 34px 22px;
          }
          .os-timeline-head {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}

/* COMPONENTS */

function Metric({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="metric" style={{ ['--accent' as any]: accentColor(accent) }}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function OpCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="op-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span>Open →</span>
    </Link>
  );
}

function accentColor(key: string) {
  switch (key) {
    case "indigo":
      return "rgba(99,102,241,0.45)";
    case "emerald":
      return "rgba(16,185,129,0.45)";
    case "blue":
      return "rgba(59,130,246,0.45)";
    default:
      return "rgba(212,175,55,0.45)";
  }
}

type TimelineItem = {
  id: string;
  kind: "AI" | "SYSTEM" | "YOU" | "ALERT";
  title: string;
  desc: string;
  time: string;
  badge?: string;
  live?: boolean;
  href?: string;
  accent?: "gold" | "indigo" | "blue" | "emerald";
};

const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    kind: "AI",
    title: "Ecom Operator flagged conversion leak",
    desc: "Cart-to-checkout drop likely tied to offer clarity. Recommend running the operator audit and tightening the promise block.",
    time: "2m ago",
    badge: "RECOMMENDED",
    live: true,
    href: "/dashboard/coaches/ecommerce#operator",
    accent: "blue",
  },
  {
    id: "t2",
    kind: "SYSTEM",
    title: "Service Systems architecture stabilized",
    desc: "Scope boundaries and fulfillment sequencing moved to ‘Moderate’ stability. Next: delegation readiness.",
    time: "18m ago",
    badge: "MILESTONE",
    accent: "indigo",
  },
  {
    id: "t3",
    kind: "YOU",
    title: "You updated operator pages",
    desc: "Standardized coach page structure and refined visual hierarchy for command-center feel.",
    time: "41m ago",
    accent: "gold",
  },
  {
    id: "t4",
    kind: "ALERT",
    title: "Focus window: Build mode is active",
    desc: "Stay in one system until the next ship checkpoint. Avoid context switching to preserve momentum.",
    time: "Today",
    badge: "FOCUS",
    accent: "emerald",
  },
];

function TimelineEvent(item: TimelineItem) {
  const dot = timelineDot(item.accent ?? "gold");
  const glow = timelineGlow(item.accent ?? "gold");

  const Shell: any = item.href ? Link : "div";
  const shellProps = item.href
    ? { href: item.href, className: `tl tl-clickable ${item.live ? "tl-live" : ""}` }
    : { className: `tl ${item.live ? "tl-live" : ""}` };

  return (
    <Shell
      {...shellProps}
      style={{ ["--dot" as any]: dot, ["--glow" as any]: glow }}
    >
      <div className="tl-top">
        <div className="tl-kind">
          <span>{item.kind}</span>
          <span style={{ opacity: 0.35 }}>•</span>
          <span>{item.time}</span>
        </div>
        {item.badge && <span className="tl-badge">{item.badge}</span>}
      </div>

      <h3 className="tl-title">{item.title}</h3>
      <p className="tl-desc">{item.desc}</p>

      <div className="tl-meta">
        <span style={{ opacity: 0.72 }}>
          Signal: <strong style={{ opacity: 1 }}>{item.kind}</strong>
        </span>
        {item.href && <span className="tl-link">Open →</span>}
      </div>
    </Shell>
  );
}

function timelineDot(accent: TimelineItem["accent"]) {
  switch (accent) {
    case "indigo":
      return "rgba(124,108,255,0.95)";
    case "blue":
      return "rgba(59,130,246,0.95)";
    case "emerald":
      return "rgba(16,185,129,0.95)";
    default:
      return "rgba(212,175,55,0.95)";
  }
}

function timelineGlow(accent: TimelineItem["accent"]) {
  switch (accent) {
    case "indigo":
      return "rgba(124,108,255,0.35)";
    case "blue":
      return "rgba(59,130,246,0.30)";
    case "emerald":
      return "rgba(16,185,129,0.25)";
    default:
      return "rgba(212,175,55,0.30)";
  }
}
function DockItem({
  title,
  desc,
  href,
  accent,
}: {
  title: string;
  desc: string;
  href: string;
  accent: "gold" | "indigo" | "blue";
}) {
  return (
    <Link
      href={href}
      className="dock-item"
      style={{ ["--dock-accent" as any]: accentColor(accent) }}
    >
      <div className="dock-left">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <span className="dock-action">Open →</span>
    </Link>
  );
}