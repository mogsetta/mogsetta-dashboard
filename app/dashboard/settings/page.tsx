export default function SettingsPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>
          Settings
        </h1>
        <p style={{ opacity: 0.7 }}>
          Manage your account, preferences, and system configuration.
        </p>
      </header>

      {/* Sections */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        <SettingCard
          title="Account"
          desc="Profile details, email, and basic account information."
        />

        <SettingCard
          title="Plan & Billing"
          desc="View your current plan and manage billing when available."
        />

        <SettingCard
          title="AI Preferences"
          desc="Customize how your AI coaches assist you while building."
        />

        <SettingCard
          title="Security"
          desc="Authentication, sessions, and security controls."
        />
      </section>
    </div>
  );
}

function SettingCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: "#0b0c10",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 24,
      }}
    >
      <h3 style={{ fontSize: 18, marginBottom: 8 }}>{title}</h3>
      <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}