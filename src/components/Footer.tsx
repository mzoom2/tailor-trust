
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Scissors
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Scissors className="h-6 w-6 text-brand-purple" />
              <span className="ml-2 text-xl font-bold text-gray-900">Tailor<span className="text-brand-purple">Trust</span></span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Connecting customers with trusted tailors for reliable, quality tailoring services.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tailors" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Find Tailors
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/become-a-tailor" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Become a Tailor
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/dispute" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">support@tailortrust.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  123 Fashion Street<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} TailorTrust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
