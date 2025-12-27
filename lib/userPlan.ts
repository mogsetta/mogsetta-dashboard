export type UserPlan = "essential" | "growth" | "elite";

/**
 * TEMP:
 * This will later come from Shopify / auth
 */
export function getUserPlan(): UserPlan {
  // CHANGE THIS TO TEST ACCESS
  return "growth";
}