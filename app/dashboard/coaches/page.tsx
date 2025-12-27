"use client";

import React, { useState } from "react";
import { useActiveSystem } from "../layout";
import Link from "next/link";

type Operator = {
  id: string;
  system: string;
  title: string;
  description: string;
  focus: string[];
  href: string;
};

const OPERATORS: Operator[] = [
  {
    id: "digital",
    system: "SYSTEM 01",
    title: "Digital Products",
    description:
      "Design leverage‑based products and intellectual property that compound over time.",
    focus: ["Product architecture", "Validation logic", "Asset leverage"],
    href: "/dashboard/coaches/digital-products",
  },
  {
    id: "service",
    system: "SYSTEM 02",
    title: "Service Systems",
    description:
      "Engineer repeatable, high‑margin service delivery with operational clarity.",
    focus: ["Scope control", "SOPs", "Delegation"],
    href: "/dashboard/coaches/service-systems",
  },
  {
    id: "ecommerce",
    system: "SYSTEM 03",
    title: "E‑Commerce",
    description:
      "Optimize conversion, monetization, and store performance using data‑driven systems.",
    focus: ["Conversion rate", "AOV", "Lifecycle"],
    href: "/dashboard/coaches/ecommerce",
  },
];

export default function CoachesPage() {
  const { activeSystem, setActiveSystem } = useActiveSystem();

  const active =
    OPERATORS.find((op) => op.id === activeSystem) ?? OPERATORS[0];

  return (
    <main className="operator-root">
      {/* CONSOLE */}
      <section className="operator-console">
        {/* NAV */}
        <aside className="operator-nav">
          {OPERATORS.map((op) => (
            <button
              key={op.id}
              className={`operator-tab ${op.id} ${
                active.id === op.id ? "active" : ""
              }`}
              onClick={() => setActiveSystem(op.id as any)}
            >
              <div className="tab-left">
                <span className="tab-system">{op.system}</span>
                <span className="tab-title">{op.title}</span>
              </div>
              <div className="tab-right">
                <span className="tab-status">READY</span>
              </div>
            </button>
          ))}
        </aside>

        {/* PANEL */}
        <div className={`operator-panel ${active.id}`}>
          <div className="panel-header">
            <div className="panel-header-left">
              <span className="panel-kicker">Operator Console</span>
              <span className="panel-status-dot" />
              <span className="panel-status-text">Live</span>
            </div>
            <div className="panel-header-right">
              <span className="panel-metric">
                <strong>Readiness</strong>
                <span>Operational</span>
              </span>
            </div>
          </div>
          <span className="panel-system">{active.system}</span>
          <h2>{active.title}</h2>
          <p className="panel-desc">{active.description}</p>

          <div className="operator-status">
            <div className="status-col">
              <span className="status-label">Status</span>
              <span className="status-value">Monitoring</span>
            </div>

            <div className="status-col">
              <span className="status-label">Primary Signal</span>
              <span className="status-value muted">Leverage available</span>
            </div>

            <div className="status-col">
              <span className="status-label">Next Action</span>
              <span className="status-value action">Review system map</span>
            </div>
          </div>

          <div className="panel-focus">
            {active.focus.map((f) => (
              <span key={f} className="focus-pill">
                {f}
              </span>
            ))}
          </div>

          <Link href={active.href} className="enter-btn">
            Enter Operator →
          </Link>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .operator-root {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 40px 160px;
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        .operator-header {
          padding: 64px;
          border-radius: 36px;
          background:
            radial-gradient(
              900px 320px at 10% -10%,
              rgba(99,102,241,0.22),
              transparent 60%
            ),
            radial-gradient(
              900px 320px at 90% -10%,
              rgba(212,175,55,0.18),
              transparent 60%
            ),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .operator-eyebrow {
          font-size: 12px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #d4af37;
        }

        .operator-header h1 {
          font-size: 52px;
          margin: 16px 0 14px;
        }

        .operator-header p {
          max-width: 760px;
          opacity: 0.85;
          line-height: 1.7;
        }

        .operator-console {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 48px;
        }

        .operator-nav {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .operator-tab {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 22px;
          padding: 22px 22px;
          text-align: left;
          cursor: pointer;
          transition:
            transform 0.22s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.22s ease,
            box-shadow 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .operator-tab:hover {
          transform: translateY(-2px);
          border-color: rgba(212,175,55,0.45);
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);
        }

        .operator-tab.active {
          position: relative;
          transform: translateY(-2px);
        }

        .operator-tab:active {
          transform: translateY(-1px) scale(0.995);
        }

        .operator-tab.active::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          bottom: 12px;
          width: 4px;
          border-radius: 4px;
        }

        .tab-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tab-right {
          display: flex;
          align-items: center;
        }

        .tab-status {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .tab-system {
          font-size: 11px;
          letter-spacing: 0.34em;
          color: rgba(212,175,55,0.85);
        }

        .tab-title {
          font-size: 20px;
          font-weight: 600;
        }

        .operator-panel {
          padding: 52px 56px 58px;
          border-radius: 30px;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.55);
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .panel-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .panel-kicker {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .panel-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 10px rgba(34,197,94,0.65);
        }

        .panel-status-text {
          font-size: 13px;
          font-weight: 600;
          color: rgba(34,197,94,0.9);
        }

        .panel-header-right {
          font-size: 13px;
          opacity: 0.85;
        }

        .panel-metric {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .panel-metric strong {
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .panel-metric span {
          font-size: 14px;
          font-weight: 600;
        }

        .panel-system {
          font-size: 12px;
          letter-spacing: 0.32em;
          color: rgba(212,175,55,0.85);
        }

        .operator-panel h2 {
          font-size: 34px;
          margin: 10px 0 12px;
        }

        .panel-desc {
          max-width: 680px;
          opacity: 0.82;
          line-height: 1.65;
        }

        .panel-focus {
          display: flex;
          gap: 12px;
          margin: 28px 0 42px;
          flex-wrap: wrap;
        }

        .focus-pill {
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.7);
        }

        .enter-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 30px;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff, #e6e6e6);
          color: #000;
          font-weight: 600;
          text-decoration: none;
          box-shadow:
            0 10px 26px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.9);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .enter-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            0 14px 36px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }

        /* =========================
           CARD-SCOPED LANE COLORS
        ========================= */

        /* DIGITAL PRODUCTS — RED */
        .operator-tab.digital:hover,
        .operator-tab.digital.active {
          border-color: rgba(220,38,38,0.55);
          box-shadow:
            0 0 0 1px rgba(220,38,38,0.45),
            0 0 44px rgba(220,38,38,0.28),
            0 24px 70px rgba(0,0,0,0.65);
        }
        .operator-tab.digital::before {
          background: linear-gradient(
            180deg,
            rgba(220,38,38,0.9),
            rgba(220,38,38,0.35)
          );
        }

        /* SERVICE SYSTEMS — PURPLE */
        .operator-tab.service:hover,
        .operator-tab.service.active {
          border-color: rgba(124,108,255,0.55);
          box-shadow:
            0 0 0 1px rgba(124,108,255,0.45),
            0 0 44px rgba(124,108,255,0.28),
            0 24px 70px rgba(0,0,0,0.65);
        }
        .operator-tab.service::before {
          background: linear-gradient(
            180deg,
            rgba(124,108,255,0.9),
            rgba(124,108,255,0.35)
          );
        }

        /* E-COMMERCE — BLUE */
        .operator-tab.ecommerce:hover,
        .operator-tab.ecommerce.active {
          border-color: rgba(0,102,204,0.55);
          box-shadow:
            0 0 0 1px rgba(0,102,204,0.45),
            0 0 44px rgba(0,102,204,0.28),
            0 24px 70px rgba(0,0,0,0.65);
        }
        .operator-tab.ecommerce::before {
          background: linear-gradient(
            180deg,
            rgba(0,102,204,0.9),
            rgba(0,102,204,0.35)
          );
        }

        /* =========================
           RIGHT PANEL ACCENT
        ========================= */

        .operator-panel.digital {
          border-color: rgba(220,38,38,0.35);
          box-shadow:
            0 0 0 1px rgba(220,38,38,0.25),
            0 20px 60px rgba(0,0,0,0.55),
            inset 0 0 0 1px rgba(255,255,255,0.02);
        }

        .operator-panel.service {
          border-color: rgba(124,108,255,0.35);
          box-shadow:
            0 0 0 1px rgba(124,108,255,0.25),
            0 20px 60px rgba(0,0,0,0.55),
            inset 0 0 0 1px rgba(255,255,255,0.02);
        }

        .operator-panel.ecommerce {
          border-color: rgba(0,102,204,0.35);
          box-shadow:
            0 0 0 1px rgba(0,102,204,0.25),
            0 20px 60px rgba(0,0,0,0.55),
            inset 0 0 0 1px rgba(255,255,255,0.02);
        }
      `}</style>
      <style jsx>{`
        .operator-status {
          margin-top: 24px;
          padding: 16px 20px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .status-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .status-label {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .status-value {
          font-size: 14px;
          font-weight: 600;
        }

        .status-value.muted {
          opacity: 0.75;
        }

        .status-value.action {
          color: #d4af37;
        }
      `}</style>
    </main>
  );
}