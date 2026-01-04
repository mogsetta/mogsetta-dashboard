"use client";

import { ReactNode } from "react";

type LessonContext = {
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson?: string;
  intent?: "lesson" | "strategy";
};

type CoachChatProps = {
  coachId: string;
  title?: string;
  description?: string;
  lessonContext?: LessonContext;
};

export default function CoachChat({
  coachId,
  title,
  description,
  lessonContext,
}: CoachChatProps) {
  // Component logic and JSX remain unchanged
  return (
    <div>
      {/* Chat UI here */}
    </div>
  );
}