import CoachChat from "@/components/CoachChat";

export default function LessonPage({
  params,
}: {
  params: { lessonSlug: string };
}) {
  const { lessonSlug } = params;

  const title = lessonSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 140 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation · Offer Engineering
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 34, marginBottom: 16 }}>{title}</h1>

      {/* Core lesson content */}
      <section style={{ marginBottom: 36 }}>
        <p style={{ fontSize: 18, lineHeight: 1.75, opacity: 0.9 }}>
          In this lesson, you’ll engineer your offer so it is immediately clear,
          outcome-driven, and easy for a customer to say yes to. Strong offers
          remove friction before traffic, copy, or ads ever matter.
        </p>

        <ul style={{ marginTop: 20, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Clarify the core transformation your offer creates</li>
          <li>Define who this offer is <em>not</em> for</li>
          <li>Structure value so pricing feels justified</li>
          <li>Remove unnecessary complexity</li>
        </ul>
      </section>

      {/* Action guidance */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply This With the AI Coach
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.8 }}>
          Use the coach below to pressure-test your offer, refine positioning,
          and simplify the value proposition until it’s obvious.
        </p>
      </section>

      {/* AI Coach */}
      <CoachChat system="digital-products" coachId="offer-engineering" />
    </div>
  );
}