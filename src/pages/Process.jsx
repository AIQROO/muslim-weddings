import { motion } from "framer-motion";
import { MessageSquareText, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";

export default function Process() {
  const { t } = useLanguage();
  useSeo("process");

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const steps = [
    {
      num: "01",
      title: t("processPage.step1.title"),
      tagline: t("processPage.step1.tagline"),
      description: t("processPage.step1.desc"),
    },
    {
      num: "02",
      title: t("processPage.step2.title"),
      tagline: t("processPage.step2.tagline"),
      description: t("processPage.step2.desc"),
    },
    {
      num: "03",
      title: t("processPage.step3.title"),
      tagline: t("processPage.step3.tagline"),
      description: t("processPage.step3.desc"),
    },
    {
      num: "04",
      title: t("processPage.step4.title"),
      tagline: t("processPage.step4.tagline"),
      description: t("processPage.step4.desc"),
    },
    {
      num: "05",
      title: t("processPage.step5.title"),
      tagline: t("processPage.step5.tagline"),
      description: t("processPage.step5.desc"),
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="bg-warm-bg pt-32 pb-24"
    >
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center mb-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">
          {t("processPage.header.tagline")}
        </span>
        <h1 className="text-editorial-h1 text-neutral-dark mb-6">
          {t("processPage.header.title")}
        </h1>
        <p className="font-serif italic text-xl text-primary -mt-2 mb-6">
          {t("processPage.header.subtitle")}
        </p>
        <div className="h-[1px] w-20 bg-primary/30 mb-8" />
        <p className="text-neutral-muted leading-relaxed font-sans text-base max-w-2xl">
          {t("processPage.header.desc")}
        </p>
      </section>

      {/* Timeline Steps Layout */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        {/* Central connecting vertical line (desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cream-border/60 -translate-x-1/2 hidden md:block" />

        <div className="flex flex-col gap-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.num} className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                
                {/* Visual Connector Node (desktop only) */}
                <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10 hidden md:flex h-10 w-10 rounded-full bg-neutral-dark border-2 border-primary items-center justify-center shadow-md">
                  <span className="text-[11px] font-sans font-bold text-primary">
                    {step.num}
                  </span>
                </div>

                {/* Left Column */}
                <div className={`flex flex-col gap-4 ${isEven ? "md:text-right md:items-end" : "md:order-2"}`}>
                  {/* Step Number for Mobile */}
                  <div className="flex items-center gap-3 md:hidden">
                    <span className="text-xs font-bold font-sans text-primary px-2 py-1 bg-primary/10 border border-primary/20">
                      {t("misc.stepLabel")} {step.num}
                    </span>
                    <div className="h-[1px] flex-grow bg-cream-border/60" />
                  </div>

                  <span className="text-xs uppercase tracking-widest font-sans font-bold text-primary">
                    {step.tagline}
                  </span>
                  
                  <h3 className="font-serif text-3xl font-light text-neutral-dark">
                    {step.num} · {step.title}
                  </h3>
                  
                  <p className="text-neutral-muted leading-relaxed text-sm font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Right Column (Spacious Placeholder to maintain alternating layout on desktop) */}
                <div className={isEven ? "md:order-2" : ""} />

              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <div className="p-12 border border-cream-border bg-white shadow-sm flex flex-col items-center gap-6">
          <Sparkles className="text-primary h-7 w-7" />
          <h2 className="font-serif text-2xl sm:text-4xl font-light text-neutral-dark">
            {t("processPage.banner.title")}
          </h2>
          <p className="text-sm text-neutral-muted max-w-lg leading-relaxed font-sans">
            {t("processPage.banner.text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-xs uppercase tracking-widest font-sans font-bold hover:bg-primary-hover transition-all duration-300 shadow-md"
            >
              <MessageSquareText size={14} /> {t("processPage.banner.cta")}
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
