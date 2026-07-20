import { useState, FormEvent } from "react";
import { Send, Check, Mail, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      // Revert after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const titleLeft = language === "en" ? "Let's build something" : "Vamos criar algo";
  const titleRight = language === "en" ? "incredible together?" : "incrível juntos?";
  const subtitle = language === "en" 
    ? "If you have a project in mind, a business idea, or just want to chat about technology, feel free to get in touch."
    : "Se você tem um projeto em mente, uma ideia de negócio ou apenas quer bater um papo sobre tecnologia, fique à vontade para entrar em contato.";

  return (
    <section id="contact" className="bg-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glowing gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Heading and Info Directory */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-mono text-white mb-4 leading-tight">
                {titleLeft} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  {titleRight}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {/* Email directory row */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl border border-white/10 shadow-sm shadow-white/5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location directory row */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl border border-white/10 shadow-sm shadow-white/5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{language === "en" ? "Location" : "Localização"}</p>
                  <p className="text-lg font-medium">Cazenga, Luanda, Angola</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Inputs Form Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">
                    {t.contact.formName}
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-gray-600"
                    placeholder={t.contact.placeholderName}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">
                    {t.contact.formEmail}
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-gray-600"
                    placeholder={t.contact.placeholderEmail}
                  />
                </div>

              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-gray-600 resize-none"
                  placeholder={t.contact.placeholderMessage}
                />
              </div>

              {/* Submit / Success Indicator Action Button */}
              {isSubmitted ? (
                <div className="flex items-center justify-center space-x-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold h-12 w-full text-base">
                  <Check size={18} />
                  <span>{t.contact.successMessage}</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none bg-white text-black hover:bg-gray-200 font-bold shadow-lg shadow-white/5 h-12 rounded-lg px-8 py-3 text-base md:text-lg w-full group/btn cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-black" />
                  ) : (
                    <>
                      <span>{t.contact.sendButton}</span>
                      <Send size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </>
                  )}
                </button>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
