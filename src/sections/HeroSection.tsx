import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, ArrowDown } from "lucide-react";

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

const Linkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Data Science Engineer & Full Stack Developer";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-greeting",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-name",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.0, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-socials",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 1.2, ease: "power3.out" }
      );
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, rotateY: 90 },
          { opacity: 1, rotateY: 0, duration: 1.2, delay: 0.6, ease: "power3.out" }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse tilt effect on card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      const midY = rect.top + rect.height / 2;
      const rotX = (e.clientY - midY) / 30;
      const rotY = (midX - e.clientX) / 30;

      gsap.to(card, {
        rotateX: Math.max(-15, Math.min(15, rotX)),
        rotateY: Math.max(-15, Math.min(15, rotY)),
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSec = document.querySelector("#projects");
    if (projectsSec) {
      projectsSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Glow background circles */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyber-cyan/20 rounded-full animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 border border-cyber-cyan/10 rounded-full animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="hero-greeting mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm">
                <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                Hello, I'm
              </span>
            </div>

            <h1 className="hero-name text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-none">
              Avinash
              <br />
              <span className="text-gradient">Inapakurthi</span>
            </h1>

            <div className="hero-description mb-6">
              <p className="text-xl sm:text-2xl text-gray-300 font-heading">
                {typedText}
                <span
                  className={`inline-block w-0.5 h-6 bg-cyber-cyan ml-1 transition-opacity duration-100 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </p>
            </div>

            <p className="hero-description text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              I transform complex data into intelligent solutions and build scalable digital ecosystems that make a real impact.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 rounded-lg bg-cyber-cyan text-cyber-void font-bold hover:bg-cyber-cyan/90 transition-all cursor-pointer shadow-glow hover:shadow-glow-lg text-center"
              >
                View Work
              </button>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-transparent border border-cyber-cyan/30 text-white font-bold hover:bg-cyber-cyan/10 transition-all cursor-pointer text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/avinashinapakurthi6-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-cyber-navy border border-cyber-border text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/avinash-inapakurthi-1a3871316/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-cyber-navy border border-cyber-border text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:avinashinapakurthi31@gmail.com"
                className="p-3 rounded-lg bg-cyber-navy border border-cyber-border text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Picture Card */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              ref={cardRef}
              className="relative w-56 h-72 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-[2rem] overflow-hidden cyber-border"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src="/images/profile.jpg"
                alt="Avinash Inapakurthi"
                className="w-full h-full object-cover rounded-[2rem] border-2 border-cyber-cyan/30"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(0, 240, 255, 0.3))",
                  transform: "translateZ(20px)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-void/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 pointer-events-none">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};
