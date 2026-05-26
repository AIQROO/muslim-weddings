import { motion } from "framer-motion";
import { Check, Calendar, Shield, MessageCircleCode } from "lucide-react";
import ElegantArch from "../components/ElegantArch";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const packages = [
    {
      id: "nikah-ceremony",
      num: "01",
      title: "Nikah Ceremony",
      subtitle: t("servicesPage.pkg1.subtitle"),
      tagline: t("servicesPage.pkg1.tagline"),
      features: [
        t("servicesPage.pkg1.feature1"),
        t("servicesPage.pkg1.feature2"),
        t("servicesPage.pkg1.feature3"),
        t("servicesPage.pkg1.feature4"),
        t("servicesPage.pkg1.feature5"),
        t("servicesPage.pkg1.feature6"),
      ],
      image: "/images/ceremony.jpeg",
      frameType: "standard",
    },
    {
      id: "riviera-nikah",
      num: "02",
      title: "Riviera Nikah",
      subtitle: t("servicesPage.pkg2.subtitle"),
      tagline: t("servicesPage.pkg2.tagline"),
      features: [
        t("servicesPage.pkg2.feature1"),
        t("servicesPage.pkg2.feature2"),
        t("servicesPage.pkg2.feature3"),
        t("servicesPage.pkg2.feature4"),
        t("servicesPage.pkg2.feature5"),
        t("servicesPage.pkg2.feature6"),
      ],
      image: "/images/riviera.jpeg",
      frameType: "arch",
    },
    {
      id: "luxury-destination-nikah",
      num: "03",
      title: "Luxury Destination Nikah",
      subtitle: t("servicesPage.pkg3.subtitle"),
      tagline: t("servicesPage.pkg3.tagline"),
      features: [
        t("servicesPage.pkg3.feature1"),
        t("servicesPage.pkg3.feature2"),
        t("servicesPage.pkg3.feature3"),
        t("servicesPage.pkg3.feature4"),
        t("servicesPage.pkg3.feature5"),
        t("servicesPage.pkg3.feature6"),
        t("servicesPage.pkg3.feature7"),
      ],
      image: "/images/setup.jpeg",
      frameType: "double-border",
    },
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
          {t("servicesPage.header.tagline")}
        </span>
        <h1 className="text-editorial-h1 text-neutral-dark mb-6">
          {t("servicesPage.header.title")}
        </h1>
        <div className="h-[1px] w-20 bg-primary/30 mb-8" />
        <p className="text-neutral-muted leading-relaxed font-sans text-base max-w-2xl">
          {t("servicesPage.header.desc")}
        </p>
      </section>

      {/* Detailed Package Breakdowns */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-32">
        {packages.map((pkg, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              id={pkg.id}
              key={pkg.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-cream-border/30 pb-20 last:border-0 last:pb-0"
            >
              {/* Image Frame Column */}
              <div className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                {pkg.frameType === "arch" ? (
                  <ElegantArch
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full max-w-md"
                  />
                ) : pkg.frameType === "double-border" ? (
                  <div className="luxury-border-frame w-full max-w-md">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[360px] sm:h-[450px] object-cover relative z-10 border border-cream-border"
                    />
                  </div>
                ) : (
                  <div className="relative w-full max-w-md p-4 border border-cream-border bg-white shadow-sm">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[320px] sm:h-[380px] object-cover border border-cream-border/60"
                    />
                  </div>
                )}
              </div>

              {/* Text Description Column */}
              <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-3xl font-light text-primary">
                    {pkg.num}
                  </span>
                  <div className="h-[1px] w-12 bg-primary/45" />
                  <span className="text-xs uppercase tracking-widest font-sans font-bold text-neutral-dark/40">
                    {t("misc.sectionEyebrow")}
                  </span>
                </div>

                <h2 className="text-editorial-h2 text-neutral-dark">
                  {pkg.title}
                </h2>
                
                <h4 className="font-serif italic text-lg text-primary leading-none -mt-2">
                  {pkg.subtitle}
                </h4>

                <p className="text-neutral-muted leading-relaxed text-sm font-sans mt-2">
                  {pkg.tagline}
                </p>

                {/* Features list */}
                <div className="flex flex-col gap-3 my-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-primary" />
                      </div>
                      <span className="text-xs text-neutral-dark leading-relaxed font-sans font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-xs uppercase tracking-widest font-sans font-bold hover:bg-primary-hover transition-all duration-300 shadow-md text-center"
                  >
                    <MessageCircleCode size={14} /> {t("servicesPage.ctaWhatsApp")}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Assurance banner */}
      <section className="mt-32 py-16 bg-neutral-dark text-warm-bg border-t border-cream-border/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Shield className="text-primary h-8 w-8" />
              <h3 className="font-serif text-xl font-light text-white">{t("servicesPage.assurance.col1Title")}</h3>
              <p className="text-xs text-warm-bg/60 leading-relaxed font-sans">
                {t("servicesPage.assurance.col1Desc")}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Calendar className="text-primary h-8 w-8" />
              <h3 className="font-serif text-xl font-light text-white">{t("servicesPage.assurance.col2Title")}</h3>
              <p className="text-xs text-warm-bg/60 leading-relaxed font-sans">
                {t("servicesPage.assurance.col2Desc")}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Check className="text-primary h-8 w-8" />
              <h3 className="font-serif text-xl font-light text-white">{t("servicesPage.assurance.col3Title")}</h3>
              <p className="text-xs text-warm-bg/60 leading-relaxed font-sans">
                {t("servicesPage.assurance.col3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
