'use client';

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
    <main className="max-w-6xl mx-auto px-6 pt-10 space-y-16">
      
      {/* About & Skills Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} 
        id="about" 
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24"
      >
        {/* Avatar Profile */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-slate-700/60 bg-slate-800 overflow-hidden shadow-2xl relative cursor-pointer group"
          >
            <Image 
              src="/profile.jpg" 
              alt="Joshua Sitanggang" 
              fill
              priority
              sizes="(max-width: 768px) 224px, 256px"
              className="object-cover object-[55%_60%] group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* About & Skills Content */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-2">ABOUT ME</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Joshua Surya Ananta Sitanggang is a Fullstack Developer at PT. Super Andalas Steel with a solid background in software engineering, agile methodologies, product backlog management, user story writing, and quality assurance (Ex-RCTI+ & Ex-DANA).
            </p>
          </div>

          <div id="skills" className="scroll-mt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 text-xs">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 6, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="flex justify-between items-center py-1.5 px-2 rounded border-b border-slate-800/40 transition-colors cursor-default"
                >
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                  {skill.level && <span className="text-indigo-400 font-mono text-[11px]">{skill.level}</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} 
        id="experience" 
        className="space-y-6 pt-10 border-t border-slate-800/80 scroll-mt-24"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">EXPERIENCE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Experience 1: Fullstack Developer */}
          <motion.div 
            whileHover={{ y: -8, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-xs text-indigo-400 font-semibold">• FULLSTACK DEVELOPER</span>
                  <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">PT. Super Andalas Steel</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                  2026 - Present
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Developing & maintaining end-to-end web applications.</li>
                <li>Bridging technical development with business strategy.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience 2: Product Owner */}
          <motion.div 
            whileHover={{ y: -8, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-xs text-indigo-400 font-semibold">• PRODUCT OWNER</span>
                  <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">RCTI+</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                  2025 - 2026
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Defined product vision & managed product roadmap.</li>
                <li>Created & prioritized user stories in Agile environment.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience 3: Software Developer & QA */}
          <motion.div 
            whileHover={{ y: -8, borderColor: 'rgba(99, 102, 241, 0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3 transition-colors shadow-lg group cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-xs text-indigo-400 font-semibold">• SOFTWARE DEVELOPER & QA</span>
                  <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">DANA Indonesia</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded shrink-0">
                  2019 - 2025
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Developed web features using React.js & Node.js.</li>
                <li>Executed functional/regression testing & test automation.</li>
              </ul>
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
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">EDUCATION</h2>
        <motion.div 
          whileHover={{ borderColor: 'rgba(99, 102, 241, 0.4)' }}
          className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex justify-between items-center text-xs transition-colors"
        >
          <div>
            <p className="font-bold text-white text-sm">BACHELOR OF INFORMATIC ENGINEERING</p>
            <p className="text-slate-400 mt-0.5">DEL INSTITUTE OF TECHNOLOGY</p>
          </div>
          <span className="text-slate-500 font-mono">2015 - 2019</span>
        </motion.div>
      </motion.section>

      {/* CV Preview Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp} 
        id="cv-preview"
        className="space-y-4 border-t border-slate-800/80 pt-10 scroll-mt-24"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">CV PREVIEW</h2>
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