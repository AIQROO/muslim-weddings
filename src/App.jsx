import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";
import {
  LanguageProvider,
  SUPPORTED_LANGS,
  DEFAULT_LANG,
} from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

function LangGate() {
  const { lang } = useParams();
  if (!SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANG}`} replace />;
  }
  return <Outlet />;
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-warm-bg text-neutral-dark selection:bg-primary/20 selection:text-neutral-dark">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={<Navigate to={`/${DEFAULT_LANG}`} replace />}
              />
              <Route path="/:lang" element={<LangGate />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="process" element={<Process />} />
                <Route path="contact" element={<Contact />} />
              </Route>
              {/* Legacy fallbacks (also handled by Vercel 301s for first-hit SEO) */}
              <Route
                path="/services"
                element={<Navigate to={`/${DEFAULT_LANG}/services`} replace />}
              />
              <Route
                path="/process"
                element={<Navigate to={`/${DEFAULT_LANG}/process`} replace />}
              />
              <Route
                path="/contact"
                element={<Navigate to={`/${DEFAULT_LANG}/contact`} replace />}
              />
              <Route
                path="*"
                element={<Navigate to={`/${DEFAULT_LANG}`} replace />}
              />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </Router>
  );
}
