"use client";

import CoachChat from "../../../../components/CoachChat";

export default function ServiceSystemsCoachPage() {
  return (
    <div className="ss-coach">
      {/* HERO */}
      <header className="ss-hero">
        <span className="ss-eyebrow">SYSTEM 02 · OPERATIONS AI</span>
        <h1 className="ss-title">Service Systems Command</h1>
        <p className="ss-subtitle">
          Design, stabilize, and scale service businesses with operational
          precision. This system focuses on scope control, delivery reliability,
          delegation readiness, and sustainable growth — without chaos.
        </p>

        <div className="ss-hero-actions">
          <button className="ss-primary">Audit My Service</button>
          <button className="ss-secondary">View System Architecture</button>
        </div>
      </header>

      {/* KEY METRICS */}
      <section className="ss-metrics">
        <Metric title="Delivery Stability" value="Moderate" />
        <Metric title="Scope Discipline" value="Weak" />
        <Metric title="Capacity Utilization" value="72%" />
        <Metric title="Founder Dependence" value="High" />
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="ss-map">
        <h2>Service Architecture</h2>

        <div className="ss-map-grid">
          <MapCard
            title="Offer Engineering"
            tag="FOUNDATION"
            desc="Define outcomes, scope boundaries, pricing logic, and service tiers to eliminate ambiguity."
          />
          <MapCard
            title="Client Intake & Onboarding"
            tag="DELIVERY"
            desc="Standardize intake, expectation setting, kickoff flows, and internal handoffs."
          />
          <MapCard
            title="Fulfillment Engine"
            tag="OPERATIONS"
            desc="Systemize SOPs, workflows, QA checkpoints, and execution sequencing."
          />
          <MapCard
            title="Retention & Expansion"
            tag="GROWTH"
            desc="Engineer renewals, upsells, proof loops, and long‑term client value."
          />
        </div>
      </section>

      {/* RISK & OPTIMIZATION */}
      <section className="ss-optimize">
        <h2>Operational Risk Signals</h2>

        <div className="ss-opt-grid">
          <OptimizeCard
            title="Scope Creep"
            signal="Critical"
            action="Tighten deliverables, redefine guarantees, and enforce boundaries."
          />
          <OptimizeCard
            title="Founder Bottleneck"
            signal="High"
            action="Document SOPs and redesign ownership of fulfillment."
          />
          <OptimizeCard
            title="Delivery Variance"
            signal="Moderate"
            action="Standardize workflows and introduce quality checkpoints."
          />
        </div>
      </section>

      {/* EXECUTION LOGIC */}
      <section className="ss-flow">
        <h2>Execution Logic</h2>

        <div className="ss-flow-grid">
          <FlowStep
            step="01"
            title="Define the Outcome"
            desc="Clarify exactly what result the service guarantees."
          />
          <FlowStep
            step="02"
            title="Engineer Scope"
            desc="Lock boundaries, pricing logic, and constraints."
          />
          <FlowStep
            step="03"
            title="Systemize Delivery"
            desc="Build SOPs and workflows before attempting scale."
          />
          <FlowStep
            step="04"
            title="Stabilize & Scale"
            desc="Delegate execution and safely increase capacity."
          />
        </div>
      </section>

      {/* OPERATOR */}
      <section className="operator-shell" id="operator">
        <div className="operator-frame">
          <CoachChat
            coachId="service-systems"
            system="service-systems"
            module="service-systems"
            intent="strategy"
            title="Service Systems Operator"
            description="Ask about offer design, scope control, SOP creation, delegation, fulfillment optimization, or scaling service businesses."
          />
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .ss-coach {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 140px;
        }

        .ss-hero {
          margin-bottom: 90px;
        }

        .ss-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(124,108,255,0.85);
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 18px;
        }

        .ss-title {
          font-size: 48px;
          margin-bottom: 18px;
        }

        .ss-subtitle {
          max-width: 900px;
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.8;
        }

        .ss-hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 28px;
        }

        .ss-primary {
          background: linear-gradient(135deg, #7c6cff, #5a4fdc);
          color: #000;
          border: none;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 600;
          cursor: pointer;
        }

        .ss-secondary {
          background: transparent;
          border: 1px solid rgba(124,108,255,0.35);
          color: #7c6cff;
          border-radius: 12px;
          padding: 12px 18px;
          cursor: pointer;
        }

        .ss-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 100px;
        }

        .ss-map,
        .ss-optimize,
        .ss-flow {
          margin-bottom: 110px;
        }

        .ss-map-grid,
        .ss-opt-grid,
        .ss-flow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
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

        .operator-frame:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 1px rgba(124,108,255,0.35),
            0 0 40px rgba(124,108,255,0.18),
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
          background: radial-gradient(
              circle at top,
              rgba(124,108,255,0.14),
              transparent 60%
            ),
            linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 22px;
        }
        .metric p {
          font-size: 13px;
          opacity: 0.6;
        }
        .metric h3 {
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
          letter-spacing: 0.22em;
          color: rgba(124,108,255,0.85);
        }
        h3 {
          margin: 10px 0 8px;
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
          background: radial-gradient(
              circle at top,
              rgba(124,108,255,0.14),
              transparent 60%
            ),
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
          letter-spacing: 0.22em;
          color: rgba(124,108,255,0.85);
        }
        p {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}