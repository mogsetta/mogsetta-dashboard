

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
  },
};