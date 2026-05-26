import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
      {/* Scroll Restorer for seamless transitions */}
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col bg-warm-bg text-neutral-dark selection:bg-primary/20 selection:text-neutral-dark">
        {/* Sticky Header */}
        <Navbar />
        
        {/* Page Content Injection */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Elegant Footer */}
        <Footer />
        
        {/* Floating Contextual Badges */}
        <WhatsAppButton />
      </div>
      </Router>
    </LanguageProvider>
  );
}
