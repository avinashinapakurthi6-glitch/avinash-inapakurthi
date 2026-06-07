import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase, Award, UserCheck } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon, suffix = "" }) => {
  const [count, setCount] = useState("0");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const targetVal = parseFloat(value);
    const hasDecimal = value.includes(".");

    const trigger = ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => {
        if (animated.current) return;
        animated.current = true;

        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const updateCount = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = targetVal * easeProgress;

          if (hasDecimal) {
            setCount(currentVal.toFixed(1));
          } else {
            setCount(Math.floor(currentVal).toString());
          }

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            setCount(value);
          }
        };

        updateCount();
      },
    });

    return () => trigger.kill();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="stat-card group relative p-6 rounded-xl bg-cyber-navy border border-cyber-border hover:border-cyber-cyan/50 transition-all hover:shadow-glow"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-heading font-bold text-white">
            {count}
            <span className="text-cyber-cyan">{suffix}</span>
          </div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image entrance
      gsap.fromTo(
        imageContainerRef.current,
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        {
          clipPath: "inset(0% 0 0 0)",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Bio text entrance
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Stats card staggering entrance
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
          },
        }
      );

      // Parallax effect on image
      gsap.to(imageContainerRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "8.7", label: "CGPA", icon: <GraduationCap className="w-6 h-6" />, suffix: "" },
    { value: "5", label: "Projects", icon: <Briefcase className="w-6 h-6" />, suffix: "" },
    { value: "8", label: "Certifications", icon: <Award className="w-6 h-6" />, suffix: "+" },
    { value: "3", label: "Internships", icon: <UserCheck className="w-6 h-6" />, suffix: "" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            The Architect Behind <span className="text-gradient">The Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel: Cyberpunk image setup */}
          <div ref={imageContainerRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="About Avinash"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-void/80 via-transparent to-transparent" />
              <div className="absolute inset-0 scanline opacity-30" />
            </div>
            {/* Cyber borders */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyber-cyan/50 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyber-cyan/50 pointer-events-none" />
          </div>

          {/* Right Panel: Glassmorphism text bio & stats */}
          <div ref={textContainerRef}>
            <div className="glass rounded-2xl p-8 cyber-border mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Currently pursuing my{" "}
                <span className="text-cyber-cyan font-semibold">
                  B.Tech in CSE (Data Science)
                </span>{" "}
                at MVGR College of Engineering. I operate at the intersection of data intelligence and web architecture.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                My passion lies in creating systems that not only function flawlessly but learn and adapt. From emergency blood donation networks to hospital availability systems, I build tools that matter.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With expertise in <span className="text-white">Python</span>,{" "}
                <span className="text-white">React</span>, and{" "}
                <span className="text-white">Machine Learning</span>, I transform complex problems into elegant, scalable solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
