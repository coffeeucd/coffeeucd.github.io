import { useState } from "react";
import { Link } from "react-router-dom";
//import logoCoffee from "../assets/logo-coffee.png";
import Carousel from "../components/Carousel";
import "./Home.css"; // ⬅️ add this line


const pathByLabel = {
  MENTORSHIP: "/mentorship",
  EVENTS: "/events",
  ABOUT: "/about",
} as const;

//const menuLinks = Object.keys(pathByLabel) as (keyof typeof pathByLabel)[];

// Benefits data for "Why Join" section
const benefits = [
  {
    title: "Mentorship",
    description: "Our mentorship program pairs you with an upperclassmen to help guide you through your academic career at UC Davis",
    icon: "🤝",
    path: "/mentorship"
  },
  {
    title: "Community",
    description: "Build lasting friendships with like-minded students",
    icon: "💫",
    path: "/about"
  },
  {
    title: "Events",
    description: "Attend workshops, socials, recruitment, and networking events",
    icon: "🎉",
    path: "/events"
  },
];

export default function Home() {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* remove any <header className="hdr">...</header> here (App renders Header) */}

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <h1 className="hero__title">C.O.F.F.E.E.</h1>
          <p className="hero__subtitle">Club Of Female & Femme Electrical Engineers</p>
          <p className="hero__tagline">@ University of California, Davis</p>

          <div className="ctaRow">
            <a href="/about" className="cta cta--primary">Who We Are</a>
            <a href="/events" className="cta cta--secondary">Our Events</a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="whyJoin">
        <div className="whyJoin__container">
          <h2 className="whyJoin__title">Why Join COFFEE?</h2>
          <p className="whyJoin__description">
            Be part of a supportive community dedicated to advancing women and femmes in electrical and computer engineering at UC Davis
          </p>
          
          <div className="benefitsGrid">
            {benefits.map((benefit, i) => (
              <Link key={i} to={benefit.path} className="benefitCard" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="benefitCard__icon">{benefit.icon}</div>
                <h3 className="benefitCard__title">{benefit.title}</h3>
                <p className="benefitCard__description">{benefit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do + Carousel */}
      <section className="whatWeDo">
        <div className="whatWeDo__container">
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
        </div>
      </section>
    </>
  );
}
