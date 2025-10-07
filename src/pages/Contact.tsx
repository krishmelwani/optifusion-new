import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["267 b Sindhi colony raja park ",  "Jaipur Rajasthan 302004"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9928610677", , "Mon - Fri 9AM-6PM PST"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["Info@optifusiontechnologies.com", "Hr@optifusiontechnologies.com", "Founder@optifusiontechnologies.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      action: "Schedule Call"
    }
  ];

  const serviceOptions = [
    "Talent Acquisition",
    "HR Consulting", 
    "Workforce Analytics",
    "Executive Search",
    "HR Technology Implementation",
    "Other"
  ];

  const budgetRanges = [
    "Under $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+",
    "Let's discuss"
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring"
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
console.log(formData);


   const handleWhatsApp = ()=>{
    window.open("https://wa.me/919928610677", "_blank")
  }
  



  // send contact form data to googlesheet  

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
       mode: "cors",
    });

    const result = await response.json();
    console.log(result)
    if (result.status === 'success') {
      alert('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } else {
      alert('⚠️ Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('❌ Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};






  return (
    <div className="pt-20">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ready to transform your HR processes? Let's discuss your needs 
              and find the perfect solution for your organization.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 " data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass hover-lift text-center" style={{ animationDelay: `${index * 0.1}s` }} data-aos="fade-up">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a
                    href={
                      info.action === "Call Now"
                        ? "tel:+919928610677"
                        : info.action === "Get Directions"
                        ? "https://maps.app.goo.gl/rw6Q6fgnP6zdXNpaA"
                        : info.action === "Send Email"
                        ? "mailto:Info@optifusiontechnologies.com?subject=Inquiry&body=Hello, I want to know more about your services."
                        : info.action === "Schedule Call"
                        ? "https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F"
                        : "#"
                    }
                    target={
                      info.action === "Get Directions" || info.action === "Schedule Call"
                        ? "_blank" // external web links → open new tab
                        : undefined // tel: and mailto: → open system app
                    }
                    rel="noopener noreferrer"
                  >
                    <Button   variant="outline" size="sm" className="btn-glass">
                    {info.action}
                  </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="glass hover-lift" data-aos="fade-down">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text flex items-center">
                  <MessageSquare className="w-8 h-8 mr-3" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="glass"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company Inc."
                        className="glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="glass"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interested In</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="glass">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="glass">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project and how we can help..."
                      rows={5}
                      required
                      className="glass resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8 fade-in-right">
              {/* Map Placeholder */}
              {/* <Card className="glass hover-lift">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Business District<br />
                        San Francisco, CA 94102
                      </p>
                      <Button variant="outline" size="sm" className="mt-4 btn-glass">
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Quick Actions */}
              <Card className="glass hover-lift" data-aos="fade-up">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    Schedule a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Prefer to talk? Schedule a free 30-minute consultation call with our team.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full btn-primary">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                    <Button variant="outline" className="w-full btn-glass">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now: +91 9928610677
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="glass hover-lift" data-aos="fade-up">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 gradient-text">
                        Fast Response Guarantee
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We respond to all inquiries within 24 hours during business days. 
                        For urgent matters, call us directly for immediate assistance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <Card className="glass max-w-4xl mx-auto text-center fade-in-up">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Check out our comprehensive FAQ section or reach out to our support team 
                for personalized assistance with your HR needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services#faq-section">
                <Button  size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                  View FAQ
                </Button>
                </Link>
                <Button onClick={handleWhatsApp} size="lg" className="btn-primary text-lg px-8 py-4">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;