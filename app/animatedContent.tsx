'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0, 0, 0.2, 1] 
    } 
  },
};

export default function AnimatedContent({
  skills,
}: {
  skills: { name: string; level?: string }[];
}) {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 space-y-16">
      
      {/* High-Impact Hero / About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} 
        id="about" 
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-28"
      >
        {/* Left Column: Headline, Bio & Value Metrics */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
            Fullstack Developer & Product Strategy Specialist
          </div>

          {/* High Impact Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">High-Performance Systems</span> with Product-Minded Execution
          </h1>

          {/* Dynamic Bio Summary */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Senior Fullstack Developer with <strong className="text-white font-semibold">5+ years of engineering experience</strong> across fintech, media, and enterprise software ecosystems (ex-DANA & ex-RCTI+). Expert in end-to-end web architecture (React, Next.js, Laravel, Node.js), API performance optimization, QA automation, and technical delivery aligned with business objectives.
          </p>

          {/* Value Highlights Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="space-y-0.5">
              <p className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">5+ Yrs</p>
              <p className="text-[11px] text-slate-400 font-medium">Software Engineering</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono tracking-tight">Enterprise</p>
              <p className="text-[11px] text-slate-400 font-medium">High-Availability APIs</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">99%+</p>
              <p className="text-[11px] text-slate-400 font-medium">Release Quality & SLA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Avatar Profile */}
        <div className="lg:col-span-4 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl border-2 border-indigo-500/40 bg-slate-800 overflow-hidden shadow-2xl relative cursor-pointer group shadow-indigo-500/20"
          >
            <Image 
              src="/profile.jpg" 
              alt="Joshua Surya Ananta Sitanggang" 
              fill
              priority
              sizes="(max-width: 768px) 240px, 288px"
              className="object-cover object-[55%_60%] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111319]/80 via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Skills & Tech Stack Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        id="skills" 
        className="space-y-4 scroll-mt-28"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">CORE TECH STACK & COMPETENCIES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 text-xs">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 6, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="flex justify-between items-center py-2 px-3 rounded-lg border border-slate-800/40 bg-slate-950/40 transition-colors cursor-default"
            >
              <span className="text-slate-200 font-semibold">{skill.name}</span>
              {skill.level && <span className="text-indigo-400 font-mono text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">{skill.level}</span>}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section - High Impact Career Timeline */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} 
        id="experience" 
        className="space-y-6 pt-10 border-t border-slate-800/80 scroll-mt-28"
      >
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">CAREER TIMELINE</h2>
            <p className="text-xs text-slate-400 mt-1">Proven track record in fullstack development, QA automation, and product strategy.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PT Super Andalas Steel */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-xl space-y-4 transition-all shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[11px] text-indigo-400 font-bold uppercase tracking-wider">Fullstack Developer</span>
                  <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">PT Super Andalas Steel</h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full shrink-0 font-medium">
                  Aug 2026 - Present
                </span>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>Architecting scalable web platforms utilizing React, TypeScript, Laravel, and Tailwind CSS.</li>
                <li>Engineering high-throughput RESTful APIs and database schemas to optimize core business operations.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">React</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">TypeScript</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Laravel</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Tailwind CSS</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">REST API</span>
            </div>
          </motion.div>

          {/* RCTI+ */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-xl space-y-4 transition-all shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[11px] text-indigo-400 font-bold uppercase tracking-wider">Product Owner</span>
                  <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">RCTI+</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full shrink-0">
                  Oct 2024 - Mar 2026
                </span>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>Spearheaded end-to-end product roadmaps and backlog prioritization in fast-paced Agile/Scrum sprints.</li>
                <li>Cross-functionally aligned engineering and design teams to launch high-impact features and boost adoption.</li>
                <li>Utilized product analytics to optimize user engagement and strategic feature positioning.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Product Strategy</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Agile/Scrum</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Feature Adoption</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Analytics</span>
            </div>
          </motion.div>

          {/* DANA - QA */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-xl space-y-4 transition-all shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[11px] text-indigo-400 font-bold uppercase tracking-wider">Quality Assurance Engineer</span>
                  <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">DANA Indonesia</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full shrink-0">
                  Jan 2024 - Aug 2024
                </span>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>Executed comprehensive functional & regression testing across mobile platforms to maintain 99%+ stability.</li>
                <li>Designed automated test suites using Selenium to significantly accelerate release deployment cycles.</li>
                <li>Collaborated directly with engineering teams to debug, isolate, and eliminate critical software defects.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Selenium</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Automated Testing</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Regression QA</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Mobile Stability</span>
            </div>
          </motion.div>

          {/* DANA - Web Dev */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-xl space-y-4 transition-all shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[11px] text-indigo-400 font-bold uppercase tracking-wider">Software Developer (Web)</span>
                  <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">DANA Indonesia</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full shrink-0">
                  Sep 2019 - Dec 2023
                </span>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>Engineered high-availability web features serving large-scale fintech platforms using React.js and Node.js.</li>
                <li>Integrated complex RESTful APIs to reduce page load latency and boost client responsiveness.</li>
                <li>Maintained clean, scalable, and fully tested codebases within high-velocity Agile development cycles.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">React.js</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Node.js</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">RESTful APIs</span>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">Agile Sprints</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} 
        className="space-y-4 border-t border-slate-800/80 pt-10"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">EDUCATION</h2>
        <motion.div 
          whileHover={{ borderColor: 'rgba(99, 102, 241, 0.4)' }}
          className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex justify-between items-center text-xs transition-colors"
        >
          <div>
            <p className="font-bold text-white text-sm">BACHELOR OF ENGINEERING IN INFORMATICS</p>
            <p className="text-slate-400 mt-0.5">Del Institute of Technology • North Sumatra, Indonesia</p>
          </div>
          <span className="text-slate-500 font-mono">Sep 2015 - Sep 2019</span>
        </motion.div>
      </motion.section>

      {/* CV Preview Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp} 
        id="cv-preview"
        className="space-y-4 border-t border-slate-800/80 pt-10 scroll-mt-28"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">CV PREVIEW</h2>
          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/cv-joshua.pdf" 
            download 
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2.5 rounded-lg font-semibold transition shadow-lg shadow-indigo-500/20 flex items-center gap-2"
          >
            <span>DOWNLOAD FULL CV (.PDF)</span>
          </motion.a>
        </div>

        <div className="w-full h-[650px] bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
          <iframe
            src="/cv-joshua.pdf"
            className="w-full h-full"
            title="CV Preview"
          />
        </div>
      </motion.section>

    </main>
  );
}