"use client";

import { useState } from "react";

type Category = "AI" | "Cloud" | "Fullstack";

type Project = {
  name: string;
  tagline: string;
  description: string;
  category: Category;
  tech: string[];
  gradient: string;
  icon: "ai" | "cloud" | "fullstack";
};

const projects: Project[] = [
  {
    name: "PromptForge",
    tagline: "RAG-based document Q&A system",
    description:
      "Full-stack RAG application using LangChain, Pinecone, and OpenAI for enterprise document search and question answering. Deployed on GCP Cloud Run with Cloud Storage backend.",
    category: "AI",
    tech: ["Python", "LangChain", "Pinecone", "GCP", "Next.js"],
    gradient: "from-purple-400 via-pink-400 to-red-400",
    icon: "ai",
  },
  {
    name: "TerraGuard",
    tagline: "Automated GCP security posture scanner",
    description:
      "Terraform-deployed scanning tool that continuously audits GCP projects for IAM misconfigurations, public buckets, and unencrypted resources. Reports findings to a BigQuery dashboard.",
    category: "Cloud",
    tech: ["Terraform", "GCP", "Python", "BigQuery", "GitHub Actions"],
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    icon: "cloud",
  },
  {
    name: "TaskFlow",
    tagline: "Real-time team task management app",
    description:
      "Fullstack task management platform with real-time updates, role-based access control, and analytics. Built with Next.js, PostgreSQL, and WebSockets.",
    category: "Fullstack",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "AWS"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    icon: "fullstack",
  },
];

const filters: ("All" | Category)[] = ["All", "AI", "Cloud", "Fullstack"];

function CategoryIcon({ icon }: { icon: Project["icon"] }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "w-12 h-12 text-white",
    "aria-hidden": true,
  };

  if (icon === "ai") {
    return (
      <svg {...common}>
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg {...common}>
        <path d="M17.5 19a4.5 4.5 0 1 0-1.5-8.74A6 6 0 1 0 6.5 16" />
        <path d="M6.5 16h11" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="px-6 sm:px-8 lg:px-12 py-20 max-w-[1400px] mx-auto"
    >
      <p className="text-xs tracking-widest text-accent font-medium mb-4 text-center">
        PORTFOLIO
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-12 text-center">
        Featured Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-accent text-background-alt"
                : "bg-background-alt border border-border text-foreground-muted hover:border-accent hover:text-accent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <div
            key={project.name}
            className="bg-background-alt border border-border rounded-2xl overflow-hidden hover:border-accent transition-colors group"
          >
            <div
              className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <CategoryIcon icon={project.icon} />
            </div>

            <div className="p-6">
              <h3 className="font-medium text-lg text-foreground mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-accent mb-3">{project.tagline}</p>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-background border border-border text-xs text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="text-center text-foreground-muted mt-8">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}