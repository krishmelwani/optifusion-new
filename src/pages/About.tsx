import { useEffect, useState } from "react";
import { Target, Eye, Heart, Calendar, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const About = () => {
  const [activeStep, setActiveStep] = useState(0);




  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver exceptional results through innovative solutions and unwavering commitment to quality."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with the highest ethical standards and genuine care for our clients and candidates."
    }
  ];




  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description: "We launched our journey with a simple goal: to help startups and small businesses find the right talent while also guiding them with practical HR solutions."
    },
    {
      year: "2024",
      title: "First Placements",
      description: "Within months, we successfully placed our first candidates and built trust with early clients who needed reliable hiring support."
    },
    {
      year: "2025",
      title: "Building Partnerships",
      description: "This year, we partnered with growing businesses across different industries, streamlining their hiring processes and creating better HR practices."
    },
    {
      year: "2025",
      title: "Expanding Services",
      description: "Beyond talent acquisition, we started providing end-to-end HR consulting, helping companies with policies, compliance, and workforce management."
    }
  ];

  const industries = [
    {
      name: "Technology",
      icon: "💻",
      description: "Software development, IT services, and tech startups"
    },
    {
      name: "Healthcare",
      icon: "🏥", 
      description: "Medical facilities, pharmaceutical, and healthcare services"
    },
    {
      name: "Finance",
      icon: "💰",
      description: "Banking, insurance, and financial services"
    },
    {
      name: "Retail",
      icon: "🛍️",
      description: "E-commerce, traditional retail, and consumer goods"
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industrial production, logistics, and supply chain"
    },
    {
      name: "Call Centers",
      icon: "📞",
      description: "Customer service, telemarketing, and support centers"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understand Your Needs",
      description: "We conduct in-depth consultations to understand your company culture, requirements, and goals."
    },
    {
      step: "02", 
      title: "Strategic Planning",
      description: "Our team develops a customized strategy tailored to your specific industry and organizational needs."
    },
    {
      step: "03",
      title: "Candidate Sourcing",
      description: "Using our AI-powered platform and extensive network, we identify and attract top-tier candidates."
    },
    {
      step: "04",
      title: "Screening & Assessment",
      description: "Comprehensive evaluation including skills assessment, cultural fit analysis, and reference checks."
    },
    {
      step: "05",
      title: "Perfect Match & Placement",
      description: "We present you with the best candidates and support the entire placement process until completion."
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous follow-up and support to ensure successful integration and long-term satisfaction."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text fade-in-up">
              About  Optifusion Technologies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Founded in 2022, we're transforming the HR landscape with innovative solutions 
              that bridge the gap between exceptional talent and forward-thinking companies.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text fade-in-up">
              Our Story
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-left">
                <p className="text-lg text-muted-foreground mb-6">
                  FutureFlow HR was born from a simple observation: the traditional approach to HR consulting 
                  wasn't keeping pace with the rapidly evolving business landscape. Companies needed smarter, 
                  faster, and more efficient ways to find and retain top talent.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our founders, with over 20 years of combined experience in HR and technology, set out to 
                  create a consultancy that would leverage cutting-edge AI and data analytics while maintaining 
                  the personal touch that makes all the difference in human resources.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we're proud to serve 50+ companies across multiple industries, with a track record 
                  of 500+ successful placements and a 95% client satisfaction rate. But we're just getting started.
                </p>
              </div>
              
              <div className="fade-in-right">
                <Card className="glass hover-lift">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold gradient-text mb-2">2022</div>
                        <div className="text-sm text-muted-foreground">Founded</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Placements</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Companies</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass hover-lift fade-in-up">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with exceptional talent and innovative HR solutions 
                  that drive growth, enhance productivity, and create thriving workplace cultures.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <Eye className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in AI-powered HR consulting, transforming how companies 
                  connect with talent and build high-performing teams.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, and partnership form the foundation of everything we do, 
                  ensuring lasting relationships and outstanding results.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <value.icon className="w-8 h-8 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-3 gradient-text">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - see how we've grown and evolved
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-8">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <Card className="flex-1 glass hover-lift">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, bringing specialized knowledge to each sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="glass hover-lift hover-glow fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that ensures the perfect match between talent and opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className={`glass hover-lift transition-all duration-500
                  fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold gradient-text mb-3">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;