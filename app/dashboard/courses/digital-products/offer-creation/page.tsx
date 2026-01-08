import Link from "next/link";

export default function OfferCreationPage() {
  const lessons = [
    {
      number: 1,
      title: "Problem Selection",
      description: "Pick a painful, specific problem people are already trying to solve.",
      href: "/dashboard/courses/digital-products/offer-creation/problem-selection",
    },
    {
      number: 2,
      title: "Audience Clarity",
      description: "Define who this is for, what they want, and why they’ll pay.",
      href: "/dashboard/courses/digital-products/offer-creation/audience-clarity",
    },
    {
      number: 3,
      title: "Solution Definition",
      description: "Turn the problem into a clear outcome + method that feels inevitable.",
      href: "/dashboard/courses/digital-products/offer-creation/solution-definition",
    },
    {
      number: 4,
      title: "Offer Foundation",
      description: "Set the structural foundation so your offer can scale.",
      href: "/dashboard/courses/digital-products/offer-creation/offer-foundation",
    },
    {
      number: 5,
      title: "Offer Structure",
      description: "Map the delivery, components, and boundaries of the offer.",
      href: "/dashboard/courses/digital-products/offer-creation/offer-structure",
    },
    {
      number: 6,
      title: "Offer Engineering",
      description: "Engineer the offer with value stacking, pricing logic, and guarantees.",
      href: "/dashboard/courses/digital-products/offer-creation/offer-engineering",
    },
  ];

  const cardStyle: React.CSSProperties = {
    display: "block",
    padding: 20,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.08)",
    textDecoration: "none",
    color: "inherit",
    background: "rgba(255,255,255,0.015)",
  };

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 34, marginBottom: 10 }}>Offer Creation</h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.85, marginBottom: 28 }}>
        Build a sellable offer from scratch: pick the right problem, define the audience, lock the
        outcome, and structure the delivery.
      </p>

      {/* Start */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          padding: 22,
          background: "rgba(255,255,255,0.015)",
          marginBottom: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 6 }}>Start here</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Lesson 1: Problem Selection</div>
          <div style={{ fontSize: 14, opacity: 0.75, marginTop: 6 }}>
            The whole course gets easier once the problem is locked.
          </div>
        </div>

        <Link
          href={lessons[0].href}
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 12,
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Start Learning
        </Link>
      </div>

      {/* Lessons */}
      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Lessons</div>
      <div style={{ display: "grid", gap: 12 }}>
        {lessons.map((l) => (
          <Link key={l.href} href={l.href} style={cardStyle}>
            <div style={{ opacity: 0.55, fontSize: 13, marginBottom: 6 }}>
              Lesson {l.number}
            </div>
            <div style={{ fontSize: 18, fontWeight: 650, marginBottom: 6 }}>{l.title}</div>
            <div style={{ opacity: 0.75, fontSize: 14, lineHeight: 1.6 }}>{l.description}</div>
          </Link>
        ))}
      </div>

      {/* Next system */}
      <div style={{ marginTop: 28, opacity: 0.7, fontSize: 13 }}>
        Next up after Offer Creation: Pricing &amp; Positioning + Distribution &amp; Validation.
      </div>
    </div>
  );
}