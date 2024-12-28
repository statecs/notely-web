import React, { useState } from 'react';
import { MessageSquare, Mic, FileText, Share2 } from 'lucide-react';

const FeatureCarousel = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: FileText,
      title: "Beautifully formatted notes",
      description: "Instantly create headings and bullets of key points from your audio",
      image: "/api/placeholder/600/400",
    },
    {
      icon: Mic,
      title: "Transcribe & summary",
      description: "Read your audio's transcription and custom summaries",
      image: "/api/placeholder/600/400",
    },
    {
      icon: MessageSquare,
      title: "Chat with your audio",
      description: "Extract key insights, list action items, ask questions, and more.",
      image: "/api/placeholder/600/400",
    },
    {
      icon: Share2,
      title: "Export & share with a tap",
      description: "Create and share minutes as formatted PDF's, emails, and texts.",
      image: "/api/placeholder/600/400",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Never take notes manually again</h1>
      <p className="text-gray-400 text-center mb-12">
        Automate your note taking and transcriptions so you can pay attention to what matters.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-lg flex items-start space-x-4 transition-colors ${
                  activeFeature === index 
                    ? 'bg-blue-900/50 border-l-4 border-blue-500' 
                    : 'hover:bg-gray-800'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="bg-blue-900/50 p-2 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <img
            src={features[activeFeature].image}
            alt={features[activeFeature].title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;