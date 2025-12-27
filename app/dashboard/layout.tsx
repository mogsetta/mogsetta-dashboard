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
      <aside className="dash-sidebar">
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
          background: linear-gradient(180deg, #0b0c10, #050506);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
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
        }

        .dash-active-system {
          margin-top: 28px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        /* Color accents driven by activity */
        .dash-active-system.digital {
          border-color: rgba(239,68,68,0.35);
          box-shadow: 0 0 0 1px rgba(239,68,68,0.18);
        }

        .dash-active-system.service {
          border-color: rgba(168,85,247,0.35);
          box-shadow: 0 0 0 1px rgba(168,85,247,0.18);
        }

        .dash-active-system.ecommerce {
          border-color: rgba(59,130,246,0.35);
          box-shadow: 0 0 0 1px rgba(59,130,246,0.18);
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
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 10px 14px;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
        }
        .dash-logout:hover {
          background: rgba(255,255,255,0.04);
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
          display: block;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 15px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.55);
          border: 1px solid transparent;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .dash-link:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .dash-link.active {
          color: #ffffff;
          background: rgba(212, 175, 55, 0.16);
          border-color: rgba(212, 175, 55, 0.4);
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