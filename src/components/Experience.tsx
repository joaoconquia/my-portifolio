import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw/grow the timeline vertical line on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        );
      }

      // 2. Fade/slide each timeline card as it scrolls into view
      if (itemsRef.current) {
        const cards = itemsRef.current.querySelectorAll(".timeline-card-item");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] px-6 py-24 md:px-12 xl:px-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono mb-4">
            <span className="text-white/50">&lt;</span>
            <span className="text-white">{t.experience.title}</span>
            <span className="text-white/50">/&gt;</span>
          </h2>
          <p className="text-gray-500 text-lg">{t.experience.intro}</p>
        </div>

        {/* Timeline Hub */}
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-12 md:gap-12" id="experience-timeline-container">
          
          {/* Left Column: Subtle metadata / description on Desktop */}
          <div className="hidden md:col-span-4 md:block">
            <div className="sticky top-32 space-y-6" id="experience-sidebar">
              <h3 className="font-display text-xl font-medium text-white">{t.experience.philosophyTitle}</h3>
              <p className="font-sans text-sm leading-relaxed text-[#A1A1AA]">
                {t.experience.philosophyDesc}
              </p>
              <div className="rounded-xl border border-white/8 bg-[#111111] p-5">
                <span className="font-mono text-[10px] text-white uppercase tracking-wider block mb-2">{t.experience.techCoreTitle}</span>
                <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                  {t.experience.techCoreDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards with Line */}
          <div className="relative md:col-span-8">
            
            {/* Elegant vertical progress line */}
            <div
              ref={lineRef}
              id="experience-vertical-line"
              className="absolute left-3 top-0 h-full w-[1.5px] bg-gradient-to-b from-white via-white/20 to-transparent md:left-4"
              style={{ transformOrigin: "top center" }}
            />

            {/* List of Experience Chapters */}
            <div ref={itemsRef} className="space-y-16 pl-10 md:pl-12" id="experience-items-list">
              {t.experience.history.map((item) => (
                <div
                  key={item.id}
                  className="timeline-card-item relative group"
                  id={`experience-item-${item.id}`}
                >
                  {/* Timeline circular node */}
                  <span
                    id={`timeline-node-${item.id}`}
                    className="absolute -left-[37px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-white ring-4 ring-white/10 transition-transform duration-300 group-hover:scale-125 md:-left-[41px]"
                  />

                  {/* Header info */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h4 className="font-display text-lg font-medium text-white sm:text-xl" id={`experience-title-${item.id}`}>
                        {item.role}
                      </h4>
                      <div className="flex items-center space-x-1 font-mono text-xs text-white/60" id={`experience-date-${item.id}`}>
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs text-[#A1A1AA]">
                      <span className="font-medium text-white" id={`experience-company-${item.id}`}>{item.company}</span>
                      <span className="text-[#52525B]">&bull;</span>
                      <div className="flex items-center space-x-1" id={`experience-location-${item.id}`}>
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description bullets list (Plain text, modular, no card panels, highly clean and modern) */}
                  <ul className="mt-5 space-y-3.5" id={`experience-desc-list-${item.id}`}>
                    {item.description.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="flex items-start space-x-3 text-sm leading-relaxed text-[#A1A1AA]"
                        id={`experience-bullet-${item.id}-${bulletIdx}`}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
