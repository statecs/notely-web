import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left side */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Download Notely AI on the App Store
            </h2>
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
                  className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  Download Free App
                  <ArrowRight className="w-4 h-4" />
                </a>
              );
            })()}
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of use
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © Copyright 2024 Christopher State
        </div>
      </div>
    </footer>
  );
};

export default Footer;