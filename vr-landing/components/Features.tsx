"use client";

import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    tag: "Hololens",
    title: "Hololens",
    desc: "Hololens display information, interact with the real world, or even simulate a virtual world.",
    img: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400&h=250&fit=crop&crop=center",
  },
  {
    tag: "Bot",
    title: "Bot",
    desc: "AI and Bot are both emerging innovative technologies with a lot of potentials.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
  },
  {
    tag: "Metaverse",
    title: "Metaverse",
    desc: "A network of 3D virtual worlds focused on social connection.",
    img: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=400&h=250&fit=crop&crop=center",
  },
  {
    tag: "Tecasit",
    title: "Tecasit",
    desc: "Methos is great to start students reading and starting with step assistance from the instructor.",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=250&fit=crop&crop=center",
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
          {FEATURES.map((f) => (
            <div key={f.tag} className="col-6 col-lg-3">
              <div
                style={{
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(14,165,233,0.15)",
                  aspectRatio: "3/4",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(14,165,233,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,0,16,0.05) 20%, rgba(10,0,16,0.92) 100%)" }} />
                {/* text overlay bottom */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 3 }}>{f.tag}</div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 4px", fontFamily: "var(--font-head)" }}>{f.title}</h4>
                  <p style={{ fontSize: 10, color: "#b8a8c8", margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}