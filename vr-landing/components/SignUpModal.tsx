"use client";
import { useState, useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignUpModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* lock body scroll when modal open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      /* reset on close */
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* close on Escape key */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "linear-gradient(145deg, #0d0018 0%, #0a0010 100%)",
          border: "1px solid rgba(14,165,233,0.35)",
          borderRadius: 20,
          padding: "48px 40px 40px",
          maxWidth: 480,
          width: "100%",
          boxShadow: "0 0 80px rgba(14,165,233,0.2), 0 0 160px rgba(200,0,255,0.12)",
          animation: "slideUp 0.25s ease",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* background glow blob */}
        <div style={{
          position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,0,255,0.18) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            color: "#fff",
            width: 34, height: 34,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, cursor: "pointer", lineHeight: 1,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
        >
          ✕
        </button>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#cc00ff", marginBottom: 10 }}>
            Get Started
          </p>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#fff", marginBottom: 10, lineHeight: 1.25 }}>
            Let&apos;s Explore The<br />
            <span style={{ color: "#0ea5e9" }}>Virtual World</span>
          </h2>
          <p style={{ color: "#b8a8c8", fontSize: 14, lineHeight: 1.7, marginBottom: 28, maxWidth: 360, margin: "0 auto 28px" }}>
            Join over 400,000 users already experiencing the future of virtual reality.
            Sign up today and get your first month free.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(14,165,233,0.35)",
                  borderRadius: 10,
                  padding: "13px 18px",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                  width: "100%",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.8)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.35)")}
              />
              <button
                type="submit"
                className="btn-primary-vr"
                style={{ width: "100%", justifyContent: "center", padding: "13px 20px", fontSize: 15 }}
              >
                Get Started Free
              </button>
            </form>
          ) : (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(14,165,233,0.12)",
                border: "1px solid rgba(14,165,233,0.4)",
                borderRadius: 12,
                padding: "16px 28px",
                color: "#0ea5e9",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              ✓ You&apos;re on the list! Welcome to ImmverseAI.
            </div>
          )}

          <p style={{ marginTop: 14, fontSize: 12, color: "#786888" }}>
            No credit card required · Cancel anytime
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
