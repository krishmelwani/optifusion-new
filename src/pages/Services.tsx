import { useState } from "react";
import { Check, Star, ArrowRight, Users, Brain, TrendingUp, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import PricingCard from "@/components/PricingCard";

const Services = () => {
const [billingPeriod, setBillingPeriod] = useState("monthly");

  const handleWhatsApp = ()=>{
    window.open("https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F", "_blank")
  }

  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions designed for businesses of all sizes.",
      features: [
       "Candidate delivery within 12–24 hours for most roles.",
       "Thorough shortlisting based on your job requirements and ideal candidate profile.",
       "Comprehensive screening to ensure reliability and trust.",
       "Cultural fit analysis to ensure long-term retention and performance.",
       "Priority sourcing & shortlisted candidate recommendations for urgent positions.",
       "Dedicated hiring manager .",
       "End-to-end interview coordination & onboarding assistance.",
       "Personalized WhatsApp and phone support throughout the hiring process.",
       "Weekly performance reports detailing shortlisted, selected, and rejected candidates.",
        
      ],
      details: {
        process: "Our talent acquisition team handles the entire hiring process, combining industry expertise with a focus on speed and quality. We align with your company’s needs and culture to deliver the right candidates efficiently.",
        benefits: [
          "Reduce your time-to-hire by up to 60% with rapid candidate delivery and efficient coordination.",
          "Enhance candidate quality by 40% through detailed shortlisting, screening, and assessments.",
          "Cut recruitment costs by up to 90% compared to traditional consultancies.",
          "Improve retention rates by 25% through culture-fit and long-term suitability evaluation.",
          "Fulfill your complete recruitment needs at a predictable monthly cost  without per-hire charges",
          "Stay informed at every stage with weekly performance reports on shortlisted, selected, and rejected candidates",
          "Leverage domain expertise across Finance, Retail, Marketing, BPO, and IT sectors.",
          "Enjoy priority shortlisting & featured listings to close positions faster.",
          ]
      }
    }
  ];




  const faqs = [
    {
      question: "What makes Optifusion Technologies different from other recruitment agencies?",
      answer: "We combine unlimited job postings, a dedicated hiring dashboard, and end-to-end support—from screening and skill assessments to interview and onboarding guidance—to ensure precise, efficient, and high-quality hiring."

    },
    {
      question: "How does your dashboard help streamline recruitment?",
      answer: "Our dashboard provides real-time updates on applications, shortlisted candidates, interview schedules, and hiring progress, giving complete visibility and control over your recruitment process."
    },
    {
      question: "How quickly can I access high-quality candidates?",
      answer: "We deliver carefully screened and scored candidate profiles within 12–24 hours, ensuring fast and efficient hiring without compromising on quality."
    },
    {
      question: "Do you ensure candidates are a cultural fit for my company?",
      answer: "Yes, every candidate is evaluated not only for skills but also for alignment with your company’s culture, ensuring long-term success and engagement."
    },
    {
      question: "Are skill assessments included with candidate profiles?",
      answer: "Absolutely. Each candidate comes with skill assessment results and scored resumes to help you make informed hiring decisions quickly."
    },
    {
      question: "Can I try your services before subscribing?",
      answer: "Yes, we offer a free demo that lets you experience our recruitment process, evaluate candidate quality, and explore the dashboard before committing."
    },
    {
      question: "How can I get support during the recruitment process?",
      answer:"Our dedicated team is available via email, call, or WhatsApp to guide you at every step, ensuring smooth communication and timely support."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "We conduct a thorough analysis of your needs, company culture, and specific requirements.",
      icon: Target
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our team creates a customized strategy and timeline tailored to your goals.",
      icon: Brain
    },
    {
      step: "03",
      title: "Execution & Implementation",
      description: "We execute the plan using our proven methodologies and cutting-edge tools.",
      icon: Zap
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to ensure maximum results and ROI.",
      icon: TrendingUp
    }
  ];




 
  return (
    <div className="pt-20">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text" data-aos="fade-up">
              Services & Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 " style={{ animationDelay: '0.2s' }} data-aos="fade-up">
              Comprehensive HR solutions designed to transform your workforce 
              and accelerate your business growth.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From talent acquisition to workforce analytics, we provide end-to-end HR solutions
            </p>
          </div>

          <Tabs defaultValue="talent-acquisition" className="max-w-6xl mx-auto">
            {/* <TabsList className="grid w-full grid-cols-1 glass p-2">
              <TabsTrigger value="talent-acquisition" className="text-xl">Talent Acquisition</TabsTrigger>
              {/* <TabsTrigger value="hr-consulting">HR Consulting</TabsTrigger> */}
              {/* <TabsTrigger value="workforce-analytics">Workforce Analytics</TabsTrigger> */}
            {/* </TabsList> */} 

             <div className="flex items-center justify-center gap-3 mb-8">
      <Users className="w-10 h-10 text-purple-500 animate-bounce" />
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
        Talent Acquisition
      </h1>
    </div>

            {services.map((service, index) => (
              <TabsContent 
                key={index} 
                value={service.title.toLowerCase().replace(' ', '-')} 
                className="mt-8 fade-in-up"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <Card className="glass hover-lift" data-aos="fade-down">
                    <CardContent className="p-8">
                      <service.icon className="w-16 h-16 text-primary mb-6" />
                      <h3 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h3>
                      <p className="text-muted-foreground mb-8 text-lg">{service.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="btn-primary w-full">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass hover-lift" data-aos="fade-up">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold mb-6 gradient-text">How It Works</h4>
                      <p className="text-muted-foreground mb-6">{service.details.process}</p>
                      
                      <h5 className="text-xl font-semibold mb-4">Key Benefits</h5>
                      <div className="space-y-3">
                        {service.details.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <TrendingUp className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>


      <div className="text-center py-12 bg-muted/20" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Choose Your Flat Fee Plan</h2>
            <p className="text-muted-foreground mb-8">
              Flexible pricing options designed to grow with your business
            </p>

            <PricingCard />
       </div>

      {/* Process Flow */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6" >
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-aos="fade-up">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="glass hover-lift text-center fade-in-up" data-aos="fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-3">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 " >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up" id="faq-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-aos="zoom-in">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="zoom-in">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass rounded-lg px-6 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                data-aos="fade-up">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <Card className="glass max-w-4xl mx-auto text-center fade-in-up">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Ready to Transform Your HR?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Join 50+ companies that have already revolutionized their hiring process. 
                Let's discuss how we can help you find the perfect talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleWhatsApp} size="lg" className="btn-primary text-xs sm:text-lg px-8 py-4">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;