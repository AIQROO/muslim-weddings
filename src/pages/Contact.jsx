import { motion } from "framer-motion";
import { MessageSquareText, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";

export default function Contact() {
  const { t } = useLanguage();
  useSeo("contact");

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="bg-warm-bg pt-40 pb-32"
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-10">
        
        {/* Header centered Copy */}
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4 block">
            {t("contactPage.header.tagline")}
          </span>
          <h1 className="text-editorial-h1 text-neutral-dark mb-4">
            {t("contactPage.header.title")}
          </h1>
          <div className="h-[1px] w-16 bg-primary/30 my-4" />
          <p className="text-neutral-muted leading-relaxed font-sans text-base max-w-xl">
            {t("contactPage.header.desc")}
          </p>
        </div>

        {/* WhatsApp Concierge Card - Centered and Enlarged */}
        <a
          href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
          target="_blank"
          rel="noopener noreferrer"
          className="p-8 sm:p-10 border border-primary/25 bg-white hover:border-primary transition-all duration-500 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left max-w-2xl w-full shadow-sm hover:shadow-md group relative overflow-hidden"
        >
          {/* Subtle decorative geometric overlay */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl transform translate-x-8 -translate-y-8" />
          
          <div className="h-16 w-16 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-500">
            <MessageSquareText size={28} className="animate-pulse" />
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-light text-neutral-dark flex items-center justify-center sm:justify-start gap-2">
              {t("contactPage.card.title")}
            </h3>
            <p className="text-xs text-neutral-muted mt-2 leading-relaxed font-sans">
              {t("contactPage.card.desc")}
            </p>
            <span className="text-xs text-primary font-bold uppercase tracking-wider mt-4 inline-block group-hover:translate-x-1.5 transition-transform duration-300">
              {t("contactPage.card.cta")}
            </span>
          </div>
        </a>

        {/* Confidencialidad Banner - Centered and Refined */}
        <div className="p-6 border border-cream-border/60 bg-neutral-dark text-warm-bg flex items-start gap-4 max-w-2xl w-full text-left">
          <Shield className="text-primary h-6 w-6 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-base text-white font-medium flex items-center gap-2">
              {t("contactPage.shield.title")}
            </h4>
            <p className="text-xs text-warm-bg/70 mt-1 leading-relaxed font-sans">
              {t("contactPage.shield.desc")}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
