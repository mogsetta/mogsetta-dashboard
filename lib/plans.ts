/* ======================================
   Mogsetta Plan Definitions
   Single Source of Truth
====================================== */

export type PlanTier = "essential" | "growth" | "elite";

export type PlanDefinition = {
  id: PlanTier;
  name: string;
  description: string;
  systemsAllowed: number | "all";
  coaches: {
    digitalProducts: boolean;
    serviceSystems: boolean;
    ecommerce: boolean;
    priority: boolean;
  };
  features: string[];
};

/* =====================
   Plans
===================== */

export const PLANS: Record<PlanTier, PlanDefinition> = {
  essential: {
    id: "essential",
    name: "Essential",
    description: "Foundation access to one Mogsetta system.",
    systemsAllowed: 1,
    coaches: {
      digitalProducts: true,
      serviceSystems: false,
      ecommerce: false,
      priority: false,
    },
    features: [
      "Access to 1 system",
      "Core execution frameworks",
      "Limited AI coach guidance",
      "Read-only system documentation",
    ],
  },

  growth: {
    id: "growth",
    name: "Growth",
    description: "Operator-level access to all Mogsetta systems.",
    systemsAllowed: "all",
    coaches: {
      digitalProducts: true,
      serviceSystems: true,
      ecommerce: true,
      priority: false,
    },
    features: [
      "Access to all systems",
      "Full AI coach access",
      "Advanced execution playbooks",
      "Automation & delegation frameworks",
      "Ongoing system updates",
    ],
  },

  elite: {
    id: "elite",
    name: "Elite",
    description: "Architect-level access with priority AI execution.",
    systemsAllowed: "all",
    coaches: {
      digitalProducts: true,
      serviceSystems: true,
      ecommerce: true,
      priority: true,
    },
    features: [
      "Priority AI coach responses",
      "Strategy-level execution support",
      "Advanced monetization frameworks",
      "Early access to new systems",
      "Private operator resources",
    ],
  },
};

/* =====================
   Helpers
===================== */

export function getPlan(plan: PlanTier): PlanDefinition {
  return PLANS[plan];
}

export function canAccessCoach(
  plan: PlanTier,
  coach: "digitalProducts" | "serviceSystems" | "ecommerce"
) {
  return PLANS[plan].coaches[coach];
}
