

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function OfferEngineeringPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Digital Products • Offer Creation</p>
        <h1 className="text-3xl font-semibold mt-2">Offer Engineering</h1>
        <p className="text-muted-foreground mt-3">
          Turn your validated offer into a structured, scalable product.
          This lesson focuses on components, delivery, and leverage.
        </p>
      </div>

      <div className="space-y-4">
        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">What you’ll build</h2>
          <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
            <li>Core offer components (promise, mechanism, outcome)</li>
            <li>Delivery format & leverage</li>
            <li>Scalable structure (async, AI-assisted, systems)</li>
          </ul>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">Key outcome</h2>
          <p className="text-sm text-muted-foreground mt-2">
            By the end of this lesson, you’ll have a clearly engineered offer
            that can be sold, fulfilled, and scaled without you being the bottleneck.
          </p>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-medium text-lg">How to engineer the offer</h2>
          <ol className="list-decimal pl-5 mt-2 text-sm text-muted-foreground space-y-2">
            <li>Define a single clear promise tied to a measurable outcome.</li>
            <li>Explain the mechanism — how the outcome is achieved.</li>
            <li>Remove everything that does not directly support the outcome.</li>
            <li>Design delivery so it works without your constant involvement.</li>
          </ol>
        </section>
      </div>

      <div className="mt-10">
        <CoachChat system="digital-products" coachId="offer-engineering" />
      </div>

      <div className="flex items-center justify-between mt-10">
        <Link
          href="/dashboard/courses/digital-products/offer-creation/pricing-positioning"
          className="text-sm underline text-muted-foreground hover:text-foreground"
        >
          ← Pricing & Positioning
        </Link>

        <Link
          href="/dashboard/courses/digital-products/offer-creation/offer-engineering/lesson-slug"
          className="text-sm font-medium underline"
        >
          Start lesson →
        </Link>
      </div>
    </div>
  );
}