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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for full-time & high-impact roles
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Scalable Web Apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">Precision & Business Growth</span>
          </h1>

          {/* Dynamic Bio Summary */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            High-performing Fullstack Developer with 5+ years of experience engineering scalable web applications using React, TypeScript, Laravel, and Node.js. Proven expertise in optimizing API performance, automating QA pipelines, and leading product strategy in Agile environments.
          </p>

          {/* Key Value Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">5+ Yrs</p>
              <p className="text-[11px] text-slate-400 font-medium">Engineering Experience</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">99%+</p>
              <p className="text-[11px] text-slate-400 font-medium">Release Stability (QA)</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">3 Top</p>
              <p className="text-[11px] text-slate-400 font-medium">Tech Ecosystems</p>
            </div>
          </div>
        </div>

        {/* Right Column: Avatar Profile */}
        <div className="lg:col-span-4 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl border-2 border-indigo-500/30 bg-slate-800 overflow-hidden shadow-2xl relative cursor-pointer group shadow-indigo-500/10"
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

      {/* Skills Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        id="skills" 
        className="space-y-4 scroll-mt-28"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">KEY SKILLS & COMPETENCIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 text-xs">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 6, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="flex justify-between items-center py-2 px-3 rounded-lg border border-slate-800/40 bg-slate-950/30 transition-colors cursor-default"
            >
              <span className="text-slate-200 font-medium">{skill.name}</span>
              {skill.level && <span className="text-indigo-400 font-mono text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded">{skill.level}</span>}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} 
        id="experience" 
        className="space-y-6 pt-10 border-t border-slate-800/80 scroll-mt-28"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">WORK EXPERIENCE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fullstack Developer */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer"
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="text-xs text-indigo-400 font-semibold">• FULLSTACK DEVELOPER</span>
                <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">PT Super Andalas Steel</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                Aug 2026 - Present
              </span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Architected scalable web platforms using React, TypeScript, Laravel, and Tailwind CSS.</li>
              <li>Engineered RESTful APIs and database structures to streamline core business operations.</li>
            </ul>
          </motion.div>

          {/* Product Owner */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer"
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="text-xs text-indigo-400 font-semibold">• PRODUCT OWNER</span>
                <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">RCTI+</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                Oct 2024 - Mar 2026
              </span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Spearheaded end-to-end product roadmaps and backlog prioritization within fast-paced Agile/Scrum sprints.</li>
              <li>Cross-functionally aligned engineering and design teams to launch high-impact features.</li>
              <li>Leveraged analytics to optimize user engagement, feature performance, and product positioning.</li>
            </ul>
          </motion.div>

          {/* Quality Assurance Engineer */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer"
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="text-xs text-indigo-400 font-semibold">• QUALITY ASSURANCE ENGINEER</span>
                <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">DANA Indonesia</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                Jan 2024 - Aug 2024
              </span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Executed end-to-end testing across mobile platforms to guarantee 99%+ release stability.</li>
              <li>Designed comprehensive automated test suites using Selenium to accelerate release cycles.</li>
              <li>Partnered directly with developers to debug, isolate, and resolve high-priority defects.</li>
            </ul>
          </motion.div>

          {/* Software Developer (Web) */}
          <motion.div 
            whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer"
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="text-xs text-indigo-400 font-semibold">• SOFTWARE DEVELOPER (WEB)</span>
                <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">DANA Indonesia</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                Sep 2019 - Dec 2023
              </span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Engineered high-availability web features serving millions of users using React.js and Node.js.</li>
              <li>Integrated complex REST APIs, driving faster load times and enhanced application responsiveness.</li>
              <li>Collaborated in high-velocity Agile sprints to deliver clean, scalable codebases.</li>
            </ul>
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
            <p className="text-slate-400 mt-0.5">Del Institute of Technology • North Sumatra, Indonesia (GPA: 2.88)</p>
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
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded-md font-semibold transition shadow-lg shadow-indigo-500/20"
          >
            DOWNLOAD FULL CV (PDF)
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