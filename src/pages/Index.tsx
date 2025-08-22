import { useEffect, useState } from "react";
import { ArrowRight, Users, Award, TrendingUp, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Partners from '../components/Partners'
import { Link } from "react-router-dom";


const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -270, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 270, behavior: "smooth" });
    }
  };



  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const achievements = [
    { icon: Users, label: "Candidates Placed", value: 500, suffix: "+" },
    { icon: Award, label: "Companies Served", value: 50, suffix: "+" },
    { icon: TrendingUp, label: "Success Rate", value: 95, suffix: "%" },
    { icon: Star, label: "Client Rating", value: 4.9, suffix: "/5" },
  ];

  const services = [
    {
      title: "Talent Acquisition",
      description: "Find the perfect candidates for your organization with our advanced recruitment strategies.",
      features: ["AI-powered matching", "Comprehensive screening", "Culture fit assessment"]
    },
    {
      title: "HR Consulting",
      description: "Transform your HR processes with expert guidance and innovative solutions.",
      features: ["Process optimization", "Policy development", "Compliance assurance"]
    },
    {
      title: "Workforce Analytics",
      description: "Make data-driven decisions with our advanced workforce analytics platform.",
      features: ["Performance insights", "Predictive analytics", "Custom reporting"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Malhotra",
      role: "CraftNest Interiors – Co-Founder",
      content: "We struggled to close key roles for months, they solved it in weeks. Smooth process, zero stress.",
      rating: 5
    },
    {
      name: "Rohit Sharma",
      role: "BluePeak Logistics – Director",
      content: "Their HR consulting gave us clarity on policies and compliance—we finally feel structured.",
      rating: 5
    },
    {
      name: "Meena Joshi",
      role: "FreshFarm Foods Pvt. Ltd. – HR Manager",
      content: "Great mix of professionalism and warmth. They don’t just recruit, they really understand your culture.",
      rating: 5
    },
    {
      name: "Sandeep Verma",
      role: "TechHive Digital – CEO",
      content: "Our startup was drowning in hiring chaos, they brought order and quality candidates.",
      rating: 5
    },
    {
      name: "Pooja Kapoor",
      role: "SkillEdge Learning – Founder",
      content: "They redesigned our hiring funnel and we instantly noticed better candidate quality.",
      rating: 5
    },
    {
      name: "Amit Chauhan",
      role: "BrightPath Consulting – Managing Partner",
      content: "Perfect partner for small businesses like ours—we got HR support without needing a full-time HR.",
      rating: 5
    }
  ];


  



  const handleWhatsApp = ()=>{
    window.open("https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F", "_blank")
  }
  return (
    <div className="relative">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 gradient-text animate-gradient">
             Optifusion Technologies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your workforce with AI-powered HR solutions that drive growth, 
              enhance productivity, and create exceptional employee experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleWhatsApp} size="lg" className="btn-primary text-lg px-8 py-4 hover-lift">
                Book Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/watchdemo">
              <Button size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                Watch Demo
              </Button>
              </Link>
            </div>
          </div>
        </div>
 

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose  Optifusion Technologies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              hiring the right talent is vital to your success. We take the time to understand your company’s culture, values, and goals to connect you with candidates who are skilled and align with your unique work environment. This approach helps build engaged, cohesive teams that support long-term growth.
Our transparent and collaborative process keeps you informed at every stage. By prioritizing quality and fit over quantity, we help you make confident hiring decisions tailored to your evolving needs. Partner with Optifusion for personalized talent acquisition solutions that keep your business competitive in today’s fast-changing market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <Card key={index} className="glass hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text ">
  <AnimatedCounter end={item.value} suffix={item.suffix} />
</div>

                  <p className="text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Preview */}
        <Partners />
      {/* Testimonials Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from the companies we've helped transform
            </p>
          </div>

           <div className="relative w-full">
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className= {`absolute -left-6 top-1/2 transform -translate-y-1/2 bg-indigo-700 shadow-md rounded-full p-2 z-10`}
      >
        <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide hide-scrollbar scroll-smooth p-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px]  md:w-[400px] scroll-snap-align-start"
          >
            <Card className="glass hover-lift fade-in-up min-h-[350px] md:min-h-[250px]">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-16">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-indigo-700 shadow-md rounded-full p-2 z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-8 sm:h-8" />
      </button>
    </div>

          
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <Card className="glass max-w-4xl mx-auto fade-in-up">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Stay Updated with HR Trends
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest insights, tips, and industry trends delivered to your inbox. 
                Join thousands of HR professionals who trust our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-primary">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;