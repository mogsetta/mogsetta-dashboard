"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { serviceSystemsCourse } from "@/lib/courses/service-system";
import { LessonProvider } from "@/lib/lesson-context";

type ActiveSystem = "digital" | "service" | "ecommerce";

const ActiveSystemContext = React.createContext<{
  activeSystem: ActiveSystem;
  setActiveSystem: (s: ActiveSystem) => void;
} | null>(null);

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const [activeSystem, setActiveSystem] = useState<ActiveSystem>("digital");

  useEffect(() => {
    const path = pathname.toLowerCase();
    if (path.includes("digital")) setActiveSystem("digital");
    else if (path.includes("service")) setActiveSystem("service");
    else if (path.includes("ecommerce") || path.includes("ecom"))
      setActiveSystem("ecommerce");
  }, [pathname]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace("/auth");
    });

    return () => subscription.unsubscribe();
  }, [router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/auth");
  }

  function systemScopedPath(base: "courses" | "coaches") {
    if (activeSystem === "digital") return `/dashboard/${base}/digital-products`;
    if (activeSystem === "service") return `/dashboard/${base}/service-systems`;
    return `/dashboard/${base}/ecommerce`;
  }

  function activeSystemTogglePath() {
    if (pathname.startsWith("/dashboard/coaches")) {
      return systemScopedPath("courses");
    }
    if (pathname.startsWith("/dashboard/courses")) {
      return systemScopedPath("coaches");
    }
    return systemScopedPath("courses");
  }

  const isInServiceCourses = pathname.startsWith(
    "/dashboard/courses/service-systems"
  );

  const pathParts = pathname.split("/").filter(Boolean);
  const activeCourseSlug = pathParts[4];
  const activeLessonSlug = pathParts.length > 5 ? pathParts[5] : null;

  const activeCourse =
    activeCourseSlug === serviceSystemsCourse.course
      ? serviceSystemsCourse
      : null;

  const activeLesson =
    activeCourse && activeLessonSlug
      ? activeCourse.lessons[
          activeLessonSlug as keyof typeof activeCourse.lessons
        ] ?? null
      : null;

  return (
    <LessonProvider>
      <ActiveSystemContext.Provider value={{ activeSystem, setActiveSystem }}>
        <div className="dash-shell">
          <aside className={`dash-sidebar ${activeSystem}`}>
            <div className="dash-brand">
              <span className="dash-logo">◆</span>
              <div className="dash-brand-text">
                <span className="dash-name">Mogsetta</span>
                <span className="dash-tagline">Operator Console</span>
              </div>
            </div>

            <nav className="dash-nav">
              <NavLink href="/dashboard" active={pathname === "/dashboard"}>
                Dashboard
              </NavLink>
              <NavLink
                href="/dashboard/coaches"
                active={pathname.startsWith("/dashboard/coaches")}
              >
                Coaches
              </NavLink>
              <NavLink
                href="/dashboard/courses"
                active={pathname.startsWith("/dashboard/courses")}
              >
                Courses
              </NavLink>
              <NavLink
                href="/dashboard/account"
                active={pathname.startsWith("/dashboard/account")}
              >
                Account
              </NavLink>
            </nav>

            <div className="dash-nav-divider" />

            <Link
              href={activeSystemTogglePath()}
              prefetch={false}
              className={`dash-active-system ${activeSystem}`}
            >
              <span className="system-label">Active System</span>
              <span className="system-name">
                {activeSystem === "digital" && "Digital Products"}
                {activeSystem === "service" && "Service Systems"}
                {activeSystem === "ecommerce" && "E-Commerce"}
              </span>
              <span className="system-switch-icon">↔</span>
            </Link>

            <div className="dash-system-divider" />

            {isInServiceCourses && activeCourse && (
              <div className="dash-course-hierarchy">
                <div className="dash-course-name">{activeCourse.title}</div>
                {activeLesson && (
                  <div className="dash-lesson-name">
                    • {activeLesson.title}
                  </div>
                )}
              </div>
            )}

            <div className="dash-spacer" />

            <button className="dash-logout" onClick={handleLogout}>
              Log out
            </button>
          </aside>

          <main className="dash-main">
            <div className="dash-content">{children}</div>
          </main>
        </div>
      </ActiveSystemContext.Provider>
    </LessonProvider>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link href={href} prefetch={false} className={`dash-link ${active ? "active" : ""}`}>
      {children}
    </Link>
  );
}

export function useActiveSystem() {
  const ctx = React.useContext(ActiveSystemContext);
  if (!ctx) {
    throw new Error("useActiveSystem must be used within DashboardLayout");
  }
  return ctx;
}