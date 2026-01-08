import Link from "next/link";
import { notFound } from "next/navigation";
import CoachChat from "@/components/CoachChat";

type LessonKey = "value-stacking" | "pricing-logic" | "guarantees";

const LESSONS: Record<
  LessonKey,
  {
    title: string;
    description: string;
    sections: { heading: string; body: string[] }[];
    next?: LessonKey;
    prev?: LessonKey;
  }
> = {
  "value-stacking": {
    title: "Value Stacking",
    description:
      "Learn how to increase perceived value without increasing complexity.",
    sections: [
      {
        heading: "What Value Stacking Means",
        body: [
          "Value stacking is about amplifying perceived outcome, not adding features.",
          "Buyers pay for results, certainty, speed, and simplicity.",
        ],
      },
    ],
    next: "pricing-logic",
  },
  "pricing-logic": {
    title: "Pricing Logic",
    description:
      "Understand how pricing psychology affects buying decisions.",
    sections: [
      {
        heading: "Pricing as Positioning",
        body: [
          "Price communicates who the offer is for before anything is read.",
          "Clear outcomes reduce price resistance.",
        ],
      },
    ],
    prev: "value-stacking",
    next: "guarantees",
  },
  guarantees: {
    title: "Guarantees",
    description:
      "Reduce buyer risk and increase confidence at the decision point.",
    sections: [
      {
        heading: "Why Guarantees Matter",
        body: [
          "Guarantees remove fear at the moment of purchase.",
          "Strong guarantees reward action, not inaction.",
        ],
      },
    ],
    prev: "pricing-logic",
  },
};

export default async function OfferEngineeringLesson({
  params,
}: {
  params: Promise<{ lessonSlug: string }> | { lessonSlug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.lessonSlug as LessonKey;
  const lesson = LESSONS[slug];

  if (!lesson) notFound();

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation · Offer Engineering
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>{lesson.title}</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        {lesson.description}
      </p>

      <div style={{ marginTop: 40 }}>
        {lesson.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>
              {section.heading}
            </h2>
            {section.body.map((line, j) => (
              <p key={j} style={{ fontSize: 16, lineHeight: 1.7 }}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          intent="lesson"
          system="digital-products"
          module="offer-engineering"
          coachId="offer-engineering"
          lesson={slug}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 60,
        }}
      >
        {lesson.prev ? (
          <Link
            href={`/dashboard/courses/digital-products/offer-creation/offer-engineering/${lesson.prev}`}
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {lesson.next ? (
          <Link
            href={`/dashboard/courses/digital-products/offer-creation/offer-engineering/${lesson.next}`}
          >
            Next →
          </Link>
        ) : (
          <Link href="/dashboard/courses/digital-products/offer-creation">
            Finish Offer Engineering →
          </Link>
        )}
      </div>
    </div>
  );
}