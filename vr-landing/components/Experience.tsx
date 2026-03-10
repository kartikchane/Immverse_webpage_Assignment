import Image from "next/image";

/* FILE CLEAN — replaced corrupted version */
export default function Experience() {
  return (
    <section id="experience" className="section-py" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* ambient glow blobs */}
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 40, left: 60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(204,0,255,0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* LEFT — two cut-corner cards side-by-side with slight overlap */}
          <div className="col-12 col-lg-6">
            <div className="exp-overlap-wrap" style={{ margin: "0 auto" }}>

              {/* Back card — woman with VR glasses */}
              <div className="exp-card-back" style={{ position: "relative" }}>
                {/* vivid neon border overlay */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none",
                  clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  border: "2px solid #b040ff",
                  boxShadow: "0 0 8px #b040ff, 0 0 22px rgba(176,64,255,0.65), inset 0 0 14px rgba(176,64,255,0.18)",
                }} />
                <div style={{
                  clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  overflow: "hidden", width: "100%", height: "100%", position: "relative",
                }}>
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=520&fit=crop&crop=center"
                    alt="Woman with VR glasses"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width:767px) 45vw, 220px"
                  />
                  <div style={{ position: "absolute", top: 0, right: 24, width: 26, height: 2, background: "linear-gradient(90deg,transparent,#b040ff)", zIndex: 4 }} />
                  <div style={{ position: "absolute", top: 0, right: 0, width: 2, height: 26, background: "linear-gradient(180deg,#b040ff,transparent)", zIndex: 4 }} />
                </div>
              </div>

              {/* Front card — man with VR headset (right, lower) */}
              <div className="exp-card-front" style={{ position: "relative" }}>
                {/* vivid neon border overlay */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none",
                  clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  border: "2px solid #ff2d9b",
                  boxShadow: "0 0 8px #ff2d9b, 0 0 24px rgba(255,45,155,0.6), inset 0 0 14px rgba(255,45,155,0.14)",
                }} />
                <div style={{
                  clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  overflow: "hidden", width: "100%", height: "100%", position: "relative",
                }}>
                  <Image
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=520&fit=crop&crop=center"
                    alt="Man with VR headset"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width:767px) 45vw, 230px"
                  />
                  <div style={{ position: "absolute", top: 0, right: 24, width: 26, height: 2, background: "linear-gradient(90deg,transparent,#ff2d9b)", zIndex: 4 }} />
                  <div style={{ position: "absolute", top: 0, right: 0, width: 2, height: 26, background: "linear-gradient(180deg,#ff2d9b,transparent)", zIndex: 4 }} />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — text */}
          <div className="col-12 col-lg-6 exp-text-col" style={{ paddingLeft: "clamp(16px, 6vw, 80px)" }}>
            <h2 className="mb-3" style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              fontFamily: "var(--font-head)",
              textShadow: "0 2px 24px rgba(14,165,233,0.18)",
            }}>
              New Experience In Playing Game
            </h2>
            <p style={{ color: "#b8a8c8", fontSize: 17, lineHeight: 1.85, maxWidth: 420, marginBottom: 32 }}>
              You can try playing the game with a new style and of course a more real feel,
              like you are the main character in your game and adventure in this new digital world.
            </p>
            <a href="#cta" className="btn-primary-vr" style={{ display: "inline-flex", alignItems: "center" }}>
              Get It Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
