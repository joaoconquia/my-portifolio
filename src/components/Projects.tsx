import { Project } from "../types";
import { useLanguage } from "../LanguageContext";
import buildersImage from "../assets/images/builders.png";
import lionsImage from "../assets/images/lions.png";
import vocatiImage from "../assets/images/vocati.png"; 

export default function Projects() {
  const { t, language } = useLanguage();

  // Define dynamic project list with translations injected
  const FEATURED_PROJECTS_DYN: Project[] = [
    {
      id: "builders-angola",
      title: "Builders Angola",
      description: t.projects.buildersDesc,
      techStack: ["react", "tailwindcss", "typescript", "vite"],
      year: "2024",
      visitUrl: "https://buildersangola.tech/",
      githubUrl: "https://github.com/C0nqu14",
      imageUrl: buildersImage,
      isFeatured: true
    },
    {
      id: "lionsec",
      title: "LionSec",
      description: t.projects.lionsecDesc,
      techStack: ["nextjs", "typescript", "vite", "tailwindcss"],
      year: "2024",
      visitUrl: "https://lionsec.vercel.app/",
      githubUrl: "https://github.com/C0nqu14",
      imageUrl: lionsImage,
      isFeatured: true
    },
    {
      id: "vocati",
      title: "Vocati",
      description: t.projects.vocatiDesc,
      techStack: ["reactjs", "typescript", "vite", "tailwindcss"],
      year: "2023",
      visitUrl: "https://www.vocati.tech/",
      githubUrl: "https://github.com/C0nqu14",
      imageUrl: vocatiImage,
      isFeatured: true
    }
  ];

  // Beautiful live interactive CSS web interfaces for each project
  function renderLiveMockup(id: string) {
    if (id === "builders-angola") {
      return (
        <div className="relative h-full w-full bg-[#0D0D11] p-4 font-sans flex flex-col justify-between select-none">
          {/* macOS style title bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex space-x-1.5">
              <div className="h-2 w-2 rounded-full bg-[#FF5F56]/80" />
              <div className="h-2 w-2 rounded-full bg-[#FFBD2E]/80" />
              <div className="h-2 w-2 rounded-full bg-[#27C93F]/80" />
            </div>
            <div className="rounded bg-white/5 px-2 py-0.5 font-mono text-[8px] text-[#A1A1AA]">
              buildersangola.tech
            </div>
            <div className="w-8" />
          </div>

          {/* Content Directory */}
          <div className="mt-3 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-[10px] font-semibold text-white tracking-tight">{t.projects.mockups.buildersTitle}</h4>
              <div className="flex items-center space-x-1">
                <span className="relative flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[7px] text-emerald-400">348 online</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Dev Card 1 */}
              <div className="rounded-lg border border-white/5 bg-white/[0.01] p-2">
                <div className="flex items-center space-x-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-[8px] font-bold text-blue-400">
                    JC
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[9px] font-medium text-white truncate">João Conquia</h5>
                    <p className="text-[7px] text-[#A1A1AA] truncate">Full Stack Dev</p>
                  </div>
                </div>
              </div>

              {/* Dev Card 2 */}
              <div className="rounded-lg border border-white/5 bg-white/[0.01] p-2">
                <div className="flex items-center space-x-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10 text-[8px] font-bold text-purple-400">
                    AN
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[9px] font-medium text-white truncate">Afonso Neto</h5>
                    <p className="text-[7px] text-[#A1A1AA] truncate">Mobile Eng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (id === "lionsec") {
      return (
        <div className="relative h-full w-full bg-[#08080C] p-4 font-mono flex flex-col justify-between select-none">
          {/* macOS style title bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex space-x-1.5">
              <div className="h-2 w-2 rounded-full bg-[#FF5F56]/80" />
              <div className="h-2 w-2 rounded-full bg-[#FFBD2E]/80" />
              <div className="h-2 w-2 rounded-full bg-[#27C93F]/80" />
            </div>
            <div className="rounded bg-white/5 px-2 py-0.5 text-[8px] text-[#A1A1AA]">
              lionsec.app
            </div>
            <div className="w-8" />
          </div>

          {/* Cyber Shield Scan Panel */}
          <div className="my-auto flex flex-col items-center justify-center space-y-1">
            <div className="relative flex h-10 w-14 items-center justify-center rounded-full border border-red-500/10 bg-red-500/[0.01]">
              <div className="absolute inset-0 rounded-full border border-dashed border-red-500/30 animate-[spin_12s_linear_infinite]" />
              <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-[8px] font-bold tracking-wider text-red-400">{t.projects.mockups.lionSecStatus}</p>
          </div>
        </div>
      );
    }

    if (id === "vocati") {
      return (
        <div className="relative h-full w-full bg-[#0C0E14] p-4 font-sans flex flex-col justify-between select-none">
          {/* macOS style title bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex space-x-1.5">
              <div className="h-2 w-2 rounded-full bg-[#FF5F56]/80" />
              <div className="h-2 w-2 rounded-full bg-[#FFBD2E]/80" />
              <div className="h-2 w-2 rounded-full bg-[#27C93F]/80" />
            </div>
            <div className="rounded bg-white/5 px-2 py-0.5 font-mono text-[8px] text-[#A1A1AA]">
              vocati.tech
            </div>
            <div className="w-8" />
          </div>

          {/* Vocational Match */}
          <div className="mt-2.5 flex-1 flex flex-col justify-center">
            <div className="mb-2">
              <h4 className="text-[8px] font-medium text-[#A1A1AA] uppercase tracking-wider">{t.projects.mockups.vocatiTitle}</h4>
              <h5 className="text-[9px] font-semibold text-white mt-0.5 truncate">{t.projects.mockups.vocatiQuestion}</h5>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between rounded border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 text-[8px]">
                <span className="font-medium text-white truncate">Frontend Eng</span>
                <span className="font-mono text-blue-400 font-bold">98%</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full w-full flex items-center justify-center bg-[#111111]">
        <span className="text-xs text-[#A1A1AA] font-mono">Loading...</span>
      </div>
    );
  }

  return (
    <section id="projects" className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background grid overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono mb-4">
            <span className="text-white/50">&lt;</span>
            <span className="text-white">{t.projects.title}</span>
            <span className="text-white/50">/&gt;</span>
          </h2>
          <p className="text-gray-500 text-lg">{language === "en" ? "Some of my recent works" : "Alguns dos meus trabalhos recentes"}</p>
        </div>

        {/* Beautiful 3-Column Bento Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24" id="featured-projects-grid">
          {FEATURED_PROJECTS_DYN.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-900/50 rounded-xl overflow-hidden border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col"
              id={`project-card-${project.id}`}
            >
              {/* Top Media Slot with Interactive Mockup */}
              <div className="relative h-48 overflow-hidden cursor-pointer" id={`project-media-container-${project.id}`}>
                {/* Grayscale filter with lift transitions on hover */}
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    renderLiveMockup(project.id)
                  )}
                </div>
                {/* Visual detail indicator mask */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-white font-mono text-xs border border-white px-4 py-2 rounded">
                    {language === "en" ? "View Details" : "Ver Detalhes"}
                  </span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 cursor-pointer hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech tag bubbles */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-white bg-white/10 px-2 py-1 rounded lowercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Solid high-contrast white Demo button & outlined Code button */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.visitUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black text-sm font-bold py-2 rounded transition-all duration-300"
                  >
                    {/* SVG pattern representing Arrow-out link */}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                    </svg> 
                    Demo
                  </a>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white text-sm font-bold py-2 rounded transition-all duration-300"
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
