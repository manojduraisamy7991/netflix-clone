
import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-black via-transparent to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Stranger Things
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 line-clamp-3">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
            <Play className="w-6 h-6 fill-current" />
            Play
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded font-bold hover:bg-opacity-50 transition-colors">
            <Info className="w-6 h-6" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
