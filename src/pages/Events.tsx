import { useState } from "react";
import logoCoffee from "../assets/logo-coffee.png";

const socialLinks = [
  { href: "https://www.instagram.com/coffee_ucd/", icon: "Instagram[◉°]", label: "Instagram" },
  { href: "https://linkedin.com", icon: "LinkedIn🔗", label: "LinkedIn" },
];

function Events() {
  const events = [
    { id: 1, month: "JANUARY", date: "15", title: "Fireside Chat with Women in Semiconductors", image: "/images/img1.png" },
    { id: 2, month: "FEBRUARY", date: "8", title: "Women in AI Panel", image: "/images/img2.png" },
    {id: 2, month: "FEBRUARY", date: "22", title: "Galentines with COFFEE, WSS, OWN IT, & SWE"},
    { id: 3, month: "MARCH", date: "22", title: "Peer Internship Panel", image: "/images/img3.png" },
    { id: 4, month: "APRIL", date: "12", title: "COFFEE and Women in Engineering Conference @ SJSU", image: "/images/img4.png" },
    { id: 4, month: "APRIL", date: "26", title: "Career Prep with COFFEE"},
    { id: 5, month: "MAY", date: "5", title: "E-Craft Week", image: "/images/img5.png" },
    { id: 6, month: "JUNE", date: "20", title: "Professor Islam Lab Tour", image: "/images/img6.png" },
    { id: 10, month: "OCTOBER", date: "16", title: "Marvell Technologies Information Session" },
    { id: 10, month: "OCTOBER", date: "14", title: "Texas Instruments Information Session" },
    { id: 10, month: "OCTOBER", date: "09", title: "The Hiring Games: Career Fair Preparation" },
    { id: 11, month: "NOVEMBER", date: "06", title: "Grad Panel" },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  const previousEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const currentEvent = events[currentEventIndex];

  return (
    <div className="font-dm-serif-text">
      <div className="w-full py-4">
        <div className="min-h-screen">
          {/* Back to Home button */}
          <div className="w-full">
            <div className="max-w-6xl mx-auto px-4 py-0">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "#ba7657ff" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Back to Home
              </a>
            </div>
          </div>

          {/* Hero Banner Section */}
          <div className="w-full py-10 px-5">
            <div className="bg-[#5a3625] py-8 text-center">
              <h1 className="text-6xl font-bold text-white mb-4">Events</h1>
              <p className="text-xl text-white">2024-2025</p>
            </div>
          </div>
          <div>
            <h3 style={{ color: "#6d351bff", fontSize: "20px"}}>
              COFFEE organizes a variety of events each quarter to inspire and support women in ECE.
              We partner with numerous companies to offer industry immersion events and information sessions,
              helping our members advance their careers. We also invite speakers—women and allies who have built careers in ECE—to share their experiences and engage with our audience,
              encouraging insightful discussions and networking opportunities.
            </h3>
            <br />
            <h3 className="font-semibold" style={{color:"#0f0601ff", fontSize: "18px" }}>
              If you are interested in partnering with us for an event, please reach out via email (coffeeucd@gmail.com). We welcome opportunities that contribute to our members' growth!
            </h3>
          </div>

          {/* Carousel and Year-at-a-Glance Section */}
          <div className="w-full py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Event Card */}
                <div className="rounded-xl shadow-lg p-6" style={{ backgroundColor: "#805d4cff" }}>
                  <div className="text-center">
                    <div className="mb-6">
                      <span className="text-2xl font-semibold" style={{ color: "#fbfafaff" }}>
                        {currentEvent.month} {currentEvent.date}
                      </span>
                    </div>
                    <div className="mb-6">
                      <div className="w-64 h-48 mx-auto rounded-xl shadow-md flex items-center justify-center" style={{ backgroundColor: "#D9B7A8" }}>
                        <img src={currentEvent.image} alt={currentEvent.title} className="w-full h-full object-cover rounded-xl" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="inline-block rounded-lg px-8 py-4 shadow-sm border bg-white" style={{ borderColor: "#E7D5CB" }}>
                        <h2 className="text-2xl font-bold" style={{ color: "#411b09ff" }}>
                          {currentEvent.title}
                        </h2>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 space-x-4">
                      <button
                        onClick={previousEvent}
                        className="px-6 py-2 rounded-lg font-medium shadow-md transition-colors duration-200 text-white"
                        style={{ backgroundColor: "#4A2E22" }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3D251B")}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4A2E22")}
                      >
                        Previous
                      </button>
                      <div className="rounded-lg px-4 py-2 shadow-sm" style={{ backgroundColor: "#F7EFEA" }}>
                        <span className="font-medium" style={{ color: "#30170cff" }}>
                          {currentEventIndex + 1} of {events.length}
                        </span>
                      </div>
                      <button
                        onClick={nextEvent}
                        className="px-6 py-2 rounded-lg font-medium shadow-md transition-colors duration-200 text-white"
                        style={{ backgroundColor: "#4A2E22" }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3D251B")}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4A2E22")}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                {/* Year at a Glance */}
                <div className="lg:col-span-2 rounded-xl border bg-white p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#6d351b" }}>2024-2025 Events</h3>
                  <ol className="space-y-3">
                    {events.map((ev, i) => (
                      <li key={ev.id} className="flex items-start gap-3">
                        <div className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${i === currentEventIndex ? "bg-[#ba7657]" : "bg-amber-400"}`} />
                        <div className="grid grid-cols-[auto,1fr] gap-4 items-baseline w-full">
                          <p className="text-xs text-gray-500 whitespace-nowrap w-24">
                            {ev.month} {ev.date}
                          </p>
                          <p className="text-sm font-semibold" style={{color:"#30170c"}}>{ev.title}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <br></br>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#6d351b" }}>Check Back for Our Upcoming 2025-2026 Events!</h3>
                </div>
                
              </div>
            </div>
          </div>
        </div>
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
        <p style={{ color: "rgba(133, 100, 39, 1)" }}>
          Made with ❤︎ by COFFEE Developer Team, 2025: Nancy, Ananya, Sherry, Aishwari, and Kavi
        </p>
      </footer>
    </div>
  );
}

export default Events;
