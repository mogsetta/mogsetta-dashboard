"use client";

type System = "digital-products" | "service-systems" | "ecommerce";

const DEFAULT_START: Record<System, string> = {
  "digital-products": "/dashboard/courses/digital-products/offer-creation",
  "service-systems": "/dashboard/courses/service-systems/client-acquisition",
  ecommerce: "/dashboard/courses/ecommerce/offer-engineering",
};

export function getResumePathClient(system: System): string {
  try {
    const raw = localStorage.getItem("mogsetta-progress");
    if (!raw) return DEFAULT_START[system];

    const progress = JSON.parse(raw);
    const systemProgress = progress?.[system];
    if (!systemProgress) return DEFAULT_START[system];

    // If lastPath exists, resume there
    if (typeof systemProgress.lastPath === "string") {
      return systemProgress.lastPath;
    }

    return DEFAULT_START[system];
  } catch {
    return DEFAULT_START[system];
  }
}