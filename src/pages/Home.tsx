//import React from "react";
import { Link } from "react-router-dom";              // ✅ import Link
import logoCoffee from "../assets/logo-coffee.png";
import Carousel from "../components/Carousel";
//import CircuitBg from "../components/CircuitBg";
// src/main.tsx
//import './pages/app.css';

// socials (fine)
const socialLinks = [
  { href: "https://www.instagram.com/coffee_ucd/", icon: "Instagram[◉°]", label: "Instagram" },
  //{ href: "https://youtube.com", icon: "▶️", label: "YouTube" },
  { href: "https://linkedin.com", icon: "LinkedIn🔗", label: "LinkedIn" },
];

// label → route mapping
const pathByLabel = {
  "MENTORSHIP": "/mentorship",
  EVENTS: "/events",
 // OFFICERS: "/officers",
  ABOUT: "/about",
} as const;

// ✅ define the menu labels you want to render
const menuLinks = Object.keys(pathByLabel) as (keyof typeof pathByLabel)[];

export default function Home() {
  return (
    <div style={{ background: "#F6F6F7", minHeight: "100vh"}}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logoCoffee} alt="COFFEE" style={{ height: 70, marginRight: 12 }} />
        </div>

        {/* ✅ render Links from labels */}
        <nav>
          {menuLinks.map((label) => (
            <Link
              key={label}
              to={pathByLabel[label]}
              style={{ marginLeft: 28, color: "#111", textDecoration: "none", fontWeight: 500 }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main style={{ background: "#5a3625ff", minHeight: "50vh" }}>
        <section style={{ textAlign: "center", padding: "8rem 1rem 5rem 1rem", fontFamily: "'Outfit', sans-serif", color: "white" }}>
          <h1 className="glow" style={{ fontSize: "3.0rem", letterSpacing: "0.1em", fontWeight: 700, margin: 0, color: "white" }}> C.O.F.F.E.E.
</h1>
          <p style={{ fontSize: "1.3rem", margin: "1rem 0 2rem"}}>Club Of Female & Femme Electrical Engineers</p>
          <p style={{ fontSize: "1.3rem", margin: "1rem 0 2rem" }}>@ University of California, Davis</p>
          {/* ✅ make buttons navigate */}
          <div>
            <Link to="/about">
              <button style={{ background: "#291309ff", color: "#f5f2f1ff", padding: "0.5rem 1.5rem", border: "1px", borderRadius: "0.5rem", marginRight: "1rem", fontWeight: 500, cursor: "pointer" }}>
                Who We Are
              </button>
            </Link>
            <Link to="/events">
              <button style={{ background: "#291309ff", color: "#fff", padding: "0.5rem 1.5rem", border: "none", borderRadius: "0.5rem", fontWeight: 500, cursor: "pointer" }}>
                Our Events
              </button>
            </Link>
          </div>
        </section>

        <section style={{ padding: "2rem 0", background: "white" }}>
          <h2 style={{ textAlign: "left", paddingLeft: "2.5rem", fontSize: "1.2rem", fontWeight: 600 }}>
            What We Do
            <br />
            <span style={{ color: "#888", fontWeight: 400, fontSize: "1rem" }}>
              Promoting academics, retention, & community among women in the ECE Department
            </span>
          </h2>
          <div style={{ padding: "2rem 0", display: "flex", justifyContent: "center" }}>
            <Carousel />
          </div>
        </section>
      </main>

      <footer style={{ background: "rgb(246,246,247)", padding: "2.5rem 2rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
          <img src={logoCoffee} alt="COFFEE small" style={{ height: 42, marginRight: "1rem" }} />
          <div>
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} style={{ marginRight: 12, color: "#566" }} aria-label={label} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <p style={{color:"rgba(133, 100, 39, 1)"}}>Made with ❤︎ by COFFEE Developer Team, 2025</p>
      </footer>
    </div>
  );
}
