import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Star, ArrowRight, Wifi, Car, Utensils, Dumbbell, Waves, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import santoriniImage from "@/assets/destination-santorini.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import alpsImage from "@/assets/destination-alps.jpg";

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedStars, setSelectedStars] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const hotels = [
    {
      id: 1,
      name: "Santorini Blue Dome Resort",
      location: "Oia, Santorini",
      country: "Greece",
      image: santoriniImage,
      pricePerNight: 450,
      rating: 4.9,
      reviews: 1247,
      stars: 5,
      type: "Resort",
      description: "Luxury resort with iconic blue domes overlooking the Aegean Sea and spectacular sunset views.",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Airport Transfer", "Sea View"],
      features: ["Infinity Pool", "Private Balcony", "Sunset Views", "Fine Dining"],
      popular: true
    },
    {
      id: 2,
      name: "Ubud Jungle Retreat",
      location: "Ubud, Bali",
      country: "Indonesia",
      image: baliImage,
      pricePerNight: 180,
      rating: 4.7,
      reviews: 892,
      stars: 4,
      type: "Boutique",
      description: "Eco-friendly boutique hotel nestled in lush tropical jungle with traditional Balinese architecture.",
      amenities: ["Free WiFi", "Pool", "Yoga Studio", "Restaurant", "Spa", "Garden"],
      features: ["Jungle Views", "Yoga Classes", "Organic Meals", "Nature Walks"],
      popular: false
    },
    {
      id: 3,
      name: "Alpine Grand Hotel",
      location: "Zermatt, Swiss Alps",
      country: "Switzerland",
      image: alpsImage,
      pricePerNight: 680,
      rating: 4.8,
      reviews: 654,
      stars: 5,
      type: "Luxury",
      description: "Historic luxury hotel with breathtaking Matterhorn views and world-class alpine hospitality.",
      amenities: ["Free WiFi", "Spa", "Fitness Center", "Restaurant", "Ski Storage", "Concierge"],
      features: ["Mountain Views", "Ski-in/Ski-out", "Michelin Restaurant", "Luxury Spa"],
      popular: true
    },
    {
      id: 4,
      name: "Tokyo Modern Suites",
      location: "Shibuya, Tokyo",
      country: "Japan",
      image: baliImage,
      pricePerNight: 320,
      rating: 4.6,
      reviews: 1156,
      stars: 4,
      type: "Business",
      description: "Contemporary hotel in the heart of Tokyo with modern amenities and easy access to major attractions.",
      amenities: ["Free WiFi", "Fitness Center", "Restaurant", "Business Center", "Laundry", "24/7 Front Desk"],
      features: ["City Views", "Modern Design", "Central Location", "Tech Amenities"],
      popular: false
    },
    {
      id: 5,
      name: "Maldives Water Villa Resort",
      location: "North Malé Atoll",
      country: "Maldives",
      image: santoriniImage,
      pricePerNight: 850,
      rating: 4.9,
      reviews: 423,
      stars: 5,
      type: "Resort",
      description: "Overwater villas with direct lagoon access, pristine coral reefs, and unparalleled luxury.",
      amenities: ["Free WiFi", "Private Pool", "Spa", "Water Sports", "Fine Dining", "Butler Service"],
      features: ["Overwater Villa", "Private Pool", "Snorkeling", "Sunset Dining"],
      popular: true
    },
    {
      id: 6,
      name: "Marrakech Riad Palace",
      location: "Medina, Marrakech",
      country: "Morocco",
      image: alpsImage,
      pricePerNight: 220,
      rating: 4.5,
      reviews: 789,
      stars: 4,
      type: "Boutique",
      description: "Traditional riad with authentic Moroccan architecture, beautiful courtyards, and rooftop terrace.",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Rooftop Terrace", "Traditional Hammam"],
      features: ["Traditional Architecture", "Rooftop Views", "Authentic Cuisine", "Cultural Experience"],
      popular: false
    },
    {
      id: 7,
      name: "New York Central Park Hotel",
      location: "Manhattan, New York",
      country: "USA",
      image: baliImage,
      pricePerNight: 520,
      rating: 4.7,
      reviews: 2134,
      stars: 4,
      type: "Urban",
      description: "Elegant hotel overlooking Central Park with classic New York sophistication and modern luxury.",
      amenities: ["Free WiFi", "Fitness Center", "Restaurant", "Bar", "Concierge", "Room Service"],
      features: ["Park Views", "Prime Location", "Classic Elegance", "Fine Dining"],
      popular: true
    },
    {
      id: 8,
      name: "Patagonia Eco Lodge",
      location: "Torres del Paine",
      country: "Chile",
      image: alpsImage,
      pricePerNight: 380,
      rating: 4.8,
      reviews: 267,
      stars: 4,
      type: "Eco Lodge",
      description: "Sustainable eco-lodge with stunning views of Torres del Paine National Park and glacier-fed lakes.",
      amenities: ["Free WiFi", "Restaurant", "Hiking Guides", "Observatory", "Library", "Fireplace"],
      features: ["Mountain Views", "Eco-Friendly", "Stargazing", "Adventure Tours"],
      popular: false
    }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "all" || hotel.country === selectedLocation;
    const matchesStars = selectedStars === "all" || hotel.stars.toString() === selectedStars;
    const matchesType = selectedType === "all" || hotel.type === selectedType;
    
    let matchesPrice = true;
    if (selectedPrice !== "all") {
      switch (selectedPrice) {
        case "budget":
          matchesPrice = hotel.pricePerNight < 200;
          break;
        case "moderate":
          matchesPrice = hotel.pricePerNight >= 200 && hotel.pricePerNight < 400;
          break;
        case "luxury":
          matchesPrice = hotel.pricePerNight >= 400 && hotel.pricePerNight < 600;
          break;
        case "ultra-luxury":
          matchesPrice = hotel.pricePerNight >= 600;
          break;
      }
    }
    
    return matchesSearch && matchesLocation && matchesStars && matchesType && matchesPrice;
  });

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "free wifi":
        return <Wifi className="w-4 h-4" />;
      case "pool":
      case "private pool":
        return <Waves className="w-4 h-4" />;
      case "restaurant":
      case "fine dining":
        return <Utensils className="w-4 h-4" />;
      case "fitness center":
      case "spa":
        return <Dumbbell className="w-4 h-4" />;
      case "airport transfer":
      case "ski storage":
        return <Car className="w-4 h-4" />;
      default:
        return <Coffee className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Luxury Hotels & Resorts</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover exceptional accommodations around the world. From boutique hotels to luxury resorts, 
            find your perfect stay with world-class amenities and service.
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
                  placeholder="Search hotels, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Greece">Greece</SelectItem>
                <SelectItem value="Indonesia">Indonesia</SelectItem>
                <SelectItem value="Switzerland">Switzerland</SelectItem>
                <SelectItem value="Japan">Japan</SelectItem>
                <SelectItem value="Maldives">Maldives</SelectItem>
                <SelectItem value="Morocco">Morocco</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Chile">Chile</SelectItem>
              </SelectContent>
            </Select>

            {/* Stars Filter */}
            <Select value={selectedStars} onValueChange={setSelectedStars}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Stars" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stars</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Budget (Under $200)</SelectItem>
                <SelectItem value="moderate">Moderate ($200-$400)</SelectItem>
                <SelectItem value="luxury">Luxury ($400-$600)</SelectItem>
                <SelectItem value="ultra-luxury">Ultra Luxury ($600+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(selectedLocation !== "all" || selectedStars !== "all" || selectedPrice !== "all" || selectedType !== "all") && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm font-medium">Active filters:</span>
              {selectedLocation !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedLocation("all")}>
                  {selectedLocation} ×
                </Badge>
              )}
              {selectedStars !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedStars("all")}>
                  {selectedStars} Stars ×
                </Badge>
              )}
              {selectedPrice !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedPrice("all")}>
                  {selectedPrice} ×
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
            Found {filteredHotels.length} hotel{filteredHotels.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="group">
              <Card className="travel-card overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {hotel.type}
                    </Badge>
                    {hotel.popular && (
                      <Badge className="bg-accent text-accent-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold text-sm">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{hotel.country}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center text-white bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-1">
                        {hotel.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{hotel.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">${hotel.pricePerNight}</span>
                      <div className="text-xs text-muted-foreground">per night</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {hotel.description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity) => (
                      <div key={amenity} className="flex items-center text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {getAmenityIcon(amenity)}
                        <span className="ml-1">{amenity}</span>
                      </div>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="text-xs text-muted-foreground">+{hotel.amenities.length - 4} more</span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {hotel.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {hotel.reviews.toLocaleString()} reviews
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">No hotels found</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or browse all hotels.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedLocation("all");
                setSelectedStars("all");
                setSelectedPrice("all");
                setSelectedType("all");
              }}
              className="btn-secondary"
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredHotels.length > 0 && (
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8">
              Load More Hotels
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;