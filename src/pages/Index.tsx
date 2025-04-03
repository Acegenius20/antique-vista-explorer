
import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import { ArrowRight, Search, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-antique font-bold mb-3">Welcome to AntiqueVista</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into a world where history, artistry, and craftsmanship converge. Our curated collection of antiques spans civilizations and centuries, each piece telling a unique story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-antique font-semibold mb-2">Discover</h3>
              <p className="text-muted-foreground mb-4">
                Explore our vast collection of antiques from different eras and origins, each with its own unique history.
              </p>
              <Link to="/collection" className="text-primary hover:underline inline-flex items-center">
                Browse Collection <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-antique font-semibold mb-2">Learn</h3>
              <p className="text-muted-foreground mb-4">
                Dive into the fascinating stories behind our antiques and understand their historical significance.
              </p>
              <Link to="/history" className="text-primary hover:underline inline-flex items-center">
                Explore History <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-antique font-semibold mb-2">Authenticate</h3>
              <p className="text-muted-foreground mb-4">
                All our pieces are meticulously vetted and authenticated by experts to ensure their authenticity.
              </p>
              <Link to="/contact" className="text-primary hover:underline inline-flex items-center">
                Contact Experts <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="interactive-divider" />

      <FeaturedCollection />

      <section className="py-16 wood-bg">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-antique font-bold mb-4">Join Our Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with fellow antique enthusiasts, receive updates on new acquisitions, exclusive events, and expert insights into the world of antiques.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
