import React from "react";
import { Terminal, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-cyber-border overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-navy/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-cyan" />
              <span className="font-heading text-lg font-bold text-white tracking-wider">
                AVINASH<span className="text-cyber-cyan">.DEV</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Data Science Engineer & Full Stack Developer
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-400 hover:text-cyber-cyan text-sm transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-cyber-navy border border-cyber-border text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:shadow-glow transition-all cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-border/40 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {currentYear} AVINASH.DEV. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center sm:text-right font-mono">
            SECURE ACCESS // LEVEL-01 CLEARANCE
          </p>
        </div>
      </div>
    </footer>
  );
};
