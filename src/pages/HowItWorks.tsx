
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ClipboardCheck, 
  CreditCard, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-brand-purple text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">How TailorTrust Works</h1>
              <p className="text-xl opacity-90 mb-8">
                Our platform connects customers with reliable tailors through a secure, transparent process.
              </p>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">The Customer Journey</h2>
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row mb-16">
                <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-xl font-bold mb-3">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-center">Find a Tailor</h3>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <Search className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Browse and Search</h4>
                        <p className="text-gray-600">
                          Browse our network of verified tailors based on location, specialties, ratings, and reviews. Filter search results to find the perfect match for your tailoring needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Review Portfolios</h4>
                        <p className="text-gray-600">
                          Each tailor has a detailed profile showcasing their previous work, customer ratings, and specialties to help you make an informed decision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute left-[16.5%] top-[4rem] w-0.5 h-[calc(100%+4rem)] bg-gray-200 -z-10"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row mb-16">
                <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-xl font-bold mb-3">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-center">Place Your Order</h3>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <ClipboardCheck className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Describe Your Needs</h4>
                        <p className="text-gray-600">
                          Create a detailed order describing your clothing specifications, including measurements, style preferences, and fabric choices. Upload reference images to communicate your vision.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CreditCard className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Secure Payment</h4>
                        <p className="text-gray-600">
                          Make a secure payment that is held in escrow. The payment is only released to the tailor when you're satisfied with the completed order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute left-[16.5%] top-[4rem] w-0.5 h-[calc(100%+4rem)] bg-gray-200 -z-10"></div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row mb-16">
                <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-xl font-bold mb-3">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-center">Track Progress</h3>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <Clock className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Real-time Updates</h4>
                        <p className="text-gray-600">
                          Receive regular status updates from your tailor: "Order Accepted," "Fabric Sourced," "Sewing in Progress," "Final Adjustments," and "Ready for Pickup/Delivery."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Direct Communication</h4>
                        <p className="text-gray-600">
                          Message your tailor directly through our platform to ask questions, provide additional details, or request adjustments as needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute left-[16.5%] top-[4rem] w-0.5 h-[calc(100%+4rem)] bg-gray-200 -z-10"></div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-xl font-bold mb-3">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-center">Complete Your Order</h3>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Delivery and Approval</h4>
                        <p className="text-gray-600">
                          Receive your completed order and review it for quality and accuracy. If you're satisfied, approve the order and release the payment to the tailor.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ShieldCheck className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                        <p className="text-gray-600">
                          If you're not satisfied, you can request modifications or escalate for a refund. Our team will help resolve any issues to ensure your satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* For Tailors */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">For Tailors</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-sm font-bold mr-2">
                        1
                      </div>
                      Create Your Profile
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Sign up as a tailor and create a comprehensive profile showcasing your skills, specialties, and previous work.
                    </p>
                    <ul className="space-y-2 text-gray-600 pl-6 list-disc mb-4">
                      <li>Upload high-quality images of your past work</li>
                      <li>Detail your experience and specialties</li>
                      <li>Set your availability and pricing structure</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-sm font-bold mr-2">
                        2
                      </div>
                      Manage Orders
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Receive and manage customer orders through our tailored dashboard.
                    </p>
                    <ul className="space-y-2 text-gray-600 pl-6 list-disc mb-4">
                      <li>Accept or decline order requests</li>
                      <li>Update order status to keep customers informed</li>
                      <li>Communicate directly with customers</li>
                      <li>Receive secure payments once orders are completed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-sm font-bold mr-2">
                        3
                      </div>
                      Build Your Reputation
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Deliver quality work consistently to earn positive reviews and ratings.
                    </p>
                    <ul className="space-y-2 text-gray-600 pl-6 list-disc mb-4">
                      <li>Collect customer testimonials and ratings</li>
                      <li>Achieve verified status through consistent quality</li>
                      <li>Gain visibility in search results</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-purple text-sm font-bold mr-2">
                        4
                      </div>
                      Grow Your Business
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Expand your client base and increase your income through TailorTrust.
                    </p>
                    <ul className="space-y-2 text-gray-600 pl-6 list-disc mb-4">
                      <li>Access a wider customer base</li>
                      <li>Build long-term relationships with clients</li>
                      <li>Increase your business visibility</li>
                      <li>Focus on your craft while we handle marketing and payments</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/become-a-tailor">
                    <Button className="bg-brand-purple hover:bg-brand-dark">
                      Join as a Tailor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Payment Protection */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Payment Protection</h2>
              <p className="text-center text-gray-600 mb-12">
                TailorTrust ensures your payment is secure with our escrow system
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <ol className="space-y-4 text-gray-600 pl-6 list-decimal">
                      <li>
                        <span className="font-medium text-gray-900">You place an order</span>
                        <p>Make a payment that is securely held in escrow.</p>
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Tailor accepts & completes work</span>
                        <p>The tailor sees that funds are available but cannot access them yet.</p>
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">You review the work</span>
                        <p>Inspect your order to ensure it meets your specifications.</p>
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Approve & release payment</span>
                        <p>Once satisfied, approve the order and the payment is released to the tailor.</p>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">Dispute Resolution</h3>
                    <p className="text-gray-600 mb-4">
                      If you're not satisfied with your order, our team will help resolve the issue:
                    </p>
                    <ul className="space-y-3 text-gray-600 pl-6 list-disc">
                      <li>
                        <span className="font-medium text-gray-900">Request modifications</span>
                        <p>Ask the tailor to make necessary adjustments.</p>
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Mediation</span>
                        <p>Our team will step in to help resolve any disagreements.</p>
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Refund policy</span>
                        <p>In cases where resolution isn't possible, we offer fair refund options.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
              <p className="text-center text-gray-600 mb-12">
                Find answers to common questions about TailorTrust
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">How do I know if a tailor is reliable?</h3>
                  <p className="text-gray-600">
                    All tailors on TailorTrust are vetted, and their profiles display ratings, reviews, and completed order counts. Look for the "Verified" badge for additional assurance of quality and reliability.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied with my order?</h3>
                  <p className="text-gray-600">
                    If you're not satisfied with your order, you can request modifications or open a dispute. Since payment is held in escrow until you approve the order, you're protected if quality standards aren't met.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">How much does it cost to use TailorTrust?</h3>
                  <p className="text-gray-600">
                    Creating an account and browsing tailors is free. TailorTrust charges a small service fee on each transaction to cover payment processing, escrow services, and platform maintenance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Can I become a tailor on the platform?</h3>
                  <p className="text-gray-600">
                    Yes! If you're a skilled tailor, you can join TailorTrust. You'll need to create a professional profile, showcase your previous work, and go through our verification process to start receiving orders.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">How long does it take to complete an order?</h3>
                  <p className="text-gray-600">
                    Order timeframes vary based on complexity, tailor availability, and customization requirements. Each tailor lists their approximate turnaround time, and you'll receive regular updates on your order's progress.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <Link to="/faqs">
                  <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light">
                    View All FAQs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-brand-purple text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg opacity-90 mb-8">
                Join TailorTrust today and connect with skilled tailors for your next clothing project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100">
                    Create an Account
                  </Button>
                </Link>
                <Link to="/tailors">
                  <Button variant="outline" className="border-white text-white hover:bg-brand-dark">
                    Browse Tailors
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

export default HowItWorks;
