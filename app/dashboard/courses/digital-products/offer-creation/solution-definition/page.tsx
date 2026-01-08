import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function SolutionDefinitionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <p className="text-sm text-muted-foreground">
        Digital Products • Offer Creation
      </p>

      <h1 className="text-3xl font-semibold mt-2">Solution Definition</h1>

      <p className="text-muted-foreground mt-3">
        Define the exact solution you are delivering — not features, not content,
        but the transformation your customer is paying for.
      </p>

      <div className="mt-8 space-y-4">
        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">What a solution really is</h2>
          <p className="text-sm text-muted-foreground mt-2">
            A solution is the smallest set of actions required to move someone
            from their current state to a desired outcome — reliably.
          </p>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">Define your solution</h2>
          <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-2">
            <li>What problem does this solve?</li>
            <li>What changes after it’s implemented?</li>
            <li>What steps are unavoidable?</li>
          </ul>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">Solution clarity checklist</h2>
          <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-2">
            <li>The outcome can be described in one sentence</li>
            <li>The customer knows exactly what changes after completion</li>
            <li>The solution removes a bottleneck, not just adds information</li>
            <li>The steps are sequential and non-optional</li>
            <li>The result is observable within a short time window</li>
          </ul>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">The solution test</h2>
          <p className="text-sm text-muted-foreground mt-2">
            A strong solution passes three tests:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-2">
            <li>It directly removes the core constraint holding the customer back</li>
            <li>It can be executed without relying on motivation or talent</li>
            <li>It produces a visible result quickly</li>
          </ul>
        </section>
      </div>

      <div className="mt-10">
        <CoachChat
          system="digital-products"
          module="offer-creation"
          coachId="solution-definition"
          intent="lesson"
          lesson="solution-definition"
        />
      </div>

      <div className="flex items-center justify-between mt-10">
        <Link
          href="/dashboard/courses/digital-products/offer-creation/audience-clarity"
          className="text-sm underline text-muted-foreground hover:text-foreground"
        >
          ← Audience Clarity
        </Link>

        <Link
          href="/dashboard/courses/digital-products/offer-creation/offer-structure"
          className="text-sm font-medium underline"
        >
          Offer Structure →
        </Link>
      </div>
    </div>
  );
}