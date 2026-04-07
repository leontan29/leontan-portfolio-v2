"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [slateImgError, setSlateImgError] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center fade-in ${
            visible ? "visible" : ""
          }`}
        >
          Side Projects
        </h2>

        <a
          href="https://munch-site.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`group block cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] fade-in ${
            visible ? "visible" : ""
          }`}
          style={{ borderRadius: "16px", aspectRatio: "16 / 9" }}
        >
          {/* Cover image — full bleed */}
          {imgError ? (
            <div className="absolute inset-0 bg-warm-grey flex items-center justify-center text-gray-500 text-sm">
              munch-cover.png
            </div>
          ) : (
            <Image
              src="/images/munch-cover.png"
              alt="Munch — Emotion-First Restaurant Discovery"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: "center 60%" }}
              onError={() => setImgError(true)}
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
            }}
          />

          {/* Top right — Mobile pill tag */}
          <div className="absolute top-0 right-0 z-10 p-4">
            <span
              className="text-xs text-white font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              Mobile
            </span>
          </div>

          {/* Bottom left — title, subtitle, button */}
          <div className="absolute bottom-0 left-0 z-10 p-6">
            <h3 className="text-2xl font-bold text-white">Munch</h3>
            <p className="text-white/70 text-sm mt-1">
              Emotion-First Restaurant Discovery
            </p>
            <p className="text-white/40 text-xs mt-1">
              Claude Code · React Native · FastAPI
            </p>
            <span className="inline-block mt-3 px-4 py-1.5 bg-white text-gray-900 text-sm font-medium rounded-full">
              View Site
            </span>
          </div>
        </a>

        <a
          href="https://slate-cards.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`group block cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] mt-6 fade-in ${
            visible ? "visible" : ""
          }`}
          style={{ borderRadius: "16px", aspectRatio: "16 / 9" }}
        >
          {/* Cover image — full bleed */}
          {slateImgError ? (
            <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center text-gray-500 text-sm">
              slate-cover.png
            </div>
          ) : (
            <Image
              src="/images/slate-cover.png"
              alt="Slate Cards — Credit Card Rewards Optimizer"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
              onError={() => setSlateImgError(true)}
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
            }}
          />

          {/* Top right — iOS pill tag */}
          <div className="absolute top-0 right-0 z-10 p-4">
            <span
              className="text-xs text-white font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              iOS
            </span>
          </div>

          {/* Bottom left — title, subtitle, button */}
          <div className="absolute bottom-0 left-0 z-10 p-6">
            <h3 className="text-2xl font-bold text-white">Slate Cards</h3>
            <p className="text-white/70 text-sm mt-1">
              Credit Card Rewards Optimizer
            </p>
            <p className="text-white/40 text-xs mt-1">
              Claude Code · SwiftUI · App Store
            </p>
            <span className="inline-block mt-3 px-4 py-1.5 bg-white text-gray-900 text-sm font-medium rounded-full">
              View Site
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
