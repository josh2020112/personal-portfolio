"use client";

import { useState } from "react";

export default function About() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const featuredSkills = ["GCP", "Terraform", "Python", "SAP", "Jira"];

  const allOtherSkills = [
    "AWS",
    "Snowflake",
    "Java",
    "C#",
    "SQL",
    "HTML",
    "Power BI",
    "BigQuery",
    "Excel",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "Git",
    "GitHub",
    "Appian",
  ];

  const certifications = [
    "GCP Associate Cloud Engineer",
    "GCP Professional Data Engineer",
    "GCP Professional ML Engineer",
  ];

  const drives = [
    "Building with intent. Understanding the why behind every system.",
    "Bridging code and cloud. Connecting application logic with scalable infrastructure.",
    "Guiding teams to delivery. Turning ambiguous goals into shipped products.",
    "Continuous learning. Staying current with AI, cloud, and emerging engineering practices.",
  ];

  const visibleSkills = showAllSkills
    ? [...featuredSkills, ...allOtherSkills]
    : featuredSkills;

  return (
    <section
      id="about"
      className="px-6 sm:px-12 lg:px-24 py-20 max-w-7xl mx-auto"
    >
      <p className="text-xs tracking-widest text-accent font-medium mb-4">
        ABOUT
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-12 max-w-3xl">
        Where Cloud, AI, and User Impact Meet
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-5 text-foreground-muted leading-relaxed">
          <p>
            Hi, I&apos;m Joshua. I&apos;m a software and cloud engineer at KPMG.
            My journey started in consulting and program management, where I
            learned how to lead teams and understand what users actually need.
            Now I bring that background into engineering, building cloud
            infrastructure and AI systems that are clean, intentional, and
            built around real impact.
          </p>
          <p>
            I&apos;m GCP-certified across Cloud Engineer, Data Engineer, and
            Machine Learning Engineer. When I&apos;m not in the cloud,
            you&apos;ll find me exploring new tools, mentoring incoming
            students, and thinking through how cross-functional teams can ship
            better products. I believe the best engineers are also good
            translators between code, business, and people.
          </p>
          <p>
            Outside of code, I&apos;m a musician. I play viola, cello, and
            guitar. I&apos;m also a basketball regular and love trying new
            recipes, cooking for friends and family whenever I get the chance.
            These hobbies keep me curious and grounded, which I think makes me
            a better engineer.
          </p>
        </div>

        <div className="bg-background-alt border border-border rounded-2xl p-6 self-start">
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-accent"
              aria-hidden="true"
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
            <h3 className="font-medium text-foreground">What drives me</h3>
          </div>
          <ul className="space-y-3">
            {drives.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-foreground-muted leading-relaxed flex gap-2"
              >
                <span className="text-accent flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-accent">✦</span>
        <h3 className="font-medium text-foreground">
          Skills &amp; Technologies
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {visibleSkills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-3 rounded-xl bg-background-alt border border-border text-sm text-foreground text-center hover:border-accent hover:text-accent transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAllSkills(!showAllSkills)}
        className="text-sm text-accent font-medium hover:text-accent-hover transition-colors flex items-center gap-1 mb-12"
      >
        {showAllSkills ? "Show Less" : "Show More"}
        <span aria-hidden="true">{showAllSkills ? "▲" : "▼"}</span>
      </button>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-accent">🎓</span>
        <h3 className="font-medium text-foreground">Certifications</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {certifications.map((cert) => (
          <div
            key={cert}
            className="px-4 py-3 rounded-xl bg-background-alt border border-border text-sm text-foreground text-center hover:border-accent hover:text-accent transition-colors"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}