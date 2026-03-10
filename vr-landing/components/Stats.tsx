"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Stats() {
  return (
    <section className="video-band" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background orbs */}
      <div className="orb orb-purple" style={{ width: 400, height: 400, top: -100, left: -100, opacity: 0.25, filter: "blur(80px)", position: "absolute" }} />
      <div className="orb orb-pink"   style={{ width: 350, height: 350, bottom: -80, right: -80, opacity: 0.2, filter: "blur(80px)", position: "absolute" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center g-4">

          {/* LEFT — text only */}
          <div className="col-12 col-lg-7 video-band-text">
            <h2 style={{ fontSize: "clamp(18px, 2.8vw, 30px)", fontWeight: 800, color: "#fff", lineHeight: 1.3, margin: 0 }}>
              Awesome experiences with{" "}
              <span style={{ color: "#0ea5e9" }}>virtual reality</span> world
            </h2>
          </div>

          {/* RIGHT — small square video card */}
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <div
              style={{
                position: "relative",
                width: 160,
                height: 140,
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(14,165,233,0.35)",
                boxShadow: "0 0 40px rgba(14,165,233,0.25)",
                background: "#0d0022",
                flexShrink: 0,
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=320&h=280&fit=crop&crop=center"
                alt="VR experience video"
                fill
                style={{ objectFit: "cover" }}
                sizes="160px"
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(10,0,22,0.5)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#0ea5e9",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 0 10px rgba(14,165,233,0.18), 0 0 30px rgba(14,165,233,0.7)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <FaPlay size={16} color="#fff" style={{ marginLeft: 2 }} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

