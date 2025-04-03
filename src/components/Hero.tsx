
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedAntiques } from '../data/antiques';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredAntiques = getFeaturedAntiques().slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredAntiques.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredAntiques.length]);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        {featuredAntiques.map((antique, index) => (
          <div
            key={antique.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={antique.imageUrl}
              alt={antique.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-3xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-antique font-bold hero-text-shadow animate-fade-in">
            Discover Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl font-body animate-slide-in opacity-90 max-w-2xl">
            Explore our curated collection of exquisite antiques from around the world, each with a unique story to tell.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/collection"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all group"
            >
              Explore Collection
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/featured"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all"
            >
              Featured Pieces
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {featuredAntiques.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
