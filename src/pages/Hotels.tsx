import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Star, ArrowRight, Wifi, Car, Utensils, Dumbbell, Waves, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedStars, setSelectedStars] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const hotels = [
    {
      id: 1,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      state: "Rajasthan",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 35000,
      rating: 4.9,
      reviews: 1847,
      stars: 5,
      type: "Palace Hotel",
      description: "Magnificent palace hotel overlooking Lake Pichola with traditional Rajasthani architecture and royal hospitality.",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Airport Transfer", "Lake View"],
      features: ["Palace Architecture", "Lake Views", "Royal Suites", "Heritage Dining"],
      popular: true
    },
    {
      id: 2,
      name: "Taj Lake Palace",
      location: "Udaipur, Rajasthan",
      state: "Rajasthan",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 45000,
      rating: 4.7,
      reviews: 1292,
      stars: 5,
      type: "Heritage",
      description: "Floating marble palace on Lake Pichola, offering an enchanting royal experience in the heart of Udaipur.",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Boat Transfer", "Lake View"],
      features: ["Floating Palace", "Marble Architecture", "Royal Dining", "Boat Access"],
      popular: false
    },
    {
      id: 3,
      name: "ITC Grand Chola",
      location: "Chennai, Tamil Nadu",
      state: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 12000,
      rating: 4.8,
      reviews: 2154,
      stars: 5,
      type: "Luxury",
      description: "Inspired by the grandeur of the Chola dynasty, this luxury hotel offers world-class amenities and South Indian hospitality.",
      amenities: ["Free WiFi", "Spa", "Fitness Center", "Restaurant", "Business Center", "Concierge"],
      features: ["Chola Architecture", "Multiple Restaurants", "Grand Ballroom", "Luxury Spa"],
      popular: true
    },
    {
      id: 4,
      name: "Wildflower Hall Shimla",
      location: "Shimla, Himachal Pradesh",
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 18000,
      rating: 4.6,
      reviews: 956,
      stars: 5,
      type: "Mountain Resort",
      description: "Luxury mountain resort in the Himalayas offering breathtaking views and colonial charm in the hill station of Shimla.",
      amenities: ["Free WiFi", "Spa", "Restaurant", "Adventure Sports", "Trekking", "Mountain Views"],
      features: ["Himalayan Views", "Colonial Architecture", "Adventure Activities", "Luxury Spa"],
      popular: false
    },
    {
      id: 5,
      name: "Kumarakom Lake Resort",
      location: "Kumarakom, Kerala",
      state: "Kerala",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 15000,
      rating: 4.9,
      reviews: 1123,
      stars: 4,
      type: "Resort",
      description: "Luxury backwater resort offering traditional Kerala architecture, Ayurvedic treatments, and serene lake views.",
      amenities: ["Free WiFi", "Pool", "Ayurvedic Spa", "Backwater Cruises", "Traditional Cuisine", "Lake Views"],
      features: ["Backwater Views", "Traditional Architecture", "Ayurvedic Treatments", "Houseboat Cruises"],
      popular: true
    },
    {
      id: 6,
      name: "The Leela Palace New Delhi",
      location: "New Delhi",
      state: "Delhi",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 22000,
      rating: 4.5,
      reviews: 1889,
      stars: 5,
      type: "Luxury",
      description: "Opulent luxury hotel in the heart of Delhi, combining traditional Indian hospitality with contemporary elegance.",
      amenities: ["Free WiFi", "Pool", "Spa", "Multiple Restaurants", "Business Center", "Concierge"],
      features: ["Luxury Suites", "Fine Dining", "Spa Treatments", "Central Location"],
      popular: false
    },
    {
      id: 7,
      name: "Goa Marriott Resort",
      location: "Panaji, Goa",
      state: "Goa",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 8500,
      rating: 4.7,
      reviews: 1634,
      stars: 4,
      type: "Beach Resort",
      description: "Beachfront resort offering Portuguese-inspired architecture, water sports, and vibrant Goan hospitality.",
      amenities: ["Free WiFi", "Beach Access", "Pool", "Water Sports", "Restaurant", "Bar"],
      features: ["Beach Location", "Water Sports", "Portuguese Architecture", "Goan Cuisine"],
      popular: true
    },
    {
      id: 8,
      name: "Rambagh Palace Jaipur",
      location: "Jaipur, Rajasthan",
      state: "Rajasthan",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricePerNight: 28000,
      rating: 4.8,
      reviews: 1567,
      stars: 5,
      type: "Palace Hotel",
      description: "Former residence of the Maharaja of Jaipur, now a luxury palace hotel showcasing royal Rajasthani heritage.",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Palace Tours", "Royal Gardens"],
      features: ["Royal Palace", "Heritage Architecture", "Maharaja Suites", "Royal Dining"],
      popular: false
    }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "all" || hotel.state === selectedLocation;
    const matchesStars = selectedStars === "all" || hotel.stars.toString() === selectedStars;
    const matchesType = selectedType === "all" || hotel.type === selectedType;
    
    let matchesPrice = true;
    if (selectedPrice !== "all") {
      switch (selectedPrice) {
        case "budget":
          matchesPrice = hotel.pricePerNight < 10000;
          break;
        case "moderate":
          matchesPrice = hotel.pricePerNight >= 10000 && hotel.pricePerNight < 20000;
          break;
        case "luxury":
          matchesPrice = hotel.pricePerNight >= 20000 && hotel.pricePerNight < 35000;
          break;
        case "ultra-luxury":
          matchesPrice = hotel.pricePerNight >= 35000;
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
      case "ayurvedic spa":
        return <Dumbbell className="w-4 h-4" />;
      case "airport transfer":
      case "boat transfer":
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Heritage Hotels & Luxury Resorts</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience India's royal heritage and luxury hospitality. From palace hotels to mountain resorts, 
            discover accommodations that blend tradition with modern luxury.
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
                  placeholder="Search hotels, cities, states..."
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
                <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                <SelectItem value="Kerala">Kerala</SelectItem>
                <SelectItem value="Goa">Goa</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
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
                <SelectItem value="budget">Budget (Under ₹10,000)</SelectItem>
                <SelectItem value="moderate">Moderate (₹10,000-₹20,000)</SelectItem>
                <SelectItem value="luxury">Luxury (₹20,000-₹35,000)</SelectItem>
                <SelectItem value="ultra-luxury">Ultra Luxury (₹35,000+)</SelectItem>
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
                      <span className="text-sm font-medium">{hotel.state}</span>
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
                      <span className="text-2xl font-bold text-primary">₹{hotel.pricePerNight.toLocaleString()}</span>
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
              Discover More Heritage Hotels
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;