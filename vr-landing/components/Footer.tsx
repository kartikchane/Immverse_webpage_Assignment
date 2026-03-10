"use client";

import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Docs", "Community", "Contact", "Status"],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg3)", borderTop: "1px solid rgba(14,165,233,0.1)", paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div className="row g-5 mb-5">

          {/* Brand col */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <div className="nav-brand mb-3" style={{ fontSize: 22 }}>
              IMMVERSE<span>AI</span>
            </div>
            <p style={{ color: "#786888", fontSize: 14, lineHeight: 1.8, maxWidth: 260, marginBottom: 24, margin: "0 auto 24px" }}>
              Experience the future of virtual reality. Explore three-dimensional visuals
              and immersive digital worlds.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start" style={{ marginTop: 24 }}>
              {[FaTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(14,165,233,0.1)",
                    border: "1px solid rgba(14,165,233,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0ea5e9",
                    transition: "background 0.2s, border-color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14,165,233,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14,165,233,0.1)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="col-6 col-md-2 text-center text-md-start">
              <h6 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>
                {group}
              </h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{ color: "#786888", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#0ea5e9")}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#786888")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
          className="footer-bottom"
        >
          <p style={{ color: "#786888", fontSize: 13, margin: 0 }}>
            © 2024 ImmverseAI. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a key={t} href="#" style={{ color: "#786888", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#0ea5e9")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#786888")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
