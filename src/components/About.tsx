import { useState } from "react";
import { PERSONAL_INFO } from "../data";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, language } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  // Dynamic values depending on language
  const aboutTitle = language === "en" ? "About Me" : "Sobre Mim";
  const aboutSubtitle = language === "en" ? "Learn a bit more about me" : "Conheça um pouco mais sobre mim";
  const tabName = "about.md";
  const sectionSummary = language === "en" ? "Summary" : "Resumo";
  const sectionLocation = language === "en" ? "Location" : "Local";
  const sectionAge = language === "en" ? "Age" : "Idade";
  const sectionExp = language === "en" ? "Experience (4+ years)" : "Experiência (4+ anos)";
  const sectionTechs = language === "en" ? "Technologies" : "Tecnologias";
  const quote = language === "en" ? "Transforming ideas into code" : "Transformando ideias em código";

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none z-0" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono mb-4">
            <span className="text-white/50">&lt;</span>
            <span className="text-white">{aboutTitle}</span>
            <span className="text-white/50">/&gt;</span>
          </h2>
          <p className="text-gray-500 text-lg">{aboutSubtitle}</p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Portrait with elegant lighting blur outline behind it */}
          <div className="flex justify-center order-1">
            <div className="relative group">
              {/* Glow backdrop behind portrait frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500" />
              
              <div className="relative">
                {/* Thin white double border */}
                <div className="absolute -inset-1 bg-white/20 rounded-lg" />
                
                <div className="relative overflow-hidden rounded-lg border-2 border-white/30 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#111] flex items-center justify-center">
                  {!imgFailed ? (
                    <img
                      src={PERSONAL_INFO.portraitUrl}
                      alt={PERSONAL_INFO.name}
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-gray-500 font-mono">
                      <span className="text-3xl mb-2">👤</span>
                      <p className="text-xs uppercase tracking-widest">{PERSONAL_INFO.name}</p>
                      <p className="text-[10px] text-gray-600 mt-1">{PERSONAL_INFO.role}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Terminal Syntax Markdown Code Card */}
          <div className="order-2 flex justify-center">
            <div className="relative w-full max-w-xl group">
              {/* Backlight glow blur */}
              <div className="absolute -inset-1 bg-white/5 rounded-lg blur-xl -z-10" />

              <div className="w-full">
                {/* macOS top tab header bar */}
                <div className="bg-gray-950 rounded-t-lg border border-white/20 border-b-0 px-4 py-3.5 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-gray-400 text-xs font-mono tracking-wider">{tabName}</span>
                </div>

                {/* Markdown text panel with code highlighter simulated classes */}
                <div className="bg-gray-950 rounded-b-lg border border-white/20 p-6 sm:p-8 font-mono text-xs sm:text-sm overflow-x-auto">
                  <pre className="text-gray-300 space-y-2 leading-relaxed">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-blue-400 font-bold">#</span>
                      <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                    </div>
                    <div className="text-gray-400 ml-4 font-light">
                      {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.focus}
                    </div>
                    
                    <div className="h-2" />

                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-blue-400 font-bold">##</span>
                      <span className="text-white font-bold">{sectionSummary}</span>
                    </div>

                    <div className="space-y-1 ml-4 text-gray-300">
                      <div>
                        <span className="text-gray-500 font-bold">-</span> {sectionLocation}: <span className="text-white font-medium">Luanda, {PERSONAL_INFO.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold">-</span> {sectionAge}: <span className="text-white font-medium">21</span>
                      </div>
                    </div>

                    <div className="h-2" />

                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-blue-400 font-bold">##</span>
                      <span className="text-white font-bold">{sectionExp}</span>
                    </div>

                    <div className="space-y-1 ml-4">
                      <div>
                        <span className="text-gray-500 font-bold">-</span> {sectionTechs}:
                      </div>
                      <div className="grid grid-cols-2 gap-y-1 pl-4 text-gray-400">
                        <div><span className="text-gray-600">&bull;</span> React.js</div>
                        <div><span className="text-gray-600">&bull;</span> Next.js</div>
                        <div><span className="text-gray-600">&bull;</span> TypeScript</div>
                        <div><span className="text-gray-600">&bull;</span> Node.js</div>
                        <div><span className="text-gray-600">&bull;</span> Supabase</div>
                        <div><span className="text-gray-600">&bull;</span> Express</div>
                      </div>
                    </div>

                    <div className="h-4" />

                    <div className="border-l-4 border-green-500/60 pl-4 py-0.5 text-green-400/90 italic">
                      &gt; "{quote}"
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
