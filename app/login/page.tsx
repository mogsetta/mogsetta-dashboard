"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  async function handleSignup() {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050506",
        color: "#fff",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: 380,
          padding: 32,
          borderRadius: 16,
          background: "#0b0c10",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1 style={{ fontSize: 24, marginBottom: 8 }}>
          Sign in to Mogsetta
        </h1>

        <p style={{ opacity: 0.6, marginBottom: 24 }}>
          Access your systems, courses, and AI coaches
        </p>

        {error && (
          <p style={{ color: "#ff6b6b", marginBottom: 12 }}>
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <button
          type="button"
          onClick={handleSignup}
          disabled={loading}
          style={{
            ...buttonStyle,
            background: "transparent",
            color: "#d4af37",
            border: "1px solid rgba(212,175,55,0.4)",
            marginTop: 10,
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: 14,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "#050506",
  color: "#fff",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: 10,
  background: "#d4af37",
  color: "#000",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};