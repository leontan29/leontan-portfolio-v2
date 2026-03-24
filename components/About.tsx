"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

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
      id="about"
      ref={sectionRef}
      className="py-16 px-6"
    >
      <div className="max-w-5xl mx-auto px-12 py-16">
        <div className="grid md:grid-cols-[210px_1fr] gap-12 items-start">
          {/* Left column — headshot + NOW / PREVIOUSLY */}
          <div className={`fade-in ${visible ? "visible" : ""}`}>
            {imgError ? (
              <div className="w-full aspect-square bg-warm-grey rounded-lg flex items-center justify-center text-gray-500 text-sm">
                headshot.jpg
              </div>
            ) : (
              <Image
                src="/images/headshot.jpg"
                alt="Leon Tan headshot"
                width={210}
                height={210}
                className="w-full aspect-square object-cover rounded-lg"
                style={{ objectPosition: "0% 10%" }}
                onError={() => setImgError(true)}
              />
            )}

            {/* NOW */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                Now
              </p>
              <p className="text-sm font-medium text-black">Kinoyume</p>
              <p className="text-sm text-gray-500">
                Product Management &amp; Design Intern
              </p>
            </div>

            {/* PREVIOUSLY */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                Previously
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-black">Vitesse Data</p>
                  <p className="text-sm text-gray-500">Presales Engineer Intern</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-black">UIUC</p>
                  <p className="text-sm text-gray-500">MS Computer Science</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-black">UCSD</p>
                  <p className="text-sm text-gray-500">
                    BS Cognitive Science / HCI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — ABOUT label + paragraphs */}
          <div
            className={`fade-in ${visible ? "visible" : ""}`}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-6">
              About
            </p>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                I studied Cognitive Science with a concentration in Human Computer Interaction at UC San Diego. The program introduced me to user research, interaction design and the psychology of decision making. While still at UCSD I interned as a Product Manager at Kinoyume where I led a team of designers to redesign a digital ordering experience. That project taught me that the most important problems are rarely technical. They are human.
              </p>
              <p>
                After UCSD I pursued a Master&apos;s in Computer Science at the University of Illinois Urbana Champaign to deepen my technical foundation. During my master&apos;s I took on a Presales Engineering internship at Vitesse Data where I worked directly with enterprise clients. My job was to translate complex database systems into clear business value. Sitting in those conversations with engineers and executives reminded me of what I loved about product work and brought me back to pursuing it full time.
              </p>
              <p>
                Most recently I built and shipped Munch, an AI powered restaurant discovery app. I treated it as a deliberate experiment: how far could a product thinker get by using AI as an engineering team? I made every product decision myself and used tools like Claude to write the code. The result was a working deployed app built in weeks. I believe PMs who know how to build with AI will have an outsized edge and Munch was my way of proving that to myself.
              </p>
              <p>
                My goal is to work on problems where understanding people matters as much as understanding systems.
              </p>
              <p>
                Interested in chatting?{" "}
                <a
                  href="#contact"
                  className="text-black font-medium hover:underline"
                >
                  Reach out!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
