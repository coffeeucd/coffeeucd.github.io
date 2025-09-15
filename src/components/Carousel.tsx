//import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import { useState, useEffect } from "react";

const originalImages = [img1, img2, img3, img4, img5, img6, img7, img8];

/** ---- SIZING CONTROLS ----
 * MAX_WIDTH: overall width cap (e.g., "1100px", "72rem", "100%")
 * HEIGHT: responsive height (use clamp to scale nicely with viewport width)
 */
const MAX_WIDTH = "70%";
 const HEIGHT = "clamp(200px, 50vw, 500px)"; // smaller←→bigger
//const HEIGHT = "500px"; // fixed height for simplicity
export default function Carousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  
  // Slides visible based on window size
  useEffect(() => {
    const updateCount = () => {
      //const w = window.innerWidth;
      setVisibleCount(1);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Build looped slide list (clones)
  const slides = [
    ...originalImages.slice(-visibleCount),
    ...originalImages,
    ...originalImages.slice(0, visibleCount),
  ];
  const totalSlides = slides.length;

  // Start after the prepended clones
  useEffect(() => {
    setCurrent(visibleCount);
  }, [visibleCount]);

  const next = () => setCurrent((p) => p + 1);
  const prev = () => setCurrent((p) => p - 1);

  // Handle seamless jump when hitting clones
  useEffect(() => {
  if (!transitionEnabled) return; // returns void (OK)

  // In the browser, use window.setTimeout to get a number type.
  let timeout: number | undefined;

  if (current >= totalSlides - visibleCount) {
    timeout = window.setTimeout(() => {
      setTransitionEnabled(false);
      setCurrent(visibleCount);
    }, 500);
  } else if (current < visibleCount) {
    timeout = window.setTimeout(() => {
      setTransitionEnabled(false);
      setCurrent(totalSlides - visibleCount * 2);
    }, 500);
  }

  return () => {
    if (timeout !== undefined) {
      window.clearTimeout(timeout); // always returns void
    }
  };
}, [current, totalSlides, visibleCount, transitionEnabled]);

  // Re-enable transition after the instant jump
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  }, [transitionEnabled]);

  return (
    <div
      style={{
        maxWidth: MAX_WIDTH,
        margin: "0 auto",
        
        //padding: "-1rem 0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
         height: HEIGHT,      // << controls carousel height
          overflow: "hidden",
          borderRadius: `0`,
        }}
      >
        {/* Track */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transition: transitionEnabled ? "transform 0.5s ease" : "none",
            transform: `translateX(-${current * (100 / visibleCount)}%)`,
          }}
        >
          {slides.map((src, idx) => (
            <div
              key={idx}
              style={{
                flex: `0 0 ${100 / visibleCount}%`,
                height: "100%",
                padding: "0 0px",
                boxSizing: "border-box", // padding stays inside the % width
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // crop nicely; change to "contain" to avoid cropping
                  objectPosition: "center",
                  borderRadius: 8,
                  display: "block",
                }}
              />

            </div>
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next"
          style={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
