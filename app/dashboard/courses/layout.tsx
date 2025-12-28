import type { ReactNode } from "react";

export default function CoursesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-os-bg">
      {/* Courses / Lessons Shell */}
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
          {/* MAIN CONTENT */}
          <main className="min-w-0">
            {children}
          </main>

          {/* AI OPERATOR SLOT (shared across lessons later) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-fit">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">
                  AI Operator
                </span>
                <span className="text-xs text-muted">
                  Idle
                </span>
              </div>

              <div className="text-sm text-muted leading-relaxed">
                The AI operator will assist you with execution, validation,
                and next actions for this lesson.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
