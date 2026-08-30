import React from 'react';
import AnimatedContent from './animatedContent';

export default function Home() {
  const skills = [
    { name: 'Product Roadmap', level: 'PM' },
    { name: 'Prioritization', level: '95%' },
    { name: 'Agile / Scrum', level: '95%' },
    { name: 'JavaScript', level: '95%' },
    { name: 'React.js', level: '90%' },
    { name: 'Next.js', level: '95%' },
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '95%' },
    { name: 'Functional testing', level: '95%' },
    { name: 'Regression testing', level: 'QA' },
    { name: 'Jira', level: '100%' },
    { name: 'Confluence', level: '100%' },
    { name: 'Figma', level: '100%' },
    { name: 'Postman', level: '100%' },
  ];

  return (
    <div className="min-h-screen bg-[#111319] text-slate-200 font-sans antialiased pb-20">
      {/* Top Utility Links */}
      <div className="max-w-6xl mx-auto px-6 pt-4 flex justify-end gap-5 text-slate-400 text-xs tracking-wider">
        <a href="https://linkedin.com/in/joshua-sitanggang" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LINKEDIN ↗</a>
        <a href="https://github.com/LeNowhere" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">GITHUB ↗</a>
        <a href="mailto:joshua.sitanggang@gmail.com" className="hover:text-indigo-400 transition-colors">EMAIL ↗</a>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111319]/90 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div>
            <a href="#" className="text-lg font-bold tracking-wider text-white hover:text-indigo-400 transition-colors">
              JOSHUA SITANGGANG
            </a>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">FULLSTACK DEVELOPER</p>
          </div>

          <nav className="flex items-center gap-2 sm:gap-3">
            <a 
              href="#about" 
              className="bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 hover:border-indigo-500/50 text-slate-200 text-xs px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              ABOUT
            </a>
            <a 
              href="#skills" 
              className="bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 hover:border-indigo-500/50 text-slate-200 text-xs px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              SKILLS
            </a>
            <a 
              href="#experience" 
              className="bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 hover:border-indigo-500/50 text-slate-200 text-xs px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              EXPERIENCE
            </a>
            <a 
              href="/cv-joshua.pdf" 
              download 
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded-lg font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50"
            >
              DOWNLOAD CV (.PDF)
            </a>
          </nav>
        </div>
      </header>

      {/* Render Component Content */}
      <AnimatedContent skills={skills} />
    </div>
  );
}