import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import santoriniImage from "@/assets/destination-santorini.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import alpsImage from "@/assets/destination-alps.jpg";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      country: "Greece",
      continent: "Europe",
      image: santoriniImage,
      price: "$1,299",
      rating: 4.9,
      reviews: 2847,
      description: "Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
      type: "Beach",
      budget: "luxury",
      highlights: ["Blue Domes", "Sunset Views", "Wine Tasting", "Volcanic Beaches"]
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      country: "Indonesia", 
      continent: "Asia",
      image: baliImage,
      price: "$899",
      rating: 4.8,
      reviews: 1923,
      description: "Tropical paradise with ancient temples, lush rice terraces, and vibrant culture.",
      type: "Cultural",
      budget: "moderate",
      highlights: ["Rice Terraces", "Ancient Temples", "Beach Clubs", "Traditional Arts"]
    },
    {
      id: 3,
      name: "Swiss Alps",
      country: "Switzerland",
      continent: "Europe", 
      image: alpsImage,
      price: "$1,599",
      rating: 4.9,
      reviews: 3421,
      description: "Breathtaking mountain landscapes perfect for skiing, hiking, and photography.",
      type: "Adventure",
      budget: "luxury",
      highlights: ["Mountain Peaks", "Alpine Lakes", "Skiing", "Scenic Railways"]
    },
    {
      id: 4,
      name: "Tokyo, Japan",
      country: "Japan",
      continent: "Asia",
      image: baliImage,
      price: "$1,199", 
      rating: 4.7,
      reviews: 2156,
      description: "Modern metropolis blending ancient traditions with cutting-edge technology.",
      type: "Cultural",
      budget: "moderate",
      highlights: ["Cherry Blossoms", "Temples", "Modern Architecture", "Cuisine"]
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      country: "Peru",
      continent: "South America",
      image: alpsImage,
      price: "$1,099",
      rating: 4.8,
      reviews: 1654,
      description: "Ancient Incan citadel set high in the Andes Mountains.",
      type: "Adventure", 
      budget: "moderate",
      highlights: ["Ancient Ruins", "Inca Trail", "Andean Culture", "Llamas"]
    },
    {
      id: 6,
      name: "Safari Kenya",
      country: "Kenya",
      continent: "Africa",
      image: santoriniImage,
      price: "$2,299",
      rating: 4.9,
      reviews: 987,
      description: "Witness the Great Migration and experience incredible wildlife.",
      type: "Adventure",
      budget: "luxury",
      highlights: ["Big Five", "Great Migration", "Masai Culture", "Savanna"]
    }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContinent = selectedContinent === "all" || dest.continent === selectedContinent;
    const matchesBudget = selectedBudget === "all" || dest.budget === selectedBudget;
    const matchesType = selectedType === "all" || dest.type === selectedType;
    
    return matchesSearch && matchesContinent && matchesBudget && matchesType;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Explore Destinations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover amazing places around the world. From tropical beaches to mountain peaks, 
            find your perfect destination.
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
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Continent Filter */}
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Continent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Continents</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
                <SelectItem value="Africa">Africa</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="South America">South America</SelectItem>
                <SelectItem value="Oceania">Oceania</SelectItem>
              </SelectContent>
            </Select>

            {/* Budget Filter */}
            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Budgets</SelectItem>
                <SelectItem value="budget">Budget ($500-$1000)</SelectItem>
                <SelectItem value="moderate">Moderate ($1000-$1500)</SelectItem>
                <SelectItem value="luxury">Luxury ($1500+)</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Beach">Beach</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Cultural">Cultural</SelectItem>
                <SelectItem value="Urban">Urban</SelectItem>
                <SelectItem value="Nature">Nature</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(selectedContinent !== "all" || selectedBudget !== "all" || selectedType !== "all") && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm font-medium">Active filters:</span>
              {selectedContinent !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedContinent("all")}>
                  {selectedContinent} ×
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
                      <span className="text-sm font-medium">{destination.country}</span>
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
                setSelectedContinent("all");
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
              Load More Destinations
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;