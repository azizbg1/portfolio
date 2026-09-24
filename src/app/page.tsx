"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
  Code2,
  Database,
  BrainCircuit,
  ServerCog,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  Layers3,
} from "lucide-react";

const projects = [
  {
    title: "FinDoc Analyzer AI",
    subtitle: "Financial documents, understood by AI.",
    description:
      "An end-to-end platform for OCR, document classification, information extraction, anomaly detection, summarization and RAG-based document Q&A.",
    stack: ["React", "FastAPI", "Python", "PostgreSQL", "ChromaDB", "LangGraph", "Docker"],
    href: "https://github.com/azizbg1/FinDoc-Analyser",
    label: "AI + Full Stack",
  },
  {
    title: "MedSecure",
    subtitle: "A smarter, safer medical consultation workflow.",
    description:
      "A healthcare platform with patient and doctor spaces, pre-consultation flows, AI-assisted summaries, risk indicators and a security-first architecture.",
    stack: ["Next.js", "React", "TypeScript", "Keycloak", "PostgreSQL", "Redis", "MinIO"],
    href: "https://github.com/azizbg1/MedSecure-Platform",
    label: "Product + Security",
  },
  {
    title: "ATB SmartQueue",
    subtitle: "Digital queue management for banking services.",
    description:
      "A full-stack banking platform built around queue management, real-time updates, secure authentication and role-based experiences.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "JWT", "WebSocket"],
    href: "https://github.com/azizbg1/Backend_gestion-file",
    label: "Java Full Stack",
  },
];

const stack = [
  { icon: Code2, title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Angular"] },
  { icon: ServerCog, title: "Backend", items: ["Java", "Spring Boot", "Python", "FastAPI", "PHP", "Symfony"] },
  { icon: Database, title: "Data & Infra", items: ["PostgreSQL", "MySQL", "Docker", "Redis", "MinIO", "REST APIs"] },
  { icon: BrainCircuit, title: "AI & Automation", items: ["RAG", "LangChain", "LangGraph", "spaCy", "ML", "n8n"] },
];

const experience = [
  {
    company: "Nomad Paris / France Clean",
    role: "Full-Stack Developer — CDD",
    period: "2025 — 2026",
    description:
      "Built internal web applications, showcase websites and automation workflows. Worked with Symfony, API Platform, React/Vite, Tailwind, Docker and n8n.",
  },
  {
    company: "ATB Bank",
    role: "Full-Stack Developer — Final-Year Internship",
    period: "Mar — Aug 2025",
    description:
      "Designed and developed a banking queue-management platform with Java/Spring Boot and React, including secure authentication and real-time workflows.",
  },
  {
    company: "Rogue Wave",
    role: "Java Backend Developer — CDD",
    period: "Aug 2024 — Mar 2025",
    description:
      "Worked on backend development in Java, APIs and application logic in a professional software environment.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="hero-orb absolute h-64 w-64 rounded-full bg-cyan-400/15 left-[8%] top-[18%]" />
        <div className="hero-orb absolute h-72 w-72 rounded-full bg-violet-500/15 right-[7%] bottom-[10%]" />

        <nav className="absolute top-0 left-0 right-0 z-20">
          <div className="container-shell flex items-center justify-between py-7">
            <a href="#" className="font-black tracking-tight text-lg">
              AZIZ<span className="text-cyan-300">.</span>
            </a>
            <div className="hidden md:flex gap-7 text-sm text-zinc-400">
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#experience" className="hover:text-white transition">Experience</a>
              <a href="#education" className="hover:text-white transition">Education</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </nav>

        <div className="container-shell relative z-10 py-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 mb-7">
              <Sparkles size={14} className="text-cyan-300" />
              Full-Stack Developer · Paris
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black leading-[0.96] tracking-[-0.045em]">
              I build digital products
              <span className="gradient-text"> from interface to intelligence.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-zinc-400">
              I’m Aziz Ben Guirat, a Full-Stack Developer with a 5-year engineering background at ESPRIT and an M2 in Data Science in Business. I build scalable web applications, secure backends and AI-powered products.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white text-black px-6 py-3.5 font-semibold inline-flex items-center gap-2 hover:scale-[1.03] transition"
              >
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a
                href="https://github.com/azizbg1"
                target="_blank"
                className="rounded-full border border-white/15 px-6 py-3.5 font-semibold inline-flex items-center gap-2 hover:bg-white/[0.06] transition"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </FadeIn>

          <div className="mt-20 grid sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              ["Full Stack", "Frontend → Backend"],
              ["Data & AI", "ML · RAG · NLP"],
              ["Engineering", "5 years at ESPRIT"],
            ].map(([a, b], i) => (
              <FadeIn key={a} delay={0.1 * i}>
                <div className="glass rounded-2xl px-5 py-4">
                  <p className="font-bold">{a}</p>
                  <p className="text-sm text-zinc-500 mt-1">{b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-28">
        <div className="container-shell">
          <FadeIn>
            <p className="section-kicker">Selected work</p>
            <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.035em] max-w-3xl">
                Projects built to solve real problems.
              </h2>
              <p className="text-zinc-500 max-w-md">
                Full-stack products across finance, healthcare and intelligent document processing.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.08}>
                <a
                  href={project.href}
                  target="_blank"
                  className="project-card glass block rounded-3xl p-7 h-full"
                >
                  <div className="flex items-center justify-between">
                    <span className="pill">{project.label}</span>
                    <ArrowUpRight size={20} className="text-zinc-500" />
                  </div>
                  <h3 className="text-2xl font-black mt-8">{project.title}</h3>
                  <p className="text-cyan-300 mt-2 text-sm">{project.subtitle}</p>
                  <p className="text-zinc-400 leading-7 mt-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-7">
                    {project.stack.map((item) => <span key={item} className="pill">{item}</span>)}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell">
          <FadeIn>
            <p className="section-kicker">Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.035em] mt-3">One developer. End-to-end.</h2>
          </FadeIn>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {stack.map((group, i) => {
              const Icon = group.icon;
              return (
                <FadeIn key={group.title} delay={i * 0.06}>
                  <div className="glass rounded-3xl p-7">
                    <div className="h-11 w-11 rounded-2xl bg-white/[0.06] flex items-center justify-center">
                      <Icon size={21} className="text-cyan-300" />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => <span key={item} className="pill">{item}</span>)}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-28">
        <div className="container-shell grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
          <FadeIn>
            <p className="section-kicker">Experience</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.035em] mt-3">
              From engineering projects to production work.
            </h2>
            <p className="text-zinc-500 leading-7 mt-6 max-w-md">
              My experience spans backend development, full-stack business applications, automation and AI-driven products.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {experience.map((item, i) => (
              <FadeIn key={item.company} delay={i * 0.07}>
                <div className="glass rounded-3xl p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <p className="text-sm text-cyan-300">{item.company}</p>
                      <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                    </div>
                    <span className="text-xs text-zinc-500">{item.period}</span>
                  </div>
                  <p className="text-zinc-400 leading-7 mt-5">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-28">
        <div className="container-shell">
          <FadeIn>
            <p className="section-kicker">Education</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.035em] mt-3">Engineering foundation. Data specialization.</h2>
          </FadeIn>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="glass rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-cyan-300" />
                  <span className="text-sm text-zinc-500">Tunisia · 5-year engineering curriculum</span>
                </div>
                <h3 className="text-3xl font-black mt-6">ESPRIT</h3>
                <p className="text-zinc-300 mt-2">Engineering curriculum in software development and computer science.</p>
                <p className="text-zinc-500 leading-7 mt-5">
                  Five years of engineering studies building a strong foundation in software architecture, backend development, databases, web technologies and applied projects.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="glass rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3">
                  <Layers3 className="text-violet-300" />
                  <span className="text-sm text-zinc-500">Paris · Master 2</span>
                </div>
                <h3 className="text-3xl font-black mt-6">M2 Data Science in Business</h3>
                <p className="text-zinc-300 mt-2">Advanced specialization in data, machine learning and AI.</p>
                <p className="text-zinc-500 leading-7 mt-5">
                  Focused on practical data science, machine learning, NLP, intelligent systems and business-oriented AI applications.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28">
        <div className="container-shell">
          <FadeIn>
            <div className="glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <p className="section-kicker">Contact</p>
                <h2 className="text-4xl md:text-6xl font-black tracking-[-0.035em] mt-3">
                  Let’s build something worth shipping.
                </h2>
                <p className="text-zinc-400 leading-7 mt-6 max-w-xl">
                  I’m open to full-stack opportunities, backend-heavy roles and products where web engineering meets data and AI.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="mailto:benguirataziz75@gmail.com"
                    className="rounded-full bg-white text-black px-6 py-3.5 font-semibold inline-flex items-center gap-2"
                  >
                    <Mail size={17} /> Email me
                  </a>
                  <a
                    href="https://github.com/azizbg1"
                    target="_blank"
                    className="rounded-full border border-white/15 px-6 py-3.5 font-semibold inline-flex items-center gap-2"
                  >
                    <Github size={17} /> GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mt-8">
                  <MapPin size={15} /> Paris, France
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="pb-10">
        <div className="container-shell flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-zinc-600">
          <p>© 2026 Aziz Ben Guirat</p>
          <p>Full-Stack Developer · Data & AI</p>
        </div>
      </footer>
    </main>
  );
}
