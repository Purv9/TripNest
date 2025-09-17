import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Check, 
  X, 
  Phone, 
  Mail,
  Shield,
  Heart,
  Share2
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Mock data - in a real app this would come from an API
const packageDetails = {
  1: {
    id: 1,
    name: "Golden Triangle Heritage Tour",
    description: "Experience the magic of India's Golden Triangle with magnificent monuments, rich history, and vibrant culture. This comprehensive tour takes you through Delhi, Agra, and Jaipur - India's most iconic heritage circuit.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: 45999,
    duration: "8 Days",
    maxGroupSize: 12,
    rating: 4.8,
    reviews: 327,
    theme: "Heritage",
    location: "Delhi, Agra, Jaipur",
    highlights: [
      "Visit the iconic Taj Mahal",
      "Explore Red Fort and India Gate in Delhi",
      "Discover Amber Fort and City Palace in Jaipur", 
      "Traditional Indian cuisine experiences",
      "Heritage hotel accommodations"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Airport pickup and transfer to heritage hotel. Welcome dinner with traditional Indian cuisine.",
        activities: ["Airport transfer", "Hotel check-in", "Welcome dinner", "Delhi orientation"]
      },
      {
        day: 2,
        title: "Old Delhi Exploration",
        description: "Explore the historic heart of Delhi with visits to Red Fort, Jama Masjid, and Chandni Chowk.",
        activities: ["Red Fort", "Jama Masjid", "Chandni Chowk", "Rickshaw ride"]
      },
      {
        day: 3,
        title: "New Delhi Sightseeing",
        description: "Visit New Delhi's iconic monuments including India Gate and Humayun's Tomb.",
        activities: ["India Gate", "Humayun's Tomb", "Lotus Temple", "Drive to Agra"]
      },
      {
        day: 4,
        title: "Taj Mahal & Agra Fort",
        description: "Early morning visit to the Taj Mahal for sunrise, followed by Agra Fort exploration.",
        activities: ["Taj Mahal sunrise", "Agra Fort", "Marble inlay workshop", "Local cuisine lunch"]
      },
      {
        day: 5,
        title: "Journey to Jaipur",
        description: "Drive to Jaipur with a stop at Fatehpur Sikri, the abandoned Mughal city.",
        activities: ["Fatehpur Sikri", "Drive to Jaipur", "Hotel check-in", "Local market visit"]
      },
      {
        day: 6,
        title: "Jaipur City Tour",
        description: "Explore the Pink City with visits to City Palace, Hawa Mahal, and local bazaars.",
        activities: ["City Palace", "Hawa Mahal", "Jantar Mantar", "Local handicraft shopping"]
      },
      {
        day: 7,
        title: "Amber Fort & Departure",
        description: "Visit the magnificent Amber Fort and transfer to airport for departure.",
        activities: ["Amber Fort", "Elephant ride", "Hotel checkout", "Airport transfer"]
      },
      {
        day: 8,
        title: "Departure",
        description: "Final breakfast and departure from Delhi.",
        activities: ["Return to Delhi", "Final shopping", "Airport departure"]
      }
    ],
    inclusions: [
      "Domestic flights",
      "7 nights accommodation (heritage hotels)",
      "Daily breakfast and 6 dinners",
      "Private air-conditioned transport",
      "English-speaking guide",
      "All monument entrance fees",
      "Airport transfers"
    ],
    exclusions: [
      "International flights to India",
      "Lunch on most days",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Alcoholic beverages"
    ]
  }
};

const PackageDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const packageData = packageDetails[Number(id) as keyof typeof packageDetails];

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
          <Button asChild>
            <Link to="/packages">Back to Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  const totalPrice = packageData.price * travelers;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={packageData.images[currentImageIndex]}
          alt={packageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-4 left-4">
          <Button variant="secondary" size="sm" asChild>
            <Link to="/packages">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Packages
            </Link>
          </Button>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-end">
            <div className="text-white">
              <Badge className="mb-2 bg-primary text-primary-foreground">
                {packageData.theme}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {packageData.name}
              </h1>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {packageData.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {packageData.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Max {packageData.maxGroupSize}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" variant="secondary">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Navigation */}
        {packageData.images.length > 1 && (
          <div className="absolute bottom-4 right-4">
            <div className="flex space-x-2">
              {packageData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    currentImageIndex === index ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Package Overview
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{packageData.rating}</span>
                    <span className="text-sm text-muted-foreground">({packageData.reviews} reviews)</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{packageData.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Highlights:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {packageData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions">What's Included</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="itinerary" className="space-y-4">
                {packageData.itinerary.map((day) => (
                  <Card key={day.day}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Day {day.day}: {day.title}
                      </CardTitle>
                      <CardDescription>{day.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-2">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {activity}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="inclusions" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-600 flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        What's Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {packageData.inclusions.map((item, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600 flex items-center">
                        <X className="h-5 w-5 mr-2" />
                        What's Not Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {packageData.exclusions.map((item, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-semibold">JD</span>
                        </div>
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Amazing experience! The itinerary was perfectly planned and our guide was incredibly knowledgeable. Bali exceeded all expectations."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-semibold">SM</span>
                        </div>
                        <div>
                          <p className="font-semibold">Sarah Miller</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Perfect blend of culture, adventure, and relaxation. The Mount Batur sunrise was absolutely breathtaking!"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Book This Package
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${packageData.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    max={packageData.maxGroupSize}
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum {packageData.maxGroupSize} travelers
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>${packageData.price} × {travelers} travelers</span>
                    <span>${packageData.price * travelers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service fee</span>
                    <span>$50</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${totalPrice + 50}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Book Now
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>Secure booking</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Have questions about this package? Our travel experts are here to help!
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call us: +1 (555) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email: packages@travel.com
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;