import { useEffect, useState } from "react";
import { ArrowRight, Users, Award, TrendingUp, Star, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Partners from '../components/Partners'
import { Link } from "react-router-dom";
import bgVideo from '../../public/companyLogo/hero_video_loop.webm';

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



  const testimonials = [
    {
      
      name: "Ridhi agarwal",
      role: "Talent Acquisition Manager, VoiceConnect BPO Indore",
      content: "We had a high volume hiring requirement and Optifusion managed it perfectly Their recruiter provided shortlisted candidates quickly and helped us close positions on time The support and professionalism were consistent from start to end",
      rating: 5
    },
    {

      name: "Shruti Mehta",
      role: "Senior HR Specialist, DigiPulse Solutions Pvt Ltd Ahmedabad",
      content: "Optifusion has simplified our entire recruitment process Their recruiter is attentive and always ensures we receive the right profiles for each role We have successfully closed multiple positions with their help in a short span of time",
      rating: 5
    },
   
    {
      name: "Rajesh Khanna",
      role: "HR Lead, BrightEdge Analytics Pvt Ltd Gurgaon",
      content: " We opted for their annual plan since we hire throughout the year It has been a convenient and cost effective solution Their recruiter provides detailed updates every week and makes sure the positions are closed within timelines We are very satisfied with their service",
      rating: 5
    },
    {
      name: "Neha Verma",
      role: "HR Lead, MedAxis Healthcare Pvt Ltd Delhi",
      content: "Our hospital tied up with Optifusion for operations and admin staff hiring We went with their monthly plan and within the first week we started getting relevant profiles The team is polite and very professional",
      rating: 5
    },
     {
    "name": "Manoj Iyer",
    "role": "HR Business Partner, BioSure Pharmaceuticals, Mumbai",
    "content": "The pricing model offered by Optifusion works very well for us. It is cost effective compared to traditional consultancy models and gives us the flexibility to hire multiple roles. Their service quality and timely response make them easy to work with.",
    "rating": 5
  },
  {
    "name": "Nikhil Tiwari",
    "role": "HR Head, BuildRight Realty Pvt Ltd, Gurgaon",
    "content": "Our company required business development executives and admin roles across multiple cities. Optifusion handled multi-location hiring efficiently. The team coordinated interviews perfectly and provided complete updates throughout.",
    "rating": 5
  },
  {
    "name": "Shreya Metha",
    "role": "Senior HR Specialist, StyleMart Retail Pvt Ltd, Ahmedabad",
    "content": "We have been working with Optifusion for over three months now and the experience has been excellent. Their recruiter is proactive and shares relevant candidates very fast. The best part is we can hire as per our need without worrying about extra cost.",
    "rating": 5
  },
  {
    "name": "Pooja Iyer",
    "role": "HR Business Partner, FreshVale Consumer Products, Mumbai",
    "content": "Optifusion has been supporting our sales and distribution hiring for over six months. The recruiter team is responsive and shares strong profiles within timelines. We also find their flat pricing model very reasonable and simple to manage.",
    "rating": 5
  }
  ];


  



  const handleWhatsApp = ()=>{
    window.open("https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F", "_blank")
  }
  return (
    <div className="relative">
      <ScrollAnimations />
      
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-10">
    <source src={bgVideo} type="video/webm" />
  
  </video>

  {/* Hero Content */}
  <div className="container mx-auto px-6 text-center relative z-10">
    <div
      className={`transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col justify-center items-center`}
    >
      <h1 className="text-5xl md:text-8xl font-bold mb-6 gradient-text animate-gradient">
        Optifusion Technologies
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Transform your workforce with AI-powered HR solutions that drive growth,
        enhance productivity, and create exceptional employee experiences.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
        <div>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 
             hover:from-indigo-600 hover:to-indigo-300 text-white font-bold 
             px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transform ease-in-out duration-3000
             hover:scale-105 hover:shadow-lg hover:shadow-gray-600
             flex items-center justify-center gap-2 animate-slowbounce"
          >
            Book Free Demo
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <Link to="/watchdemo" className="w-full sm:w-auto">
          <button className="w-full btn-glass backdrop-blur-sm text-gray-800 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 outline-none hover:shadow-gray-600">
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            Watch Demo
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-aos='zoom-in' >
              Why Choose  Optifusion Technologies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos='slide-right'>
              hiring the right talent is vital to your success. We take the time to understand your company’s culture, values, and goals to connect you with candidates who are skilled and align with your unique work environment. This approach helps build engaged, cohesive teams that support long-term growth.
Our transparent and collaborative process keeps you informed at every stage. By prioritizing quality and fit over quantity, we help you make confident hiring decisions tailored to your evolving needs. Partner with Optifusion for personalized talent acquisition solutions that keep your business competitive in today’s fast-changing market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <Card key={index} className="glass hover-lift " data-aos="flip-up" style={{ animationDelay: `${index * 0.1}s` }} >
                <CardContent className="p-8 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-indigo-500">
  <AnimatedCounter end={item.value} suffix={item.suffix} />
</div>

                  <p className="text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        <section className="py-10 px-6 sm:px-12 md:px-24">
          <div className="container mx-auto px-6" >
            <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-aos='fade-down'  >
            Our Partners

            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos='fade-down' >
             We're proud to partner with innovative businesses across various industries to deliver exceptional digital solutions.
            </p>
          </div>
          </div>
      {/* Partners Preview */}
        <Partners className="mt-5 p-5"/>
          </section>
      {/* Testimonials Preview */}
   <section className="py-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-aos="fade-right">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-right">
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
            className="flex-shrink-0 w-[250px]  md:w-[400px] scroll-snap-align-start "
          data-aos='fade-right'>
            <Card className="glass hover-lift fade-in-up min-h-[350px] md:min-h-[300px] hover:drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]" >
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-8">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground truncate">
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
          <Card className="glass max-w-4xl mx-auto  " data-aos="fade-up">
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