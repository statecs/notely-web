import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Star, Phone, Lock, FileAudio, Home, Info, Book, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import FeatureCarousel from './components/FeatureCarousel';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="font-semibold">Notely AI</span>
      </Link>
      <button className="md:hidden p-2">☰</button>
    </header>
  );
};

// Home Page
const HomePage = () => (
  <div className="container mx-auto px-4">
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Get perfect notes and<br />transcriptions with AI.
      </h1>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-4">
        Download Now Free
      </button>
      
      <div className="mt-12 relative">
        <div className="bg-gray-800 rounded-3xl p-4 max-w-sm mx-auto">
          <img 
            src="/api/placeholder/280/500"
            alt="App screenshot"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="flex justify-center space-x-8 mb-8 items-center">
        <h1 className="text-4xl font-bold">Designed to be reliable,<br/>simple, private, and powerful.</h1>
        <div className="flex gap-12">
          <div>
            <div className="text-blue-400 text-5xl font-bold">50m+</div>
            <div className="text-gray-400 mt-2">Minutes of audio</div>
          </div>
          <div>
            <div className="text-blue-400 text-5xl font-bold">4.9</div>
            <div className="text-gray-400 mt-2">Rating out of 5</div>
          </div>
        </div>
      </div>
    </section>


    <FeatureCarousel />
    <FAQSection />
    <Footer />
  </div>
);

// Features Page
const TermsPage = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Features</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <FileAudio className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Flexible audio options
          </h3>
          <p className="text-gray-400">
            Record voice notes and transcribe them instantly
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <Lock className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Privacy and security
          </h3>
          <p className="text-gray-400">
            Your data is encrypted and protected
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
);

// Documentation Page
const PrivacyPage = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Documentation</h1>
    <div className="prose prose-invert max-w-none">
      <h2>Getting Started</h2>
      <p className="text-gray-300">
        Learn how to integrate Notely into your workflow with our comprehensive documentation.
      </p>
      <h2>API Reference</h2>
      <p className="text-gray-300">
        Explore our API endpoints and integration options.
      </p>
    </div>
  </div>
);



// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;