import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

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


gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-info-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-card",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitStatus("submitting");

    // Simulate Transmission send
    setTimeout(() => {
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });

      // Reset back to idle after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "avinashinapakurthi31@gmail.com",
      href: "mailto:avinashinapakurthi31@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7702591626",
      href: "tel:+917702591626",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Vizianagaram, Andhra Pradesh, India",
      href: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm mb-4">
            Initiate Transmission
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate or need help building smart web ecosystems? Send a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="contact-info-card block glass rounded-xl p-6 border border-cyber-border hover:border-cyber-cyan/40 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-white font-medium text-base break-all">
                      {info.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Panel */}
            <div className="contact-info-card glass rounded-xl p-6 border border-cyber-border flex justify-around items-center">
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

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="contact-form-card glass rounded-2xl p-8 sm:p-10 border border-cyber-border hover:border-cyber-cyan/20 transition-all duration-300 space-y-6 cyber-border"
            >
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  disabled={submitStatus !== "idle"}
                  className="w-full px-4 py-3 rounded-lg bg-cyber-navy border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  disabled={submitStatus !== "idle"}
                  className="w-full px-4 py-3 rounded-lg bg-cyber-navy border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={submitStatus !== "idle"}
                  className="w-full px-4 py-3 rounded-lg bg-cyber-navy border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors resize-none"
                  placeholder="Enter transmission data..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus !== "idle"}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all cursor-pointer ${
                  submitStatus === "idle"
                    ? "bg-cyber-cyan text-cyber-void hover:bg-cyber-cyan/90 shadow-glow hover:shadow-glow-lg"
                    : submitStatus === "submitting"
                    ? "bg-cyber-navy border border-cyber-cyan/30 text-cyber-cyan"
                    : "bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                }`}
              >
                {submitStatus === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
                {submitStatus === "submitting" && (
                  <>
                    <span>Sending...</span>
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                )}
                {submitStatus === "success" && (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
