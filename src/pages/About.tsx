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
      {/* Back to Home removed per request; refined hero and sections */}
      <div className="eventsHero">
        <div className="eventsHero__inner">
          <h1 className="eventsHero__title">ABOUT US</h1>
          <p className="eventsHero__subtitle">The <b>Club of Female & Femme Electrical Engineers (COFFEE)</b> at UC Davis promotes academics, retention, and community among women in the Electrical and Computer Engineering Department.</p>
        </div>
      </div>

      <div style={{maxWidth:1100,margin:'28px auto',padding:'0 16px'}}>
        <div className="cardRow">
        <div className="sectionCard sectionCard--card">
          <div className="cardIcon">☕️</div>
          <div className="cardBody">
            <h2>How it all started</h2>
            <p><span className="dropcap"></span>The Club of Female & Femme Engineers was started by a group of women in the ECE Department in 2018. We found that the transition from lower-division to upper-division courses was unexpectedly challenging, and we leaned on each other for support. We decided to create an official organization that provided assistance, support, and guidance for the women in electrical and computer engineering, and thus COFFEE was born.</p>
          </div>
        </div>

        <div className="sectionCard sectionCard--card">
          <div className="cardIcon">✨</div>
          <div className="cardBody">
            <h2>Fun Fact</h2>
            <p><span className="funFact"></span> In creating the name one very late night in the 24 hour study room, there were two options for the club name: EEW (Electrical Engineering Women) and COFFEE (Club of Female & Femme Electrical Engineers). Thankfully, the organization adopted the second name.</p>
          </div>
        </div>

        </div>

        <div className="sectionCard">
          <h2>Meet our Officers</h2>
          <p>Hover over each photo to learn about the officer's name, position, and major!</p>
        </div>
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

    </>
  )
}
export default About