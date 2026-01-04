

import CoachChat from "@/components/CoachChat";

export default function OfferStructureLesson() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Offer Structure
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        In this lesson, we define the structure of your offer so it is easy to
        understand, easy to deliver, and easy for customers to say yes to.
      </p>

      <div style={{ marginTop: 40 }}>
        <CoachChat system="digital-products" coachId="offer-structure" />
      </div>
    </div>
  );
}