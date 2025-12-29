"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { serviceSystemsCourse } from "@/lib/courses/service-system";

export default function ClientAcquisitionModulePage() {
  const lessons = serviceSystemsCourse.lessons;
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("service_completed_lessons") || "[]"
    ) as string[];
    setCompleted(stored);
  }, []);

  return (
    <section className="max-w-4xl space-y-12">
      {/* Module Header */}
      <header className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-muted">
          Service Systems • Client Acquisition
        </span>

        <h1 className="text-4xl font-semibold">
          {serviceSystemsCourse.title}
        </h1>

        <p className="text-lg text-muted max-w-2xl">
          {serviceSystemsCourse.description}
        </p>
      </header>

      <hr className="border-white/10" />

      {/* Lessons List */}
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">
          Lessons
        </h2>

        <div className="space-y-4">
          {Object.entries(lessons).map(([slug, lesson], index) => (
            <Link
              key={slug}
              href={`/courses/service-systems/client-acquisition/${slug}`}
              className={`group block rounded-xl border p-5 transition
                ${
                  completed.includes(slug)
                    ? "border-white/30 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]"
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {completed.includes(slug)
                      ? "Completed"
                      : index === completed.length
                      ? "In Progress"
                      : `Lesson ${index + 1}`}
                  </span>

                  <h3 className="text-lg font-medium">
                    {lesson.title}
                  </h3>

                  <p className="text-sm text-muted max-w-xl">
                    {lesson.summary}
                  </p>
                </div>

                <span className="text-sm text-muted transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}