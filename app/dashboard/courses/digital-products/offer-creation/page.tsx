

"use client";

import Link from "next/link";
import { digitalProductsCourse } from "@/lib/courses/digital-products";

export default function OfferCreationModulePage() {
  const lessons = Object.entries(digitalProductsCourse.lessons)
    .sort((a, b) => a[1].order - b[1].order);

  return (
    <section className="max-w-6xl space-y-10">
      <header className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-muted">
          Digital Products • Module
        </span>

        <h1 className="text-4xl font-semibold">Offer Creation</h1>

        <p className="text-lg text-muted max-w-2xl">
          Learn how to design, validate, and position a digital product offer
          that converts without relying on hype.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map(([slug, lesson]) => (
          <Link
            key={slug}
            href={`/dashboard/courses/digital-products/offer-creation/${slug}`}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition"
          >
            <h3 className="text-lg font-medium mb-2">{lesson.title}</h3>
            <p className="text-sm text-muted">{lesson.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}