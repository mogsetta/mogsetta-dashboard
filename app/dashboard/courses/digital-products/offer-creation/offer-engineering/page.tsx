import Link from "next/link";

const LESSONS = [
  {
    slug: "value-stacking",
    title: "Value Stacking",
    description: "Increase perceived value without increasing complexity.",
  },
  {
    slug: "pricing-logic",
    title: "Pricing Logic",
    description: "Anchor price to outcomes, not effort.",
  },
  {
    slug: "guarantees",
    title: "Guarantees & Risk Reversal",
    description: "Reduce perceived risk and increase conversions.",
  },
];

export default function OfferEngineeringPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Offer Engineering</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Offer Engineering is where a good idea becomes a high‑converting offer.
        This stage focuses on how your offer is packaged, priced, and de‑risked
        so it feels obvious to buy. Each lesson below addresses a specific
        leverage point that directly impacts conversion.
      </p>

      <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
        {LESSONS.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/dashboard/courses/digital-products/offer-creation/offer-engineering/${lesson.slug}`}
            style={{
              padding: 20,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3 style={{ marginBottom: 6 }}>{lesson.title}</h3>
            <p style={{ opacity: 0.75 }}>{lesson.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}