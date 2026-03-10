import Image from "next/image";

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

              {/* Back card — woman with VR glasses (left) */}
              <div
                className="exp-card-back"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  border: "1.5px solid rgba(204,0,255,0.55)",
                  overflow: "hidden",
                  boxShadow: "0 0 28px rgba(204,0,255,0.2), inset 0 0 20px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=520&fit=crop&crop=center"
                  alt="Woman with VR glasses"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width:767px) 45vw, 220px"
                />
                <div style={{ position: "absolute", top: 0, right: 24, width: 26, height: 1, background: "linear-gradient(90deg,transparent,#cc00ff)" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: 1, height: 26, background: "linear-gradient(180deg,#cc00ff,transparent)" }} />
              </div>

              {/* Front card — man with VR headset (right, lower) */}
              <div
                className="exp-card-front"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  border: "1.5px solid rgba(14,165,233,0.7)",
                  overflow: "hidden",
                  boxShadow: "0 0 44px rgba(14,165,233,0.28), inset 0 0 20px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=520&fit=crop&crop=center"
                  alt="Man with VR headset"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width:767px) 45vw, 230px"
                />
                <div style={{ position: "absolute", top: 0, right: 24, width: 26, height: 1, background: "linear-gradient(90deg,transparent,#0ea5e9)" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: 1, height: 26, background: "linear-gradient(180deg,#0ea5e9,transparent)" }} />
              </div>

            </div>
          </div>

          {/* RIGHT — text */}
          <div className="col-12 col-lg-6 exp-text-col">
            <h2 className="sec-title mb-3">
              New Experience In<br />Playing Game
            </h2>
            <p style={{ color: "#b8a8c8", fontSize: 15, lineHeight: 1.85, maxWidth: 400, marginBottom: 32 }}>
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
