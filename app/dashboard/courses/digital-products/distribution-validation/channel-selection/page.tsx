

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "distribution-validation",
  lesson: "channel-selection",
} satisfies {
  intent: "lesson" | "strategy";
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
};

export default function ChannelSelectionPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 140 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution & Validation
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 34, marginBottom: 16 }}>
        Channel Selection
      </h1>

      {/* Core lesson */}
      <section style={{ marginBottom: 36 }}>
        <p style={{ fontSize: 18, lineHeight: 1.75, opacity: 0.9 }}>
          The channel you choose determines how quickly you’ll get real-world feedback on your product idea. Channel selection isn’t about reaching everyone—it’s about finding the path that gives you <strong>the fastest, clearest validation signal</strong>.
        </p>
        <ol style={{ marginTop: 20, paddingLeft: 18, lineHeight: 1.8, opacity: 0.85 }}>
          <li>
            <strong>Search-driven channels</strong>: Platforms where buyers are actively searching for solutions (e.g., Google, Amazon, App stores). These provide high-intent traffic and quick validation if your offer matches demand.
          </li>
          <li>
            <strong>Community-driven channels</strong>: Forums, groups, or niche communities (e.g., Reddit, Discord, specialized Facebook Groups) where people discuss their needs. Great for surfacing problems and getting direct feedback.
          </li>
          <li>
            <strong>Attention arbitrage channels</strong>: Social feeds or platforms where you can temporarily capture attention through trends or content (e.g., Twitter, TikTok, Product Hunt). Fast exposure, but often fleeting and unpredictable.
          </li>
          <li>
            <strong>Direct outreach</strong>: Personalized messages to potential buyers via email, LinkedIn, or DMs. Allows you to target specific users and get qualitative responses quickly.
          </li>
        </ol>
        <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.7, color: "#e87171" }}>
          <strong>Warning:</strong> Spreading yourself across too many channels at once will dilute your effort and slow down learning. Focus on a single channel archetype to maximize speed and clarity.
        </p>
      </section>

      {/* Guidance */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Channel Selection Framework
        </h2>
        <div style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.85 }}>
          <p>
            <strong>Step 1: Identify buyer intent</strong><br />
            Where are your target customers already looking for solutions? Pinpoint channels where intent is high and people are actively seeking answers or discussing their needs.
          </p>
          <p>
            <strong>Step 2: Match effort to leverage</strong><br />
            Choose a channel where your message can be seen with minimal setup or audience-building. Prioritize platforms where you can get in front of potential buyers quickly, even if the audience is small.
          </p>
          <p>
            <strong>Step 3: Define a 7-day validation action</strong><br />
            Decide on a concrete action you can take in the next week to test your offer in that channel—such as posting a landing page, making a direct outreach list, or starting a discussion thread—and commit to measuring the response.
          </p>
        </div>
      </section>

      {/* Validation Signal Matrix */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Validation Signal Matrix
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.85, marginBottom: 16 }}>
          Use this matrix to choose the channel that gives you the fastest learning loop with the least effort.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div style={{ padding: 16, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)" }}>
            <strong>High Intent · Low Reach</strong>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Direct outreach, niche forums, targeted search. Best for early validation and sharp feedback.
            </p>
          </div>
          <div style={{ padding: 16, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)" }}>
            <strong>High Intent · High Reach</strong>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Marketplaces, SEO, app stores. Powerful but competitive—use once messaging is proven.
            </p>
          </div>
          <div style={{ padding: 16, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)" }}>
            <strong>Low Intent · High Reach</strong>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Social feeds and virality. Good for awareness, weak for validation without a hook.
            </p>
          </div>
          <div style={{ padding: 16, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)" }}>
            <strong>Low Intent · Low Reach</strong>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Avoid early. Little signal and slow learning.
            </p>
          </div>
        </div>
      </section>

      {/* Callout Box */}
      <div
        style={{
          background: "rgba(245, 184, 66, 0.13)",
          border: "1px solid #f5b842",
          borderRadius: 10,
          padding: "18px 20px",
          marginBottom: 42,
          color: "#f5b842",
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.7,
          maxWidth: 650,
        }}
      >
        <span style={{ fontWeight: 700, marginRight: 6 }}>Tip:</span>
        Pick the channel that gets you a clear yes/no signal in days, not weeks. Speed of feedback is your best friend.
      </div>

      {/* Coach */}
      <CoachChat
        system="digital-products"
        coachId="channel-selection"
        lessonContext={lessonContext}
      />

      {/* Navigation */}
      <div style={{ marginTop: 72, display: "flex", justifyContent: "flex-end" }}>
        <Link
          href="/dashboard/courses/digital-products/distribution-validation/messaging-tests"
          style={{
            fontWeight: 600,
            textDecoration: "none",
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          Continue to Messaging Tests →
        </Link>
      </div>
    </div>
  );
}