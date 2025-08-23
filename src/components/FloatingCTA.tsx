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

  
  const handleWhatsApp = ()=>{
    window.open("https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F", "_blank")
  }
  return (
    <div className="fixed bottom-6 right-6 z-40 ">
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
          <div className="space-y-3 ">
            <Button  onClick={handleWhatsApp} className="w-full btn-primary ">
              <Phone className="w-8 h-8 " />
              Schedule Call
            </Button>
            {/* <Button variant="outline" className="w-full btn-glass">
              Send Message
            </Button> */}
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="btn-primary rounded-full w-14 h-14 p-0 shadow-2xl hover-lift animate-bounce"
        >
          <Phone className="w-6 h-6 " />
        </Button>
      )}
    </div>
  );
};