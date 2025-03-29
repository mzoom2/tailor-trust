
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: any) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const [activeTab, setActiveTab] = useState<'customer' | 'tailor'>('customer');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    businessName: '',
    location: '',
    acceptTerms: false,
    specialties: '',
    bio: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    color: 'bg-gray-200'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Check password strength
    if (name === 'password') {
      const score = calculatePasswordStrength(value);
      setPasswordStrength({
        score,
        color: getStrengthColor(score)
      });
    }
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      acceptTerms: checked
    });
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as 'customer' | 'tailor');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (mode === 'register') {
      if (!formData.acceptTerms) {
        toast({
          title: "Terms & Conditions",
          description: "You must accept the terms and conditions to continue.",
          variant: "destructive"
        });
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password Error",
          description: "Passwords do not match.",
          variant: "destructive"
        });
        return;
      }
      
      if (passwordStrength.score < 2) {
        toast({
          title: "Weak Password",
          description: "Please choose a stronger password.",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Send data to parent component for handling
    onSubmit({
      ...formData,
      userType: activeTab
    });
  };
  
  const calculatePasswordStrength = (password: string): number => {
    if (!password) return 0;
    
    let score = 0;
    
    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    
    // Character variety check
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    return Math.min(Math.floor(score / 2), 4);
  };
  
  const getStrengthColor = (score: number): string => {
    switch (score) {
      case 0: return 'bg-gray-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };
  
  const getStrengthText = (score: number): string => {
    switch (score) {
      case 0: return 'Too short';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          {mode === 'login' ? 'Log in to TailorTrust' : 'Create an account'}
        </CardTitle>
        <CardDescription>
          {mode === 'login' 
            ? 'Enter your details to access your account' 
            : 'Join our platform to connect with quality tailoring services'}
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent>
          {mode === 'register' && (
            <Tabs 
              defaultValue="customer" 
              value={activeTab} 
              onValueChange={handleTabChange}
              className="w-full mb-6"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer">I'm a Customer</TabsTrigger>
                <TabsTrigger value="tailor">I'm a Tailor</TabsTrigger>
              </TabsList>
            </Tabs>
          )}
          
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {/* Password strength indicator (only for registration) */}
              {mode === 'register' && formData.password && (
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${passwordStrength.color} transition-all duration-300`} 
                      style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center">
                    Password strength: <span className="ml-1 font-medium">{getStrengthText(passwordStrength.score)}</span>
                  </p>
                </div>
              )}
            </div>
            
            {/* Confirm Password (only for registration) */}
            {mode === 'register' && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {formData.password && formData.confirmPassword && (
                  <div className="flex items-center mt-1 text-xs">
                    {formData.password === formData.confirmPassword ? (
                      <>
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        <span className="text-green-600">Passwords match</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3 w-3 text-red-500 mr-1" />
                        <span className="text-red-600">Passwords don't match</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {/* Additional Registration Fields */}
            {mode === 'register' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                {activeTab === 'tailor' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        placeholder="Your Tailoring Business"
                        value={formData.businessName}
                        onChange={handleChange}
                        required={activeTab === 'tailor'}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={handleChange}
                        required={activeTab === 'tailor'}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialties">Specialties</Label>
                      <Input
                        id="specialties"
                        name="specialties"
                        placeholder="e.g. Wedding Dresses, Suits, Alterations"
                        value={formData.specialties}
                        onChange={handleChange}
                        required={activeTab === 'tailor'}
                      />
                      <p className="text-xs text-gray-500">
                        Separate specialties with commas
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        name="bio"
                        className="w-full min-h-[100px] rounded-md border border-gray-300 p-2"
                        placeholder="Tell us about your experience and expertise..."
                        value={formData.bio}
                        onChange={handleChange}
                        required={activeTab === 'tailor'}
                      />
                    </div>
                  </>
                )}
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link to="/terms" className="text-brand-purple hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-brand-purple hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </>
            )}
            
            {/* "Remember Me" option (only for login) */}
            {mode === 'login' && (
              <div className="flex items-center space-x-2 pt-2">
                <Switch id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me for 30 days
                </Label>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col">
          <Button 
            type="submit" 
            className="w-full bg-brand-purple hover:bg-brand-dark"
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
          
          {mode === 'login' ? (
            <p className="text-sm text-gray-600 mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-brand-purple hover:underline font-medium">
                Sign up
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-600 mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-brand-purple hover:underline font-medium">
                Log in
              </Link>
            </p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthForm;
