import { createClient } from "@/lib/supabase/client";

// Centralized progress helpers (temporary localStorage version)
// Safe to swap to Supabase later without changing callers

export type SystemKey = "digital-products" | "service-systems" | "ecommerce";

export type CourseProgress = {
  system: SystemKey;
  module: string;
  lesson: string | null;
};

const STORAGE_KEY = "mogsetta-progress";

/**
 * Read progress (Supabase → fallback to localStorage)
 */
export async function getProgress(): Promise<CourseProgress | null> {
  if (typeof window === "undefined") return null;

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fallback to localStorage if not logged in
  if (!user) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  const { data, error } = await supabase
    .from("user_system_state")
    .select("active_system, current_phase")
    .eq("user_id", user.id)
    .single();

  if (error || !data) return null;

  const [module, lesson] = data.current_phase.split(":");

  return {
    system: data.active_system as SystemKey,
    module,
    lesson: lesson || null,
  };
}

/**
 * Persist progress (Supabase + localStorage)
 */
export async function setProgress(progress: CourseProgress) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("user_system_state").upsert({
    user_id: user.id,
    active_system: progress.system,
    current_phase: progress.lesson
      ? `${progress.module}:${progress.lesson}`
      : progress.module,
    updated_at: new Date().toISOString(),
  });
}

/**
 * Clear progress (Supabase + localStorage)
 */
export async function clearProgress() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase
    .from("user_system_state")
    .delete()
    .eq("user_id", user.id);
}

/**
 * Compute where the user should resume inside a course
 */
export async function getResumePath(
  system: SystemKey,
  module: string
): Promise<string | null> {
  const progress = await getProgress();

  if (!progress) return null;
  if (progress.system !== system) return null;
  if (progress.module !== module) return null;

  return progress.lesson
    ? `/dashboard/courses/${system}/${module}/${progress.lesson}`
    : `/dashboard/courses/${system}/${module}`;
}
