"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { serviceSystemsCourse } from "@/lib/courses/service-system";

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

  const isInServiceCourses = pathname.startsWith("/dashboard/courses/service-systems");

  const pathParts = pathname.split("/").filter(Boolean);
  const activeCourseSlug = pathParts[4]; // client-acquisition
  const activeLessonSlug =
    pathParts.length > 5 ? pathParts[5] : null; // offer-clarity

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

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [activeSystem, setActiveSystem] = useState<ActiveSystem>("digital");

  useEffect(() => {
    const path = pathname.toLowerCase();

    if (path.includes("digital")) {
      setActiveSystem("digital");
      return;
    }

    if (path.includes("service")) {
      setActiveSystem("service");
      return;
    }

    if (
      path.includes("ecommerce") ||
      path.includes("e-commerce") ||
      path.includes("ecom")
    ) {
      setActiveSystem("ecommerce");
      return;
    }
  }, [pathname]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace("/login");
    });

    return () => subscription.unsubscribe();
  }, [router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
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

  return (
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
          className={`dash-active-system ${activeSystem ?? ""}`}
        >
          <span className="system-label">Active System</span>
          <span className="system-name">
            {activeSystem === "digital" && "Digital Products"}
            {activeSystem === "service" && "Service Systems"}
            {activeSystem === "ecommerce" && "E‑Commerce"}
          </span>
          <span className="system-switch-icon">↔</span>
        </Link>

        <div className="dash-system-divider" />

        {isInServiceCourses && activeCourse && (
          <div className="dash-course-hierarchy">
            <div className="dash-course-name">
              {activeCourse.title}
            </div>

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

      <style jsx>{`
        .dash-shell {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          min-height: 100vh;
          width: 100%;
          background: radial-gradient(
              circle at 20% 10%,
              rgba(212, 175, 55, 0.06),
              transparent 35%
            ),
            #050506;
        }

        .dash-sidebar {
          position: relative;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .dash-sidebar::before {
          content: "";
          position: absolute;
          inset: 0;
          background: transparent;
          pointer-events: none;
          transition: background 0.4s ease;
        }

        .dash-sidebar.digital::before {
          background: linear-gradient(
            180deg,
            rgba(239, 68, 68, 0.06),
            rgba(239, 68, 68, 0.02),
            transparent 60%
          );
        }

        .dash-sidebar.service::before {
          background: linear-gradient(
            180deg,
            rgba(168, 85, 247, 0.06),
            rgba(168, 85, 247, 0.02),
            transparent 60%
          );
        }

        .dash-sidebar.ecommerce::before {
          background: linear-gradient(
            180deg,
            rgba(59, 130, 246, 0.06),
            rgba(59, 130, 246, 0.02),
            transparent 60%
          );
        }

        .dash-main {
          overflow-x: hidden;
          display: flex;
          justify-content: center;
        }

        .dash-content {
          width: 100%;
          max-width: 1320px;
          padding: 56px 64px 96px;
          margin: 0 auto;
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .dash-shell {
            grid-template-columns: 1fr;
          }

          .dash-sidebar {
            display: none;
          }

          .dash-content {
            padding: 32px 20px 80px;
          }
        }

        .dash-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 36px;
          position: relative;
        }

        .dash-brand::after {
          content: "";
          position: absolute;
          bottom: -18px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.12),
            transparent
          );
        }

        .dash-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .dash-name {
          font-size: 16px;
          font-weight: 600;
        }

        .dash-tagline {
          font-size: 11px;
          opacity: 0.55;
        }

        .dash-logo {
          color: #d4af37;
          font-size: 20px;
        }

        .dash-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 18px;
        }

        .dash-nav-divider {
          margin: 32px 0 36px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.18),
            transparent
          );
        }

        .dash-active-system {
          margin-top: 48px;
          margin-bottom: 20px;
          padding: 20px 20px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 0 0 1px rgba(255,255,255,0.25),
            0 18px 44px rgba(0,0,0,0.65);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          position: relative;
        }

        .dash-active-system:hover {
          transform: translateY(-1px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 0 0 1px rgba(255,255,255,0.35),
            0 22px 56px rgba(0,0,0,0.75);
        }

        .dash-active-system.digital {
          border-color: rgba(239,68,68,0.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 0 0 1px rgba(239,68,68,0.45),
            0 18px 44px rgba(0,0,0,0.65);
        }

        .dash-active-system.service {
          border-color: rgba(168,85,247,0.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 0 0 1px rgba(168,85,247,0.45),
            0 18px 44px rgba(0,0,0,0.65);
        }

        .dash-active-system.ecommerce {
          border-color: rgba(59,130,246,0.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 0 0 1px rgba(59,130,246,0.45),
            0 18px 44px rgba(0,0,0,0.65);
        }

        .dash-system-divider {
          margin: 36px 0 24px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.12),
            transparent
          );
        }

        .dash-course-hierarchy {
          margin: 8px 6px 0;
          padding-left: 14px;
          border-left: 1px solid rgba(255,255,255,0.12);
        }

        .dash-course-name {
          font-size: 13.5px;
          font-weight: 600;
          opacity: 0.85;
          margin-bottom: 6px;
        }

        .dash-lesson-name {
          font-size: 13px;
          opacity: 0.65;
        }

        .system-switch-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        .dash-active-system:hover .system-switch-icon {
          opacity: 0.45;
          transform: translateY(-50%) translateX(2px);
        }

        .system-label {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          opacity: 0.45;
          display: block;
          margin-bottom: 6px;
        }

        .system-name {
          font-size: 15.5px;
          font-weight: 600;
        }

        .dash-divider {
          margin: 28px 0 20px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.12),
            transparent
          );
        }

        .dash-section-gap {
          height: 28px;
        }

        .dash-spacer {
          flex: 1;
        }

        .dash-logout {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 11px 16px;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          margin-top: 12px;
        }
        .dash-logout:hover {
          background: rgba(255,255,255,0.06);
          color: #ffffff;
        }
      `}</style>
      </div>
    </ActiveSystemContext.Provider>
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
    <Link href={href} className={`dash-link ${active ? "active" : ""}`}>
      {children}

      <style jsx>{`
        .dash-link {
          position: relative;
          display: block;
          padding: 12px 16px 12px 18px;
          border-radius: 14px;
          font-size: 15.5px;
          font-weight: 500;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.55);
          border: 1px solid transparent;
          background: transparent;
          transition:
            color 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease,
            box-shadow 0.18s ease,
            transform 0.18s ease;
        }

        .dash-link::before {
          content: "";
          position: absolute;
          left: 6px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          border-radius: 2px;
          background: transparent;
          transition: background 0.18s ease;
        }

        .dash-link:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-1px);
        }

        .dash-link.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 8px 24px rgba(0,0,0,0.55);
        }

        .dash-link.active::before {
          background: rgba(255,255,255,0.9);
        }

        .dash-sidebar.digital .dash-link.active::before {
          background: rgba(239,68,68,0.9);
        }

        .dash-sidebar.service .dash-link.active::before {
          background: rgba(168,85,247,0.9);
        }

        .dash-sidebar.ecommerce .dash-link.active::before {
          background: rgba(59,130,246,0.9);
        }
      `}</style>
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