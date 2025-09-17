import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, MapPin, Calendar, Users, Camera, Wifi, Car, 
  Utensils, Shield, ArrowLeft, Heart, Share2, 
  Sun, Cloud, Thermometer, Wind, Phone, Mail,
  Waves, Dumbbell, Coffee, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import santoriniImage from "@/assets/destination-santorini.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import alpsImage from "@/assets/destination-alps.jpg";

const HotelDetails = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock hotel data - in real app this would come from API
  const hotel = {
    id: 1,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [santoriniImage, baliImage, alpsImage, santoriniImage],
    pricePerNight: 35000,
    rating: 4.9,
    reviewCount: 1247,
    stars: 5,
    type: "Palace Hotel",
    description: "Magnificent palace hotel overlooking Lake Pichola with traditional Rajasthani architecture and royal hospitality.",
    longDescription: "Experience the epitome of Indian royal luxury at The Oberoi Udaivilas. Set on the banks of Lake Pichola, our palace hotel offers breathtaking views of the lake and the majestic City Palace. Each suite features traditional Rajasthani architecture with modern amenities, private courtyards, and terraces that overlook the serene waters and historic palaces.",
    amenities: [
      "Free High-Speed WiFi",
      "Swimming Pool",
      "Full-Service Spa",
      "Fine Dining Restaurant",
      "Airport Transfer",
      "24/7 Concierge",
      "Fitness Center",
      "Lake View Rooms",
      "Room Service",
      "Laundry Service",
      "Business Center",
      "Royal Wedding Services"
    ],
    roomTypes: [
      {
        name: "Deluxe Lake View Suite",
        size: "45 sqm",
        occupancy: "2 guests",
        price: 35000,
        features: ["Lake View", "Private Balcony", "King Bed", "Marble Bathroom"]
      },
      {
        name: "Premium Palace Suite",
        size: "65 sqm", 
        occupancy: "2 guests",
        price: 50000,
        features: ["Private Courtyard", "Lake View", "Living Area", "Premium Amenities"]
      },
      {
        name: "Royal Villa",
        size: "120 sqm",
        occupancy: "4 guests", 
        price: 85000,
        features: ["Private Villa", "Private Pool", "Butler Service", "Panoramic Lake Views"]
      }
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours before arrival",
      pets: "Pets not allowed",
      smoking: "Non-smoking property",
      ageRestriction: "Family friendly"
    },
    location_details: {
      address: "Hardasji Ki Magri, Udaipur 313001, Rajasthan, India",
      nearbyAttractions: [
        { name: "City Palace", distance: "2 km" },
        { name: "Lake Pichola", distance: "0.1 km" },
        { name: "Udaipur Airport", distance: "25 km" },
        { name: "Jagdish Temple", distance: "3 km" }
      ]
    },
    reviews: [
      {
        id: 1,
        user: "Priya Mehta",
        avatar: "/api/placeholder/40/40",
        rating: 5,
        date: "March 2024",
        comment: "Absolutely magical! The lake views from our suite were breathtaking. The staff went above and beyond to make our anniversary special. The royal treatment was unforgettable!"
      },
      {
        id: 2,
        user: "Vikram Singh", 
        avatar: "/api/placeholder/40/40",
        rating: 5,
        date: "February 2024",
        comment: "Perfect location in Udaipur with stunning Rajasthani architecture. The restaurant serves incredible Indian cuisine with royal presentation. Worth every penny for this royal experience."
      },
      {
        id: 3,
        user: "Kavita Sharma",
        avatar: "/api/placeholder/40/40", 
        rating: 4,
        date: "January 2024",
        comment: "Beautiful palace hotel with amazing lake views. The spa treatments were divine and the staff was very attentive. The royal hospitality was exceptional."
      }
    ]
  };

  const getAmenityIcon = (amenity: string) => {
    const lowerAmenity = amenity.toLowerCase();
    if (lowerAmenity.includes('wifi')) return <Wifi className="w-5 h-5" />;
    if (lowerAmenity.includes('pool')) return <Waves className="w-5 h-5" />;
    if (lowerAmenity.includes('restaurant') || lowerAmenity.includes('dining')) return <Utensils className="w-5 h-5" />;
    if (lowerAmenity.includes('spa') || lowerAmenity.includes('fitness')) return <Dumbbell className="w-5 h-5" />;
    if (lowerAmenity.includes('transfer') || lowerAmenity.includes('parking')) return <Car className="w-5 h-5" />;
    if (lowerAmenity.includes('concierge') || lowerAmenity.includes('service')) return <Shield className="w-5 h-5" />;
    return <Coffee className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img 
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-4 left-4 z-10">
          <Link to="/hotels">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Hotels
            </Button>
          </Link>
        </div>

        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-8 text-white z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">
              {hotel.type}
            </Badge>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              {[...Array(hotel.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold">{hotel.rating}</span>
              <span className="text-sm">({hotel.reviewCount.toLocaleString()} reviews)</span>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">{hotel.name}</h1>
          <div className="flex items-center text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            {hotel.location}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {/* Description */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About {hotel.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {hotel.longDescription}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Location & Nearby</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="font-medium mb-2">Address:</p>
                        <p className="text-muted-foreground">{hotel.location_details.address}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-3">Nearby Attractions:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {hotel.location_details.nearbyAttractions.map((attraction, index) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                              <span className="text-sm">{attraction.name}</span>
                              <span className="text-sm text-muted-foreground">{attraction.distance}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Policies */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Hotel Policies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Check-in:</span>
                            <span className="text-muted-foreground">{hotel.policies.checkIn}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Check-out:</span>
                            <span className="text-muted-foreground">{hotel.policies.checkOut}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Cancellation:</span>
                            <span className="text-muted-foreground text-sm">{hotel.policies.cancellation}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Pets:</span>
                            <span className="text-muted-foreground">{hotel.policies.pets}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Smoking:</span>
                            <span className="text-muted-foreground">{hotel.policies.smoking}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Age Restriction:</span>
                            <span className="text-muted-foreground">{hotel.policies.ageRestriction}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="rooms" className="mt-6">
                <div className="space-y-4">
                  {hotel.roomTypes.map((room, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <span>{room.size}</span>
                              <span>•</span>
                              <span>{room.occupancy}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">${room.price}</div>
                            <div className="text-sm text-muted-foreground">per night</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {room.features.map((feature) => (
                            <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hotel Amenities & Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {hotel.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          {getAmenityIcon(amenity)}
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {hotel.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">{review.user}</h4>
                                <div className="flex items-center space-x-2">
                                  <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                  </div>
                                  <span className="text-sm text-muted-foreground">{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">${hotel.pricePerNight}</div>
                  <div className="text-sm text-muted-foreground">per night</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-in</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input type="date" className="w-full pl-10 pr-3 py-2 border border-input rounded-md" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-out</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input type="date" className="w-full pl-10 pr-3 py-2 border border-input rounded-md" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select className="w-full pl-10 pr-3 py-2 border border-input rounded-md">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-hero mb-4">
                  Book Now
                </Button>
                
                <Button variant="outline" className="w-full mb-4">
                  Check Availability
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">{hotel.policies.cancellation}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Contact Hotel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm">+91 294 243 3300</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm">reservations@oberoihotels.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Udaipur, Rajasthan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;