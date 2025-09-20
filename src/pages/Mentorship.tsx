import '../App.css';
import bonding from "./bondingimg.png";
import group from "./group.png";
import logoCoffee from "../assets/logo-coffee.png";


// socials (fine)
const socialLinks = [
  { href: "https://www.instagram.com/coffee_ucd/", icon: "Instagram[◉°]", label: "Instagram" },
  //{ href: "https://youtube.com", icon: "▶️", label: "YouTube" },
  { href: "https://linkedin.com", icon: "LinkedIn🔗", label: "LinkedIn" },
];

export default function Mentorship() {
  return (
    <>
    <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* If using React Router, replace <a> with:
              <Link to="/" className="..."> ... </Link>
          */}
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: "#ba7657ff" }}
          >
            {/* Left arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    <div style={{ textAlign: "center", padding: "1rem 1rem 1rem 1rem", fontFamily: "'Outfit', sans-serif", color: "#5A3625" , margin: "0 auto" }}>
        <div style={{ backgroundColor: "#5A3625", padding: "2rem 2rem 2rem 2rem" }}>
        <h1 style={{ fontSize: "3.0rem", letterSpacing: "0.1em", fontWeight: 700, margin: 20, color: "white"}}>
          MENTORSHIP PROGRAM
        </h1>
        <span style={{textAlign: "center", fontSize: "1.4rem", fontWeight: 400, color: "white" }}>
          COFFEE’s mentorship program was designed to pair undergraduate and graduate students or upperclassmen together so that mentors can guide their mentees through their college career and build meaningful friendships.
      </span></div>
    </div>
    <h2 style={{textAlign: "left", fontSize: "1.4rem", fontWeight: 600, marginTop: 20, marginBottom: 20}}>
          How it Works:
          <br />
          <span style={{fontWeight: 400, fontSize: "1.2rem", marginBottom: 50 }}>
            Pairings are usually made during the fall quarter of each academic year, and applications are sent out via our newsletter & social media or to those who have filled out an interest form at any recruiting event.
          </span>

    </h2>
    <div style={{marginBottom: 30}} className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-6 space-y-6 md:space-y-0 px-6">
      <img
        src={group}
        alt="Group Picture of Pairings of 2024-25"
        className="w-full md:w-auto h-80 object-cover rounded-lg"
      />
      <img
        src={bonding}
        alt="Two students bonding"
        className="w-full md:w-auto h-80 mx-auto md:mx-0 object-cover rounded-lg"
      />
    </div>
     <div style={{ textAlign: "center", padding: "2rem", fontFamily: "'Outfit', sans-serif", margin: "0 auto" }}>
  <div
    style={{
      background: "linear-gradient(135deg, #ba7657ff, #d48c6fff)",
      padding: "2rem",
      borderRadius: "20px",
      display: "inline-block",
      maxWidth: "600px",
      textAlign: "center",
      wordWrap: "break-word",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
      transition: "transform 0.3s ease-in-out",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <h1
      style={{
        fontSize: "3rem",
        letterSpacing: "0.08em",
        fontWeight: 800,
        color: "white",
        marginBottom: "1rem",
      }}
    >
      Contact
    </h1>
    <span
      style={{
        textAlign: "center",
        fontSize: "1.3rem",
        fontWeight: 400,
        color: "white",
        lineHeight: "1.8",
      }}
    >
      Have questions or ideas?  
      <br />
      Reach out to <strong>Ananya Malhotra</strong> (<a href="mailto:aamalhotra@ucdavis.edu" style={{ color: "#ffe9d6", textDecoration: "underline" }}>aamalhotra@ucdavis.edu</a>)  
      <br />
      or <strong>Sarbani Kumar</strong> (<a href="mailto:srbkumar@ucdavis.edu" style={{ color: "#ffe9d6", textDecoration: "underline" }}>srbkumar@ucdavis.edu</a>).
    </span>
  </div>
</div>


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
        <p style={{color:"rgba(133, 100, 39, 1)"}}>Made with ❤︎ by COFFEE Developer Team, 2025: Nancy, Ananya, Sherry, Aishwari, and Kavi</p>
      </footer>
    </>

  );
}
