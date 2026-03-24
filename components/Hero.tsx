"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.querySelectorAll(".fade-in").forEach((child) => {
        child.classList.add("visible");
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl w-full text-left">
        <h1 className="fade-in stagger-1 font-sans text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#1a1f36]">
          <span className="font-bold">Leon Tan</span>
          <span className="font-normal">
            {" "}is a builder, product thinker, and CS graduate based in San
            Francisco.
          </span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-black transition-colors"
        aria-label="Scroll down"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
