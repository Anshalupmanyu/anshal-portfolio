"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/data/portfolioData";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/Badge";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* ==================== 1. HERO / ABOUT SECTION ==================== */}
        <section id="about" className="py-20 sm:py-28 border-b border-zinc-900">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            {/* Current work status badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/70 px-3.5 py-1 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                Currently working at{" "}
                <strong className="font-semibold text-white">
                  {siteConfig.currentCompany}
                </strong>{" "}
                as{" "}
                <strong className="font-semibold text-white">
                  {siteConfig.currentTitle}
                </strong>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
              Hi, I&apos;m {siteConfig.name}.{" "}
              <span className="text-zinc-400 font-normal">
                {siteConfig.headline}
              </span>
            </h1>

            {/* Concise Bio */}
            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
              {siteConfig.aboutBio}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-14 pt-10 border-t border-zinc-900/80"
          >
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-5">
              <Layers className="h-3.5 w-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(siteConfig.skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4"
                >
                  <h3 className="text-xs font-semibold text-zinc-300 mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ==================== 2. EXPERIENCE SECTION ==================== */}
        <section id="experience" className="py-20 border-b border-zinc-900">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
              Experience
            </h2>
            <p className="mt-1.5 text-sm text-zinc-400">
              Production engineering roles and research internships across cloud orchestration and machine learning.
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-zinc-800 md:before:left-1/2 md:before:-translate-x-1/2">
            {siteConfig.experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="h-4 w-4 text-zinc-300" />
                </div>

                {/* Experience Card */}
                <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] rounded-xl border border-zinc-800/90 bg-zinc-900/30 p-6 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    {exp.current && <Badge variant="accent">Current</Badge>}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono mb-4">
                    <span className="text-zinc-300 font-sans font-medium">
                      {exp.company}
                    </span>
                    <span>/</span>
                    <span>{exp.period}</span>
                    <span>/</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2.5 text-sm text-zinc-400">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full bg-zinc-500 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Certifications Row */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/20 p-6">
              <div className="flex items-center gap-2.5 text-zinc-200 font-semibold text-sm mb-3">
                <GraduationCap className="h-4 w-4 text-zinc-400" />
                <span>Education</span>
              </div>
              <h4 className="text-sm font-medium text-zinc-100">
                {siteConfig.education.degree}
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                {siteConfig.education.institution}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span>{siteConfig.education.period}</span>
                <span>/</span>
                <span className="text-zinc-300">{siteConfig.education.score}</span>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/20 p-6">
              <div className="flex items-center gap-2.5 text-zinc-200 font-semibold text-sm mb-3">
                <Award className="h-4 w-4 text-zinc-400" />
                <span>Certifications</span>
              </div>
              <ul className="space-y-3">
                {siteConfig.certifications.map((cert) => (
                  <li key={cert.title} className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{cert.title}</p>
                      <p className="text-xs text-zinc-500">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 shrink-0">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ==================== 3. PROJECTS SECTION ==================== */}
        <section id="projects" className="py-20 border-b border-zinc-900">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
                Featured Engineering Projects
              </h2>
              <p className="mt-1.5 text-sm text-zinc-400">
                Scalable backend architectures, RAG microservices, and automated MLOps pipelines.
              </p>
            </div>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <span>View all repositories on GitHub</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* ==================== 4. CONTACT SECTION ==================== */}
        <section id="contact" className="py-20">
          <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/30 p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Left Column: Direct Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <Badge variant="accent" className="mb-4">
                    Available for Engineering Discussions
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                    Let&apos;s Connect
                  </h2>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    Whether you want to discuss Kubernetes infrastructure, backend systems engineering, or potential opportunities, I&apos;d love to hear from you.
                  </p>

                  {/* Location & Timezone */}
                  <div className="mt-6 flex items-center gap-2.5 text-xs text-zinc-400">
                    <MapPin className="h-4 w-4 text-zinc-500 shrink-0" />
                    <span>
                      Based in <strong className="text-zinc-200">{siteConfig.location}</strong> ({siteConfig.timezone})
                    </span>
                  </div>
                </div>

                {/* Social & Direct Links */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Direct Channels
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{siteConfig.email}</span>
                    </a>
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5 text-zinc-400" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      <Github className="h-3.5 w-3.5 text-zinc-400" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-6">
                <h3 className="text-sm font-semibold text-zinc-200 mb-4">
                  Send a Quick Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

