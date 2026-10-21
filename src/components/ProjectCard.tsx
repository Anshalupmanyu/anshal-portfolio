"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60"
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400">
              <FolderGit2 className="h-4 w-4" />
            </span>
            <span className="font-mono text-xs text-zinc-500">{project.year}</span>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            <span>View Code</span>
            <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Title & Summary */}
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
          {project.summary}
        </p>
      </div>

      {/* Tech Stack Pills */}
      <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

