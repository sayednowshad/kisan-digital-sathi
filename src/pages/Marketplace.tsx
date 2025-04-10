
import React from 'react';
import { Store, Search, Filter, ShoppingCart, Tag, MapPin, Star } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    price: 75,
    unit: "kg",
    rating: 4.8,
    reviews: 45,
    seller: "Krishna Agro Farms",
    location: "Dehradun, Uttarakhand",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    organic: true,
    featured: true
  },
  {
    id: 2,
    name: "Fresh Red Onions",
    price: 30,
    unit: "kg",
    rating: 4.5,
    reviews: 32,
    seller: "Patel Vegetable Farm",
    location: "Nashik, Maharashtra",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    organic: false,
    featured: false
  },
  {
    id: 3,
    name: "Organic Wheat Flour",
    price: 55,
    unit: "kg",
    rating: 4.7,
    reviews: 28,
    seller: "Singh Organic Farms",
    location: "Ludhiana, Punjab",
    image: "https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    organic: true,
    featured: true
  },
  {
    id: 4,
    name: "Fresh Green Chillies",
    price: 40,
    unit: "kg",
    rating: 4.3,
    reviews: 19,
    seller: "Sharma Vegetable Garden",
    location: "Guntur, Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    organic: false,
    featured: false
  },
  {
    id: 5,
    name: "Golden Turmeric Powder",
    price: 150,
    unit: "kg",
    rating: 4.9,
    reviews: 56,
    seller: "Spice Haven",
    location: "Erode, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    organic: true,
    featured: true
  },
  {
    id: 6,
    name: "Sugar Cane Jaggery",
    price: 90,
    unit: "kg",
    rating: 4.6,
    reviews: 38,
    seller: "Reddy Natural Products",
    location: "Kolhapur, Maharashtra",
    image: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    organic: true,
    featured: false
  }
];

const Marketplace = () => {
  return (
    <>
      <PageHeader
        title="Farmer Marketplace"
        description="Buy directly from farmers or list your own produce for sale with transparent pricing and secure transactions."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="w-full md:w-auto flex-grow">
              <div className="relative">
                <Input 
                  placeholder="Search for products, sellers..." 
                  className="pl-10 pr-4 py-2"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filter
              </Button>
              <select className="h-10 px-3 py-2 border border-input rounded-md bg-background text-sm">
                <option value="">Sort By: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  {product.organic && (
                    <Badge className="absolute top-2 left-2 bg-green-600">
                      Organic
                    </Badge>
                  )}
                  {product.featured && (
                    <Badge className="absolute top-2 right-2 bg-amber-600">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex justify-between items-start">
                    <span>{product.name}</span>
                    <span className="text-farm-green font-bold">₹{product.price}/{product.unit}</span>
                  </CardTitle>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{product.rating} ({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <Store size={14} />
                    <span>{product.seller}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{product.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3">
                  <Button className="w-full bg-farm-green hover:bg-farm-green-dark flex items-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Products</Button>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sell Your Produce Directly
            </h2>
            <p className="text-gray-600 mb-6 dark:text-gray-400">
              List your crops and agricultural products directly on our marketplace to reach consumers and local shops without middlemen.
            </p>
            <Button className="bg-farm-green hover:bg-farm-green-dark">Start Selling Now</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center dark:bg-gray-800">
              <div className="h-16 w-16 rounded-full bg-farm-green/10 flex items-center justify-center mb-4">
                <Store size={32} className="text-farm-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Your Shop</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Set up your digital storefront with product listings, pricing details, and delivery options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center dark:bg-gray-800">
              <div className="h-16 w-16 rounded-full bg-farm-green/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M10 3a2 2 0 0 1 4 0c0 2 2 3 2 5s-2 3-4 3-4-1-4-3 2-3 2-5z"></path>
                  <path d="M14 12c2.33-.47 4-1.33 4-2.5C18 5 10 5 10 9.5c0 1.17 1.67 2.03 4 2.5"></path>
                  <path d="M10 14a4 4 0 1 0 8 0v-2a6.97 6.97 0 0 1-8 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Receive Payments</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get paid directly to your bank account through our secure payment processing system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center dark:bg-gray-800">
              <div className="h-16 w-16 rounded-full bg-farm-green/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <rect x="1" y="3" width="22" height="5" rx="2"></rect>
                  <rect x="1" y="16" width="22" height="5" rx="2"></rect>
                  <path d="M5 8v8"></path>
                  <path d="M19 8v8"></path>
                  <path d="M10 8v8"></path>
                  <path d="M14 8v8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Manage Orders</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track orders, manage inventory, and coordinate deliveries through our simple dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-farm-green rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Download the Digital Kisan App</h2>
                  <p className="mb-6">
                    Get instant notifications for orders, manage your store, and track payments on the go with our mobile app.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-farm-green hover:bg-gray-100">
                      Google Play
                    </Button>
                    <Button className="bg-white text-farm-green hover:bg-gray-100">
                      App Store
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 bg-farm-green-dark p-8 flex items-center justify-center">
                  <div className="w-40 h-80 bg-gray-200 rounded-3xl overflow-hidden border-4 border-white relative">
                    {/* This would be a screenshot of the app */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                      <span className="text-gray-600 text-sm">App Screenshot</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplace;
