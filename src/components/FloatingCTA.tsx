import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isExpanded ? (
        <div className="bg-card glass rounded-2xl p-6 shadow-2xl animate-scale-in max-w-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg gradient-text">
              Book Free Consultation
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Ready to transform your HR processes? Let's discuss your needs and find the perfect solution.
          </p>
          <div className="space-y-3">
            <Button className="w-full btn-primary">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
            <Button variant="outline" className="w-full btn-glass">
              Send Message
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="btn-primary rounded-full w-14 h-14 p-0 shadow-2xl animate-pulse-glow hover-lift"
        >
          <Phone className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};