"use client";

export function getResumePathClient(
  system: "digital-products" | "service-systems" | "ecommerce"
) {
  try {
    const raw = localStorage.getItem("mogsetta-progress");
    if (!raw) return null;

    const progress = JSON.parse(raw);
    const systemProgress = progress?.[system];
    if (!systemProgress) return null;

    return systemProgress.lastPath ?? null;
  } catch {
    return null;
  }
}