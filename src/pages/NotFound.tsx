import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6">
        <Card className="glass max-w-2xl mx-auto text-center hover-lift">
          <CardContent className="p-12">
            <div className="text-8xl font-bold gradient-text mb-6 animate-pulse-glow">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.history.back()}
                variant="outline" 
                size="lg"
                className="btn-glass text-lg px-8 py-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                size="lg"
                className="btn-primary text-lg px-8 py-4"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
