
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockTailors, mockTestimonials } from '@/data/mockData';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TestimonialCard from '@/components/TestimonialCard';
import { 
  Star, 
  MapPin, 
  Calendar, 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Upload,
  Info,
  MessageSquare,
  Clock,
  ShieldCheck
} from 'lucide-react';

const TailorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  
  // Find the tailor from mock data
  const tailor = mockTailors.find(t => t.id === id);
  
  // Tailored testimonials for this specific tailor
  const tailorTestimonials = mockTestimonials.slice(0, 2);
  
  if (!tailor) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold mb-2">Tailor Not Found</h1>
            <p className="text-gray-600 mb-6">The tailor you're looking for doesn't exist or has been removed.</p>
            <Link to="/tailors">
              <Button className="bg-brand-purple hover:bg-brand-dark">
                Browse All Tailors
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          {/* Back to Tailors */}
          <div className="mb-6">
            <Link to="/tailors" className="text-brand-purple hover:underline flex items-center">
              <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
              Back to Tailors
            </Link>
          </div>
          
          {/* Tailor Header */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="relative h-48 md:h-64 bg-gradient-to-r from-brand-purple to-brand-dark">
              {/* Cover design pattern */}
              <div className="absolute inset-0 opacity-10 hero-pattern"></div>
              
              {/* Profile picture */}
              <div className="absolute -bottom-16 left-6 md:left-10">
                <div className="relative">
                  <img 
                    src={tailor.avatar} 
                    alt={tailor.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                  {tailor.isVerified && (
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                      <CheckCircle className="h-6 w-6 text-brand-purple" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="pt-20 pb-6 px-6 md:px-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                  <div className="flex items-center flex-wrap gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold">{tailor.name}</h1>
                    {tailor.isVerified && (
                      <Badge className="bg-brand-purple text-white">Verified</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center mt-2 text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{tailor.location}</span>
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(tailor.rating) 
                            ? 'text-yellow-500 fill-yellow-500' 
                            : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {tailor.rating.toFixed(1)} ({tailor.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button 
                    className="bg-brand-purple hover:bg-brand-dark md:w-auto w-full"
                    onClick={() => setOrderFormOpen(true)}
                  >
                    Place Order
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-brand-purple text-brand-purple hover:bg-brand-light md:w-auto w-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column - Tabs */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="mb-6 bg-white border border-gray-200">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="border-none p-0">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">About {tailor.name}</h2>
                      <p className="text-gray-700 mb-6">{tailor.bio}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Specialties</h3>
                          <div className="flex flex-wrap gap-2">
                            {tailor.specialties.map((specialty, index) => (
                              <Badge key={index} variant="secondary" className="bg-brand-light text-brand-purple">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Statistics</h3>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-gray-600">Orders Completed:</span>
                              <span className="font-medium">{tailor.completedOrders}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Rating:</span>
                              <span className="font-medium flex items-center">
                                {tailor.rating.toFixed(1)}
                                <Star className="h-4 w-4 ml-1 text-yellow-500 fill-yellow-500" />
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Joined:</span>
                              <span className="font-medium">January 2022</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="portfolio" className="border-none p-0">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                      <p className="text-gray-700 mb-6">View samples of {tailor.name}'s previous work.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tailor.portfolioImages.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                            <img 
                              src={image} 
                              alt={`Portfolio item ${index + 1}`}
                              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="border-none p-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Client Reviews</h2>
                        <div className="flex items-center">
                          <span className="text-3xl font-bold text-gray-900 mr-2">{tailor.rating.toFixed(1)}</span>
                          <div>
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-5 w-5 ${i < Math.floor(tailor.rating) 
                                    ? 'text-yellow-500 fill-yellow-500' 
                                    : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {tailor.reviewCount} reviews
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {tailorTestimonials.map(testimonial => (
                          <div key={testimonial.id} className="border-b border-gray-100 pb-6 last:border-0">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                <img 
                                  src={testimonial.avatar} 
                                  alt={testimonial.name}
                                  className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                                <div>
                                  <h4 className="font-medium">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {Array(5).fill(0).map((_, i) => (
                                  <Star 
                                    key={i}
                                    className={`h-4 w-4 ${i < testimonial.rating 
                                      ? 'text-yellow-500 fill-yellow-500' 
                                      : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700">{testimonial.text}</p>
                          </div>
                        ))}
                        
                        {/* More Reviews Button */}
                        <div className="text-center pt-2">
                          <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light">
                            View All {tailor.reviewCount} Reviews
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right column - Info Cards */}
            <div className="lg:w-1/3 space-y-6">
              {/* Order Now Card */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Ready to Place an Order?</h3>
                  <p className="text-gray-600 mb-6">
                    Get started with your custom tailoring request and receive a quote from {tailor.name}.
                  </p>
                  <Button 
                    className="w-full bg-brand-purple hover:bg-brand-dark"
                    onClick={() => setOrderFormOpen(true)}
                  >
                    Place Order Now
                  </Button>
                </CardContent>
              </Card>
              
              {/* Availability Card */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Availability</h3>
                  <div className="flex items-start mb-4">
                    <Calendar className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Current Wait Time</h4>
                      <p className="text-gray-600">Approximately 1-2 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Working Hours</h4>
                      <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                      <p className="text-gray-600">Sat: 10AM - 4PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Trust & Safety Card */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="h-5 w-5 text-brand-purple mr-2" />
                    <h3 className="text-lg font-semibold">Trust & Safety</h3>
                  </div>
                  
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>ID Verified by TailorTrust</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure Payment via Escrow</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dispute Resolution Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>100% Satisfaction Guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      {/* Order Form Dialog */}
      <Dialog open={orderFormOpen} onOpenChange={setOrderFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Place an Order with {tailor.name}</DialogTitle>
            <DialogDescription>
              Describe what you need and get a quote. Payment will be held in escrow until you're satisfied.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            <div className="space-y-2">
              <Label htmlFor="orderType">Order Type</Label>
              <select id="orderType" className="w-full rounded-md border border-gray-300 p-2">
                <option value="new">New Custom Garment</option>
                <option value="alteration">Alteration of Existing Garment</option>
                <option value="repair">Repair Work</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your order in detail. Include measurements, fabric preferences, style references, etc."
                className="min-h-32"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Reference Images</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                  Drag & drop files here or click to browse
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Upload up to 5 images (PNG, JPG, GIF up to 5MB each)
                </p>
                <Input
                  type="file"
                  multiple
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget (Estimated)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Preferred Deadline</Label>
                <Input
                  id="deadline"
                  type="date"
                />
              </div>
            </div>
            
            <div className="flex items-start bg-blue-50 p-3 rounded-md">
              <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <p className="text-sm text-blue-700">
                Your payment will be held in escrow until you confirm satisfaction with the order. You'll have an opportunity to review and approve the final work.
              </p>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                className="border-gray-300"
                onClick={() => setOrderFormOpen(false)}
              >
                Cancel
              </Button>
              <Button className="bg-brand-purple hover:bg-brand-dark">
                Submit Order Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default TailorProfile;
