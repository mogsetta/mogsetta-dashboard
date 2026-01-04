import CoachChat from "@/components/CoachChat";

export default function SignalConfirmationPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution Validation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Signal Confirmation
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This lesson helps you decide whether your offer has real market
        validation or needs iteration before moving forward.
      </p>

      <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
        <li>Are people responding consistently?</li>
        <li>Is the pain clear without heavy explanation?</li>
        <li>Are you seeing repeat interest or referrals?</li>
      </ul>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId="signal-confirmation"
        />
      </div>
    </div>
  );
}