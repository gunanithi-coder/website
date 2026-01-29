"use client";
import Scene from "./components/Scene";
import { ExternalLink, Github, Mail, Terminal, Trophy } from "lucide-react";

const projects = [
  { 
    name: "Vajra-X", 
    desc: "Tactical situational intelligence dashboard for real-time field operations.", 
    tech: ["Next.js", "Tactical UI", "Intelligence Dash"],
    status: "Loop Hackathon Project",
    link: "https://github.com/gunanithi-coder/vajra-x-tactical-interface" 
  },
  { 
    name: "VoxCivic", 
    desc: "Voice-first AI governance platform enhancing public accessibility.", 
    tech: ["AI/ML", "Voice-First", "Governance"],
    status: "Active Development",
    link: "https://github.com/gunanithi-coder/voxcivic-new" 
  },
  { 
    name: "AirGuard AI", 
    desc: "Hybrid monitoring system using IoT and AI for air quality prediction.", 
    tech: ["IoT", "Python", "Environmental AI"],
    status: "National Submission",
    link: "https://github.com/gunanithi-coder/AirGuard-AI" 
  },
  { 
    name: "Nexus Logistics", 
    desc: "Secure verification system for supply chain end-to-end visibility.", 
    tech: ["Logistics", "Security", "React"],
    status: "Completed",
    link: "https://github.com/gunanithi-coder/Nexus-Logistics" 
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white p-6 md:p-20 font-sans">
      <Scene />
      
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
        <h1 className="text-xl font-mono tracking-widest font-bold">GUNANITHI::DEV</h1>
        <div className="flex gap-6">
          <a href="mailto:gunanithie13@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://github.com/gunanithi-coder" target="_blank" className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs mb-6">
          <Trophy size={12} /> IndiaAI Sprint Mini-Hackathon Finalist
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
          ARCHITECTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            INTELLIGENT SYSTEMS.
          </span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Full-stack developer focused on AI governance, tactical interfaces, and logistics automation. 
          Currently building solutions for national-level challenges.
        </p>
      </section>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="group relative p-8 border border-white/10 bg-slate-900/40 backdrop-blur-xl rounded-3xl hover:border-blue-500/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.name}</h3>
              <span className="text-[10px] uppercase tracking-tighter bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">
                {project.status}
              </span>
            </div>
            <p className="text-slate-400 mb-6 text-sm">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-bold text-blue-400 tracking-widest hover:gap-3 transition-all">
              EXECUTE_SOURCE_CODE <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Terminal Footer */}
      <section className="mt-24 p-8 border border-blue-500/20 bg-black/40 backdrop-blur-md rounded-2xl font-mono text-sm">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <p className="text-blue-400 mb-2 font-bold">{`> system.fetchStatus()`}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
          <div>• LEETCODE: 500+ SOLVED</div>
          <div>• HACKATHONS: 12+ ENTRIES</div>
          <div>• CONTACT: gunanithie13@gmail.com</div>
        </div>
      </section>
    </main>
  );
}