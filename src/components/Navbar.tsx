
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Subsidy Trends', path: '/subsidies' },
  { name: 'Translation Support', path: '/translation' },
  { name: 'Weather Updates', path: '/weather' },
  { name: 'Farmer Marketplace', path: '/marketplace' },
  { name: 'Community Groups', path: '/community' },
  { name: 'Market Trends', path: '/market' },
  { name: 'AI Crop Suggestions', path: '/crop-suggestions' },
  { name: 'Farmer Profiles', path: '/profiles' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-farm-green dark:text-farm-green-light font-poppins font-bold text-2xl">
                डिजिटल<span className="text-farm-earth">किसान</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green rounded-md transition-colors dark:text-gray-300 dark:hover:text-farm-green-light"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-farm-green hover:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:text-farm-green-light dark:hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
        )}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-farm-green hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:text-farm-green-light dark:hover:bg-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
