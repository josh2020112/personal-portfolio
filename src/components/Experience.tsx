"use client";

import { useState } from "react";

type Role = {
  company: string;
  title: string;
  type: "Full-time" | "Internship";
  dates: string;
  location: string;
  skills: string[];
  bullets: string[];
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const roles: Role[] = [
    {
      company: "KPMG",
      title: "Software / Cloud Engineer",
      type: "Full-time",
      dates: "August 2025 – Present",
      location: "McLean, VA",
      skills: ["Terraform", "GCP", "CI/CD", "Python", "Machine Learning", "Git"],
      bullets: [
        "Automated Workload Identity Federation setup using Terraform, enabling secure GitHub Actions to GCP authentication without service account keys.",
        "Implemented GKE backup functionality via Terraform, improving cluster resiliency and recovery capability.",
        "Built a BigQuery module for consistent dataset and resource provisioning across the team.",
      ],
    },
    {
      company: "Hewlett Packard Enterprise",
      title: "Hybrid Cloud Program Manager",
      type: "Internship",
      dates: "May 2025 – July 2025",
      location: "Spring, TX",
      skills: ["Project Management", "Jira", "Structure", "Cloud", "VMs", "Agile"],
      bullets: [
        "Led the technical integration of Zerto's software package post-acquisition, mapping pre and post-acquisition workflows for senior leadership.",
        "Managed project health KPIs in Jira, aligning engineering, finance, and supply chain teams to protect $5M+ in annual revenue.",
        "Developed an AI-driven anomaly detection prototype for sales quotes, reducing manual rework by 20%.",
      ],
    },
    {
      company: "SLB",
      title: "Digital Talent Academy",
      type: "Internship",
      dates: "May 2024 – May 2025",
      location: "Houston, TX",
      skills: ["Power Automate", "Power BI", "Change Management", "Presentation"],
      bullets: [
        "Replaced Excel-based tracking with a centralized Power BI semantic model, automating pipelines from SAP SuccessFactors.",
        "Led a technical workshop for 50+ stakeholders, achieving 90% adoption and a 15% increase in promotion efficiency.",
      ],
    },
    {
      company: "KPMG",
      title: "Technology Enablement",
      type: "Internship",
      dates: "June 2023 – August 2023",
      location: "McLean, VA",
      skills: ["PowerPoint", "Stakeholder Management", "Tableau", "Appian"],
      bullets: [
        "Managed a 6-week technical discovery sprint for a Tableau-based KPI tracking system, distilling fragmented client data into prioritized metrics.",
        "Designed automated compliance workflows in Appian, reducing processing time by 30%.",
      ],
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="experience"
      className="px-6 sm:px-8 lg:px-12 py-20 max-w-[1400px] mx-auto"
    >
      <p className="text-xs tracking-widest text-accent font-medium mb-4">
        EXPERIENCE
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
        From Strategy to Systems
      </h2>
      <p className="text-foreground-muted mb-12 max-w-2xl leading-relaxed">
        From consulting to cloud engineering, here&apos;s how I&apos;ve grown
        across teams, tools, and technologies.
      </p>

      <div className="space-y-4">
        {roles.map((role, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="bg-background-alt border border-border rounded-2xl overflow-hidden transition-all"
            >
              <div className="px-8 py-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-light text-xl text-foreground tracking-tight">
                      {role.title}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                        role.type === "Full-time"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {role.type}
                    </span>
                  </div>
                  <div className="text-xs text-foreground-muted text-left sm:text-right leading-relaxed">
                    <p>{role.dates}</p>
                    <p>{role.location}</p>
                  </div>
                </div>

                <p className="font-semibold text-foreground mb-4">
                  {role.company}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-background border border-border text-xs text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(idx)}
                  className="text-sm text-accent font-medium hover:text-accent-hover transition-colors flex items-center gap-1"
                >
                  {isExpanded ? "Hide details" : "View details"}
                  <span aria-hidden="true">{isExpanded ? "▲" : "▼"}</span>
                </button>

                {isExpanded && (
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {role.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-sm text-foreground-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-accent flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}