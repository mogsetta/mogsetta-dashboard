

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type LessonContextState = {
  moduleSlug: string | null;
  lessonSlug: string | null;
  setLesson: (moduleSlug: string, lessonSlug: string) => void;
  clearLesson: () => void;
};

const LessonContext = createContext<LessonContextState | null>(null);

export function LessonProvider({ children }: { children: ReactNode }) {
  const [moduleSlug, setModuleSlug] = useState<string | null>(null);
  const [lessonSlug, setLessonSlug] = useState<string | null>(null);

  function setLesson(module: string, lesson: string) {
    setModuleSlug(module);
    setLessonSlug(lesson);
  }

  function clearLesson() {
    setModuleSlug(null);
    setLessonSlug(null);
  }

  return (
    <LessonContext.Provider
      value={{
        moduleSlug,
        lessonSlug,
        setLesson,
        clearLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

export function useLessonContext() {
  const ctx = useContext(LessonContext);
  if (!ctx) {
    throw new Error("useLessonContext must be used within LessonProvider");
  }
  return ctx;
}