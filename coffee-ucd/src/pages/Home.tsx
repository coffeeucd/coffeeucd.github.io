import React from "react";

const socialLinks = [
  { href: "https://instagram.com", icon: "📸", label: "Instagram" },
  { href: "https://youtube.com", icon: "▶️", label: "YouTube" },
  { href: "https://linkedin.com", icon: "🔗", label: "LinkedIn" },
];

const menuLinks = [
  "Mentorship Program",
  "Events",
  "Officers",
  "About",
];





export default function Home() {
  return (
    <div style={{ background: "#F6F6F7", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo-coffee.png" alt="COFFEE logo" style={{ height: 36, marginRight: 12 }} />
        </div>
        <nav>
          {menuLinks.map(link => (
            <a key={link} href="#" style={{ marginLeft: 28, color: "#111", textDecoration: "none", fontWeight: 500 }}>{link}</a>
          ))}
        </nav>
      </header>
      <main style={{ background: "#F6F6F7", minHeight: "80vh" }}>
        <section style={{ textAlign: "center", padding: "4rem 1rem 2.5rem 1rem" }}>
          <h1 style={{ fontSize: "2.6rem", letterSpacing: "0.1em", fontWeight: 700, margin: 0 }}>C.O.F.F.E.E.</h1>
          <p style={{ fontSize: "1.3rem", margin: "1rem 0 2rem" }}>Club for Future Femme Electrical Engineers</p>
          <div>
            <button style={{
              background: "#fff",
              color: "#222",
              padding: "0.5rem 1.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              marginRight: "1rem",
              fontWeight: 500,
              cursor: "pointer"
            }}>About</button>
            <button style={{
              background: "#222",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: 500,
              cursor: "pointer"
            }}>Events</button>
          </div>
        </section>

        <section style={{ padding: "2rem 0", background: "white" }}>
          <h2 style={{ textAlign: "left", paddingLeft: "2.5rem", fontSize: "1.2rem", fontWeight: 600 }}>
            What We Do
            <br></br>
            <span style={{ color: "#888", fontWeight: 400, fontSize: "1rem" }}>
              Community + Fun + More
            </span>
          </h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem 2.5rem"
          }}>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{
                background: "#EAEAEA",
                height: 160,
                width: 160,
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{ color: "#BBB", fontSize: "3rem" }}>🖼️</span>
              </div>
            ))}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <button style={{
                background: "#222",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                marginLeft: "1rem",
                cursor: "pointer"
              }}>
                →
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        background: "#fff",
        padding: "2.5rem 2rem 2rem",
        marginTop: "2rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
          <img src="/logo-coffee.png" alt="COFFEE logo" style={{ height: 32, marginRight: "1rem" }} />
          <div>
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} style={{ marginRight: 12, color: "#566" }} aria-label={link.label}>{link.icon}</a>
            ))}
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2.5rem",
          maxWidth: "900px"
        }}>
          
        
        </div>
      </footer>
    </div>
  );
}
