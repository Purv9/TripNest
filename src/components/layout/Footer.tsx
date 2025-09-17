import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Stay Updated with India Travel Deals
          </h3>
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Your gateway to discovering Incredible India. From heritage monuments to 
            pristine beaches, spiritual journeys to adventure trails - explore the 
            diverse beauty and rich culture of India with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground flex-1"
            />
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground px-8">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">IncredibleIndia</span>
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted partner in exploring Incredible India. Discover heritage monuments, 
              book authentic experiences, and plan your dream Indian adventure with local expertise.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Explore India</h4>
            <ul className="space-y-3">
              {[
                { name: "India Destinations", path: "/destinations" },
                { name: "India Tour Packages", path: "/packages" },
                { name: "Heritage Hotels", path: "/hotels" },
                { name: "Travel Blog", path: "/blog" },
                { name: "About India", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">India Services</h4>
            <ul className="space-y-3">
              {[
                "Domestic Flights",
                "Heritage Hotels", 
                "India Car Rental",
                "Cultural Tours",
                "India Travel Insurance",
                "India Visa Assistance",
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/80 hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-background/80">
                  Connaught Place, New Delhi, India 110001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80">+91 11 4567 8900</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80">info@incredibleindia.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} IncredibleIndia. All rights reserved. | Discover the magic of India with us.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;