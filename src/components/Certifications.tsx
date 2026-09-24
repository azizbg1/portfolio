"use client";

import { Award, BarChart3, BrainCircuit, Cloud, Workflow } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    meta: "Issued May 2026 · Expires May 2027",
    icon: Cloud,
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    meta: "Issued Mar 2026 · Expires Mar 2027",
    icon: BarChart3,
  },
  {
    title: "Dataiku ML Practitioner",
    issuer: "Dataiku",
    meta: "Machine Learning",
    icon: BrainCircuit,
  },
  {
    title: "Dataiku Core Designer",
    issuer: "Dataiku",
    meta: "Data preparation & workflows",
    icon: Workflow,
  },
  {
    title: "PMI Project Management Ready™",
    issuer: "Project Management Institute",
    meta: "Issued Feb 2026 · Expires Feb 2031",
    icon: Award,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="container-shell">
        <p className="section-kicker">Certifications</p>
        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.035em] max-w-3xl">
            Continuous learning, validated.
          </h2>
          <p className="text-zinc-500 max-w-md">
            Certifications that reinforce my Data, AI, cloud and project-delivery background.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {certifications.map(({ title, issuer, meta, icon: Icon }) => (
            <div key={title} className="glass rounded-3xl p-6">
              <div className="h-11 w-11 rounded-2xl bg-white/[0.06] flex items-center justify-center">
                <Icon size={20} className="text-cyan-300" />
              </div>
              <h3 className="font-bold text-lg mt-5">{title}</h3>
              <p className="text-cyan-300 text-sm mt-2">{issuer}</p>
              <p className="text-zinc-500 text-sm mt-3">{meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
