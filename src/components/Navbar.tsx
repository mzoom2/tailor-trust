
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  ShoppingBag, 
  Bell, 
  LogOut,
  Scissors
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  isLoggedIn?: boolean;
  userType?: 'customer' | 'tailor' | 'admin';
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isLoggedIn = false, 
  userType = 'customer',
  onLogout = () => {}
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Scissors className="h-6 w-6 text-brand-purple" />
            <span className="ml-2 text-xl font-bold text-gray-900">Tailor<span className="text-brand-purple">Trust</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/tailors" className="nav-link">Find Tailors</Link>
            <Link to="/how-it-works" className="nav-link">How It Works</Link>
            {isLoggedIn && userType === 'tailor' && (
              <Link to="/dashboard" className="nav-link">Tailor Dashboard</Link>
            )}
            {isLoggedIn && userType === 'admin' && (
              <Link to="/admin" className="nav-link">Admin Panel</Link>
            )}
          </nav>

          {/* Auth Buttons or User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <Button variant="outline" className="hover:bg-brand-light border-brand-purple text-brand-purple hover:text-brand-purple">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-brand-purple hover:bg-brand-dark text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                {userType === 'customer' && (
                  <Link to="/orders" className="p-2 rounded-full hover:bg-gray-100">
                    <ShoppingBag className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
                <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100">
                  <Bell className="h-5 w-5 text-gray-600" />
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full w-9 h-9 p-0">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">Profile</Link>
                    </DropdownMenuItem>
                    {userType === 'customer' && (
                      <DropdownMenuItem asChild>
                        <Link to="/orders" className="cursor-pointer">My Orders</Link>
                      </DropdownMenuItem>
                    )}
                    {userType === 'tailor' && (
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={onLogout}>
                      <LogOut className="mr-2 h-4 w-4" /> Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link to="/tailors" className="nav-link py-2" onClick={toggleMenu}>Find Tailors</Link>
              <Link to="/how-it-works" className="nav-link py-2" onClick={toggleMenu}>How It Works</Link>
              {isLoggedIn && userType === 'tailor' && (
                <Link to="/dashboard" className="nav-link py-2" onClick={toggleMenu}>Tailor Dashboard</Link>
              )}
              {isLoggedIn && userType === 'admin' && (
                <Link to="/admin" className="nav-link py-2" onClick={toggleMenu}>Admin Panel</Link>
              )}

              {!isLoggedIn ? (
                <div className="flex flex-col space-y-2 pt-4">
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register" onClick={toggleMenu}>
                    <Button className="w-full bg-brand-purple hover:bg-brand-dark">Sign Up</Button>
                  </Link>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <Link to="/profile" className="nav-link py-2 flex items-center" onClick={toggleMenu}>
                    <User className="h-4 w-4 mr-2" /> Profile
                  </Link>
                  {userType === 'customer' && (
                    <Link to="/orders" className="nav-link py-2 flex items-center" onClick={toggleMenu}>
                      <ShoppingBag className="h-4 w-4 mr-2" /> My Orders
                    </Link>
                  )}
                  <Link to="/notifications" className="nav-link py-2 flex items-center" onClick={toggleMenu}>
                    <Bell className="h-4 w-4 mr-2" /> Notifications
                  </Link>
                  <button 
                    className="w-full text-left nav-link py-2 flex items-center text-red-600"
                    onClick={() => {onLogout(); toggleMenu();}}
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
