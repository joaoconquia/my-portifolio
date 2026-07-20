import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background particle network simulation on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 255, 255, 0.25)";
        context.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 120);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSec = document.getElementById("projects");
    if (projectsSec) {
      const offset = 80;
      const pos = projectsSec.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSec = document.getElementById("about");
    if (aboutSec) {
      const offset = 80;
      const pos = aboutSec.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic Animated Canvas Particle Field */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <canvas ref={canvasRef} className="pointer-events-none h-full w-full" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          {/* Branded bracket name header with elegant custom glow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold leading-none tracking-tight">
            <span className="text-white/40">&lt;</span>
            <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] px-1 sm:px-2">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-white/40">/&gt;</span>
          </h1>

          {/* Subtitle Role with ambient drop shadow */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
            {language === "en" ? "Full Stack" : "Desenvolvedor"}{" "}
            <span className="text-white font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">
              {language === "en" ? "Developer" : "Full Stack"}
            </span>
          </p>

          {/* Dynamic Translated Bio Subtext */}
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
            {t.hero.subline}
          </p>

          {/* Centered Actions Call-To-Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black font-bold h-12 px-8 rounded-lg text-base hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10 hover:shadow-white/20 cursor-pointer"
            >
              <span>{t.hero.viewProjects}</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
            
            <a
              href={PERSONAL_INFO.cvUrl}
              download="cv-joao-conquia.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center text-white hover:underline underline-offset-4 h-12 px-8 text-base font-medium transition-all duration-300"
            >
              {t.hero.downloadCv}
            </a>
          </div>

          {/* Bounce arrow indicator down to about */}
          <div className="pt-16 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="inline-block text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer p-2"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
