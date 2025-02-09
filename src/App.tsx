import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Star, Phone, Lock, FileAudio, Home, Info, Book, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import FeatureCarousel from './components/FeatureCarousel';
import FeatureSections from './components/FeatureSections';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import PricingPage from './components/Pricing';
import FeaturesPage from './components/Features';
import ContactPage from './components/Contact';
import Navigation from './components/Navigation';
import placeholder from './images/placeholder.png';



// Home Page
const HomePage = () => (
  <div className="container mx-auto px-4">
  <section className="pt-16 text-center">
    <h1 className="text-4xl font-bold mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
      Get perfect notes and<br />transcriptions with AI.
    </h1>
    
    {/* Add schema.org structured data */}
    <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Notely AI",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "iOS, Android",
            "description": "Transform your audio into perfect notes with AI-powered transcription and insights.",
          })}
        </script>


    {/* Helper function to determine the store URL */}
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
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-4 animate-slide-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          Download Now Free
        </a>
      );
    })()}
    
    <div className="mt-12 relative w-screen md:w-full -mx-4 md:mx-auto h-[600px] md:h-[800px]"> {/* Full screen width only on mobile */}
      <div 
        className="h-full animate-slide-up opacity-0 md:p-4 md:max-w-[1200px] md:mx-auto" 
        style={{ animationDelay: '0.6s' }}
      >
        <img 
          src={placeholder} 
          alt="App screenshot"
          className="w-full h-full object-cover rounded-none md:rounded-2xl" 
        />
      </div>
    </div>
  </section>

  <section className="pb-16 mt-16"> {/* Changed py-16 to py-32 and added mt-16 */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 mb-8 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
          Designed to be reliable,<br/>simple, private, and powerful.
        </h1>
        <div className="flex gap-8 md:gap-12 animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-blue-400 text-4xl md:text-5xl font-bold">50m+</div>
            <div className="text-gray-400 mt-2">Minutes of audio</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 text-4xl md:text-5xl font-bold">4.9</div>
            <div className="text-gray-400 mt-2">Rating out of 5</div>
          </div>
        </div>
      </div>
    </section>


    <FeatureCarousel />
    <FeatureSections />
    <FAQSection />
    <Footer />
  </div>
);

// Terms Page
const TermsPage = () => (
  <TermsOfUse />
);

// Privacy Page
const PrivacyPage = () => (
  <PrivacyPolicy />
);



// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;