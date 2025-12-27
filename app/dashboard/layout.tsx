"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

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

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
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

        <div className={`dash-active-system ${activeSystem ?? ""}`}>
          <span className="system-label">Active System</span>
          <span className="system-name">
            {!activeSystem && "Select a system"}
            {activeSystem === "digital" && "Digital Products"}
            {activeSystem === "service" && "Service Systems"}
            {activeSystem === "ecommerce" && "E‑Commerce"}
          </span>
        </div>

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
          gap: 6px;
          margin-top: 14px;
        }

        .dash-active-system {
          margin-top: 32px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .dash-active-system.digital {
          border-color: rgba(239,68,68,0.45);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04),
            0 0 0 1px rgba(239,68,68,0.18);
        }

        .dash-active-system.service {
          border-color: rgba(168,85,247,0.45);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04),
            0 0 0 1px rgba(168,85,247,0.18);
        }

        .dash-active-system.ecommerce {
          border-color: rgba(59,130,246,0.45);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04),
            0 0 0 1px rgba(59,130,246,0.18);
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
          font-size: 15px;
          font-weight: 600;
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
          font-size: 15px;
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