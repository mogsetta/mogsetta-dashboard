"use client";

import CoachChat from "../../../../components/CoachChat";

export default function DigitalProductsCoachPage() {
  return (
    <div className="dp-coach">
      {/* HERO */}
      <header className="dp-hero">
        <span className="dp-eyebrow">SYSTEM 01 · PRODUCT AI</span>
        <h1 className="dp-title">Digital Products Command</h1>
        <p className="dp-subtitle">
          Design, validate, and scale digital products as durable systems.
          This operator focuses on leverage, proof, pricing logic, and expansion —
          not content bloat or one‑off launches.
        </p>

        <div className="dp-hero-actions">
          <button className="dp-primary">Audit My Product</button>
          <button className="dp-secondary">View Product Architecture</button>
        </div>
      </header>

      {/* KEY METRICS */}
      <section className="dp-metrics">
        <Metric title="Product Clarity" value="Moderate" />
        <Metric title="Validation Signal" value="Unconfirmed" />
        <Metric title="Leverage Index" value="Low" />
        <Metric title="Scalability Readiness" value="Early" />
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="dp-map">
        <h2>Product Architecture</h2>

        <div className="dp-map-grid">
          <MapCard
            title="Offer Definition"
            tag="FOUNDATION"
            desc="Outcome clarity, scope boundaries, promise design, and positioning."
          />
          <MapCard
            title="Product Structure"
            tag="SYSTEM"
            desc="Modules, assets, sequencing, delivery format, and expansion paths."
          />
          <MapCard
            title="Validation Engine"
            tag="SIGNAL"
            desc="Proof thresholds, early buyers, feedback loops, and iteration logic."
          />
          <MapCard
            title="Distribution & Scale"
            tag="GROWTH"
            desc="Launch paths, pricing layers, funnels, and long‑term expansion."
          />
        </div>
      </section>

      {/* OPTIMIZATION SIGNALS */}
      <section className="dp-optimize">
        <h2>Optimization Signals</h2>

        <div className="dp-opt-grid">
          <OptimizeCard
            title="Overbuilding Risk"
            signal="High"
            action="Reduce scope, validate earlier, and ship proof assets first."
          />
          <OptimizeCard
            title="Pricing Confidence"
            signal="Weak"
            action="Anchor pricing to outcome value, not content volume."
          />
          <OptimizeCard
            title="Leverage Efficiency"
            signal="Low"
            action="Convert expertise into reusable systems and templates."
          />
        </div>
      </section>

      {/* EXECUTION LOGIC */}
      <section className="dp-flow">
        <h2>Execution Logic</h2>

        <div className="dp-flow-grid">
          <FlowStep
            step="01"
            title="Define the Outcome"
            desc="Clarify the transformation customers already pay for."
          />
          <FlowStep
            step="02"
            title="Engineer the Product"
            desc="Design structure, assets, and delivery before production."
          />
          <FlowStep
            step="03"
            title="Validate with Signal"
            desc="Ship minimal proof, confirm demand, avoid overbuilding."
          />
          <FlowStep
            step="04"
            title="Scale with Leverage"
            desc="Expand using pricing layers, bundles, and reuse."
          />
        </div>
      </section>

      {/* OPERATOR */}
      <section className="operator-shell" id="operator">
        <div className="operator-frame">
          <CoachChat
            coachId="digital-products"
            intent="strategy"
            system="digital-products"
            module="digital-products"
            title="Digital Products Coach"
            description="High-level strategy, validation logic, pricing decisions, and leverage-based product design."
          />
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .dp-coach {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 140px;
        }

        .dp-hero {
          margin-bottom: 90px;
        }

        .dp-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(220,38,38,0.85);
          text-transform: uppercase;
          margin-bottom: 18px;
          display: inline-block;
        }

        .dp-title {
          font-size: 48px;
          margin-bottom: 18px;
        }

        .dp-subtitle {
          max-width: 900px;
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.8;
        }

        .dp-hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 28px;
        }

        .dp-primary {
          background: linear-gradient(135deg, #dc2626, #7f1d1d);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 600;
          cursor: pointer;
        }

        .dp-secondary {
          background: transparent;
          border: 1px solid rgba(220,38,38,0.4);
          color: #dc2626;
          border-radius: 12px;
          padding: 12px 18px;
          cursor: pointer;
        }

        .dp-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 100px;
        }

        .dp-map,
        .dp-optimize,
        .dp-flow {
          margin-bottom: 110px;
        }

        .dp-map-grid,
        .dp-opt-grid,
        .dp-flow-grid {
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
            0 0 0 1px rgba(220,38,38,0.35),
            0 0 40px rgba(220,38,38,0.18),
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
              rgba(220,38,38,0.14),
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
          color: rgba(220,38,38,0.85);
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
              rgba(220,38,38,0.14),
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
          color: rgba(220,38,38,0.85);
        }
        p {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}