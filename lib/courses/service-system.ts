export const serviceSystemsCourse = {
  system: "service-systems",
  course: "client-acquisition",
  title: "Client Acquisition",
  description: "Build a predictable system for attracting and closing ideal clients.",
  lessons: {
    "offer-clarity": {
      title: "Offer Clarity",
      summary:
        "Define a clear, compelling service offer that instantly communicates value.",
      objectives: [
        "Identify your ideal client",
        "Define the core problem you solve",
        "Articulate a clear outcome-driven promise",
      ],
      framework: [
        {
          heading: "Why Offer Clarity Matters",
          content:
            "Most service businesses fail to convert because their offer is vague. If a prospect cannot immediately understand who you help, what problem you solve, and the outcome you deliver, they will not buy.",
        },
        {
          heading: "The 3-Part High-Converting Offer",
          content:
            "A strong service offer clearly states the target client, the core problem they want solved, and the tangible outcome they will achieve.",
        },
      ],
      example:
        "We help local service businesses get 10–20 booked calls per month using a simple outbound acquisition system — without ads.",
      task: {
        instruction:
          "Write a one-sentence offer using the framework above.",
        placeholder:
          "We help ___ get ___ by using ___ without ___.",
      },
      aiContext: {
        role:
          "You are an operator helping the user clarify and strengthen their service offer.",
        constraints: [
          "Be specific",
          "Avoid buzzwords",
          "Focus on outcomes, not features",
        ],
      },
    },
    "audience-definition": {
      title: "Audience Definition",
      summary:
        "Identify and narrow the exact audience this service is built for so your offer speaks directly to buyers.",
      objectives: [
        "Define your primary buyer persona",
        "Eliminate non-ideal customers",
        "Clarify who this system is NOT for",
      ],
      framework: [
        {
          heading: "Why Audience Precision Matters",
          content:
            "A service that tries to speak to everyone converts no one. Precise audience definition allows your messaging, outreach, and delivery to compound instead of dilute.",
        },
        {
          heading: "The Narrow-Then-Expand Principle",
          content:
            "Start with a narrowly defined ideal client you understand deeply. Once the system works, you can expand outward without breaking conversion.",
        },
      ],
      example:
        "We help 6–7 figure local service business owners who already get inbound leads but lack a predictable outbound acquisition system.",
      task: {
        instruction:
          "Describe your ideal client in one sentence using industry, size, and core pain.",
        placeholder:
          "We help ___ businesses that struggle with ___.",
      },
      aiContext: {
        role:
          "You are an operator helping the user precisely define their ideal service audience.",
        constraints: [
          "Force specificity",
          "Challenge vague targeting",
          "Anchor advice in real buyer behavior",
        ],
      },
    },
  },
};