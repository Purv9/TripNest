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
    name: "Tropical Paradise Bali",
    description: "Experience the magic of Bali with pristine beaches, ancient temples, and vibrant culture",
    image: "/src/assets/package-bali.jpg",
    price: 899,
    duration: "7 Days",
    maxGroupSize: 12,
    rating: 4.8,
    reviews: 127,
    theme: "Beach",
    location: "Bali, Indonesia",
    inclusions: ["Flights", "Hotels", "Meals", "Guide"],
    featured: true
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    description: "Conquer majestic peaks, pristine lakes, and charming alpine villages",
    image: "/src/assets/package-alps.jpg",
    price: 1299,
    duration: "10 Days",
    maxGroupSize: 8,
    rating: 4.9,
    reviews: 89,
    theme: "Adventure",
    location: "Switzerland",
    inclusions: ["Flights", "Hotels", "Activities", "Guide"],
    featured: true
  },
  {
    id: 3,
    name: "Santorini Sunset Romance",
    description: "Romantic getaway with stunning sunsets, white-washed villages, and azure waters",
    image: "/src/assets/package-santorini.jpg",
    price: 1150,
    duration: "6 Days",
    maxGroupSize: 6,
    rating: 4.7,
    reviews: 203,
    theme: "Romance",
    location: "Santorini, Greece",
    inclusions: ["Flights", "Hotels", "Meals", "Activities"],
    featured: false
  },
  {
    id: 4,
    name: "Tokyo Cultural Immersion",
    description: "Discover ancient traditions meets modern innovation in Japan's bustling capital",
    image: "/src/assets/package-tokyo.jpg",
    price: 1450,
    duration: "8 Days",
    maxGroupSize: 10,
    rating: 4.6,
    reviews: 156,
    theme: "Culture",
    location: "Tokyo, Japan",
    inclusions: ["Flights", "Hotels", "Meals", "Guide"],
    featured: false
  },
  {
    id: 5,
    name: "African Safari Wildlife",
    description: "Witness the Big Five and experience the raw beauty of African wilderness",
    image: "/src/assets/package-safari.jpg",
    price: 2100,
    duration: "12 Days",
    maxGroupSize: 6,
    rating: 4.9,
    reviews: 94,
    theme: "Wildlife",
    location: "Kenya & Tanzania",
    inclusions: ["Flights", "Lodges", "Meals", "Safari Guide"],
    featured: true
  },
  {
    id: 6,
    name: "Iceland Northern Lights",
    description: "Chase the Aurora Borealis and explore dramatic landscapes of fire and ice",
    image: "/src/assets/package-iceland.jpg",
    price: 1680,
    duration: "9 Days",
    maxGroupSize: 8,
    rating: 4.8,
    reviews: 112,
    theme: "Adventure",
    location: "Reykjavik, Iceland",
    inclusions: ["Flights", "Hotels", "Activities", "Guide"],
    featured: false
  }
];

const themes = ["All", "Beach", "Adventure", "Culture", "Romance", "Wildlife"];
const durations = ["All", "5-7 Days", "8-10 Days", "11+ Days"];
const budgets = ["All", "$500-$1000", "$1000-$1500", "$1500-$2000", "$2000+"];

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
        case "$500-$1000":
          matchesBudget = pkg.price >= 500 && pkg.price <= 1000;
          break;
        case "$1000-$1500":
          matchesBudget = pkg.price >= 1000 && pkg.price <= 1500;
          break;
        case "$1500-$2000":
          matchesBudget = pkg.price >= 1500 && pkg.price <= 2000;
          break;
        case "$2000+":
          matchesBudget = pkg.price >= 2000;
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
            Tour Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover amazing adventures crafted just for you
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <div className="bg-card rounded-lg shadow-elegant p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Find Your Perfect Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search packages..."
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
                    <div className="text-2xl font-bold text-primary">${pkg.price}</div>
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