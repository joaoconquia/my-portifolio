import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function FloatingNav() {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.techStack, id: "tech-stack" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.contact, id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/Hide Nav based on Scroll Direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Near top
      }
      setLastScrollY(currentScrollY);

      // Detect active section based on scroll offset
      const offsets = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: rect.top, bottom: rect.bottom };
        }
        return { id: item.id, top: 9999, bottom: 9999 };
      });

      // Find the section currently on screen
      const current = offsets.find((item) => item.top <= 200 && item.bottom > 200);
      if (current) {
        setActiveSection(current.id);
      } else if (currentScrollY === 0) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, language]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset slightly to account for fixed header space
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav
        id="floating-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-white/5 py-4 px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            id="nav-logo"
          >
            JC
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-menu-items">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm transition-all duration-300 group cursor-pointer font-medium ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.6)] ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right section containing Language Selector */}
          <div className="flex items-center space-x-4">
            {/* Elegant Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-white hover:bg-white/[0.1] transition-all duration-300"
              id="language-switcher"
              title={language === "en" ? "Mudar para Português" : "Switch to English"}
            >
              <Globe size={11} className="text-white" />
              <span className="font-bold tracking-wider">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block text-white hover:text-gray-300 md:hidden p-1"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-3 max-w-7xl mx-auto" id="mobile-menu-items">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              id={`mobile-nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}

          {/* Language option in mobile view */}
          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-mono text-xs text-blue-400 mt-2"
            id="mobile-language-switcher"
          >
            {language === "en" ? "🇵🇹 Mudar para Português" : "🇬🇧 Switch to English"}
          </button>
        </div>
      </div>
    </>
  );
}
