import { createContext, useContext } from "react";

export type LessonContextValue = {
  // keep loose during build phase
  system?: string;          // "digital-products" | "service-systems" | "ecommerce"
  module?: string;          // e.g. "offer-creation"
  lesson?: string;          // e.g. "problem-selection"
  intent?: string;          // "lesson" | "strategy"
};

export const LessonContext = createContext<LessonContextValue | undefined>(
  undefined
);

export function useLessonContext() {
  return useContext(LessonContext);
}
