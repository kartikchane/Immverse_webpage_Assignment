"use client";

import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section id="cta" className="section-py" style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
      {/* Center orb */}
      <div
        className="orb orb-pink"
        style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.18, filter: "blur(100px)", position: "absolute" }}
      />

      <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
        <p className="pink-text mb-2" style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>
          Get Started
        </p>
        <h2 className="sec-title mb-3">
          Let&apos;s Explore The<br />
          <span style={{ color: "#0ea5e9" }}>Virtual World</span>
        </h2>
        <p className="sec-sub mx-auto mb-5" style={{ maxWidth: 460 }}>
          Join over 400,000 users already experiencing the future of virtual reality.
          Sign up today and get your first month free.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="cta-form d-flex justify-content-center gap-3 flex-wrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(14,165,233,0.3)",
                borderRadius: 8,
                padding: "12px 20px",
                color: "#fff",
                fontSize: 14,
                outline: "none",
                width: "100%",
                maxWidth: 340,
              }}
            />
            <button type="submit" className="btn-primary-vr" style={{ flexShrink: 0 }}>
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
              padding: "14px 28px",
              color: "#0ea5e9",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            ✓ You&apos;re on the list! Welcome to ImmverseAI.
          </div>
        )}

        <p style={{ marginTop: 16, fontSize: 12, color: "#786888" }}>
          No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
