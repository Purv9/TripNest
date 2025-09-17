import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const destinations = [
    {
      id: 1,
      name: "Taj Mahal, Agra",
      state: "Uttar Pradesh",
      region: "North India",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹15,999",
      rating: 4.9,
      reviews: 4247,
      description: "Marvel at the eternal symbol of love and Mughal architectural masterpiece.",
      type: "Heritage",
      budget: "luxury",
      highlights: ["Marble Inlay Work", "Mughal Gardens", "Sunrise Views", "UNESCO Site"]
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      state: "Kerala", 
      region: "South India",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹12,999",
      rating: 4.8,
      reviews: 2156,
      description: "Serene houseboat cruises through palm-fringed canals and emerald waters.",
      type: "Nature",
      budget: "moderate",
      highlights: ["Houseboat Stay", "Coconut Groves", "Ayurvedic Spas", "Local Cuisine"]
    },
    {
      id: 3,
      name: "Jaipur Pink City",
      state: "Rajasthan",
      region: "North India", 
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹18,999",
      rating: 4.9,
      reviews: 3821,
      description: "Explore magnificent palaces, forts, and vibrant bazaars of the Pink City.",
      type: "Heritage",
      budget: "luxury",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Local Handicrafts"]
    },
    {
      id: 4,
      name: "Goa Beaches",
      state: "Goa",
      region: "West India",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹14,999", 
      rating: 4.7,
      reviews: 2856,
      description: "Golden beaches, Portuguese heritage, and vibrant nightlife by the Arabian Sea.",
      type: "Beach",
      budget: "moderate",
      highlights: ["Beach Shacks", "Water Sports", "Portuguese Churches", "Seafood"]
    },
    {
      id: 5,
      name: "Leh Ladakh",
      state: "Ladakh",
      region: "North India",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹25,999",
      rating: 4.8,
      reviews: 1854,
      description: "High-altitude desert landscapes, ancient monasteries, and pristine mountain lakes.",
      type: "Adventure", 
      budget: "luxury",
      highlights: ["Pangong Lake", "Nubra Valley", "Buddhist Monasteries", "Mountain Passes"]
    },
    {
      id: 6,
      name: "Varanasi Ghats",
      state: "Uttar Pradesh",
      region: "North India",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹11,999",
      rating: 4.9,
      reviews: 1987,
      description: "Experience the spiritual heart of India along the sacred Ganges River.",
      type: "Spiritual",
      budget: "budget",
      highlights: ["Ganga Aarti", "Ancient Temples", "Boat Rides", "Spiritual Experience"]
    },
    {
      id: 7,
      name: "Hampi Ruins",
      state: "Karnataka",
      region: "South India",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹13,999",
      rating: 4.6,
      reviews: 1456,
      description: "Explore the magnificent ruins of the Vijayanagara Empire amidst boulder landscapes.",
      type: "Heritage",
      budget: "moderate",
      highlights: ["Virupaksha Temple", "Stone Chariot", "Hampi Bazaar", "Rock Formations"]
    },
    {
      id: 8,
      name: "Rishikesh",
      state: "Uttarakhand",
      region: "North India",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹9,999",
      rating: 4.7,
      reviews: 2234,
      description: "Yoga capital of the world nestled in the foothills of the Himalayas.",
      type: "Spiritual",
      budget: "budget",
      highlights: ["Yoga Ashrams", "River Rafting", "Lakshman Jhula", "Meditation"]
    }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         dest.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "all" || dest.region === selectedRegion;
    const matchesBudget = selectedBudget === "all" || dest.budget === selectedBudget;
    const matchesType = selectedType === "all" || dest.type === selectedType;
    
    return matchesSearch && matchesRegion && matchesBudget && matchesType;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Explore Incredible India</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From the snow-capped Himalayas to tropical beaches, ancient temples to modern cities, 
            discover India's incredible diversity and rich heritage.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl p-6 shadow-soft mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search destinations, states..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Region Filter */}
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="North India">North India</SelectItem>
                <SelectItem value="South India">South India</SelectItem>
                <SelectItem value="East India">East India</SelectItem>
                <SelectItem value="West India">West India</SelectItem>
                <SelectItem value="Northeast India">Northeast India</SelectItem>
                <SelectItem value="Central India">Central India</SelectItem>
              </SelectContent>
            </Select>

            {/* Budget Filter */}
            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Budgets</SelectItem>
                <SelectItem value="budget">Budget (₹8,000-₹15,000)</SelectItem>
                <SelectItem value="moderate">Moderate (₹15,000-₹25,000)</SelectItem>
                <SelectItem value="luxury">Luxury (₹25,000+)</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Heritage">Heritage</SelectItem>
                <SelectItem value="Beach">Beach</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Spiritual">Spiritual</SelectItem>
                <SelectItem value="Nature">Nature</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(selectedRegion !== "all" || selectedBudget !== "all" || selectedType !== "all") && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm font-medium">Active filters:</span>
              {selectedRegion !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedRegion("all")}>
                  {selectedRegion} ×
                </Badge>
              )}
              {selectedBudget !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedBudget("all")}>
                  {selectedBudget} ×
                </Badge>
              )}
              {selectedType !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedType("all")}>
                  {selectedType} ×
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Link key={destination.id} to={`/destinations/${destination.id}`} className="group">
              <Card className="travel-card overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {destination.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{destination.state}</span>
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
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight) => (
                      <span key={highlight} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{destination.highlights.length - 3} more</span>
                    )}
                  </div>
                  
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

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">No destinations found</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or browse all destinations.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("all");
                setSelectedBudget("all");
                setSelectedType("all");
              }}
              className="btn-secondary"
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredDestinations.length > 0 && (
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8">
              Discover More India
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;