import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Robert Fox",
    role: "Gamer & Content Creator",
    initial: "R",
    color: "#0ea5e9",
    text: "ImmverseAI completely changed how I experience games. It feels like I'm actually inside the world — nothing else comes close to this level of immersion.",
    rating: 5,
  },
  {
    name: "Savannah Nguyen",
    role: "3D Artist",
    initial: "S",
    color: "#0284c7",
    text: "The visual quality is breathtaking. I use ImmverseAI every day for my work and the three-dimensional rendering is the most realistic I've ever seen.",
    rating: 5,
  },
  {
    name: "Wade Warren",
    role: "VR Enthusiast",
    initial: "W",
    color: "#0369a1",
    text: "From setup to experience, everything is seamless. ImmverseAI delivers on every promise — the virtual world truly feels limitless.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py" style={{ background: "var(--bg3)", position: "relative", overflow: "hidden" }}>
      {/* Orbs */}
      <div className="orb orb-pink" style={{ width: 350, height: 350, top: "20%", right: -100, opacity: 0.2, filter: "blur(80px)", position: "absolute" }} />
      <div className="orb orb-purple" style={{ width: 300, height: 300, bottom: "10%", left: -80, opacity: 0.2, filter: "blur(70px)", position: "absolute" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center mb-4">
          <h2 className="sec-title mb-3">What our clients say</h2>
          <p className="sec-sub mx-auto" style={{ maxWidth: 480 }}>
            See what our customer say about us. It really matter for us. How good or bad
            we will make it for evaluation to make ImmverseAI better.
          </p>
        </div>

        <div className="row g-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="col-12 col-md-4">
              <div className="testi-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Quote icon */}
                <FaQuoteLeft size={24} color="rgba(14,165,233,0.35)" style={{ marginBottom: 16 }} />
                {/* Quote text */}
                <p className="testi-text" style={{ flex: 1 }}>{t.text}</p>
                {/* Divider */}
                <div style={{ width: 40, height: 2, background: "rgba(14,165,233,0.4)", margin: "16px 0" }} />
                {/* Stars */}
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} size={13} color="#0ea5e9" />
                  ))}
                </div>
                {/* Author */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${t.color}, #1a003a)`,
                      border: `2px solid ${t.color}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#786888" }}>{t.role}</div>
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
