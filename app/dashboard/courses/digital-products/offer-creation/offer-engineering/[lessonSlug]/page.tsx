import CoachChat from "@/components/CoachChat";
import Link from "next/link";

type LessonKey = "value-stacking" | "pricing-logic" | "guarantees";

const LESSONS: Record<
  LessonKey,
  {
    title: string;
    description: string;
    content: {
      sections: {
        heading: string;
        body: string[];
      }[];
    };
    next?: LessonKey;
    prev?: LessonKey;
  }
> = {
  "value-stacking": {
    title: "Value Stacking",
    description:
      "Learn how to stack perceived value so your offer feels obvious, not expensive.",
    content: {
      sections: [
        {
          heading: "What Value Stacking Really Means",
          body: [
            "Value stacking is the act of increasing perceived outcome without increasing complexity.",
            "Buyers do not pay for features. They pay for outcomes, certainty, speed, and simplicity.",
          ],
        },
        {
          heading: "The Four Value Levers",
          body: [
            "Outcome — the result they ultimately want.",
            "Certainty — proof that it will work.",
            "Speed — how fast they get the result.",
            "Simplicity — how easy it is to follow through.",
          ],
        },
        {
          heading: "Your Job as the Builder",
          body: [
            "Every component in your offer must increase at least one value lever.",
            "If it does not increase value, it is noise and should be removed.",
          ],
        },
        {
          heading: "Why Features Don’t Sell",
          body: [
            "Features are descriptive, not persuasive.",
            "Buyers do not emotionally connect with tools, dashboards, modules, or frameworks.",
            "They connect with outcomes: what changes in their life or business after buying.",
            "When an offer lists features first, the buyer must do mental work to translate them into value.",
            "Mental work creates friction — friction kills conversion.",
          ],
        },
        {
          heading: "Stacking Value Without Overloading",
          body: [
            "More components do not automatically increase value.",
            "Unstructured stacks create confusion, not confidence.",
            "Every element you add must clearly increase one of the four value levers.",
            "If an element does not increase outcome, certainty, speed, or simplicity — it should be removed.",
            "The highest converting offers often have fewer components, but clearer outcomes.",
          ],
        },
        {
          heading: "Before vs After: A Simple Offer Example",
          body: [
            "Before stacking:",
            "• Access to templates",
            "• Weekly calls",
            "• Community access",
            "",
            "After stacking:",
            "• A clear outcome (what the buyer will achieve)",
            "• A defined path (how they get there step-by-step)",
            "• Proof and validation (why it works)",
            "• Speed and simplicity (why this is faster than alternatives)",
            "",
            "The components did not change — the framing did.",
          ],
        },
      ],
    },
    next: "pricing-logic",
  },

  "pricing-logic": {
    title: "Pricing Logic",
    description:
      "Understand how to price your offer using anchors, ranges, and buying psychology.",
    content: {
      sections: [
        {
          heading: "Pricing Is a Signal, Not a Math Problem",
          body: [
            "Your price communicates who the offer is for before a single word is read.",
            "Low prices signal uncertainty, lack of confidence, or low leverage.",
            "High prices signal seriousness, speed, and a promise of outcome.",
            "Pricing is positioning. You cannot separate the two.",
          ],
        },
        {
          heading: "How Buyers Actually Decide What Is Expensive",
          body: [
            "Buyers never evaluate price in isolation.",
            "They compare your price to an internal reference point — not to reality.",
            "Your job is to control what that reference point is.",
            "If you do not set the comparison, the buyer will set a bad one.",
          ],
        },
        {
          heading: "Anchors: Controlling the Comparison",
          body: [
            "An anchor is the first meaningful number the buyer sees.",
            "Anchors reset perception of value before the real price appears.",
            "Examples of anchors include:",
            "• What alternatives cost",
            "• Time wasted without a solution",
            "• Revenue opportunity lost",
            "• High-ticket equivalents",
          ],
        },
        {
          heading: "Ranges Beat Single Prices",
          body: [
            "Single prices force binary decisions: yes or no.",
            "Ranges invite consideration and reduce resistance.",
            "A range positions the offer as flexible while still anchored.",
            "Example: “Most people pay between X and Y depending on complexity.”",
          ],
        },
        {
          heading: "Removing Price-Based Friction",
          body: [
            "Confusion kills momentum more than price does.",
            "Every unanswered question creates hesitation.",
            "Clear pricing with a clear outcome removes cognitive load.",
            "The goal is not cheap — the goal is obvious.",
          ],
        },
        {
          heading: "The Golden Rule of Pricing Logic",
          body: [
            "If the outcome feels certain, price becomes secondary.",
            "If the outcome feels vague, price becomes the focus.",
            "Your job is not to justify the number — it is to justify the result.",
          ],
        },
      ],
    },
    prev: "value-stacking",
    next: "guarantees",
  },

  guarantees: {
    title: "Guarantees",
    description:
      "Design risk-reversal mechanisms that increase conversion without increasing refunds.",
    content: {
      sections: [
        {
          heading: "Why Guarantees Exist",
          body: [
            "Every purchase decision contains perceived risk.",
            "The buyer is asking a silent question: “What if this doesn’t work for me?”",
            "A guarantee is not about refunds — it is about reducing fear at the decision point.",
            "When risk feels low, action feels safe.",
          ],
        },
        {
          heading: "The Real Purpose of Risk Reversal",
          body: [
            "Guarantees exist to shift perceived risk away from the buyer.",
            "They do not increase refunds when designed correctly.",
            "Strong guarantees attract serious buyers and repel low-commitment ones.",
            "The goal is confidence, not protection for everyone.",
          ],
        },
        {
          heading: "Weak Guarantees vs Strong Guarantees",
          body: [
            "Weak guarantees are vague, emotional, or unconditional.",
            "Examples of weak guarantees:",
            "• “No questions asked” without effort requirements",
            "• Overly long refund windows",
            "• Guarantees that reward inaction",
            "Strong guarantees are specific, conditional, and effort-based.",
          ],
        },
        {
          heading: "Designing Effort-Based Guarantees",
          body: [
            "Effort-based guarantees protect the system from abuse.",
            "They require the buyer to demonstrate reasonable action.",
            "Examples:",
            "• Completion of required steps",
            "• Submission of deliverables",
            "• Participation in implementation milestones",
            "Effort requirements increase commitment and reduce refunds.",
          ],
        },
        {
          heading: "Outcome-Based Guarantees",
          body: [
            "Outcome-based guarantees tie refunds to measurable results.",
            "They work best when outcomes are clearly defined.",
            "Examples:",
            "• “If you don’t reach X after completing Y, we’ll refund you.”",
            "• “If this does not solve Z within N days, you get your money back.”",
            "Clarity is what makes these guarantees powerful.",
          ],
        },
        {
          heading: "The Guarantee Alignment Rule",
          body: [
            "Your guarantee must align with the promise of the offer.",
            "Over-promising creates refund pressure.",
            "Under-promising reduces conversions.",
            "The best guarantees feel fair, specific, and confidence-driven.",
          ],
        },
        {
          heading: "Final Takeaway",
          body: [
            "A strong guarantee is not generous — it is intelligent.",
            "It increases conversion by removing fear, not by inviting refunds.",
            "Design guarantees that reward action, commitment, and seriousness.",
          ],
        },
      ],
    },
    prev: "pricing-logic",
  },
};

export default async function OfferEngineeringLesson({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const slug = lessonSlug as LessonKey;
  
  const lesson = LESSONS[slug];

  if (!lesson) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Lesson not found</h1>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation · Offer Engineering
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>{lesson.title}</h1>

      {/* Description */}
      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        {lesson.description}
      </p>

      {/* Lesson Content */}
      <div style={{ marginTop: 40 }}>
        {lesson.content.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>
              {section.heading}
            </h2>
            {section.body.map((line, i) => (
              <p
                key={i}
                style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.85 }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* AI Coach */}
      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId={`offer-engineering-${slug}`}
        />
      </div>

      {/* Navigation */}
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
            style={{ opacity: 0.7 }}
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {lesson.next ? (
          <Link
            href={`/dashboard/courses/digital-products/offer-creation/offer-engineering/${lesson.next}`}
            style={{ fontWeight: 500 }}
          >
            Next →
          </Link>
        ) : (
          <Link
            href="/dashboard/courses/digital-products/offer-creation"
            style={{ fontWeight: 500 }}
          >
            Finish Offer Engineering →
          </Link>
        )}
      </div>
    </div>
  );
}