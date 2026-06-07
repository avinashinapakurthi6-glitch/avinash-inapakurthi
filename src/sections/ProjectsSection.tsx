import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const Github: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
}

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "BloodConnect",
      description:
        "A real-time emergency blood donation system featuring SOS broadcasting, donor availability queue, blood inventory tracking, and rule-based medical eligibility verification to support faster emergency response.",
      image: "/images/project-bloodconnect.jpg",
      tech: ["React", "Node.js", "Firebase", "Maps API"],
      github: "https://github.com/avinashinapakurthi6-glitch",
    },
    {
      id: 2,
      title: "Hospital Availability System",
      description:
        "A web application that suggests nearby hospitals with address, contact details, Aarogyasri availability, and provides guidance on symptoms, prevention, and precautionary measures for users.",
      image: "/images/project-hospital.jpg",
      tech: ["JavaScript", "HTML/CSS", "APIs", "MySQL"],
      github: "https://github.com/avinashinapakurthi6-glitch",
    },
    {
      id: 3,
      title: "Code Review Assistant",
      description:
        "An AI-powered tool that automatically reviews code submissions, identifies syntax bugs, security flaws, and performance bottlenecks, providing actionable feedback to developers.",
      image: "/images/project-code-review.jpg",
      tech: ["TypeScript", "Node.js", "GPT-4 API", "Git"],
      github: "https://github.com/avinashinapakurthi6-glitch",
    },
    {
      id: 4,
      title: "AI Data Analyst",
      description:
        "An intelligent data exploration tool that processes datasets, automatically generates custom dashboards, and uses natural language queries to explain trends and anomalies.",
      image: "/images/project-ai-analyst.jpg",
      tech: ["Python", "Pandas", "Streamlit", "OpenAI API"],
      github: "https://github.com/avinashinapakurthi6-glitch",
    },
    {
      id: 5,
      title: "Client Portfolio",
      description:
        "A high-fidelity developer portfolio platform for business clients, featuring interactive timelines, contact terminals, and customizable layouts.",
      image: "/images/project-client-portfolio.jpg",
      tech: ["React", "Vite", "Tailwind CSS", "GSAP"],
      github: "https://github.com/avinashinapakurthi6-glitch",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm mb-4">
            Deployed Systems
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore a collection of web platforms, automated algorithms, and database systems.
          </p>
        </div>

        {/* Carousel Frame */}
        <div className="project-card relative max-w-5xl mx-auto glass rounded-2xl border border-cyber-border overflow-hidden cyber-border">
          <div className="grid lg:grid-cols-2 min-h-[400px]">
            {/* Visual Panel */}
            <div className="relative overflow-hidden h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-cyber-border">
              <img
                src={projects[activeIdx].image}
                alt={projects[activeIdx].title}
                className="w-full h-full object-cover transition-all duration-700 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-void/80 to-transparent pointer-events-none" />
              <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
            </div>

            {/* Details Panel */}
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyber-cyan uppercase tracking-widest mb-2 block">
                  Project {projects[activeIdx].id} of {projects.length}
                </span>
                <h3 className="text-3xl font-heading font-bold text-white mb-4 tracking-wide">
                  {projects[activeIdx].title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {projects[activeIdx].description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeIdx].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action and Navigation button rows */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-cyber-border/50 pt-6">
                {/* GitHub link button */}
                <a
                  href={projects[activeIdx].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-cyber-navy border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 hover:text-white transition-colors cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                  <span>Repository</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Navigation Controls */}
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-lg bg-cyber-navy border border-cyber-border text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-lg bg-cyber-navy border border-cyber-border text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                idx === activeIdx ? "w-8 bg-cyber-cyan" : "bg-cyber-cyan/30 hover:bg-cyber-cyan/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
