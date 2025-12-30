// Centralized progress helpers (temporary localStorage version)
// Safe to swap to Supabase later without changing callers

export type SystemKey = "digital-products" | "service-systems" | "ecommerce";

export type CourseProgress = {
  system: SystemKey;
  module: string;
  lesson: string | null;
};

const STORAGE_KEY = "mogsetta-progress";

export function getProgress(): CourseProgress | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setProgress(progress: CourseProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function clearProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Compute where the user should resume inside a course
 */
export function getResumePath(
  system: SystemKey,
  module: string
): string | null {
  const progress = getProgress();

  if (!progress) return null;
  if (progress.system !== system) return null;
  if (progress.module !== module) return null;

  return progress.lesson
    ? `/dashboard/courses/${system}/${module}/${progress.lesson}`
    : `/dashboard/courses/${system}/${module}`;
}
