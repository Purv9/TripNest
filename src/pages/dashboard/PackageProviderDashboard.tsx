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
  Clock, 
  Users, 
  Star,
  Package,
  TrendingUp,
  Calendar,
  DollarSign
} from "lucide-react";

const PackageProviderDashboard = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Golden Triangle Heritage Tour",
      location: "Delhi, Agra, Jaipur",
      duration: "8 Days",
      price: 45999,
      maxGroupSize: 12,
      status: "active",
      bookings: 45,
      rating: 4.8,
      theme: "Heritage"
    },
    {
      id: 2,
      name: "Kerala Backwater Experience",
      location: "Kochi, Munnar, Alleppey",
      duration: "7 Days",
      price: 32999,
      maxGroupSize: 10,
      status: "active",
      bookings: 23,
      rating: 4.9,
      theme: "Nature"
    }
  ]);

  const [isAddingPackage, setIsAddingPackage] = useState(false);
  const [newPackage, setNewPackage] = useState({
    name: "",
    location: "",
    duration: "",
    price: "",
    maxGroupSize: "",
    description: "",
    theme: "",
    highlights: ""
  });

  const handleAddPackage = () => {
    const packageData = {
      id: Date.now(),
      name: newPackage.name,
      location: newPackage.location,
      duration: newPackage.duration,
      price: parseInt(newPackage.price),
      maxGroupSize: parseInt(newPackage.maxGroupSize),
      status: "active",
      bookings: 0,
      rating: 0,
      theme: newPackage.theme
    };

    setPackages([...packages, packageData]);
    setNewPackage({
      name: "",
      location: "",
      duration: "",
      price: "",
      maxGroupSize: "",
      description: "",
      theme: "",
      highlights: ""
    });
    setIsAddingPackage(false);
  };

  const handleDeletePackage = (id: number) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const totalBookings = packages.reduce((sum, pkg) => sum + pkg.bookings, 0);
  const totalRevenue = packages.reduce((sum, pkg) => sum + (pkg.bookings * pkg.price), 0);
  const averageRating = packages.reduce((sum, pkg) => sum + pkg.rating, 0) / packages.length;

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Package Provider Dashboard</h1>
          <p className="text-muted-foreground">Manage your travel packages and track performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Packages</p>
                  <p className="text-2xl font-bold">{packages.length}</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                  <p className="text-2xl font-bold">{totalBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
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

        <Tabs defaultValue="packages" className="space-y-6">
          <TabsList>
            <TabsTrigger value="packages">My Packages</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-6">
            {/* Add Package Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">My Packages</h2>
              <Dialog open={isAddingPackage} onOpenChange={setIsAddingPackage}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Package
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Package</DialogTitle>
                    <DialogDescription>
                      Create a new travel package for your customers
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Package Name</Label>
                      <Input
                        id="name"
                        value={newPackage.name}
                        onChange={(e) => setNewPackage({...newPackage, name: e.target.value})}
                        placeholder="Enter package name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={newPackage.location}
                        onChange={(e) => setNewPackage({...newPackage, location: e.target.value})}
                        placeholder="Enter location"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={newPackage.duration}
                        onChange={(e) => setNewPackage({...newPackage, duration: e.target.value})}
                        placeholder="e.g., 7 Days"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={newPackage.price}
                        onChange={(e) => setNewPackage({...newPackage, price: e.target.value})}
                        placeholder="Enter price"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxGroupSize">Max Group Size</Label>
                      <Input
                        id="maxGroupSize"
                        type="number"
                        value={newPackage.maxGroupSize}
                        onChange={(e) => setNewPackage({...newPackage, maxGroupSize: e.target.value})}
                        placeholder="Enter max group size"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select value={newPackage.theme} onValueChange={(value) => setNewPackage({...newPackage, theme: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Heritage">Heritage</SelectItem>
                          <SelectItem value="Nature">Nature</SelectItem>
                          <SelectItem value="Adventure">Adventure</SelectItem>
                          <SelectItem value="Culture">Culture</SelectItem>
                          <SelectItem value="Spiritual">Spiritual</SelectItem>
                          <SelectItem value="Beach">Beach</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newPackage.description}
                        onChange={(e) => setNewPackage({...newPackage, description: e.target.value})}
                        placeholder="Enter package description"
                        rows={3}
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="highlights">Highlights (comma separated)</Label>
                      <Textarea
                        id="highlights"
                        value={newPackage.highlights}
                        onChange={(e) => setNewPackage({...newPackage, highlights: e.target.value})}
                        placeholder="Enter package highlights"
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddingPackage(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddPackage}>
                      Add Package
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {pkg.location}
                        </CardDescription>
                      </div>
                      <Badge variant={pkg.status === 'active' ? 'default' : 'secondary'}>
                        {pkg.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Max {pkg.maxGroupSize}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{pkg.rating}</span>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {pkg.bookings} bookings
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
                          onClick={() => handleDeletePackage(pkg.id)}
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
                <CardDescription>Track your package bookings and customer information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No bookings yet. Your packages will appear here once customers start booking.</p>
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
                      <span>Average Package Price</span>
                      <span className="font-semibold">${Math.round(packages.reduce((sum, pkg) => sum + pkg.price, 0) / packages.length)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate</span>
                      <span className="font-semibold">12.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Themes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Beach', 'Adventure', 'Culture'].map((theme) => (
                      <div key={theme} className="flex justify-between items-center">
                        <span>{theme}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{width: '60%'}}></div>
                          </div>
                          <span className="text-sm text-muted-foreground">60%</span>
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

export default PackageProviderDashboard;