"use client";

import CoachChat from "../../../../components/CoachChat";

export default function EcommerceCoachPage() {
  return (
    <div className="ecx-coach">

      {/* HERO */}
      <header className="ecx-hero">
        <span className="ecx-eyebrow">SYSTEM 03 · AI OPERATOR</span>
        <h1 className="ecx-title">E‑Commerce Revenue Systems</h1>
        <p className="ecx-subtitle">
          Diagnose constraints, engineer leverage, and scale e‑commerce revenue
          through offer design, conversion systems, and retention architecture.
        </p>

        <div className="ecx-hero-actions">
          <button className="ecx-primary">Enter Revenue Control</button>
          <button className="ecx-secondary">View System Map</button>
        </div>
      </header>

      {/* SYSTEM METRICS */}
      <section className="ecx-metrics">
        <Metric title="Conversion Stability" value="Moderate" />
        <Metric title="Primary Constraint" value="Offer Framing" />
        <Metric title="Revenue Expansion" value="AOV & Bundles" />
        <Metric title="Retention Health" value="Under‑Leveraged" />
      </section>

      {/* SYSTEM MAP */}
      <section className="ecx-map">
        <h2>Revenue System Map</h2>

        <div className="ecx-map-grid">
          <MapCard
            title="Offer Engine"
            desc="Value stacking, pricing logic, bundles, guarantees, urgency."
            tag="FOUNDATION"
          />
          <MapCard
            title="Conversion Layer"
            desc="Product pages, trust signals, UX clarity, checkout sequencing."
            tag="CONVERSION"
          />
          <MapCard
            title="Revenue Expansion"
            desc="Upsells, cross‑sells, post‑purchase flows, AOV systems."
            tag="EXPANSION"
          />
          <MapCard
            title="Retention Loops"
            desc="Email, SMS, subscriptions, re‑orders, lifecycle monetization."
            tag="RETENTION"
          />
        </div>
      </section>

      {/* OPTIMIZATION ZONES */}
      <section className="ecx-optimize">
        <h2>Optimization Zones</h2>

        <div className="ecx-opt-grid">
          <OptimizeCard
            title="Offer Clarity"
            signal="High Impact"
            action="Reframe value and stack perceived outcomes."
          />
          <OptimizeCard
            title="Post‑Purchase AOV"
            signal="Critical"
            action="Engineer bundles and upsells with zero fulfillment drag."
          />
          <OptimizeCard
            title="Retention Leakage"
            signal="Moderate"
            action="Deploy lifecycle sequences and reorder logic."
          />
        </div>
      </section>

      {/* EXECUTION FLOW */}
      <section className="ecx-flow">
        <h2>Execution Flow</h2>

        <div className="ecx-flow-grid">
          <FlowStep step="01" title="Diagnose Constraint" desc="Identify the weakest revenue link." />
          <FlowStep step="02" title="Engineer Offer" desc="Increase perceived value without complexity." />
          <FlowStep step="03" title="Optimize Conversion" desc="Clarify messaging and remove friction." />
          <FlowStep step="04" title="Expand & Retain" desc="Build AOV and lifecycle monetization." />
        </div>
      </section>

      {/* OPERATOR */}
      <section className="operator-shell" id="operator">
        <div className="operator-frame ecx-frame">
          <CoachChat
            coachId="ecommerce"
            title="E‑Commerce Revenue Operator"
            description="Ask about offers, conversion systems, bundles, AOV expansion, retention loops, and scalable revenue architecture."
          />
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .ecx-coach {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 140px;
        }

        .ecx-hero {
          margin-bottom: 80px;
        }

        .ecx-eyebrow {
          font-size: 11px;
          letter-spacing: 0.28em;
          color: rgba(30,107,255,0.85);
          text-transform: uppercase;
          margin-bottom: 18px;
          display: inline-block;
        }

        .ecx-title {
          font-size: 48px;
          margin-bottom: 18px;
        }

        .ecx-subtitle {
          max-width: 900px;
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.78;
        }

        .ecx-hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 28px;
        }

        .ecx-primary {
          background: linear-gradient(135deg, #1e6bff, #0047ff);
          color: #000;
          border: none;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 600;
        }

        .ecx-secondary {
          background: transparent;
          border: 1px solid rgba(30,107,255,0.35);
          color: #1e6bff;
          border-radius: 12px;
          padding: 12px 18px;
        }

        .ecx-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
          gap: 20px;
          margin-bottom: 90px;
        }

        .ecx-map,
        .ecx-optimize,
        .ecx-flow {
          margin-bottom: 100px;
        }

        .ecx-map-grid,
        .ecx-opt-grid,
        .ecx-flow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
          gap: 22px;
        }

        .ecx-chat {
          margin-top: 120px;
        }

        .operator-shell {
          margin-top: 120px;
        }

        .operator-frame {
          position: relative;
          padding: 28px;
          border-radius: 26px;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .ecx-frame:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 1px rgba(30,107,255,0.35),
            0 0 44px rgba(30,107,255,0.22),
            0 18px 50px rgba(0,0,0,0.55);
        }
      `}</style>
    </div>
  );
}

/* COMPONENTS */

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="metric">
      <p>{title}</p>
      <h3>{value}</h3>

      <style jsx>{`
        .metric {
          background: radial-gradient(circle at top, rgba(30,107,255,0.12), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 22px;
        }
        p {
          font-size: 13px;
          opacity: 0.6;
        }
        h3 {
          font-size: 22px;
        }
      `}</style>
    </div>
  );
}

function MapCard({ title, desc, tag }: any) {
  return (
    <div className="map-card">
      <span>{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>

      <style jsx>{`
        .map-card {
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 26px;
        }
        span {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(30,107,255,0.85);
        }
        p {
          opacity: 0.75;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}

function OptimizeCard({ title, signal, action }: any) {
  return (
    <div className="opt-card">
      <h3>{title}</h3>
      <p><strong>Signal:</strong> {signal}</p>
      <p>{action}</p>

      <style jsx>{`
        .opt-card {
          background: radial-gradient(circle at top, rgba(30,107,255,0.12), transparent 60%),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 26px;
        }
        p {
          opacity: 0.75;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

function FlowStep({ step, title, desc }: any) {
  return (
    <div className="flow">
      <span>{step}</span>
      <h3>{title}</h3>
      <p>{desc}</p>

      <style jsx>{`
        .flow {
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 24px;
        }
        span {
          font-size: 12px;
          letter-spacing: 0.2em;
          color: rgba(30,107,255,0.85);
        }
        p {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}