"use client";

export type CoachChatProps = {
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  coachId: string;
  intent?: "lesson" | "strategy";
  lesson?: string;
  title?: string;
  description?: string;
};

export default function CoachChat({
  system,
  module,
  coachId,
  intent,
  lesson,
  title,
  description,
}: CoachChatProps) {
  return (
    <div className="coach-chat-shell">
      <header className="coach-chat-header">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </header>

      <div className="coach-chat-body">
        <p>
          System: <strong>{system}</strong>
        </p>
        <p>
          Module: <strong>{module}</strong>
        </p>
        <p>
          Coach: <strong>{coachId}</strong>
        </p>

        {lesson && (
          <p>
            Lesson: <strong>{lesson}</strong>
          </p>
        )}

        {intent && (
          <p>
            Mode: <strong>{intent}</strong>
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