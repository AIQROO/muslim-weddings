import { useState, useEffect } from "react";
import { MessageSquareText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center gap-3 group focus:outline-none"
      aria-label="Contact on WhatsApp"
    >
      {/* Sliding text label */}
      <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out bg-neutral-dark text-warm-bg text-[10px] font-bold uppercase tracking-widest px-0 py-2 rounded-none group-hover:px-4 border border-cream-border/10 shadow-lg whitespace-nowrap">
        {t("misc.whatsappFloatLabel")}
      </span>

      {/* Floating Button Icon */}
      <div className="h-14 w-14 rounded-full bg-neutral-dark border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
        <MessageSquareText size={22} className="stroke-[2]" />
      </div>
    </a>
  );
}
