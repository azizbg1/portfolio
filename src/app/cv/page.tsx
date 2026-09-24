"use client";

import { ArrowLeft, ExternalLink, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container-shell max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="glass rounded-[2rem] p-7 md:p-10 mt-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <p className="section-kicker">Curriculum Vitae</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.035em] mt-2">Aziz Ben Guirat</h1>
              <p className="text-xl text-cyan-300 mt-3">Full-Stack Developer · Data & AI</p>
              <p className="text-zinc-400 mt-4 max-w-2xl leading-7">
                Software engineer and Full-Stack Developer with experience in business applications,
                REST APIs and AI-powered document processing, from requirements analysis to deployment.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <span>Paris, France</span>
              <a href="mailto:benguirataziz75@gmail.com" className="hover:text-white inline-flex items-center gap-2">
                <Mail size={15} /> benguirataziz75@gmail.com
              </a>
              <a href="https://github.com/azizbg1" target="_blank" className="hover:text-white inline-flex items-center gap-2">
                <Github size={15} /> github.com/azizbg1
              </a>
              <a href="https://portfolio-indol-five-15.vercel.app/" className="hover:text-white inline-flex items-center gap-2">
                <ExternalLink size={15} /> Portfolio
              </a>
            </div>
          </div>

          <section className="py-8 border-b border-white/10">
            <h2 className="text-xl font-black">Core Skills</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-5 text-zinc-400 leading-7">
              <p><strong className="text-white">Development:</strong> Python, FastAPI, PHP, Symfony 6, Java, Spring Boot, JavaScript, TypeScript, React, Angular, Next.js, NestJS.</p>
              <p><strong className="text-white">Data & AI:</strong> OCR, spaCy, scikit-learn, Isolation Forest, RAG, LangChain, LangGraph, PostgreSQL, MySQL, MongoDB, MinIO, Docker, Git, Postman.</p>
            </div>
          </section>

          <section className="py-8 border-b border-white/10">
            <h2 className="text-xl font-black">Professional Experience</h2>
            <div className="mt-6 space-y-7">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-bold">Full-Stack Developer & Data Analyst · Nomad Paris / Groupe PI2C / France Clean</h3>
                  <span className="text-sm text-zinc-500">Dec 2025 — Aug 2026</span>
                </div>
                <p className="text-zinc-400 mt-2 leading-7">Internal applications with Symfony 6, API Platform, Twig, Tailwind and PostgreSQL; HR planning modules, OCR/extraction workflows, employee PWA and IT support module.</p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-bold">Java Backend Developer · Rogue Wave</h3>
                  <span className="text-sm text-zinc-500">Aug 2024 — Mar 2025</span>
                </div>
                <p className="text-zinc-400 mt-2 leading-7">Backend development in Java, APIs and application logic in a professional software environment.</p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-bold">Full-Stack Developer · Arab Tunisian Bank — Final-Year Project</h3>
                  <span className="text-sm text-zinc-500">Mar — Aug 2025</span>
                </div>
                <p className="text-zinc-400 mt-2 leading-7">Banking queue-management platform with Java/Spring Boot and React, including tickets, appointments, complaints, dashboards, authentication and real-time notifications.</p>
              </div>
            </div>
          </section>

          <section className="py-8 border-b border-white/10">
            <h2 className="text-xl font-black">Selected Projects</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold">FinDoc Analyzer AI</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-6">OCR, classification, spaCy NER, Isolation Forest, summarization and RAG.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold">MedSecure</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-6">Healthcare platform with patient/doctor spaces, AI-assisted summaries and secure architecture.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold">ATB SmartQueue</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-6">Java/Spring Boot + React banking workflow with JWT and WebSocket.</p>
              </div>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-xl font-black">Education</h2>
            <div className="mt-5 space-y-3 text-zinc-400">
              <p><strong className="text-white">M2 Data Science in Business</strong> · PST&B, Paris · 2025–2026</p>
              <p><strong className="text-white">Computer Engineering Degree</strong> · ESPRIT, Tunisia · 5-year engineering curriculum</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
