import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  MapPin, 
  Star,
  Hotel,
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
  Bed
} from "lucide-react";

const HotelManagementDashboard = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Santorini Blue Dome Resort",
      location: "Oia, Santorini",
      stars: 5,
      pricePerNight: 450,
      status: "active",
      bookings: 89,
      rating: 4.9,
      type: "Resort",
      rooms: 45
    },
    {
      id: 2,
      name: "Ubud Jungle Retreat",
      location: "Ubud, Bali",
      stars: 4,
      pricePerNight: 180,
      status: "active",
      bookings: 67,
      rating: 4.7,
      type: "Boutique",
      rooms: 25
    }
  ]);

  const [isAddingHotel, setIsAddingHotel] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: "",
    location: "",
    stars: "",
    pricePerNight: "",
    type: "",
    description: "",
    amenities: "",
    rooms: ""
  });

  const handleAddHotel = () => {
    const hotelData = {
      id: Date.now(),
      name: newHotel.name,
      location: newHotel.location,
      stars: parseInt(newHotel.stars),
      pricePerNight: parseInt(newHotel.pricePerNight),
      status: "active",
      bookings: 0,
      rating: 0,
      type: newHotel.type,
      rooms: parseInt(newHotel.rooms)
    };

    setHotels([...hotels, hotelData]);
    setNewHotel({
      name: "",
      location: "",
      stars: "",
      pricePerNight: "",
      type: "",
      description: "",
      amenities: "",
      rooms: ""
    });
    setIsAddingHotel(false);
  };

  const handleDeleteHotel = (id: number) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  const totalBookings = hotels.reduce((sum, hotel) => sum + hotel.bookings, 0);
  const totalRevenue = hotels.reduce((sum, hotel) => sum + (hotel.bookings * hotel.pricePerNight), 0);
  const averageRating = hotels.reduce((sum, hotel) => sum + hotel.rating, 0) / hotels.length;
  const totalRooms = hotels.reduce((sum, hotel) => sum + hotel.rooms, 0);

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hotel Management Dashboard</h1>
          <p className="text-muted-foreground">Manage your hotels and track performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Hotels</p>
                  <p className="text-2xl font-bold">{hotels.length}</p>
                </div>
                <Hotel className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Rooms</p>
                  <p className="text-2xl font-bold">{totalRooms}</p>
                </div>
                <Bed className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                  <p className="text-2xl font-bold">{averageRating.toFixed(1)}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="hotels" className="space-y-6">
          <TabsList>
            <TabsTrigger value="hotels">My Hotels</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="hotels" className="space-y-6">
            {/* Add Hotel Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">My Hotels</h2>
              <Dialog open={isAddingHotel} onOpenChange={setIsAddingHotel}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Hotel
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Hotel</DialogTitle>
                    <DialogDescription>
                      Add a new hotel to your management portfolio
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Hotel Name</Label>
                      <Input
                        id="name"
                        value={newHotel.name}
                        onChange={(e) => setNewHotel({...newHotel, name: e.target.value})}
                        placeholder="Enter hotel name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={newHotel.location}
                        onChange={(e) => setNewHotel({...newHotel, location: e.target.value})}
                        placeholder="Enter location"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stars">Star Rating</Label>
                      <Select value={newHotel.stars} onValueChange={(value) => setNewHotel({...newHotel, stars: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stars" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 Stars</SelectItem>
                          <SelectItem value="4">4 Stars</SelectItem>
                          <SelectItem value="5">5 Stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pricePerNight">Price per Night ($)</Label>
                      <Input
                        id="pricePerNight"
                        type="number"
                        value={newHotel.pricePerNight}
                        onChange={(e) => setNewHotel({...newHotel, pricePerNight: e.target.value})}
                        placeholder="Enter price per night"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rooms">Number of Rooms</Label>
                      <Input
                        id="rooms"
                        type="number"
                        value={newHotel.rooms}
                        onChange={(e) => setNewHotel({...newHotel, rooms: e.target.value})}
                        placeholder="Enter number of rooms"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Hotel Type</Label>
                      <Select value={newHotel.type} onValueChange={(value) => setNewHotel({...newHotel, type: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Resort">Resort</SelectItem>
                          <SelectItem value="Boutique">Boutique</SelectItem>
                          <SelectItem value="Business">Business</SelectItem>
                          <SelectItem value="Luxury">Luxury</SelectItem>
                          <SelectItem value="Budget">Budget</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newHotel.description}
                        onChange={(e) => setNewHotel({...newHotel, description: e.target.value})}
                        placeholder="Enter hotel description"
                        rows={3}
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="amenities">Amenities (comma separated)</Label>
                      <Textarea
                        id="amenities"
                        value={newHotel.amenities}
                        onChange={(e) => setNewHotel({...newHotel, amenities: e.target.value})}
                        placeholder="Enter hotel amenities"
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddingHotel(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddHotel}>
                      Add Hotel
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Hotels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{hotel.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hotel.location}
                        </CardDescription>
                      </div>
                      <Badge variant={hotel.status === 'active' ? 'default' : 'secondary'}>
                        {hotel.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {[...Array(hotel.stars)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Badge variant="secondary">{hotel.type}</Badge>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          {hotel.rooms} rooms
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {hotel.bookings} bookings
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${hotel.pricePerNight}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{hotel.rating}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDeleteHotel(hotel.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Track your hotel bookings and guest information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No bookings yet. Your hotels will appear here once guests start booking.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Revenue</span>
                      <span className="font-semibold">${totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Room Rate</span>
                      <span className="font-semibold">${Math.round(hotels.reduce((sum, hotel) => sum + hotel.pricePerNight, 0) / hotels.length)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Occupancy Rate</span>
                      <span className="font-semibold">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hotel Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Resort', 'Boutique', 'Luxury'].map((type) => (
                      <div key={type} className="flex justify-between items-center">
                        <span>{type}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{width: '45%'}}></div>
                          </div>
                          <span className="text-sm text-muted-foreground">45%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HotelManagementDashboard;