
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/auth/AuthForm';
import { toast } from '@/components/ui/use-toast';
import { Scissors } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: any) => {
    console.log('Login data:', data);
    
    // Mock login - in a real app, this would call an authentication API
    // For demo purposes, we'll just show a success toast and redirect
    toast({
      title: "Login Successful",
      description: "Welcome back to TailorTrust!",
    });
    
    // Redirect to home page after successful login
    setTimeout(() => {
      navigate('/');
    }, 1000);
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
            <h1 className="text-2xl font-bold mt-4">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
          </div>
          
          <AuthForm mode="login" onSubmit={handleSubmit} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
