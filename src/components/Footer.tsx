import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from '../assets/optifusion-removebg-preview.png'
 
export const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Talent Acquisition",
    "HR Consulting", 
    "Workforce Analytics",
    "Executive Search",
    "HR Technology",
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <img src={logo} alt=""  width={50} height={50}/>
              </div>
              <span className="text-xl font-bold gradient-text">Optifusion Technologies</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Transforming workforce management through AI-powered HR solutions. 
              We connect exceptional talent with forward-thinking companies.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">267 b Sindhi colony raja park Jaipur Rajasthan 302004</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 9928610677</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Info@optifusiontechnologies.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest HR trends and insights delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass text-sm"
              />
              <Button className="w-full btn-primary text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2025 Optifusion Technologies. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline" className="w-9 h-9 p-0 rounded-full btn-glass">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-9 h-9 p-0 rounded-full btn-glass">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-9 h-9 p-0 rounded-full btn-glass">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};