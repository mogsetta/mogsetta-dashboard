"use client";

type LessonContext = {
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson?: string;
  intent?: "lesson" | "strategy";
};

type CoachChatProps = {
  system: "digital-products" | "service-systems" | "ecommerce";
  coachId: string;
  title?: string;
  description?: string;
  lessonContext?: LessonContext;
};

export default function CoachChat({
  system,
  coachId,
  title,
  description,
  lessonContext,
}: CoachChatProps) {
  return (
    <div className="coach-chat-shell">
      <header className="coach-chat-header">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </header>

      <div className="coach-chat-body">
        <p>
          Coach ID: <strong>{coachId}</strong>
        </p>

        {lessonContext && (
          <p>
            Lesson: <strong>{lessonContext.lesson}</strong>
          </p>
        )}
      </div>

      <style jsx>{`
        .coach-chat-shell {
          background: linear-gradient(180deg, #0b0c10, #050506);
          border-radius: 20px;
          padding: 24px;
        }

        .coach-chat-header h3 {
          margin-bottom: 6px;
          font-size: 18px;
        }

        .coach-chat-header p {
          font-size: 14px;
          opacity: 0.7;
        }

        .coach-chat-body {
          margin-top: 16px;
          font-size: 14px;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}