// lib/systemState.ts

export type SystemStage = "Plan" | "Build" | "Ship" | "Scale";

export type SystemStatus = "Active" | "Available" | "Locked";

export type MogsettaSystem = {
  id: "digital-products" | "service-systems" | "ecommerce";
  title: string;
  description: string;
  status: SystemStatus;
  stage: SystemStage;
};

export function getUserSystems() {
  // TEMP: mock user state (this becomes Supabase later)
  return [
    {
      id: "digital-products",
      title: "Digital Products System",
      description:
        "Turn knowledge into scalable assets that sell without your time.",
      status: "Active",
      stage: "Build",
    },
    {
      id: "service-systems",
      title: "Service Business System",
      description:
        "Build repeatable services you can sell, deliver, and scale cleanly.",
      status: "Available",
      stage: "Plan",
    },
    {
      id: "ecommerce",
      title: "E-Commerce System",
      description:
        "Design stores and offers that convert with structure, not guessing.",
      status: "Available",
      stage: "Plan",
    },
  ] as MogsettaSystem[];
}