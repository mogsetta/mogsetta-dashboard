"use client";

export default function AccountPage() {
  return (
    <div className="account-shell">

      {/* HEADER */}
      <header className="account-header">
        <span className="account-eyebrow">ACCOUNT</span>
        <h1 className="account-title">Operator Profile</h1>
        <p className="account-subtitle">
          Manage your identity, access level, and system configuration.
        </p>
      </header>

      {/* IDENTITY */}
      <section className="account-section">
        <h2 className="section-title">Identity</h2>

        <div className="account-row">
          <div>
            <span className="label">Name</span>
            <strong className="value">Danny</strong>
          </div>

          <div>
            <span className="label">Email</span>
            <strong className="value">user@email.com</strong>
          </div>

          <div>
            <span className="label">Account Status</span>
            <strong className="value status-active">Active</strong>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section className="account-section">
        <h2 className="section-title">Access & Plan</h2>

        <div className="account-row">
          <div>
            <span className="label">Plan</span>
            <strong className="value">Growth</strong>
          </div>

          <div>
            <span className="label">AI Access</span>
            <strong className="value">Enabled</strong>
          </div>

          <div>
            <span className="label">Active Systems</span>
            <strong className="value">Digital · Service · E‑Commerce</strong>
          </div>
        </div>
      </section>

      {/* PREFERENCES */}
      <section className="account-section">
        <h2 className="section-title">System Preferences</h2>

        <div className="account-row">
          <div>
            <span className="label">Default System</span>
            <strong className="value">Digital Products</strong>
          </div>

          <div>
            <span className="label">Notifications</span>
            <strong className="value muted">Coming Soon</strong>
          </div>

          <div>
            <span className="label">Theme</span>
            <strong className="value muted">System Default</strong>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="account-section">
        <h2 className="section-title">Security</h2>

        <div className="account-row">
          <div>
            <span className="label">Authentication</span>
            <strong className="value">Email & Password</strong>
          </div>
          <div>
            <button className="secondary small">Change Password</button>
          </div>

          <div>
            <span className="label">Sessions</span>
            <strong className="value muted">Session management coming soon</strong>
          </div>

          <div>
            <button className="secondary small">Log out</button>
          </div>
        </div>
      </section>

      {/* DANGER */}
      <section className="account-section danger">
        <h2 className="section-title">Danger Zone</h2>

        <div className="account-row">
          <div>
            <span className="label">Reset Account</span>
            <strong className="value muted">
              Clears progress and system state
            </strong>
          </div>

          <div>
            <button className="danger-btn">Delete Account</button>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .account-shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 24px 160px;
        }

        .account-header {
          margin-bottom: 64px;
        }

        .account-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          opacity: 0.6;
        }

        .account-title {
          font-size: 40px;
          margin: 14px 0 16px;
        }

        .account-subtitle {
          max-width: 720px;
          font-size: 17px;
          line-height: 1.75;
          opacity: 0.75;
        }

        .account-section {
          margin-bottom: 72px;
        }

        .account-section::before {
          content: "";
          display: block;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0),
            rgba(255,255,255,0.08),
            rgba(255,255,255,0)
          );
          margin-bottom: 28px;
        }

        .account-section:first-of-type::before {
          display: none;
        }

        .section-title {
          font-size: 13px;
          letter-spacing: 0.22em;
          opacity: 0.6;
          margin-bottom: 22px;
        }

        .account-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 24px;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .account-row:hover {
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
        }

        .account-row button {
          align-self: flex-start;
        }

        .label {
          font-size: 11px;
          letter-spacing: 0.18em;
          opacity: 0.6;
        }

        .value {
          display: block;
          margin-top: 6px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .muted {
          opacity: 0.6;
        }

        .status-active {
          color: #22c55e;
          text-shadow: 0 0 14px rgba(34,197,94,0.6);
          animation: activePulse 3.2s ease-in-out infinite;
        }

        .secondary.small {
          margin-top: 12px;
          padding: 8px 14px;
          border-radius: 10px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .secondary.small:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.35);
        }

        .danger {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 48px;
        }

        .danger-btn {
          margin-top: 12px;
          padding: 8px 14px;
          border-radius: 10px;
          background: rgba(220,38,38,0.12);
          border: 1px solid rgba(220,38,38,0.35);
          color: #f87171;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .danger-btn:hover {
          background: rgba(220,38,38,0.22);
          border-color: rgba(220,38,38,0.5);
        }

        @keyframes activePulse {
          0% {
            text-shadow: 0 0 10px rgba(34,197,94,0.35);
          }
          50% {
            text-shadow: 0 0 16px rgba(34,197,94,0.5);
          }
          100% {
            text-shadow: 0 0 10px rgba(34,197,94,0.35);
          }
        }
      `}</style>
    </div>
  );
}