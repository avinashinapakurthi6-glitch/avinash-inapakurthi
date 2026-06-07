import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: 5,
      type: "work",
      title: "Data Analytics Intern",
      organization: "Thiranex",
      location: "Online",
      period: "30 Apr 2026 - 29 May 2026",
      description: "Completed an intensive 4-week internship program focused on data processing, exploration, and modern data analytics workflows.",
      achievements: [
        "Analyzed and processed complex datasets to extract key business insights",
        "Applied data cleaning and preprocessing techniques to prepare files for analysis",
        "Designed clear data visualizations to communicate data-driven conclusions",
      ],
    },
    {
      id: 1,
      type: "work",
      title: "Java Full Stack Developer",
      organization: "EduSkills Academy",
      location: "Online",
      period: "Jan 2026 - Mar 2026",
      description: "Completed a 10-week intensive internship gaining hands-on experience in modern web development technologies.",
      achievements: [
        "Built full-stack applications using Spring Boot and React",
        "Implemented RESTful APIs with Hibernate ORM",
        "Designed responsive UI with HTML, CSS, JavaScript",
      ],
    },
    {
      id: 2,
      type: "work",
      title: "Web Development & Design Support",
      organization: "CLIENTURA",
      location: "Remote",
      period: "2025",
      description: "Worked closely with clients and team members to manage projects end-to-end, delivering branding and marketing content.",
      achievements: [
        "Designed user-friendly interfaces for client projects",
        "Created posters and visual content for brand identity",
        "Coordinated digital marketing efforts",
      ],
    },
    {
      id: 3,
      type: "education",
      title: "B.Tech - CSE (Data Science)",
      organization: "MVGR College of Engineering",
      location: "Vizianagaram, India",
      period: "2024 - 2028",
      description: "Pursuing Computer Science Engineering with specialization in Data Science. Current CGPA: 8.7",
      achievements: [
        "Google Developers Hackathon Finalist 2026",
        "Active member of coding clubs and tech communities",
      ],
    },
    {
      id: 4,
      type: "education",
      title: "Higher Secondary Education (12th)",
      organization: "SR Educational Academy",
      location: "Andhra Pradesh",
      period: "2022 - 2024",
      description: "Completed higher secondary education with focus on Mathematics and Computer Science.",
      achievements: [
        "Scored 91.5% in final examinations",
        "Participated in science fairs and coding competitions",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline center line scale down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // Timeline items fly in from sides
      timelineData.forEach((item, index) => {
        const isLeft = index % 2 === 0;
        gsap.fromTo(
          `.timeline-item-${item.id}`,
          { opacity: 0, x: isLeft ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `.timeline-item-${item.id}`,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm mb-4">
            System Logs
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through professional experiences and academic achievements.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="timeline-container relative min-h-[400px]">
          {/* Vertical timeline line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-blue to-cyber-cyan origin-top -translate-x-[1px]"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-stretch w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right space taker on desktop */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Icon on line */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-cyber-navy border border-cyber-cyan z-10 flex items-center justify-center -translate-x-[15px] shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                    {item.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-cyber-cyan" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-cyber-cyan" />
                    )}
                  </div>

                  {/* Card Panel */}
                  <div
                    className={`timeline-item-${item.id} timeline-item w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                    }`}
                  >
                    <div className="glass rounded-xl p-6 border border-cyber-border hover:border-cyber-cyan/30 hover:shadow-glow transition-all duration-300 relative">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 text-sm text-cyber-cyan font-mono ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                        <span className="hidden md:inline mx-1">|</span>
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>

                      <h3 className="text-2xl font-heading font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-heading text-gray-300 font-medium mb-3">
                        {item.organization}
                      </h4>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <ul
                        className={`space-y-2 text-sm text-gray-400 list-disc ${
                          isEven
                            ? "md:list-none pl-4 md:pl-0 flex flex-col md:items-end"
                            : "pl-4 text-left"
                        }`}
                      >
                        {item.achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className={`leading-snug ${isEven ? "md:text-right" : "text-left"}`}
                          >
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
