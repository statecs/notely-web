import React from 'react';
import { Ban, Lock, Trash2, Shield } from 'lucide-react';

const FeatureSections = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-900">
      {/* Audio Format Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/400/400" 
              alt="Person using audio features"
              className="w-full"
            />
          </div>
          <div className="absolute top-1/3 right-0 translate-x-1/4 bg-blue-500 text-white p-4 rounded-lg">
            <div className="grid grid-cols-3 gap-3">
              {['🎤', '🌐', '📝', '🔊', '📱', '↗️'].map((emoji, i) => (
                <span key={i} className="text-xl">{emoji}</span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-3/4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">📊</span>
              <div>
                <div className="font-medium">Market Analysis</div>
                <div className="text-sm text-gray-500">8/25/24 • 50 min, 29 sec</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-blue-400 font-medium mb-2">AUDIO FORMAT</div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Flexible audio options that fit your workflow
          </h2>
          <p className="text-gray-400 mb-6">
            Record live audio with our built-in audio recorder, upload audio files from your device, or import YouTube videos. Supports 50+ languages.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Download Now
          </button>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-blue-400 font-medium mb-2">PRIVACY</div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Privacy and security is our number one priority.
          </h2>
          <p className="text-gray-400 mb-6">
            Notely AI will never sell your data or give access to unrelated third parties. You can permanently delete your data at any time.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Download Now
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur p-4 rounded-lg flex items-center gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <Ban className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-white">Your data will never be sold</span>
          </div>
          
          <div className="bg-white/5 backdrop-blur p-4 rounded-lg flex items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-white">You control your data</span>
          </div>
          
          <div className="bg-white/5 backdrop-blur p-4 rounded-lg flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <Trash2 className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-white">Permanent deletions, anytime</span>
          </div>
          
          <div className="bg-white/5 backdrop-blur p-4 rounded-lg flex items-center gap-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-white">We value your privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSections;