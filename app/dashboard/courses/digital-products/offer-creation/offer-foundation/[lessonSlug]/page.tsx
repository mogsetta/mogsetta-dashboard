import CoachChat from "@/components/CoachChat";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;

  const title = lessonSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 140 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 16 }}>{title}</h1>

      <section style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 17, lineHeight: 1.75, opacity: 0.85 }}>
          This lesson walks you through engineering your offer so it is clear,
          scalable, and easy to say yes to.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}>
          Apply With AI Coach
        </h2>

        <CoachChat system="digital-products" coachId="offer-engineering" />
      </section>
    </div>
  );
}