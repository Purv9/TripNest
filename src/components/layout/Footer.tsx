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
            <span className="text-xl font-bold text-primary">IncredibleIndia</span>
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Stay Updated with Travel Deals
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
              { name: "Heritage Hotels", path: "/hotels" },
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences. 
              Discover amazing destinations, book perfect accommodations, and plan 
              your dream adventures with ease.
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
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Destinations", path: "/destinations" },
                { name: "Tour Packages", path: "/packages" },
                { name: "Hotels", path: "/hotels" },
                { name: "Travel Blog", path: "/blog" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
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
            <h4 className="text-lg font-semibold mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              {[
                "Flight Booking",
                "Hotel Reservation", 
                "Car Rental",
                "Tour Packages",
                "Travel Insurance",
                "Visa Assistance",
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
                  123 Travel Street, Adventure City, AC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80">info@travelhub.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* India Travel Services */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-background/80 text-center lg:text-left">
              © {currentYear} TravelHub. All rights reserved.
              "Heritage Tours",
              "Palace Hotels", 
              "Cultural Experiences",
              "Spiritual Journeys",
              </Link>
              "Festival Tours",
              <p className="text-background/80">+91 11 4567 8900</p>
              </Link>
              <Link to="/cookies" className="text-background/80 hover:text-primary transition-colors">
                Connaught Place, New Delhi, India 110001
              <p className="text-background/80">info@incredibleindia.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
            © {currentYear} IncredibleIndia. All rights reserved.