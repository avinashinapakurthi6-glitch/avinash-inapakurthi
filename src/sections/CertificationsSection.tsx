import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Sparkles, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl: string;
}

interface Achievement {
  title: string;
  description: string;
  year: string;
}

export const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const certifications: Certification[] = [
    {
      id: 4,
      title: "Data Analytics Internship Certificate",
      issuer: "Thiranex (Skill Development & Future Tech)",
      date: "May 2026",
      description: "Certificate of Achievement for successfully completing the Data Analytics internship program. Verified Certificate ID: THX-MAY226-681.",
      skills: ["Data Analytics", "Python", "Data Cleaning", "Data Visualization"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 5,
      title: "Introduction to MS Excel",
      issuer: "Simplilearn | SkillUp (Powered by Microsoft)",
      date: "20 May 2026",
      description: "Successfully completed the online course Introduction to MS Excel. Verified Certificate Code: 10247956.",
      skills: ["MS Excel", "Data Analysis", "Spreadsheets", "Data Organization"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 6,
      title: "Microsoft Excel Using AI Workshop",
      issuer: "OfficeMaster",
      date: "17 May 2026",
      description: "Successfully completed the Microsoft Excel Using AI workshop, covering 200+ Excel formulas, macros/VBA, and dashboard generation with AI assistance.",
      skills: ["AI in Excel", "Excel Formulas", "Macros & VBA", "Dashboard Creation"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 7,
      title: "AI Tools and ChatGPT Workshop",
      issuer: "be10x",
      date: "29 Mar 2026",
      description: "Successfully completed the AI tools and ChatGPT workshop, gaining proficiency in creating AI presentations, automated data analysis, and AI-assisted coding and debugging.",
      skills: ["ChatGPT", "AI Tools", "AI Coding", "Data Analysis"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 8,
      title: "AWS AI/ML Certification",
      issuer: "Amazon Web Services (AWS)",
      date: "2026",
      description: "Advanced credentials validating machine learning, neural networks, and AI architecture engineering on AWS cloud platforms.",
      skills: ["AWS", "Machine Learning", "AI Architecture", "Cloud Computing"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 1,
      title: "Full Stack Developer Course",
      issuer: "Certification Platform",
      date: "2025",
      description: "Comprehensive training in modern full-stack development covering frontend, backend, and deployment.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 2,
      title: "ML Foundations",
      issuer: "IIT Bombay",
      date: "2025",
      description: "Foundational course in Machine Learning covering supervised and unsupervised learning algorithms.",
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
    {
      id: 3,
      title: "Generative AI Certification",
      issuer: "Techfest",
      date: "2025",
      description: "Advanced certification in Generative AI technologies and applications.",
      skills: ["AI/ML", "Neural Networks", "Deep Learning"],
      credentialUrl: "https://www.linkedin.com/in/avinash-inapakurthi-1a3871316/",
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Google Developers Hackathon",
      description: "Finalist - Certificate of Excellence",
      year: "2026",
    },
    {
      title: "Academic Excellence",
      description: "CGPA 8.7 in B.Tech CSE (Data Science)",
      year: "2024-2028",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Certification cards animation
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".certs-grid",
            start: "top 80%",
          },
        }
      );

      // Achievements animation
      gsap.fromTo(
        ".achievement-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyber-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyber-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-sm mb-4">
            Security Clearances
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Verified credentials and awards in machine learning and full-stack architecture.
          </p>
        </div>

        <div className="certs-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card block glass rounded-xl p-6 border border-cyber-border hover:border-cyber-cyan/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <h4 className="text-sm font-heading text-cyber-cyan mb-3">
                  {cert.issuer}
                </h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-gray-400 bg-cyber-navy px-2 py-1 rounded border border-cyber-border/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Trophy className="w-6 h-6 text-cyber-cyan" />
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">
              System Honors
            </h3>
          </div>

          <div className="achievements-grid grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((ach) => (
              <div
                key={ach.title}
                className="achievement-card glass rounded-xl p-6 border border-cyber-border hover:border-cyber-cyan/30 hover:shadow-glow transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{ach.description}</p>
                  <span className="inline-block mt-2 text-xs font-mono text-cyber-cyan">
                    {ach.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
