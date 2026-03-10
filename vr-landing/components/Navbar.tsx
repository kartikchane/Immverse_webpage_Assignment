"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import SignUpModal from "./SignUpModal";

const NAV_LINKS = [
  { label: "Home",     href: "#home",     active: true },
  { label: "Company",  href: "#about",    active: false },
  { label: "Features", href: "#features", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [open, setOpen]               = useState(false);
  const [modalOpen, setModalOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`vr-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Link href="#home" className="nav-brand">
              IMMVERSE<span>AI</span>
            </Link>
            {/* Desktop nav */}
            <div className="d-none d-lg-flex align-items-center gap-1">
              {NAV_LINKS.map(({ label, href, active }) => (
                <Link key={label} href={href} className={`nav-link vr-nav-link ${active ? "active" : ""}`}>
                  {label}
                </Link>
              ))}
            </div>
            {/* Sign Up — opens modal */}
            <div className="d-none d-lg-block">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary-vr"
                style={{ padding: "10px 26px", border: "none", cursor: "pointer" }}
              >
                Sign Up
              </button>
            </div>
            {/* Mobile hamburger */}
            <button
              className="d-lg-none border-0"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                background: "rgba(14,165,233,0.1)",
                color: "#fff",
                borderRadius: 8,
                padding: "6px 10px",
                fontSize: 22,
                lineHeight: 1,
              }}
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
          {/* Mobile menu */}
          {open && (
            <div className="mobile-menu mt-2">
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className="nav-link vr-nav-link d-block" onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ))}
              <button
                onClick={() => { setOpen(false); setModalOpen(true); }}
                className="btn-primary-vr w-100 mt-3"
                style={{ justifyContent: "center", border: "none", cursor: "pointer" }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      <SignUpModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
