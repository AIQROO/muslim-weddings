import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Sparkles, MessageCircleCode } from "lucide-react";
import ElegantArch from "../components/ElegantArch";
import { useLanguage } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";

export default function Home() {
  const { language, t } = useLanguage();
  useSeo("home");
  const lp = (path) => `/${language}${path}`;

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const services = [
    {
      title: t("home.services.card1Title"),
      description: t("home.services.card1Desc"),
      features: [
        t("home.services.card1Feature1"),
        t("home.services.card1Feature2"),
        t("home.services.card1Feature3"),
      ],
      bgImage: "/images/ceremony.jpeg",
    },
    {
      title: t("home.services.card2Title"),
      description: t("home.services.card2Desc"),
      features: [
        t("home.services.card2Feature1"),
        t("home.services.card2Feature2"),
        t("home.services.card2Feature3"),
      ],
      bgImage: "/images/riviera.jpeg",
    },
    {
      title: t("home.services.card3Title"),
      description: t("home.services.card3Desc"),
      features: [
        t("home.services.card3Feature1"),
        t("home.services.card3Feature2"),
        t("home.services.card3Feature3"),
      ],
      bgImage: "/images/setup.jpeg",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* Editorial Hero Section */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center bg-neutral-dark text-warm-bg overflow-hidden py-32 md:py-0">
        {/* Background Zoom Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpeg"
            alt="Luxury Muslim wedding ceremony in the Mexican Caribbean — Cancun, Playa del Carmen, Tulum"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-45 transform scale-105"
            style={{
              animation: "slowZoom 25s ease-in-out infinite alternate",
            }}
          />
          {/* Subtle warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="text-xs uppercase tracking-[0.3em] text-primary font-extrabold mb-4"
          >
            {t("home.hero.tagline")}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight max-w-4xl"
          >
            {t("home.hero.title")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="font-serif italic text-lg sm:text-2xl text-warm-bg/85 font-light tracking-wide mt-6 max-w-2xl"
          >
            {t("home.hero.subtitle")}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="h-[1px] w-24 bg-primary/40 my-8"
          />
          <motion.p
            variants={fadeInUp}
            custom={4}
            className="text-sm tracking-widest uppercase font-sans text-warm-bg/70 max-w-lg leading-relaxed"
          >
            {t("home.hero.subheadline")}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-xs uppercase tracking-widest font-sans font-bold hover:bg-primary-hover transition-all duration-300 shadow-lg"
            >
              <MessageCircleCode size={16} /> {t("home.hero.ctaWhatsApp")}
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-warm-bg/40 font-bold">
            {t("home.hero.scrollText")}
          </span>
          <div className="w-[1px] h-10 bg-warm-bg/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Value Proposition / Credential Section */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Beautiful Editorial Arch Copy */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">
                {t("home.about.tagline")}
              </span>
              <h2 className="text-editorial-h2 text-neutral-dark">
                {t("home.about.title")}
              </h2>
              <p className="text-neutral-muted leading-relaxed text-base font-sans mt-2">
                {t("home.about.text1")}
              </p>
              <p className="text-neutral-muted leading-relaxed text-base font-sans">
                {t("home.about.text2")}
              </p>

              {/* Badges/Credentials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 border border-cream-border/60 bg-white flex items-start gap-4">
                  <ShieldCheck className="text-primary h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg font-medium text-neutral-dark">{t("home.about.badgeHalalTitle")}</h4>
                    <p className="text-xs text-neutral-muted mt-1 leading-relaxed">
                      {t("home.about.badgeHalalDesc")}
                    </p>
                  </div>
                </div>
                <div className="p-5 border border-cream-border/60 bg-white flex items-start gap-4">
                  <Star className="text-primary h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg font-medium text-neutral-dark">{t("home.about.badgeLuxuryTitle")}</h4>
                    <p className="text-xs text-neutral-muted mt-1 leading-relaxed">
                      {t("home.about.badgeLuxuryDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Beautiful architectural arch image */}
            <div className="lg:col-span-5 flex justify-center">
              <ElegantArch
                src="/images/destination.jpeg"
                alt="Muslim Weddings Mexico Destination setup in Cancun"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-white border-y border-cream-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">
            {t("home.services.tagline")}
          </span>
          <h2 className="text-editorial-h2 text-neutral-dark max-w-2xl mb-6">
            {t("home.services.title")}
          </h2>
          <div className="h-[1px] w-20 bg-primary/30 mb-16" />

          {/* Cards 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            {services.map((service, index) => (
              <div key={index} className="luxury-card p-0 flex flex-col h-full">
                {/* Image top header inside card */}
                <div className="h-56 overflow-hidden relative border-b border-cream-border">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-dark/10" />
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-neutral-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-muted leading-relaxed font-sans mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="flex flex-col gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-neutral-dark font-medium font-sans">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={lp("/services")}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-bold text-primary hover:text-neutral-dark transition-colors mt-auto group"
                  >
                    {t("home.services.viewDetails")} <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Destination Section */}
      <section className="py-24 bg-warm-bg relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Decorative elegant image frame */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="luxury-border-frame w-full max-w-sm">
                <img
                  src="/images/details.jpeg"
                  alt="Exclusive destination wedding details in Riviera Maya"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[380px] sm:h-[450px] object-cover relative z-10 border border-cream-border"
                />
              </div>
            </div>

            {/* Right: Compelling copy about the destination */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">
                {t("home.destination.tagline")}
              </span>
              <h2 className="text-editorial-h2 text-neutral-dark">
                {t("home.destination.title")}
              </h2>
              <p className="text-neutral-muted leading-relaxed text-base font-sans mt-2">
                {t("home.destination.text1")}
              </p>
              <p className="text-neutral-muted leading-relaxed text-base font-sans">
                {t("home.destination.text2")}
              </p>
              <p className="text-neutral-muted leading-relaxed text-base font-sans">
                {t("home.destination.text3")}
              </p>

              {/* Micro call to action */}
              <div className="mt-4">
                <Link
                  to={lp("/services")}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-dark text-warm-bg text-xs uppercase tracking-widest font-sans font-bold hover:bg-primary transition-all duration-300"
                >
                  {t("home.destination.cta")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden CTA banner */}
      <section className="py-20 bg-neutral-dark text-warm-bg border-t border-cream-border/10">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <Sparkles className="text-primary h-8 w-8 animate-pulse" />
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            {t("home.banner.title")}
          </h2>
          <p className="text-sm text-warm-bg/70 tracking-widest uppercase font-sans max-w-xl leading-relaxed">
            {t("home.banner.text")}
          </p>
          <a
            href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-white text-xs uppercase tracking-widest font-sans font-bold hover:bg-primary-hover transition-all duration-300 shadow-md mt-4"
          >
            <MessageCircleCode size={16} /> {t("home.banner.cta")}
          </a>
        </div>
      </section>
    </motion.div>
  );
}
