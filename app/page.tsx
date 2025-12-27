export default function DashboardPage() {
  return (
    <main style={{ padding: "32px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
        Mogsetta Dashboard
      </h1>

      <p style={{ marginTop: "12px", opacity: 0.7 }}>
        Welcome. This is your operator control panel.
      </p>

      <div style={{ marginTop: "32px" }}>
        <ul>
          <li>📘 Courses</li>
          <li>🤖 AI Coaches</li>
          <li>📊 Progress</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>
    </main>
  );
}