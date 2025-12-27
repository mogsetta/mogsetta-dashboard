export type System = {
  id: string;
  title: string;
  description: string;
};

export function getDefaultSystems(): System[] {
  return [
    {
      id: "digital-products",
      title: "Digital Products",
      description:
        "Design, package, and launch scalable digital products with AI-assisted execution.",
    },
    {
      id: "service-systems",
      title: "Service Systems",
      description:
        "Build repeatable, delegatable service infrastructure and delivery workflows.",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description:
        "Optimize product pages, conversion systems, and growth loops.",
    },
  ];
}