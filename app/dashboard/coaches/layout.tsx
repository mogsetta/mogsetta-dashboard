"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CoachesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isRootCoachesPage = pathname === "/dashboard/coaches";

  const activeSystem = pathname.includes("digital")
    ? "digital"
    : pathname.includes("service")
    ? "service"
    : pathname.includes("ecommerce")
    ? "ecommerce"
    : null;

  const SYSTEM_COLORS: Record<string, string> = {
    digital: "#ef4444",   // red
    service: "#a855f7",   // purple
    ecommerce: "#3b82f6", // blue
  };

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "48px 32px 80px",
      }}
    >
      {!isRootCoachesPage && (
        <>
          {/* Header */}
          <header style={{ marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                color: activeSystem
                  ? SYSTEM_COLORS[activeSystem]
                  : "rgba(255,255,255,0.45)",
                marginBottom: 8,
              }}
            >
              MOGSETTA AI
            </p>

            <h1
              style={{
                fontSize: 36,
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              AI Operators
            </h1>

            <p
              style={{
                maxWidth: 640,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
              }}
            >
              Specialized execution operators trained to build, scale, and optimize
              real business systems — not chat responses.
            </p>
          </header>

          {/* Tabs */}
          <nav
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 40,
            }}
          >
            {[
              {
                href: "/dashboard/coaches/digital-products",
                label: "Digital Products",
              },
              {
                href: "/dashboard/coaches/service-systems",
                label: "Service Systems",
              },
              {
                href: "/dashboard/coaches/ecommerce",
                label: "E‑Commerce",
              },
            ].map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                style={{
                  padding: "10px 16px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  background:
                    activeSystem &&
                    tab.href.includes(activeSystem)
                      ? "rgba(255,255,255,0.08)"
                      : "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border:
                    activeSystem &&
                    tab.href.includes(activeSystem)
                      ? `1px solid ${SYSTEM_COLORS[activeSystem]}`
                      : "1px solid rgba(255,255,255,0.08)",
                  color:
                    activeSystem &&
                    tab.href.includes(activeSystem)
                      ? SYSTEM_COLORS[activeSystem]
                      : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                }}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </>
      )}

      {/* Page Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {children}
      </div>
    </section>
  );
}