import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  Hotel, 
  Users, 
  DollarSign,
  TrendingUp,
  Calendar,
  Star,
  MapPin,
  Search,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle
} from "lucide-react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in real app this would come from API
  const stats = {
    totalPackages: 156,
    totalHotels: 89,
    totalUsers: 2847,
    totalRevenue: 1250000,
    monthlyGrowth: 12.5,
    activeBookings: 234
  };

  const packages = [
    {
      id: 1,
      name: "Golden Triangle Heritage Tour",
      provider: "India Heritage Tours",
      location: "Delhi, Agra, Jaipur",
      price: 45999,
      bookings: 45,
      rating: 4.8,
      status: "active",
      theme: "Heritage"
    },
    {
      id: 2,
      name: "Kerala Backwater Experience",
      provider: "Kerala Nature Tours",
      location: "Kochi, Munnar, Alleppey",
      price: 32999,
      bookings: 23,
      rating: 4.9,
      status: "active",
      theme: "Nature"
    },
    {
      id: 3,
      name: "Rajasthan Royal Circuit",
      provider: "Royal India Tours",
      location: "Jaipur, Udaipur, Jodhpur",
      price: 55999,
      bookings: 18,
      rating: 4.6,
      status: "pending",
      theme: "Heritage"
    }
  ];

  const hotels = [
    {
      id: 1,
      name: "The Oberoi Udaivilas",
      manager: "Oberoi Hotels",
      location: "Udaipur, Rajasthan",
      pricePerNight: 35000,
      bookings: 89,
      rating: 4.9,
      status: "active",
      stars: 5,
      type: "Palace Hotel"
    },
    {
      id: 2,
      name: "Kumarakom Lake Resort",
      manager: "Kerala Resorts",
      location: "Kumarakom, Kerala",
      pricePerNight: 15000,
      bookings: 67,
      rating: 4.7,
      status: "active",
      stars: 4,
      type: "Resort"
    },
    {
      id: 3,
      name: "ITC Grand Chola",
      manager: "ITC Hotels",
      location: "Chennai, Tamil Nadu",
      pricePerNight: 12000,
      bookings: 45,
      rating: 4.6,
      status: "pending",
      stars: 5,
      type: "Luxury"
    }
  ];

  const users = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "tourist",
      joinDate: "2024-01-15",
      bookings: 3,
      status: "active"
    },
    {
      id: 2,
      name: "India Heritage Tours",
      email: "info@indiaheritage.com",
      role: "package-provider",
      joinDate: "2023-08-20",
      packages: 12,
      status: "active"
    },
    {
      id: 3,
      name: "Oberoi Hotels",
      email: "contact@oberoi.com",
      role: "hotel-management",
      joinDate: "2023-06-10",
      hotels: 5,
      status: "active"
    }
  ];

  const filteredPackages = packages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredHotels = hotels.filter(hotel => 
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.manager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage packages, hotels, and users across the platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Packages</p>
                  <p className="text-2xl font-bold">{stats.totalPackages}</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Hotels</p>
                  <p className="text-2xl font-bold">{stats.totalHotels}</p>
                </div>
                <Hotel className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{stats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">₹{(stats.totalRevenue / 10000000).toFixed(1)}Cr</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Growth</p>
                  <p className="text-2xl font-bold">{stats.monthlyGrowth}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Bookings</p>
                  <p className="text-2xl font-bold">{stats.activeBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="packages" className="space-y-6">
          <TabsList>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Package Management</h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search packages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {pkg.location}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">by {pkg.provider}</p>
                      </div>
                      <Badge variant={pkg.status === 'active' ? 'default' : 'secondary'}>
                        {pkg.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{pkg.rating}</span>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {pkg.bookings} bookings • {pkg.theme}
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
                        {pkg.status === 'pending' && (
                          <>
                            <Button size="sm" variant="outline" className="text-green-600">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Hotel Management</h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search hotels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel) => (
                <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{hotel.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hotel.location}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">by {hotel.manager}</p>
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
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${hotel.pricePerNight}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{hotel.rating}</span>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {hotel.bookings} bookings
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
                        {hotel.status === 'pending' && (
                          <>
                            <Button size="sm" variant="outline" className="text-green-600">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">User Management</h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{user.name}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                      </div>
                      <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                        {user.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{user.role}</Badge>
                        <span className="text-sm text-muted-foreground">
                          Joined {new Date(user.joinDate).toLocaleDateString()}
                        </span>
                      </div>

                      {user.bookings && (
                        <div className="text-sm text-muted-foreground">
                          {user.bookings} bookings
                        </div>
                      )}
                      {user.packages && (
                        <div className="text-sm text-muted-foreground">
                          {user.packages} packages
                        </div>
                      )}
                      {user.hotels && (
                        <div className="text-sm text-muted-foreground">
                          {user.hotels} hotels
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Revenue</span>
                      <span className="font-semibold">${stats.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Listings</span>
                      <span className="font-semibold">{stats.totalPackages + stats.totalHotels}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Growth</span>
                      <span className="font-semibold text-green-600">+{stats.monthlyGrowth}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { role: 'Tourists', count: 2500, percentage: 88 },
                      { role: 'Package Providers', count: 245, percentage: 8 },
                      { role: 'Hotel Managers', count: 89, percentage: 3 },
                      { role: 'Admins', count: 13, percentage: 1 }
                    ].map((item) => (
                      <div key={item.role} className="flex justify-between items-center">
                        <span>{item.role}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div 
                              className="h-2 bg-primary rounded-full" 
                              style={{width: `${item.percentage}%`}}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12">{item.count}</span>
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

export default AdminDashboard;