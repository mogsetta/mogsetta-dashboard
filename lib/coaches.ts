export type CoachId =
  | "digital-products"
  | "service-systems"
  | "ecommerce";

export interface CoachConfig {
  id: CoachId;
  name: string;
  system: string;
  description: string;
  apiRoute: string;
  placeholder: string;
}

/* ================================
   MOGSETTA COACH DEFINITIONS
================================ */

export const COACHES: Record<CoachId, CoachConfig> = {
  "digital-products": {
    id: "digital-products",
    name: "Mogsetta Digital Product Coach",
    system: "Digital Products",
    description:
      "Helps you design, structure, validate, and launch digital products. Focused on offer clarity, asset creation, positioning, and scalable delivery.",
    apiRoute: "/api/coach/digital-products",
    placeholder:
      "Ask about product structure, offers, pricing, landing pages, or validation…",
  },

  "service-systems": {
    id: "service-systems",
    name: "Mogsetta Service Business Coach",
    system: "Service Systems",
    description:
      "Engineers repeatable service businesses. Helps with offer packaging, scope control, onboarding systems, SOPs, and client delivery workflows.",
    apiRoute: "/api/coach/service-systems",
    placeholder:
      "Ask about service offers, retainers, onboarding, delivery systems, or scaling…",
  },

  ecommerce: {
    id: "ecommerce",
    name: "Mogsetta Ecom Coach",
    system: "E-Commerce",
    description:
      "Optimizes e-commerce businesses through product strategy, offer stacks, conversion systems, and growth loops.",
    apiRoute: "/api/coach/ecommerce",
    placeholder:
      "Ask about product pages, offers, conversion rates, bundles, or growth strategy…",
  },
};