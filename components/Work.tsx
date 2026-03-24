"use client";

import { useEffect, useRef, useState } from "react";

const jobs = [
  {
    company: "Kinoyume",
    role: "Product Management & Design Intern",
    period: "Jan 2023 – Apr 2023",
    bullets: [
      "Defined product vision and roadmap through stakeholder discovery sessions, prioritizing features based on customer insights and business impact",
      "Led 3 product designers through iterative design cycles and conducted user testing to validate product decisions",
      "Delivered a high-fidelity prototype that drove a 19% increase in customer engagement and a 3% increase in online orders",
    ],
  },
  {
    company: "Vitesse Data",
    role: "Presales Engineer Intern",
    period: "May 2024 – Sep 2024",
    bullets: [
      "Delivered product demos to enterprise clients, translating complex distributed database architecture into clear business value narratives",
      "Conducted technical discovery calls with engineering and data stakeholders to qualify opportunities and tailor proof of concept scopes",
      "Built and executed end-to-end proof of concepts on customer datasets demonstrating real-world SQL performance improvements",
    ],
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
    <section id="work" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center fade-in ${
            visible ? "visible" : ""
          }`}
        >
          Work
        </h2>

        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.company}
              className={`bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow fade-in ${
                visible ? "visible" : ""
              }`}
            >
              <h3 className="text-xl font-bold">{job.company}</h3>
              <p className="text-black font-medium mt-1">{job.role}</p>
              <p className="text-gray-400 text-sm mt-1">{job.period}</p>
              <ul className="mt-4 space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
