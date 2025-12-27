type Message = {
  role: "user" | "assistant";
  content: string;
};

const memoryStore = new Map<string, Message[]>();

export function getCoachMemory(sessionId: string) {
  return memoryStore.get(sessionId) || [];
}

export function saveCoachMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string
) {
  const history = memoryStore.get(sessionId) || [];
  history.push({ role, content });

  // Hard cap memory (prevents token explosion)
  if (history.length > 12) {
    history.shift();
  }

  memoryStore.set(sessionId, history);
}