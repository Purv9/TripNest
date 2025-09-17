import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users, Star, Search } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Golden Triangle Heritage Tour",
    description: "Explore India's most iconic heritage circuit covering Delhi, Agra, and Jaipur with their magnificent monuments",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 45999,
    duration: "8 Days",
    maxGroupSize: 12,
    rating: 4.8,
    reviews: 327,
    theme: "Heritage",
    location: "Delhi, Agra, Jaipur",
    inclusions: ["Flights", "Heritage Hotels", "All Meals", "Expert Guide", "Monument Tickets"],
    featured: true
  },
  {
    id: 2,
    name: "Kerala Backwater & Spice Trail",
    description: "Discover God's Own Country with serene backwaters, spice plantations, and Ayurvedic wellness",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 32999,
    duration: "7 Days",
    maxGroupSize: 10,
    rating: 4.9,
    reviews: 189,
    theme: "Nature",
    location: "Kochi, Munnar, Alleppey",
    inclusions: ["Flights", "Houseboats", "Ayurvedic Spa", "Spice Tour", "Traditional Meals"],
    featured: true
  },
  {
    id: 3,
    name: "Rajasthan Royal Experience",
    description: "Live like royalty in magnificent palaces, explore desert landscapes, and witness vibrant culture",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 55999,
    duration: "10 Days",
    maxGroupSize: 8,
    rating: 4.7,
    reviews: 156,
    theme: "Heritage",
    location: "Jaipur, Udaipur, Jodhpur, Jaisalmer",
    inclusions: ["Flights", "Palace Hotels", "Desert Safari", "Cultural Shows", "Royal Dining"],
    featured: false
  },
  {
    id: 4,
    name: "Himalayan Adventure Ladakh",
    description: "Experience the roof of the world with high-altitude lakes, ancient monasteries, and dramatic landscapes",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 48999,
    duration: "9 Days",
    maxGroupSize: 12,
    rating: 4.6,
    reviews: 98,
    theme: "Adventure",
    location: "Leh, Nubra Valley, Pangong Lake",
    inclusions: ["Flights", "Hotels", "Permits", "Oxygen Support", "Adventure Guide"],
    featured: false
  },
  {
    id: 5,
    name: "South India Temple & Culture Trail",
    description: "Explore ancient Dravidian temples, classical arts, and rich cultural heritage of South India",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 38999,
    duration: "11 Days",
    maxGroupSize: 14,
    rating: 4.9,
    reviews: 134,
    theme: "Culture",
    location: "Chennai, Madurai, Thanjavur, Kochi",
    inclusions: ["Flights", "Hotels", "Temple Tours", "Classical Performances", "Traditional Meals"],
    featured: true
  },
  {
    id: 6,
    name: "Goa Beach & Heritage Escape",
    description: "Relax on golden beaches, explore Portuguese colonial heritage, and enjoy vibrant nightlife",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 28999,
    duration: "6 Days",
    maxGroupSize: 16,
    rating: 4.8,
    reviews: 245,
    theme: "Beach",
    location: "North & South Goa",
    inclusions: ["Flights", "Beach Resorts", "Water Sports", "Heritage Tours", "Seafood Meals"],
    featured: false
  }
];

const themes = ["All", "Heritage", "Beach", "Adventure", "Culture", "Nature", "Spiritual"];
const durations = ["All", "5-7 Days", "8-10 Days", "11+ Days"];
const budgets = ["All", "₹25,000-₹35,000", "₹35,000-₹45,000", "₹45,000-₹55,000", "₹55,000+"];

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTheme = selectedTheme === "All" || pkg.theme === selectedTheme;
    
    let matchesDuration = true;
    if (selectedDuration !== "All") {
      const days = parseInt(pkg.duration);
      switch (selectedDuration) {
        case "5-7 Days":
          matchesDuration = days >= 5 && days <= 7;
          break;
        case "8-10 Days":
          matchesDuration = days >= 8 && days <= 10;
          break;
        case "11+ Days":
          matchesDuration = days >= 11;
          break;
      }
    }

    let matchesBudget = true;
    if (selectedBudget !== "All") {
      switch (selectedBudget) {
        case "₹25,000-₹35,000":
          matchesBudget = pkg.price >= 25000 && pkg.price <= 35000;
          break;
        case "₹35,000-₹45,000":
          matchesBudget = pkg.price >= 35000 && pkg.price <= 45000;
          break;
        case "₹45,000-₹55,000":
          matchesBudget = pkg.price >= 45000 && pkg.price <= 55000;
          break;
        case "₹55,000+":
          matchesBudget = pkg.price >= 55000;
          break;
      }
    }

    return matchesSearch && matchesTheme && matchesDuration && matchesBudget;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            India Tour Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover incredible India with our carefully crafted heritage and cultural journeys
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <div className="bg-card rounded-lg shadow-elegant p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Find Your Perfect India Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations, themes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger>
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map(theme => (
                  <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map(duration => (
                  <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger>
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map(budget => (
                  <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPackages.length} of {packages.length} packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {pkg.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {pkg.theme}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {pkg.location}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Max {pkg.maxGroupSize}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-sm text-muted-foreground">({pkg.reviews})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {pkg.inclusions.map((inclusion) => (
                    <Badge key={inclusion} variant="secondary" className="text-xs">
                      {inclusion}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/packages/${pkg.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No packages found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;