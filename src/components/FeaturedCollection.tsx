
import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedAntiques } from '../data/antiques';
import AntiqueTile from './AntiqueTile';

const FeaturedCollection = () => {
  const featuredAntiques = getFeaturedAntiques();

  return (
    <section className="py-16 parchment-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-antique font-bold mb-3">Featured Collection</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exquisite pieces of history that have been carefully selected for their exceptional craftsmanship, provenance, and historical significance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredAntiques.map(antique => (
            <AntiqueTile key={antique.id} antique={antique} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
