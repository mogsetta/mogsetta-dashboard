import { notFound } from "next/navigation";
import CoachChat from "@/components/CoachChat";

const lessons: Record<
  string,
  {
    title: string;
    description: string;
    content: string[];
    exercise: string[];
  }
> = {
  "value-stacking": {
    title: "Value Stacking",
    description:
      "Increase perceived value without adding unnecessary complexity by layering outcomes, bonuses, and positioning.",
    content: [
      "Value stacking is about increasing perceived value without increasing workload. Most strong offers win not because they include more, but because they communicate value more clearly.",
      "Effective value stacking focuses on outcomes, positioning, bonuses, and framing — not feature bloat. Each layer should make the core offer feel more complete, safer, or more compelling.",
      "Ask yourself: does this addition make the offer easier to say yes to? If it doesn’t increase confidence or clarity, it’s not real value.",
      "Before moving on, list the core outcome of your offer, then identify 2–3 supporting elements that strengthen or reinforce that outcome without adding complexity."
    ],
    exercise: [
      "Write the single core outcome your offer delivers.",
      "List 2–3 supporting elements that reinforce this outcome (bonuses, positioning, framing).",
      "Remove anything that adds complexity without increasing confidence.",
      "Rewrite your offer in one sentence using only outcomes, not features."
    ],
  },
  "pricing-logic": {
    title: "Pricing Logic",
    description:
      "Learn how to price based on value, leverage, and outcome — not hours, effort, or content volume.",
    content: [
      "Strong pricing is anchored to outcome value, not effort. Customers do not pay for how long something takes — they pay for the result it produces.",
      "Pricing logic should reflect the importance, urgency, and leverage of the outcome you deliver. If the result saves time, money, or stress, price accordingly.",
      "Avoid pricing based on comparison or insecurity. Confident pricing comes from understanding the cost of the problem you solve.",
      "Before moving on, write down the financial, emotional, or opportunity cost of not solving the problem — this becomes your pricing anchor."
    ],
    exercise: [
      "List the top 3 consequences of not solving the problem your offer addresses.",
      "Estimate the financial or opportunity cost of those consequences.",
      "Decide what outcome would make the price feel obvious rather than debated.",
      "Write one sentence explaining why your price is justified by the result."
    ],
  },
  guarantees: {
    title: "Guarantees",
    description:
      "Reduce buyer risk and increase conversion by structuring clear, confident guarantees.",
    content: [
      "Guarantees exist to reduce buyer risk, not to promise perfection. A strong guarantee signals confidence and lowers hesitation at the moment of decision.",
      "The best guarantees protect the buyer without putting you at unreasonable risk. Clear conditions create trust on both sides.",
      "Guarantees should reinforce belief in the outcome, not invite misuse. When framed correctly, they increase conversions without increasing refunds.",
      "Before moving on, define a guarantee that removes the buyer’s biggest fear while keeping expectations clear and fair."
    ],
    exercise: [
      "Identify the biggest fear or hesitation a buyer might have before purchasing.",
      "Decide what result or milestone your guarantee should cover.",
      "Define clear conditions that keep the guarantee fair for both sides.",
      "Write your guarantee in one confident, plain-language sentence."
    ],
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

      {/* Lesson content */}
      <section style={{ marginBottom: 64 }}>
        {lesson.content.map((paragraph, index) => (
          <p
            key={index}
            style={{ lineHeight: 1.6, opacity: 0.9, marginBottom: 16 }}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Exercises */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
          Apply This Lesson
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          {lesson.exercise.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
