"use client";
import { useContext } from "react";
import { ActiveSystemContext } from "./layout";

export function useActiveSystem() {
  const ctx = useContext(ActiveSystemContext);
  if (!ctx) {
    throw new Error("useActiveSystem must be used inside DashboardLayout");
  }
  return ctx;
}