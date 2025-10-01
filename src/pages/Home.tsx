import { useState } from "react";
import { Link } from "react-router-dom";
import logoCoffee from "../assets/logo-coffee.png";
import Carousel from "../components/Carousel";
import "./Home.css"; // ⬅️ add this line

// socials (unchanged)
const socialLinks = [
  { href: "https://www.instagram.com/coffee_ucd/", icon: "Instagram[◉°]", label: "Instagram" },
  { href: "https://linkedin.com", icon: "LinkedIn🔗", label: "LinkedIn" },
];

const pathByLabel = {
  MENTORSHIP: "/mentorship",
  EVENTS: "/events",
  ABOUT: "/about",
} as const;

const menuLinks = Object.keys(pathByLabel) as (keyof typeof pathByLabel)[];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "#F6F6F7", minHeight: "100vh" }}>
      {/* Header */}
      <header className="hdr">
        <div className="hdr__inner">
          <div className="hdr__brand">
            <img src={logoCoffee} alt="COFFEE" style={{ height: 56, marginRight: 12 }} />
          </div>

          {/* Desktop nav */}
          <nav className="hdr__nav--desktop" aria-label="Primary">
            {menuLinks.map((label) => (
              <Link
                key={label}
                to={pathByLabel[label]}
                className="navlink"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {/* Unicode burger (no icon lib) */}
            <span className="hamburger__icon">☰</span>
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <nav
          className={`mobilemenu ${menuOpen ? "mobilemenu--open" : ""}`}
          aria-label="Mobile"
        >
          {menuLinks.map((label) => (
            <Link
              key={label}
              to={pathByLabel[label]}
              className="mobilemenu__item"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <main style={{ background: "#5a3625ff", minHeight: "50vh" }}>
        <section className="hero">
          <h1 className="glow hero__title">C.O.F.F.E.E.</h1>
          <p className="hero__subtitle">Club Of Female & Femme Electrical Engineers</p>
          <p className="hero__subtitle">@ University of California, Davis</p>

          <div className="ctaRow">
            <Link to="/about" className="cta cta--ghost">Who We Are</Link>
            <Link to="/events" className="cta cta--solid">Our Events</Link>
          </div>
        </section>

        {/* What We Do + Carousel */}
        <section className="whatWeDo">
          <h2 className="whatWeDo__title">
            What We Do
            <br />
            <span className="whatWeDo__subtitle">
              Promoting academics, retention, & community among women in the ECE Department
            </span>
          </h2>

          {/* On phones this becomes a smooth horizontal scroll */}
          <div className="carouselWrap">
            <Carousel />
          </div>
        </section>
      </main>

      {/* Footer (unchanged markup) */}
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
        <p style={{ color: "rgba(133, 100, 39, 1)" }}>
          Made with ❤︎ by COFFEE Developer Team, 2025: Nancy, Ananya, Sherry, Aishwari, and Kavi
        </p>
      </footer>
    </div>
  );
}
