import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t("navbar.inicio"), path: "/" },
    { name: t("navbar.servicios"), path: "/services" },
    { name: t("navbar.proceso"), path: "/process" },
    { name: t("navbar.contacto"), path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-warm-bg/95 backdrop-blur-md border-b border-cream-border shadow-sm ${
          scrolled ? "py-4" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 flex items-center justify-center rounded-full bg-neutral-dark/5 p-1 border border-cream-border/30 group-hover:border-primary/50 transition-colors duration-300">
              <img
                src="/logo.png"
                alt="Muslim Weddings Mexico Archway Logo"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest text-neutral-dark uppercase leading-none font-medium">
                {t("navbar.logoTitle")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mt-1">
                {t("navbar.logoSubtitle")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2 text-sm tracking-widest uppercase font-sans text-neutral-dark font-medium transition-colors duration-300 group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive(link.path) ? "text-primary font-semibold" : "text-neutral-dark/80 group-hover:text-primary"
                  }`}
                >
                  {link.name}
                </span>
                {/* Underline Slide Animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Switcher & CTA */}
          <div className="hidden md:flex items-center">
            {/* Desktop Language Switcher */}
            <div className="flex items-center gap-2 mr-8 text-xs font-sans tracking-widest font-bold">
              <button
                onClick={() => setLanguage("es")}
                className={`transition-colors duration-300 cursor-pointer ${
                  language === "es" ? "text-primary" : "text-neutral-dark/40 hover:text-primary"
                }`}
              >
                ES
              </button>
              <span className="text-neutral-dark/20 font-normal">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors duration-300 cursor-pointer ${
                  language === "en" ? "text-primary" : "text-neutral-dark/40 hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-xs uppercase tracking-widest font-sans font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-none shadow-sm hover:shadow-md"
            >
              {t("navbar.hablemos")}
            </Link>
          </div>

          {/* Mobile Menu Burger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-dark hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-dark/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-warm-bg border-l border-cream-border p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pb-8 border-b border-cream-border">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="Muslim Weddings Mexico"
                className="h-8 w-8 object-contain"
              />
              <span className="font-serif text-sm tracking-wider text-neutral-dark uppercase font-semibold">
                {t("navbar.logoTitle")}
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-dark hover:text-primary transition-colors focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg tracking-widest uppercase font-serif py-2 border-b border-cream-border/40 transition-colors ${
                  isActive(link.path) ? "text-primary font-medium" : "text-neutral-dark hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-3 mt-8 justify-start text-[10px] font-sans tracking-widest font-bold border-t border-cream-border/40 pt-6">
            <span className="text-neutral-dark/40">{t("misc.languageLabel")}</span>
            <button
              onClick={() => setLanguage("es")}
              className={`transition-colors cursor-pointer ${
                language === "es" ? "text-primary" : "text-neutral-dark/40"
              }`}
            >
              ES
            </button>
            <span className="text-neutral-dark/20 font-normal">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors cursor-pointer ${
                language === "en" ? "text-primary" : "text-neutral-dark/40"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu CTAs */}
        <div className="flex flex-col gap-4 mt-auto">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-4 bg-primary text-xs uppercase tracking-widest font-sans font-bold text-white hover:bg-primary-hover transition-colors"
          >
            {t("navbar.hablemos")}
          </Link>
          <a
            href="https://wa.me/525549114170?text=Hola,%20estamos%20interesados%20en%20planear%20nuestra%20boda%20con%20Muslim%20Weddings%20Mexico.%20Nos%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20locaciones%20y%20la%20hospitalidad%20halal."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 border border-neutral-dark/20 text-xs uppercase tracking-widest font-sans font-bold text-neutral-dark hover:border-neutral-dark flex items-center justify-center gap-2 transition-colors"
          >
            <PhoneCall size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
