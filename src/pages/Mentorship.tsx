import '../App.css';
import './Mentorship.css';
import bonding from "./bondingimg.png";
import group from "./group.png";
// footer removed per user request

export default function Mentorship() {
  return (
    <div className="mentorshipPage">
      <div className="mentorshipContainer">
        <div className="eventsHero" style={{marginBottom:18}}>
          <div className="eventsHero__inner">
            <h1 className="eventsHero__title">MENTORSHIP PROGRAM</h1>
            <p className="eventsHero__subtitle">
              COFFEE’s mentorship program pairs undergraduate and graduate students or upperclassmen so mentors can guide mentees through their college career and build meaningful friendships.
            </p>
          </div>
        </div>

        <div className="sectionCard">
          <h2>How it Works</h2>
          <p>
            Pairings are usually made during the fall quarter of each academic year. Applications are sent via our newsletter & social media, or to those who fill out an interest form at recruiting events.
          </p>
        </div>

        <div className="sectionCard">
          <h2>Gallery</h2>
          <div className="mentImages">
            <img src={group} alt="Group Picture of Pairings of 2024-25" />
            <img src={bonding} alt="Two students bonding" />
          </div>
        </div>

        <div className="sectionCard">
          <h2>Apply</h2>
          <p style={{marginBottom:12}}> Note: our mentorship program is closed for 2025-2026 school year. Please check back for our 2026-2027 mentorship applications for mentees and mentors!</p>
          <div className="contactCard">
            <p>
              Have questions or ideas? Reach out to our member involvement coordinator <strong>Aanya Malhotra</strong> (<a href="mailto:aamalhotra@ucdavis.edu" style={{color:"#ffe9d6",textDecoration:"underline"}}>aamalhotra@ucdavis.edu</a>).
            </p>
            <div className="contactActions">
              <a className="contactButton contactButton--primary" href="mailto:aamalhotra@ucdavis.edu?subject=General%20Question" aria-label="Contact the Mentorship Team">
                <span className="contactIcon">✉️</span>
                Contact the Team
              </a>
              <a className="contactButton contactButton--secondary" href="mailto:aamalhotra@ucdavis.edu?subject=Mentorship%20Program%20Application" aria-label="Apply to Mentorship">
                Apply to Mentorship
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
