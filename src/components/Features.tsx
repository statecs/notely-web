import React from 'react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Transcription',
      description: 'Convert any audio to text with industry-leading accuracy',
      icon: '🎯'
    },
    {
      title: 'Smart Summaries',
      description: 'Get instant AI-generated summaries of your recordings',
      icon: '📝'
    },
    {
      title: 'Multiple Languages',
      description: 'Support for 30+ languages and regional accents',
      icon: '🌍'
    },
    {
      title: 'Real-time Processing',
      description: 'See transcriptions appear as you speak',
      icon: '⚡'
    },
    {
      title: 'Custom Vocabulary',
      description: 'Train the AI on your industry-specific terms',
      icon: '📚'
    },
    {
      title: 'Secure Storage',
      description: 'Enterprise-grade encryption for all your data',
      icon: '🔒'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Features</h1>
        <p className="text-xl text-gray-400">
          Everything you need to capture and understand your audio
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 border border-gray-700 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-white">{feature.title}</h2>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Ready to get started?</h2>
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 inline-block"
            >
              Download Now Free
            </a>
          );
        })()}
      </section>
    </main>
  );
};

export default FeaturesPage;