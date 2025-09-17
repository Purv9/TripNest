import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Plane, Hotel, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [travelers, setTravelers] = useState(2);

  // Indian hero image - Taj Mahal at sunrise
  const heroImage = "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

  const featuredDestinations = [
    {
      id: 1,
      name: "Taj Mahal, Agra",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹15,999",
      rating: 4.9,
      reviews: 4247,
      description: "Marvel at the eternal symbol of love and Mughal architectural masterpiece in the heart of India",
      popular: true
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹12,999",
      rating: 4.8,
      reviews: 2156,
      description: "Serene houseboat cruises through palm-fringed canals and emerald waters",
      popular: false
    },
    {
      id: 3,
      name: "Rajasthan Royal Circuit",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹18,999",
      rating: 4.9,
      reviews: 3821,
      description: "Explore the royal palaces, forts, and vibrant culture of Rajasthan's majestic cities",
      popular: true
    }
  ];

  const popularPackages = [
    {
      id: 1,
      title: "Incredible India Heritage Tour",
      destinations: ["Delhi", "Agra", "Jaipur", "Varanasi"],
      duration: "12 days",
      price: "₹45,999",
      originalPrice: "₹52,999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      included: ["Flights", "Hotels", "Meals", "Guide", "Monuments"]
    },
    {
      id: 2,
      title: "South India Temple Trail",
      destinations: ["Chennai", "Madurai", "Kochi", "Mysore"],
      duration: "10 days", 
      price: "₹32,999",
      originalPrice: "₹38,999",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      included: ["Flights", "Hotels", "Temple Tours", "Cultural Shows"]
    },
    {
      id: 3,
      title: "Himalayan Adventure",
      destinations: ["Leh", "Ladakh", "Manali", "Rishikesh"],
      duration: "14 days",
      price: "₹55,999",
      originalPrice: "₹65,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      included: ["Flights", "Hotels", "Trekking", "Yoga Sessions"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "IncredibleIndia made our Golden Triangle tour absolutely magical. The heritage hotels and guided tours exceeded all expectations!"
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore, India", 
      rating: 5,
      text: "The Kerala backwater experience was divine. From houseboats to Ayurvedic spas, every detail was perfectly arranged."
    },
    {
      name: "Anita Patel",
      location: "Delhi, India",
      rating: 5,
      text: "Our Ladakh adventure was life-changing. The monasteries, landscapes, and cultural immersion were unforgettable."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins animate-fade-up">
            Discover Incredible
            <span className="block text-accent"> India</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Experience the rich heritage, diverse cultures, and breathtaking landscapes of India. From the Taj Mahal to Kerala backwaters, create memories that last a lifetime.
          </p>

          {/* Hero Search */}
          <div className="search-container max-w-4xl mx-auto animate-fade-up" style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Delhi, Mumbai, Goa, Kerala..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input type="date" className="pl-10 h-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select 
                    value={travelers} 
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full h-12 pl-10 pr-4 rounded-md border border-input bg-background text-foreground"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <Button className="w-full md:w-auto btn-hero px-12 py-4 text-lg">
              <Search className="w-5 h-5 mr-2" />
              Explore India
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/destinations" className="travel-card p-8 text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Map className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore India</h3>
              <p className="text-muted-foreground">Discover incredible destinations across India</p>
            </Link>
            <Link to="/hotels" className="travel-card p-8 text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Hotel className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Heritage Hotels</h3>
              <p className="text-muted-foreground">Stay in palaces, forts, and luxury resorts</p>
            </Link>
            <Link to="/packages" className="travel-card p-8 text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Plane className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">India Tour Packages</h3>
              <p className="text-muted-foreground">Curated experiences from Golden Triangle to Kerala</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Incredible India Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From the majestic Himalayas to tropical beaches, explore India's diverse landscapes and rich cultural heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Link key={destination.id} to={`/destinations/${destination.id}`} className="group">
                <Card className="travel-card overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {destination.popular && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        Popular
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-semibold text-sm">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {destination.reviews.toLocaleString()} reviews
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button variant="outline" size="lg" className="px-8">
                Explore All India Destinations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-card-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">India Tour Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Carefully crafted journeys showcasing India's heritage, culture, and natural beauty with expert guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg) => (
              <Card key={pkg.id} className="travel-card overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-semibold">
                    Save ₹{(parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))).toLocaleString()}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{pkg.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.destinations.map((dest) => (
                      <Badge key={dest} variant="secondary" className="text-xs">
                        {dest}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.included.slice(0, 3).map((item) => (
                      <span key={item} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                    {pkg.included.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{pkg.included.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <Button className="btn-secondary">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/packages">
              <Button className="btn-hero px-8">
                Explore India Packages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our India Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real experiences from travelers who discovered the magic of India with TravelHub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="travel-card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;