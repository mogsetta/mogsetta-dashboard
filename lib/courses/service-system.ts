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
      order: 1,
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
      order: 2,
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
    "channel-selection": {
      title: "Channel Selection",
      summary:
        "Select the most effective channels to acquire service clients predictably.",
      order: 3,
      objectives: [
        "Identify where ideal clients already pay attention",
        "Avoid low-intent acquisition channels",
        "Choose one primary acquisition channel",
      ],
      framework: [
        {
          heading: "Service Distribution vs Products",
          content:
            "Service businesses require high-intent channels. Visibility alone does not convert — intent does.",
        },
        {
          heading: "Channel Fit",
          content:
            "The best channel is the one where your buyer is already problem-aware and actively seeking solutions.",
        },
      ],
      example:
        "Outbound email to local business owners already spending on ads converts better than cold social DMs.",
      task: {
        instruction:
          "List one channel where your ideal client already looks for solutions.",
        placeholder: "My best channel is ___.",
      },
      aiContext: {
        role:
          "You are an operator helping the user select high-intent acquisition channels for services.",
        constraints: [
          "Avoid low-quality traffic",
          "Prioritize intent over reach",
          "Keep recommendations realistic",
        ],
      },
    },
    "validation-loops": {
      title: "Validation Loops",
      summary:
        "Test messaging and outreach before scaling client acquisition.",
      order: 4,
      objectives: [
        "Validate demand before scaling",
        "Reduce wasted outreach",
        "Improve messaging clarity",
      ],
      framework: [
        {
          heading: "Why Validation Matters",
          content:
            "Scaling outreach without validation wastes time and damages reputation.",
        },
      ],
      example:
        "Sending 50 targeted outreach messages before building automation reveals conversion signal.",
      task: {
        instruction:
          "Describe one small test you can run to validate demand.",
        placeholder: "I will validate by ___.",
      },
      aiContext: {
        role:
          "You are an operator helping the user design fast validation loops for service acquisition.",
        constraints: ["Keep tests small", "Focus on signal", "Avoid overbuilding"],
      },
    },
    "scaling-traffic": {
      title: "Scaling Acquisition",
      summary:
        "Increase client acquisition volume without breaking delivery quality.",
      order: 5,
      objectives: [
        "Scale only after signal is proven",
        "Protect service delivery quality",
        "Maintain predictable acquisition",
      ],
      framework: [
        {
          heading: "Scaling Services Carefully",
          content:
            "Service businesses break when acquisition outpaces fulfillment. Scaling must be controlled.",
        },
      ],
      example:
        "Increasing outreach volume by 20% weekly instead of doubling overnight.",
      task: {
        instruction:
          "Identify one constraint that limits how fast you can scale.",
        placeholder: "My main scaling constraint is ___.",
      },
      aiContext: {
        role:
          "You are an operator helping the user scale service acquisition responsibly.",
        constraints: ["Protect fulfillment", "Avoid burnout", "Maintain quality"],
      },
    },
  },
};