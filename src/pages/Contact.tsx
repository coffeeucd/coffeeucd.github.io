import "./Contact.css";

const socialLinks = [
  { 
    href: "https://www.instagram.com/coffee_ucd/", 
    label: "Instagram",
    title: "Instagram",
    description: "Follow us for event updates, spotlights, and community moments"
  },
  { 
    href: "https://linkedin.com", 
    label: "LinkedIn",
    title: "LinkedIn",
    description: "Connect with us for professional networking and career insights"
  },
];

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="eventsHero">
        <div className="eventsHero__inner">
          <h1 className="eventsHero__title">CONNECT WITH US</h1>
          <p className="eventsHero__subtitle">
            We'd love to hear from you! Whether you have questions about COFFEE, want to join our community, or just want to chat, reach out through any of our channels.
          </p>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div style={{ maxWidth: 1100, margin: "40px auto", padding: "0 16px" }}>
        <div className="contactGrid">
          {socialLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noreferrer"}
              className="contactCard"
            >
              <div className="contactCard__icon">{link.icon}</div>
              <h2 className="contactCard__title">{link.title}</h2>
              <p className="contactCard__description">{link.description}</p>
              <div className="contactCard__cta">
                {link.label === "Email" ? "Send Email" : `Visit ${link.title}`} →
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Email Highlight Section */}
      <div style={{ maxWidth: 1100, margin: "50px auto", padding: "0 16px" }}>
        <div className="emailHighlight">
          <div className="emailHighlight__content">
            <h3 className="emailHighlight__title">💌 Email Us Directly</h3>
            <p className="emailHighlight__text">
              For inquiries, partnership opportunities, or general questions, send us an email at:
            </p>
            <a href="mailto:cofeeucd@gmail.com" className="emailHighlight__address">
              cofeeucd@gmail.com
            </a>
            <p className="emailHighlight__footer">
              We typically respond within 24-48 hours. Let's connect!
            </p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div style={{ height: "40px" }}></div>
    </>
  );
}

export default Contact;
