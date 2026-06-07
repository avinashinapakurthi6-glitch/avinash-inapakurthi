import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Terminal,
  Code2,
  Coffee,
  Atom,
  Server,
  Database,
  Flame,
  GitBranch,
  Cpu,
  PenTool,
  Brain,
  Network,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SkillNode {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const nodesContainerRef = useRef<HTMLDivElement | null>(null);

  const skillNodes: SkillNode[] = [
    { name: "Python", icon: <Terminal className="w-6 h-6" /> },
    { name: "C++", icon: <Cpu className="w-6 h-6" /> },
    { name: "Java", icon: <Coffee className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
    { name: "React", icon: <Atom className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "SQL", icon: <Database className="w-6 h-6" /> },
    { name: "Firebase", icon: <Flame className="w-6 h-6" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
    { name: "APIs", icon: <Network className="w-6 h-6" /> },
    { name: "Figma", icon: <PenTool className="w-6 h-6" /> },
    { name: "ML Basics", icon: <Brain className="w-6 h-6" /> },
  ];

  const categories: SkillCategory[] = [
    {
      name: "Programming",
      color: "from-cyan-500 to-blue-500",
      skills: ["Python", "C++", "Java"],
    },
    {
      name: "Web Development",
      color: "from-purple-500 to-pink-500",
      skills: ["JavaScript", "React", "HTML/CSS"],
    },
    {
      name: "Backend & APIs",
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "APIs", "SQL"],
    },
    {
      name: "Data & ML",
      color: "from-orange-500 to-red-500",
      skills: ["SQL", "Firebase", "ML Basics"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for skill nodes
      gsap.fromTo(
        ".skill-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.05,
            from: "center",
          },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Entrance animation for category cards
      gsap.fromTo(
        ".category-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".categories-grid",
            start: "top 80%",
          },
        }
      );

      // Idle floating effect for tech nodes
      gsap.to(".skill-node", {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm mb-4">
            Digital Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit honed through projects, internships, and continuous learning.
          </p>
        </div>

        {/* Floating Skill Nodes Grid */}
        <div ref={nodesContainerRef} className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {skillNodes.map((node, idx) => (
              <div
                key={node.name}
                className="skill-node group relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-cyber-navy border border-cyber-border hover:border-cyber-cyan/50 transition-all hover:shadow-glow cursor-default">
                  <span className="text-cyber-cyan group-hover:scale-110 transition-transform">
                    {node.icon}
                  </span>
                  <span className="text-white font-medium">{node.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="categories-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="category-card group relative p-6 rounded-xl bg-cyber-navy border border-cyber-border hover:border-cyber-cyan/30 transition-all overflow-hidden"
            >
              {/* Hover background color flow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <h3 className="text-lg font-heading font-bold text-white mb-4">
                {cat.name}
              </h3>
              {/* Category tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 rounded-md bg-cyber-cyan/10 text-cyber-cyan text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {/* Hover bottom bar slider */}
              <div className="mt-4 h-1 bg-cyber-border rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${cat.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
