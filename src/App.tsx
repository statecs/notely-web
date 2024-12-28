import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Star, Phone, Lock, FileAudio, Home, Info, Book, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="font-semibold">Minutes AI</span>
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className={`${isActive('/') ? 'text-blue-500' : 'text-gray-300'} hover:text-blue-400`}>
          <div className="flex items-center space-x-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/features" className={`${isActive('/features') ? 'text-blue-500' : 'text-gray-300'} hover:text-blue-400`}>
          <div className="flex items-center space-x-1">
            <Info className="w-4 h-4" />
            <span>Features</span>
          </div>
        </Link>
        <Link to="/docs" className={`${isActive('/docs') ? 'text-blue-500' : 'text-gray-300'} hover:text-blue-400`}>
          <div className="flex items-center space-x-1">
            <Book className="w-4 h-4" />
            <span>Docs</span>
          </div>
        </Link>
        <Link to="/contact" className={`${isActive('/contact') ? 'text-blue-500' : 'text-gray-300'} hover:text-blue-400`}>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </div>
        </Link>
      </nav>
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
      <div className="flex justify-center space-x-8 mb-8">
        <div className="text-center">
          <div className="text-2xl font-bold">50m+</div>
          <div className="text-gray-400">Active users</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">4.9</div>
          <div className="text-gray-400">Rating</div>
        </div>
      </div>
    </section>
  </div>
);

// Features Page
const FeaturesPage = () => (
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
const DocsPage = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Documentation</h1>
    <div className="prose prose-invert max-w-none">
      <h2>Getting Started</h2>
      <p className="text-gray-300">
        Learn how to integrate Minutes AI into your workflow with our comprehensive documentation.
      </p>
      <h2>API Reference</h2>
      <p className="text-gray-300">
        Explore our API endpoints and integration options.
      </p>
    </div>
  </div>
);

// Contact Page
const ContactPage = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </CardContent>
    </Card>
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
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;