
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OrderStatusBadge, { OrderStatus } from '@/components/OrderStatusBadge';
import { mockOrders } from '@/data/mockData';
import { 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  ExternalLink
} from 'lucide-react';

const UserOrders = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
  const [disputeDialogOpen, setDisputeDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Filter orders based on tab
  const filteredOrders = mockOrders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') {
      return ['pending', 'accepted', 'fabric_sourced', 'in_progress', 'final_adjustments', 'ready'].includes(order.status);
    }
    if (activeTab === 'completed') {
      return order.status === 'delivered';
    }
    if (activeTab === 'cancelled') {
      return order.status === 'cancelled';
    }
    return true;
  });
  
  const handleOpenFeedback = (order) => {
    setSelectedOrder(order);
    setFeedbackDialogOpen(true);
  };
  
  const handleOpenDispute = (order) => {
    setSelectedOrder(order);
    setDisputeDialogOpen(true);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-600">Track and manage your tailoring orders</p>
          </div>
          
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="bg-white rounded-lg shadow-sm p-1 mb-6">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="border-none p-0 mt-0">
              {filteredOrders.length > 0 ? (
                <div className="space-y-6">
                  {filteredOrders.map(order => (
                    <OrderCard 
                      key={order.id} 
                      order={order} 
                      onFeedback={handleOpenFeedback}
                      onDispute={handleOpenDispute}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                  <p className="text-gray-600 mb-6">
                    {activeTab === 'all' 
                      ? "You haven't placed any orders yet."
                      : `You don't have any ${activeTab} orders.`}
                  </p>
                  <Link to="/tailors">
                    <Button className="bg-brand-purple hover:bg-brand-dark">
                      Browse Tailors
                    </Button>
                  </Link>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Feedback Dialog */}
      <Dialog open={feedbackDialogOpen} onOpenChange={setFeedbackDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Leave Feedback</DialogTitle>
            <DialogDescription>
              Share your experience with this order. Your feedback helps the tailor and other customers.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            <div>
              <h3 className="font-medium mb-2">Rating</h3>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <button key={star} className="text-yellow-500 hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="feedback" className="block font-medium mb-2">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                rows={4}
                className="w-full rounded-md border border-gray-300 p-3"
                placeholder="Share your experience with this order..."
              ></textarea>
            </div>
            
            <div>
              <label className="block font-medium mb-2">
                Upload Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <p className="text-sm text-gray-500">
                  Drag & drop or click to upload photos of your completed order
                </p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" onClick={() => setFeedbackDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-brand-purple hover:bg-brand-dark">
                Submit Feedback
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Dispute Dialog */}
      <Dialog open={disputeDialogOpen} onOpenChange={setDisputeDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Report an Issue</DialogTitle>
            <DialogDescription>
              If you're not satisfied with your order, please provide details about the issue.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            <div>
              <label htmlFor="issue-type" className="block font-medium mb-2">
                Type of Issue
              </label>
              <select
                id="issue-type"
                className="w-full rounded-md border border-gray-300 p-2"
              >
                <option value="">Select an issue type</option>
                <option value="quality">Quality Issues</option>
                <option value="delay">Significant Delay</option>
                <option value="specifications">Different from Specifications</option>
                <option value="communication">Poor Communication</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block font-medium mb-2">
                Describe the Issue
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full rounded-md border border-gray-300 p-3"
                placeholder="Please provide as much detail as possible..."
              ></textarea>
            </div>
            
            <div>
              <label className="block font-medium mb-2">
                Evidence Photos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <p className="text-sm text-gray-500">
                  Upload photos showing the issue with your order
                </p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>
            
            <div>
              <label htmlFor="resolution" className="block font-medium mb-2">
                Preferred Resolution
              </label>
              <select
                id="resolution"
                className="w-full rounded-md border border-gray-300 p-2"
              >
                <option value="">Select preferred resolution</option>
                <option value="rework">Rework/Modifications</option>
                <option value="partial">Partial Refund</option>
                <option value="full">Full Refund</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
              <div className="flex">
                <AlertTriangle className="text-amber-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  Our team will review your dispute and contact both parties within 24-48 hours. Please ensure all information provided is accurate.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" onClick={() => setDisputeDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-brand-purple hover:bg-brand-dark">
                Submit Dispute
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

const OrderCard = ({ order, onFeedback, onDispute }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const isActive = ['pending', 'accepted', 'fabric_sourced', 'in_progress', 'final_adjustments', 'ready'].includes(order.status);
  const isCompleted = order.status === 'delivered';
  const canDispute = isActive || (isCompleted && new Date() < new Date(order.dueDate + 7)); // 7-day window for disputes
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="flex items-center mb-2 sm:mb-0">
              <img 
                src={order.tailorAvatar}
                alt={order.tailorName}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="font-semibold">{order.tailorName}</h3>
                <p className="text-sm text-gray-500">Order #{order.id}</p>
              </div>
            </div>
            <OrderStatusBadge status={order.status as OrderStatus} />
          </div>
          
          <p className="text-gray-700 mb-4">{order.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>Order Date: {new Date(order.orderDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>Due Date: {new Date(order.dueDate).toLocaleDateString()}</span>
            </div>
            <div className="text-sm font-medium text-right">
              ${order.amount.toFixed(2)}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between items-center mt-4">
            <Button 
              variant="ghost" 
              className="text-brand-purple p-0 h-auto"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'View Details'}
              <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
            </Button>
            
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-gray-700 border-gray-300"
              >
                <MessageSquare className="mr-1 h-4 w-4" />
                Message
              </Button>
              
              {isCompleted && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-brand-purple border-brand-purple hover:bg-brand-light"
                  onClick={() => onFeedback(order)}
                >
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  Leave Feedback
                </Button>
              )}
              
              {canDispute && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => onDispute(order)}
                >
                  <AlertTriangle className="mr-1 h-4 w-4" />
                  Report Issue
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Order Details Expansion */}
        {showDetails && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <h4 className="font-medium mb-4">Order Timeline</h4>
            
            <div className="space-y-3">
              {order.updates.map((update, index) => (
                <div key={index} className="flex items-start">
                  <div className="relative mr-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 ${
                      index === order.updates.length - 1 
                        ? 'bg-brand-purple' 
                        : 'bg-gray-300'
                    }`} />
                    {index < order.updates.length - 1 && (
                      <div className="absolute top-3 left-1.5 w-0.5 h-full -ml-px bg-gray-200" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <OrderStatusBadge 
                          status={update.status as OrderStatus}
                          className="mb-1"
                        />
                        <p className="text-sm text-gray-600">
                          {update.message}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Images */}
            {order.images && order.images.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium mb-3">Order Images</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {order.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image} 
                        alt={`Order image ${index + 1}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                        <a href={image} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="text-white h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {(order.status === 'ready') && (
                <Button size="sm" className="bg-brand-purple hover:bg-brand-dark">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  Confirm Receipt
                </Button>
              )}
              
              {['pending'].includes(order.status) && (
                <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  <ThumbsDown className="mr-1 h-4 w-4" />
                  Cancel Order
                </Button>
              )}
              
              {['accepted', 'fabric_sourced', 'in_progress', 'final_adjustments'].includes(order.status) && (
                <Button size="sm" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  Request Update
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserOrders;
