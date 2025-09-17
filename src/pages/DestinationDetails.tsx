import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, MapPin, Calendar, Users, Camera, Wifi, Car, 
  Utensils, Shield, ArrowLeft, Heart, Share2, 
  Sun, Cloud, Thermometer, Wind
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import santoriniImage from "@/assets/destination-santorini.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import alpsImage from "@/assets/destination-alps.jpg";

const DestinationDetails = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock destination data - in real app this would come from API
  const destination = {
    id: 1,
    name: "Taj Mahal, Agra",
    country: "India",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [santoriniImage, baliImage, alpsImage, santoriniImage],
    price: "₹15,999",
    rating: 4.9,
    reviewCount: 2847,
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.",
    longDescription: "Famous for its stunning architecture, intricate marble inlay work, and romantic history, the Taj Mahal is one of the most iconic monuments in the world. This UNESCO World Heritage Site offers a perfect blend of Mughal architecture, Persian, Turkish and Indian architectural styles. From exploring the main mausoleum to walking through the beautiful gardens, the Taj Mahal provides unforgettable experiences for every traveler.",
    highlights: [
      "Iconic white marble mausoleum",
      "Intricate inlay work and calligraphy", 
      "Beautiful Mughal gardens with fountains",
      "Stunning sunrise and sunset views",
      "UNESCO World Heritage Site",
      "Symbol of eternal love"
    ],
    bestTimeToVisit: "October to March (Peak: November-February)",
    duration: "1-2 days",
    currency: "Indian Rupee (₹)",
    language: "Hindi, English",
    timezone: "GMT+5:30",
    weather: {
      temperature: "25°C",
      condition: "Sunny",
      humidity: "60%",
      wind: "8 km/h"
    },
    attractions: [
      {
        name: "Main Mausoleum",
        description: "The central white marble tomb with intricate inlay work",
        rating: 4.9
      },
      {
        name: "Mughal Gardens",
        description: "Beautiful charbagh gardens with fountains and cypress trees",
        rating: 4.7
      },
      {
        name: "Red Fort Agra",
        description: "Historic fortified palace and UNESCO World Heritage Site",
        rating: 4.6
      },
      {
        name: "Agra Fort",
        description: "Mughal fort with palaces, mosques, and audience halls",
        rating: 4.8
      }
    ],
    reviews: [
      {
        id: 1,
        user: "Priya Sharma",
        avatar: "/api/placeholder/40/40",
        rating: 5,
        date: "March 2024",
        comment: "Absolutely magical! The Taj Mahal at sunrise is breathtaking and the guide was incredibly knowledgeable. A must-visit!"
      },
      {
        id: 2,
        user: "Rajesh Kumar", 
        avatar: "/api/placeholder/40/40",
        rating: 5,
        date: "February 2024",
        comment: "Perfect romantic destination. The architecture, history, and atmosphere exceeded all expectations."
      },
      {
        id: 3,
        user: "Anita Patel",
        avatar: "/api/placeholder/40/40", 
        rating: 4,
        date: "January 2024",
        comment: "Beautiful monument with amazing architecture. A bit crowded during peak hours but still worth visiting."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img 
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-4 left-4 z-10">
          <Link to="/destinations">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Destinations
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
              Popular Destination
            </Badge>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold">{destination.rating}</span>
              <span className="text-sm">({destination.reviewCount.toLocaleString()} reviews)</span>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            {destination.country}
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
                <TabsTrigger value="attractions">Attractions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {/* Description */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About {destination.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {destination.longDescription}
                      </p>
                      <h4 className="font-semibold mb-3">Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {destination.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Travel Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Travel Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Best Time to Visit:</span>
                            <span className="text-muted-foreground">{destination.bestTimeToVisit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Recommended Duration:</span>
                            <span className="text-muted-foreground">{destination.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Currency:</span>
                            <span className="text-muted-foreground">{destination.currency}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Language:</span>
                            <span className="text-muted-foreground">{destination.language}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Timezone:</span>
                            <span className="text-muted-foreground">{destination.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weather */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Sun className="w-5 h-5 mr-2 text-accent" />
                        Current Weather
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <Thermometer className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">{destination.weather.temperature}</div>
                          <div className="text-sm text-muted-foreground">Temperature</div>
                        </div>
                        <div className="text-center">
                          <Cloud className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">{destination.weather.condition}</div>
                          <div className="text-sm text-muted-foreground">Condition</div>
                        </div>
                        <div className="text-center">
                          <Wind className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">{destination.weather.wind}</div>
                          <div className="text-sm text-muted-foreground">Wind</div>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs text-primary-foreground font-bold">%</span>
                          </div>
                          <div className="font-semibold">{destination.weather.humidity}</div>
                          <div className="text-sm text-muted-foreground">Humidity</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="attractions" className="mt-6">
                <div className="space-y-4">
                  {destination.attractions.map((attraction, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold">{attraction.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <span className="font-medium">{attraction.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{attraction.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {destination.reviews.map((review) => (
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
              
              <TabsContent value="gallery" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={image}
                        alt={`${destination.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
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
                  <div className="text-3xl font-bold text-primary mb-2">{destination.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
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
                    <label className="block text-sm font-medium mb-2">Travelers</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select className="w-full pl-10 pr-3 py-2 border border-input rounded-md">
                        <option>1 Traveler</option>
                        <option>2 Travelers</option>
                        <option>3 Travelers</option>
                        <option>4 Travelers</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-hero mb-4">
                  Book Now
                </Button>
                
                <Button variant="outline" className="w-full">
                  Contact Travel Agent
                </Button>

                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground">Free cancellation up to 24 hours before</p>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-primary" />
                    <span className="text-sm">Airport transfers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Utensils className="w-5 h-5 text-primary" />
                    <span className="text-sm">Breakfast included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wifi className="w-5 h-5 text-primary" />
                    <span className="text-sm">Free WiFi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="w-5 h-5 text-primary" />
                    <span className="text-sm">Guided tours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">Travel insurance</span>
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

export default DestinationDetails;