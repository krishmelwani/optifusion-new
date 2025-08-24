import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import WatchDemo from './components/WatchDemo'
// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
const queryClient = new QueryClient();

const App = () =>{
  useEffect(() => {
  AOS.init({
    duration: 850,
    once: false,   // run every scroll
  });

  const handleResize = () => {
    AOS.refresh();  // re-check positions on resize
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/watchdemo" element={<WatchDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);}

export default App;