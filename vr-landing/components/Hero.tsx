import Image from "next/image";
import Link from "next/link";

const AVATARS = [
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face", alt: "user1" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", alt: "user2" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face", alt: "user3" },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face", alt: "user4" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(70px, 10vw, 100px)",
        paddingBottom: 60,
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* BG purple glow left */}
      <div style={{ position: "absolute", top: -100, left: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(3,105,161,0.55) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      {/* BG cyan glow right bottom */}
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center g-4">

          {/* ── LEFT TEXT ── */}
          <div className="col-12 col-lg-5 hero-text-col">
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.18, color: "#fff", marginBottom: 18, fontFamily: "var(--font-head)" }}>
              Let&apos;s Explore<br />
              Three-Dimensional<br />
              visual
            </h1>
            <p className="hero-sub-para" style={{ color: "#b8a8c8", fontSize: 15, lineHeight: 1.75, maxWidth: 400, marginBottom: 28 }}>
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            <div className="hero-btn-group" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
              <Link href="#cta" className="btn-primary-vr">Get It Now</Link>
              <Link href="#experience" className="btn-outline-vr">Explore Device</Link>
            </div>
            {/* Online users strip */}
            <div className="online-strip" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex" }}>
                {AVATARS.map((av, i) => (
                  <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid #0a0010", marginLeft: i === 0 ? 0 : -10, overflow: "hidden", position: "relative", zIndex: AVATARS.length - i }}>
                    <Image src={av.src} alt={av.alt} width={34} height={34} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </div>
                ))}
              </div>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block" }} />
              <span style={{ color: "#b8a8c8", fontSize: 13 }}>400k people online</span>
            </div>
          </div>

          {/* ── RIGHT: Oval image + Card ── */}
          <div className="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
            <div style={{ position: "relative", display: "inline-block" }}>

              {/* Sparkle stars — top right */}
              <div style={{ position: "absolute", top: -18, right: -18, zIndex: 10, pointerEvents: "none" }}>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <path d="M44 10 L47 22 L59 25 L47 28 L44 40 L41 28 L29 25 L41 22 Z" fill="white" opacity="0.95" />
                  <path d="M63 4 L64 9 L69 10 L64 11 L63 16 L62 11 L57 10 L62 9 Z" fill="white" opacity="0.75" />
                  <path d="M59 40 L60 44 L64 45 L60 46 L59 50 L58 46 L54 45 L58 44 Z" fill="white" opacity="0.6" />
                </svg>
              </div>

              {/* Purple-pink oval glow blob behind everything */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -54%)",
                width: "clamp(260px, 34vw, 400px)",
                height: "clamp(320px, 42vw, 500px)",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at 50% 40%, rgba(200,0,255,0.55) 0%, rgba(180,30,100,0.45) 45%, transparent 75%)",
                filter: "blur(32px)",
                pointerEvents: "none",
                zIndex: 0,
              }} />

              {/* Portrait oval image frame */}
              <div
                className="anim-float"
                style={{
                  width: "clamp(240px, 30vw, 360px)",
                  height: "clamp(310px, 39vw, 470px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(180,0,255,0.5)",
                  boxShadow: "0 0 60px rgba(180,0,255,0.35), 0 0 120px rgba(180,0,255,0.15)",
                  position: "relative",
                  zIndex: 2,
                  display: "block",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=480&h=640&fit=crop&crop=center"
                  alt="Person using VR headset"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 992px) 80vw, 32vw"
                  priority
                />
                {/* inner gradient overlay — bottom fade */}
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "linear-gradient(to bottom, transparent 50%, rgba(80,0,120,0.55) 100%)" }} />
              </div>

              {/* Cinematic card — sits below oval, centered */}
              <div className="cinematic-card">
                <h4 style={{ color: "#0ea5e9", fontFamily: "var(--font-head)", fontSize: 15, fontWeight: 700, marginBottom: 8, textAlign: "center" }}>
                  Cinematic Virtual Reality
                </h4>
                <div className="card-divider" style={{ margin: "8px auto" }} />
                <p style={{ color: "#b8a8c8", fontSize: 12, lineHeight: 1.7, margin: 0, textAlign: "center" }}>
                  Let&apos;s be the best for more real and effective results and ready<br />
                  to explore the limitless world that we have prepared for you.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
