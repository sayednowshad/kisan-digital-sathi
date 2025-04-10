
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-farm-green dark:text-farm-green-light">
              डिजिटल<span className="text-farm-earth">किसान</span>
            </h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">
              Empowering Indian farmers with digital solutions for sustainable growth and prosperity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-farm-green dark:hover:text-farm-green-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-farm-green dark:hover:text-farm-green-light">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-farm-green dark:hover:text-farm-green-light">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-farm-green dark:hover:text-farm-green-light">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Home</Link></li>
              <li><Link to="/subsidies" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Subsidy Trends</Link></li>
              <li><Link to="/weather" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Weather Updates</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Marketplace</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/crop-suggestions" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">AI Crop Suggestions</Link></li>
              <li><Link to="/market" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Market Trends</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Community Groups</Link></li>
              <li><Link to="/profiles" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Farmer Profiles</Link></li>
              <li><Link to="/translation" className="text-gray-600 hover:text-farm-green dark:text-gray-400 dark:hover:text-farm-green-light">Translation Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-farm-green dark:text-farm-green-light" />
                <span className="text-gray-600 dark:text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-farm-green dark:text-farm-green-light" />
                <span className="text-gray-600 dark:text-gray-400">info@digitalkisan.in</span>
              </div>
              <address className="text-gray-600 dark:text-gray-400 not-italic">
                Kisan Bhawan, Agricultural Hub,<br />
                New Delhi - 110001, India
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Digital Kisan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
