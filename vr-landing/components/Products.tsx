"use client";
import Image from "next/image";

const PRODUCTS = [
  {
    name: "Meta Quest Pro",
    tag: "Mixed Reality",
    price: "$999",
    desc: "Experience the most advanced mixed reality headset with full-color passthrough, eye tracking, and natural hand interaction.",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop&crop=center",
    accent: "#b040ff",
  },
  {
    name: "PlayStation VR2",
    tag: "Console VR",
    price: "$549",
    desc: "Next-gen PS5 VR with eye tracking, adaptive triggers, and 4K HDR display for unrivalled console immersion.",
    img: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=600&h=400&fit=crop&crop=center",
    accent: "#0ea5e9",
  },
  {
    name: "Valve Index",
    tag: "PC VR",
    price: "$749",
    desc: "Premium PC VR with 120Hz display, finger-tracking controllers, and SteamVR compatibility for unlimited experiences.",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop&crop=center",
    accent: "#ff2d9b",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-py" style={{ background: "var(--bg3)", position: "relative", overflow: "hidden" }}>
      {/* bg orbs */}
      <div style={{ position: "absolute", top: -100, left: -100, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(176,64,255,0.15) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center mb-5">
          <p className="pink-text mb-2" style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>Our Products</p>
          <h2 className="sec-title mb-3">Top VR Gear to<br/>Elevate Your World</h2>
          <p className="sec-sub mx-auto" style={{ maxWidth: 480 }}>
            Explore our curated selection of the best virtual reality headsets for every budget and use case.
          </p>
        </div>

        <div className="row g-4">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="col-12 col-md-4">
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${p.accent}33`,
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "all .35s cubic-bezier(0.34,1.56,0.64,1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${p.accent}33, 0 0 0 1px ${p.accent}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 220, overflow: "hidden", flexShrink: 0 }}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover", transition: "transform .4s ease" }}
                    sizes="(max-width: 767px) 90vw, 33vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 50%, rgba(2,8,23,0.85) 100%)` }} />
                  <span style={{
                    position: "absolute", top: 14, left: 14,
                    background: `${p.accent}22`, border: `1px solid ${p.accent}55`,
                    color: p.accent, fontSize: 11, fontWeight: 700,
                    padding: "4px 12px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 1,
                  }}>{p.tag}</span>
                </div>
                {/* Body */}
                <div style={{ padding: "22px 22px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10, fontFamily: "var(--font-head)" }}>{p.name}</h4>
                  <p style={{ fontSize: 14, color: "var(--text-sec)", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                    <span style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "var(--font-head)" }}>{p.price}</span>
                    <a href="#cta" className="btn-primary-vr" style={{ padding: "10px 22px", fontSize: 14 }}>Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

