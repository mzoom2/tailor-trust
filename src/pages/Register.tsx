
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/auth/AuthForm';
import { toast } from '@/components/ui/use-toast';
import { Scissors } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: any) => {
    console.log('Registration data:', data);
    
    // Mock registration - in a real app, this would call an API
    // For demo purposes, we'll just show a success toast and redirect
    toast({
      title: "Registration Successful",
      description: `Your ${data.userType} account has been created!`,
    });
    
    // Redirect to home page after successful registration
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center mb-8">
            <div className="inline-flex items-center justify-center">
              <Scissors className="h-8 w-8 text-brand-purple" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Tailor<span className="text-brand-purple">Trust</span></span>
            </div>
            <h1 className="text-2xl font-bold mt-4">Create an Account</h1>
            <p className="text-gray-600 mt-2">Join TailorTrust to connect with trusted tailoring services</p>
          </div>
          
          <AuthForm mode="register" onSubmit={handleSubmit} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
