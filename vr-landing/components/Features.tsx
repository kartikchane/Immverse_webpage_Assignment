"use client";

import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    tag: "Hololens",
    title: "Hololens",
    desc: "Hololens display information, blend with the real world, or even simulate a virtual world.",
    img: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=600&fit=crop&crop=center",
  },
  {
    tag: "AloT",
    title: "AloT",
    desc: "AI and IoT are both emerging innovative technologies with a lot of potentials.",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop&crop=center",
  },
  {
    tag: "Metaverse",
    title: "Metaverse",
    desc: "A Network of 3D virtual worlds focused on social connection.",
    img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop&crop=center",
  },
  {
    tag: "TPCASTT",
    title: "TPCASTT",
    desc: "Method is great to start students reading and inferring with little assistance from the instructor.",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop&crop=center",
  },
];
export default function Features() {
  return (
    <section id="features" className="section-py" style={{ position: "relative", overflow: "hidden" }}>
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: "10%", right: -200, opacity: 0.3, filter: "blur(90px)", position: "absolute" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-end mb-5">
          <div className="col-12 col-md-7">
            <p className="pink-text mb-2" style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>Our Features</p>
            <h2 className="sec-title">
              New Experience In<br />Playing Game
            </h2>
          </div>
          <div className="col-12 col-md-5">
            <p className="sec-sub ms-md-auto">
              You can try playing the game with a new style and of course a more real feel,
              like you are the main character in your game and adventure in this new digital world.
            </p>
            <Link href="#cta" className="btn-primary-vr mt-3" style={{ display: "inline-flex" }}>
              Get It Now
            </Link>
          </div>
        </div>
        <div className="row g-3">
          {FEATURES.map((f, i) => {
            const isEven = i % 2 === 0;
            const borderColor = isEven ? "#b040ff" : "#0ea5e9";
            const glowColor = isEven ? "rgba(176,64,255,0.65)" : "rgba(14,165,233,0.65)";
            const dotColor = isEven ? "#cc44ff" : "#0ea5e9";
            return (
              <div key={f.tag} className="col-12 col-md-6">
                {/* outer wrapper for hover lift */}
                <div
                  className="feat-card-wrap"
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    cursor: "pointer",
                    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.01)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                  }}
                >
                  {/* neon cut-corner border overlay */}
                  <div style={{
                    position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none",
                    clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 0px))",
                    border: `2px solid ${borderColor}`,
                    boxShadow: `0 0 10px ${borderColor}, 0 0 28px ${glowColor}, inset 0 0 16px ${glowColor.replace("0.65", "0.12")}`,
                  }} />
                  {/* cut-corner accent lines — top-right */}
                  <div style={{ position: "absolute", top: 0, right: 30, width: 32, height: 2, background: `linear-gradient(90deg, transparent, ${borderColor})`, zIndex: 11 }} />
                  <div style={{ position: "absolute", top: 0, right: 0, width: 2, height: 32, background: `linear-gradient(180deg, ${borderColor}, transparent)`, zIndex: 11 }} />

                  {/* image + overlays clipped to same polygon */}
                  <div style={{
                    clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 0px))",
                    overflow: "hidden", width: "100%", height: "100%", position: "relative",
                  }}>
                    <Image
                      src={f.img}
                      alt={f.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* gradient overlay */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg, rgba(20,0,40,0.08) 0%, rgba(60,0,100,0.4) 50%, rgba(20,0,50,0.92) 100%)"
                    }} />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `radial-gradient(ellipse at 15% 85%, ${glowColor.replace("0.65", "0.2")} 0%, transparent 55%)`
                    }} />
                    {/* text overlay bottom */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: dotColor, boxShadow: `0 0 7px ${dotColor}` }} />
                        <span style={{ fontSize: 12, fontWeight: 700, color: dotColor, textTransform: "uppercase", letterSpacing: 2 }}>{f.tag}</span>
                      </div>
                      <h4 style={{ fontSize: 17, fontWeight: 800, color: "#fff", margin: "0 0 5px", fontFamily: "var(--font-head)", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>{f.title}</h4>
                      <p style={{ fontSize: 13, color: "rgba(220,200,240,0.9)", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}