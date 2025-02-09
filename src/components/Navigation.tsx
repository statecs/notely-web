import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="font-semibold text-white">Notely AI</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          to="/features" 
          className={`text-sm ${isActive('/features') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
        >
          Features
        </Link>
        <Link 
          to="/pricing" 
          className={`text-sm ${isActive('/pricing') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
        >
          Pricing
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        {(() => {
          const isAndroid = /Android/.test(navigator.userAgent);
          const storeUrl = isAndroid 
            ? "https://play.google.com/store/apps/details?id=com.cstate.notelyapp"
            : "https://apps.apple.com/se/app/notely-ai/id6740462619?l=en-GB&platform=iphone";
          
          return (
            <a 
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Download
            </a>
          );
        })()}

        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/features" 
              className={`text-sm ${isActive('/features') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm ${isActive('/pricing') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;