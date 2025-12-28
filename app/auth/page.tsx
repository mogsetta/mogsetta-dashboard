

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1>{mode === "login" ? "Welcome back" : "Create your account"}</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Log in"
              : "Create account"}
          </button>
        </form>

        <button
          className="toggle"
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
        >
          {mode === "login"
            ? "Need an account? Create one"
            : "Already have an account? Log in"}
        </button>
      </div>

      <style jsx>{`
        .auth-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050506;
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          padding: 36px;
          border-radius: 18px;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        h1 {
          margin-bottom: 24px;
          font-size: 24px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        input {
          padding: 14px;
          border-radius: 12px;
          background: #0f1015;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        button {
          margin-top: 12px;
          padding: 14px;
          border-radius: 12px;
          background: #ffffff;
          color: #000;
          font-weight: 600;
          cursor: pointer;
        }

        .toggle {
          margin-top: 18px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }

        .error {
          color: #ff6b6b;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}