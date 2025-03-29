
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TailorCard from '@/components/TailorCard';
import TestimonialCard from '@/components/TestimonialCard';
import { mockTailors, mockTestimonials } from '@/data/mockData';
import { 
  Search, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  MessagesSquare, 
  Scissors, 
  TrendingUp,
  Award,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  // Featured tailors (first 3)
  const featuredTailors = mockTailors.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-pattern">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Find Reliable Tailors For Your <span className="text-brand-purple">Perfect Fit</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Connect with verified tailors, track your orders in real-time, and pay securely. Never worry about unreliable service again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/tailors">
                    <Button className="bg-brand-purple hover:bg-brand-dark text-white px-6 py-6 text-lg">
                      Find Tailors
                    </Button>
                  </Link>
                  <Link to="/become-a-tailor">
                    <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light px-6 py-6 text-lg">
                      Become a Tailor
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800" 
                    alt="Tailor at work" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-light rounded-full z-0"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How TailorTrust Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Our simple process ensures quality tailoring and secure transactions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <Card className="card-hover border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-brand-light text-brand-purple rounded-full mb-4">
                    <Search className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">1. Find a Tailor</h3>
                  <p className="text-gray-600">Browse verified tailors based on ratings, location, and specialty. View portfolios and previous work.</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-brand-light text-brand-purple rounded-full mb-4">
                    <Scissors className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">2. Place Your Order</h3>
                  <p className="text-gray-600">Describe your clothing specifications, upload images, and make a secure payment held in escrow.</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-brand-light text-brand-purple rounded-full mb-4">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">3. Track Progress</h3>
                  <p className="text-gray-600">Get real-time updates on your order. Payment is only released when you're satisfied with the result.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/how-it-works">
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Tailors */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tailors</h2>
                <p className="text-gray-600 max-w-2xl">Connect with our top-rated tailors trusted by hundreds of customers</p>
              </div>
              <Link to="/tailors" className="mt-4 md:mt-0">
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light">
                  View All Tailors
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTailors.map(tailor => (
                <TailorCard key={tailor.id} tailor={tailor} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TailorTrust</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We've transformed the traditional tailoring experience to ensure reliability and quality</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-start p-6">
                <div className="p-3 rounded-full bg-brand-light text-brand-purple mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Tailors</h3>
                <p className="text-gray-600">All tailors on our platform are vetted for skills and reliability.</p>
              </div>
              
              <div className="flex flex-col items-start p-6">
                <div className="p-3 rounded-full bg-brand-light text-brand-purple mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600">Your payment is held in escrow until you approve the final product.</p>
              </div>
              
              <div className="flex flex-col items-start p-6">
                <div className="p-3 rounded-full bg-brand-light text-brand-purple mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Monitor your order's progress with regular updates from your tailor.</p>
              </div>
              
              <div className="flex flex-col items-start p-6">
                <div className="p-3 rounded-full bg-brand-light text-brand-purple mb-4">
                  <MessagesSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
                <p className="text-gray-600">Chat directly with your tailor to ensure your vision is realized.</p>
              </div>
              
              <div className="flex flex-col items-start p-6">
                <div className="p-3 rounded-full bg-brand-light text-brand-purple mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
                <p className="text-gray-600">Our team helps resolve any issues to ensure your satisfaction.</p>
              </div>
              
              <div className="flex flex-col items-start p-6">
                <div className="p-3 rounded-full bg-brand-light text-brand-purple mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">We stand behind the quality of every order processed through our platform.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Read reviews from customers who've found their perfect fit</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockTestimonials.map(testimonial => (
                <TestimonialCard 
                  key={testimonial.id}
                  name={testimonial.name}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                  date={testimonial.date}
                  text={testimonial.text}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-brand-purple text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Tailor?</h2>
              <p className="text-lg opacity-90 mb-8">
                Join TailorTrust today and connect with skilled tailors for your next clothing project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/tailors">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100 px-6 py-6 text-lg">
                    Browse Tailors
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="border-white text-white hover:bg-brand-dark px-6 py-6 text-lg">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
