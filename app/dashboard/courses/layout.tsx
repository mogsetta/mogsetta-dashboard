import type { ReactNode } from "react";

export default function CoursesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-os-bg">
      {/* Courses container */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {children}
      </div>
    </section>
  );
}
