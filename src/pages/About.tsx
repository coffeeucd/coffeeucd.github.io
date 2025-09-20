//placeholder image
import img1 from './pic.jpg';
import img2 from './2024_coffee_pfp.jpg';
import img3 from './alice.png';
import img4 from './terisa.jpeg';
import img5 from './Anushree (GHIRARDELLI).jpg';
import img6 from './wingyan.png';
import img7 from './IMG_6321.jpeg';
import img8 from './IMG_2801.jpeg';
import img9 from './hania.png';
import img10 from './kavi.png';
//import img11 from './blankPFP.jpg';
//people and their image
const people1 = [
  { img: img1, position: "Co-President", name: "Nayana V.", major: "Electrical Engineering" },
  { img: img2, position: "Co-President", name: "Rebeka H.", major: "Electrical Engineering" },
  { img: img3, position: "Co-External Affairs", name: "Alice L.", major: "Computer Engineering" },
  { img: img4, position: "Co-External Affairs", name: "Terisa L.", major: "Computer Engineering" },
  { img: img5, position: "Co-Financial Officer", name: "Anushree Z.", major: "ELectrical Engineering" },
  { img: img6, position: "Co-Financial Officer", name: "Wingyan Y.", major: "Electrical Engineering" },
  { img: img7, position: "Co-Member Involvement Coordinator", name: "Alyssa A.", major: "Electrical Engineering" },
  { img: img8, position: "Social Media Manager", name: "Melissa C.", major: "Electrical Engineering" },
  { img: img9, position: "Co-Publicist", name: "Hania A.", major: "Electrical Engineering" },
  { img: img10, position: "Co-Publicist", name: "Kavi R.", major: "Computer Science & Engineering" },
];


import logoCoffee from "../assets/logo-coffee.png";


// socials (fine)
const socialLinks = [
  { href: "https://www.instagram.com/coffee_ucd/", icon: "Instagram[◉°]", label: "Instagram" },
  //{ href: "https://youtube.com", icon: "▶️", label: "YouTube" },
  { href: "https://linkedin.com", icon: "LinkedIn🔗", label: "LinkedIn" },
];

function About() {
  return (
    <>
      {/* Back to Home button */}
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

      {/*Text Section*/}
      <div style={{ textAlign: "center", padding: "1rem 1rem 1rem 1rem", fontFamily: "'Outfit', sans-serif", color: "#5A3625" }}>
        <div style={{ backgroundColor: "#5A3625", padding: "2rem 2rem 2rem 2rem" }}>
        <h1 style={{ fontSize: "3.0rem", letterSpacing: "0.1em", fontWeight: 700, margin: 20, color: "white"}}>
          ABOUT US
        </h1>
        <span style={{textAlign: "center", fontSize: "1.4rem", fontWeight: 400, color: "white" }}>
          The <b>Club of Female & Femme Electrical Engineers (COFFEE)</b> at
          UC Davis is an organization aimed towards promoting academics, retention,
          and community among women in the Electrical and Computer Engineering Department.
        </span></div>
        <h2 style={{textAlign: "left", fontSize: "1.4rem", fontWeight: 600, marginTop: 20 }}>
          How it all started:
          <br />
          <span style={{fontWeight: 400, fontSize: "1.2rem" }}>
            The Club of Female & Femme Engineers was started by a group
            of women in the ECE Department in 2018. We found that the
            transition from lower-division to upper-division courses
            was unexpectedly challenging, and we leaned on each other
            for support. We decided to create an official organization
            that provided assistance, support, and guidance for the
            women in electrical and computer engineering, and thus
            COFFEE was born.
          </span>
        </h2>
        <h2 style={{textAlign: "left", fontSize: "1.4rem", fontWeight: 600, marginTop: 20 }}>
          Fun Fact:
          <br />
          <span style={{fontWeight: 400, fontSize: "1.2rem" }}>
            In creating the name one very late night in the 24 hour study room,
              there were two options for the club name: EEW (Electrical Engineering Women)
            and COFFEE (Club of Female & Femme Electrical Engineers).
            Thankfully, the organization adopted the second name!
          </span>
        </h2>
        <h2 style={{fontSize: "2rem", fontWeight: 600, letterSpacing: "0.1em", marginTop: 40 }}>
          Meet our Officers
          <br />
        </h2>
        <span style={{fontWeight: 400, fontSize: "1.2rem" }}>
            Hover over each photo to learn about the officer's name, position, and major!
          </span>
      </div>
      {/* Images with hover functionality */}
      <div className="flex flex-wrap justify-center gap-3">
        {people1.map((person, i) => (
          <div key={i} className="relative basis-[20%] p-2.5 group">
            <img
              src={person.img}
              alt={`Image ${i + 1}`}
              className=" w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-40"
            />
            <div className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center">
              <div style={{fontWeight: 400, fontSize: "1.2rem", color: "#5A3625" }}>
                <p>
                  <b>{person.position}</b>
                </p>
                <p>{person.name}</p>
                <p>{person.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ background: "rgb(246,246,247)", padding: "2.5rem 2rem 2rem", marginTop: 50 }}>
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
  )
}
export default About