import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const originalImages = [img1, img2, img3, img4, img5, img6];

export default function Carousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [current, setCurrent] = useState(0); // will initialize later
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const trackRef = useRef<HTMLDivElement>(null);

  // Determine slides visible based on window size
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 600) setVisibleCount(1);
      else if (window.innerWidth < 900) setVisibleCount(2);
      else if (window.innerWidth < 1200) setVisibleCount(3);
      else setVisibleCount(8);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Calculated slides: clones before + real + clones after
  const slides = [
    ...originalImages.slice(-visibleCount), // last N clones at start
    ...originalImages,
    ...originalImages.slice(0, visibleCount) // first N clones at end
  ];

  const totalSlides = slides.length;

  // Set initial index to start after prepended clones
  useEffect(() => {
    setCurrent(visibleCount);
  }, [visibleCount]);

  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  const prev = () => {
    setCurrent((prev) => prev - 1);
  };

  // Handle “jump” when hitting clones
  useEffect(() => {
    if (!transitionEnabled) return;

    let timeout: NodeJS.Timeout;
    if (current >= totalSlides - visibleCount) {
      // reached end clones
      timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(visibleCount); // jump to real first
      }, 500);
    } else if (current < visibleCount) {
      // reached start clones
      timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(totalSlides - visibleCount * 2); // jump to real last
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [current, totalSlides, visibleCount, transitionEnabled]);

  // Re-enable transition after the jump
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  }, [transitionEnabled]);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Track */}
      <div
  style={{
    display: "flex",
    transition: transitionEnabled ? "transform 0.5s ease" : "none",
    transform: `translateX(-${current * (100 / visibleCount)}%)`,
    width: `${(totalSlides / visibleCount) * 100}%`, // total width to fit all images side-by-side
  }}
>
  {slides.map((src, idx) => (
    <div key={idx} style={{ flex: `0 0 ${100 / visibleCount}%`, padding: "0 8px" }}>
      <img
        src={src}
        alt={`Slide ${idx + 1}`}
        style={{
          width: "100%",       // Image fills slide container width
          height: "300px",    // Fixed height for uniformity
          objectFit: "cover", // Crop nicely without distortion
          borderRadius: "8px",
        }}
      />
    </div>
  ))}
</div>


      {/* Prev arrow */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
}
