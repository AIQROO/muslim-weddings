import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();
  const lp = (path) => `/${language}${path}`;

  return (
    <footer className="bg-neutral-dark text-warm-bg pt-20 pb-12 border-t border-cream-border/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
        <div className="flex flex-col gap-6">
          <Link to={lp("")} className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-full bg-warm-bg/5 p-1 border border-cream-border/10">
              <img
                src="/logo.png"
                alt="Muslim Weddings Mexico logo"
                className="h-7 w-7 object-contain brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base tracking-widest uppercase leading-none font-semibold text-white">
                {t("navbar.logoTitle")}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-bold mt-1">
                {t("navbar.logoSubtitle")}
              </span>
            </div>
          </Link>
          <p className="text-sm text-warm-bg/70 font-sans leading-relaxed mt-2 pr-4">
            {t("footer.bioDesc")}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <ShieldCheck className="text-primary h-5 w-5 shrink-0" />
            <span className="text-xs uppercase tracking-widest font-semibold text-warm-bg/90">
              {t("footer.bioCertified")}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:pl-8">
          <h4 className="font-serif text-lg text-white uppercase tracking-wider font-light">
            {t("footer.exploreTitle")}
          </h4>
          <nav className="flex flex-col gap-3">
            <Link to={lp("")} className="text-sm text-warm-bg/70 hover:text-primary transition-colors duration-300 font-sans tracking-wide">
              {t("navbar.inicio")}
            </Link>
            <Link to={lp("/services")} className="text-sm text-warm-bg/70 hover:text-primary transition-colors duration-300 font-sans tracking-wide">
              {t("navbar.servicios")}
            </Link>
            <Link to={lp("/process")} className="text-sm text-warm-bg/70 hover:text-primary transition-colors duration-300 font-sans tracking-wide">
              {t("navbar.proceso")}
            </Link>
            <Link to={lp("/contact")} className="text-sm text-warm-bg/70 hover:text-primary transition-colors duration-300 font-sans tracking-wide">
              {t("navbar.contacto")}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg text-white uppercase tracking-wider font-light">
            {t("footer.locationsTitle")}
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm text-warm-bg/70">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>{t("footer.location1")}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-warm-bg/70">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>{t("footer.location2")}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-warm-bg/70">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>{t("footer.location3")}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-warm-bg/70">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>{t("footer.location4")}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg text-white uppercase tracking-wider font-light">
            {t("footer.contactTitle")}
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-warm-bg/70">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary shrink-0" />
              <a
                href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                +52 55 4911 4170
              </a>
            </li>
          </ul>
          <div className="mt-4 p-4 border border-cream-border/10 bg-warm-bg/5 flex flex-col gap-2">
            <span className="text-[10px] text-primary uppercase font-bold tracking-widest">
              {t("footer.halalGuaranteeTitle")}
            </span>
            <p className="text-xs text-warm-bg/50 leading-relaxed font-sans">
              {t("footer.halalGuaranteeDesc")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-[1px] bg-cream-border/10 w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-bg/40 font-sans tracking-wide text-center md:text-left">
            © {currentYear} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-warm-bg/40 hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="text-xs text-warm-bg/40 hover:text-primary transition-colors">
              {t("footer.termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
