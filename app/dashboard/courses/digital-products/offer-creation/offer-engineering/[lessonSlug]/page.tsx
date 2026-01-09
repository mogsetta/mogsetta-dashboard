import { notFound } from "next/navigation";
import CoachChat from "@/components/CoachChat";

const lessons: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "value-stacking": {
    title: "Value Stacking",
    description:
      "Increase perceived value without adding unnecessary complexity by layering outcomes, bonuses, and positioning.",
  },
  "pricing-logic": {
    title: "Pricing Logic",
    description:
      "Learn how to price based on value, leverage, and outcome — not hours, effort, or content volume.",
  },
  guarantees: {
    title: "Guarantees",
    description:
      "Reduce buyer risk and increase conversion by structuring clear, confident guarantees.",
  },
};

type Props = {
  params: Promise<{
    lessonSlug: string;
  }>;
};

export default async function OfferEngineeringLessonPage({ params }: Props) {
  const { lessonSlug } = await params;
  const lesson = lessons[lessonSlug];

  if (!lesson) {
    notFound();
  }

  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        {lesson.title}
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 40 }}>
        {lesson.description}
      </p>

      {/* Lesson placeholder */}
      <section style={{ marginBottom: 64 }}>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          This lesson will walk you through the core principles, decision logic,
          and practical considerations for <strong>{lesson.title}</strong>.
          Focus on understanding how this component strengthens your overall
          offer — not on adding more features.
        </p>
      </section>

      {/* Lesson AI Coach */}
      <CoachChat
        coachId="digital-products"
        system="digital-products"
        module="offer-engineering"
        lesson={lessonSlug}
        intent="lesson"
        title={`${lesson.title} Coach`}
        description={`Get help applying ${lesson.title.toLowerCase()} to your specific offer and context.`}
      />
    </div>
  );
}
