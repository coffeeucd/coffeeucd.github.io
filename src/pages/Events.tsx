import React, { useMemo, useState } from "react";
import "../pages/Events.css";

type EventItem = {
  id: string;
  title: string;
  dateISO: string; // ISO date for sorting/filtering
  time?: string;
  location?: string;
  description?: string;
  image?: string;
  rsvpLink?: string;
};

const EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Solidigm Info and Recruitment Session",
    dateISO: "2026-01-22",
    time: "7:00 PM – 9:00 PM",
    location: "Kemper 1131",
    description:
      "Come learn about Solidigm's technologies and opportunities, and network with industry professionals!",
    image: "/assets/event1.jpg",
    rsvpLink: "#",
  },
  {
    id: "e2",
    title: "Fusion PCB Design Workshop",
    dateISO: "2026-02-06",
    time: "12:00 PM – 3:00 PM",
    location: "Kemper 1127",
    description:
      "Learn how to design your own PCB using Fusion 360. Open to all skill levels.",
    image: "/assets/event2.jpg",
    rsvpLink: "#",
  },
  {
    id: "e3",
    title: "Marvell Information Session",
    dateISO: "2025-10-16",
    time: "7:00 PM – 9:00 PM",
    location: "Kemper 1127",
    description: "Network with Marvell engineers and learn about their technologies and career opportunities.",
    image: "/assets/event3.jpg",
    rsvpLink: "#",
  },
  {
    id: "e4",
    title: "Mock Interview Prep",
    dateISO: "2026-04-20",
    time: "7:00 PM – 9:00 PM",
    location: "Kemper 1127",
    description: "Prepare for your next interview with our mock interview session.",
    image: "/assets/event4.jpg",
    rsvpLink: "#",
  },
  {
    id: "e5",
    title: "Keysight Technologies Info Session",
    dateISO: "2026-02-11",
    time: "6:00 PM – 8:00 PM",
    location: "Kemper 1127",
    description: "Learn about Keysight Technologies and their career opportunities in the tech industry.",
    image: "/assets/event5.jpg",
    rsvpLink: "#",
  },
  {
    id: "e6",
    title: "Spring Quarter Mentorship Meeting",
    dateISO: "2026-05-04",
    time: "6:00 PM – 8:00 PM",
    location: "Kemper 1127",
    description: "Join us for our Spring Quarter mentorship meeting to connect with mentors and mentees.",
    image: "/assets/event6.jpg",
    rsvpLink: "#",
  },
  {
    id: "e7",
    title: "Study Hours",
    dateISO: "2026-04-27",
    time: "7:00 PM – 9:00 PM",
    location: "Kemper 1127",
    description: "Join us for study hours to work on your projects and assignments with fellow students.",
    image: "/assets/event7.jpg",
    rsvpLink: "#",
  },
  {
    id: "e8",
    title: "Student Intern Panel",
    dateISO: "2026-03-15",
    time: "6:00 PM – 8:00 PM",
    location: "123 Khaira Hall",
    description: "Hear from students who have interned at top companies and learn about their experiences and advice.",
    image: "/assets/event8.jpg",
    rsvpLink: "#",
  }
  // ...add more events here or import dynamically...
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export default function Events() {
  const [query, setQuery] = useState("");
  const [filterMonth, setFilterMonth] = useState<string>("all");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selected, setSelected] = useState<EventItem | null>(null);

  const months = useMemo(() => {
    const setM = new Set(EVENTS.map((e) => new Date(e.dateISO).getMonth()));
    return Array.from(setM).sort().map((m) =>
      new Date(2020, m, 1).toLocaleString(undefined, { month: "short" })
    );
  }, []);

  const visible = useMemo(() => {
    return EVENTS.filter((e) => {
      const matchesQuery =
        !query ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        (e.description && e.description.toLowerCase().includes(query.toLowerCase())) ||
        (e.location && e.location.toLowerCase().includes(query.toLowerCase()));
      const matchesMonth = filterMonth === "all" ? true : new Date(e.dateISO).toLocaleString(undefined, { month: "short" }) === filterMonth;
      return matchesQuery && matchesMonth;
    }).sort((a, b) => (sortDir === "asc" ? +new Date(a.dateISO) - +new Date(b.dateISO) : +new Date(b.dateISO) - +new Date(a.dateISO)));
  }, [query, filterMonth, sortDir]);

  // start of today at local midnight (used to split past vs upcoming)
  const startOfToday = useMemo(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);

  const upcoming = useMemo(() => visible.filter((e) => new Date(e.dateISO) >= startOfToday), [visible, startOfToday]);
  const past = useMemo(() => visible.filter((e) => new Date(e.dateISO) < startOfToday), [visible, startOfToday]);

  const renderEvent = (ev: EventItem) => (
    <article key={ev.id} className="eventCard" onClick={() => setSelected(ev)} tabIndex={0} role="button" aria-label={`Open ${ev.title}`}>
      <div className="eventCard__media">
        {ev.image ? <img src={ev.image} alt={ev.title} /> : <div className="eventCard__placeholder">No image</div>}
      </div>

      <div className="eventCard__body">
        <div className="eventCard__meta">
          <time className="eventCard__date">{formatDate(ev.dateISO)}</time>
          {ev.time && <span className="eventCard__time">{ev.time}</span>}
        </div>

        <h3 className="eventCard__title">{ev.title}</h3>
        <p className="eventCard__location">{ev.location}</p>
        <p className="eventCard__excerpt">{ev.description}</p>

        <div className="eventCard__actions">
          <button className="btn" onClick={(e) => { e.stopPropagation(); setSelected(ev); }}>
            Learn more
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="eventsPage">
      <div className="eventsHero">
        <div className="eventsHero__inner">
          {/* logo removed to keep the brown banner clean */}
          <h1 className="eventsHero__title">EVENTS</h1>
          <p className="eventsHero__subtitle">Workshops, socials, and hands-on sessions to grow skills & community</p>
        </div>
      </div>

      <div className="eventsToolbar container">
        <div className="searchGroup">
          <input
            aria-label="Search events"
            placeholder="Search events, location, or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="searchInput"
          />
        </div>

        <div className="filters">
          <select value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)} className="select">
            <option value="all">All months</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <button
            className="btn small"
            onClick={() => setSortDir((s) => (s === "asc" ? "desc" : "asc"))}
            aria-pressed={sortDir === "desc"}
            title="Toggle sort"
          >
            {sortDir === "asc" ? "Sort: Soonest" : "Sort: Latest"}
          </button>
        </div>
      </div>

      <div className="container eventsGrid">
        {visible.length === 0 ? (
          <div className="empty">No events match your search.</div>
        ) : (
          <>
            <section className="eventsSection">
              <h2 className="eventsSection__heading">Upcoming</h2>
              {upcoming.length === 0 ? (
                <div className="empty">No upcoming events.</div>
              ) : (
                <div className="eventsGrid__list">{upcoming.map(renderEvent)}</div>
              )}
            </section>

            <section className="eventsSection pastSection">
              <h2 className="eventsSection__heading">PAST</h2>
              {past.length === 0 ? (
                <div className="empty">No past events.</div>
              ) : (
                <div className="eventsGrid__list">{past.map(renderEvent)}</div>
              )}
            </section>
          </>
        )}
      </div>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Close" onClick={() => setSelected(null)}>
              ×
            </button>

            <div className="modal__media">{selected.image ? <img src={selected.image} alt={selected.title} /> : null}</div>

            <div className="modal__content">
              <h2>{selected.title}</h2>
              <p className="muted">{formatDate(selected.dateISO)} {selected.time ? ` • ${selected.time}` : ""}</p>
              {selected.location && <p className="muted">{selected.location}</p>}
              <p>{selected.description}</p>

              <div className="modal__actions">
                {/* RSVP removed from modal as well */}
                <button className="btn btn--outline" onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
