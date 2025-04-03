
import React from 'react';
import { Link } from 'react-router-dom';
import { useAntiques } from '../context/AntiqueContext';
import AntiqueTile from '../components/AntiqueTile';
import { Heart, ArrowLeft } from 'lucide-react';

const Wishlist = () => {
  const { allAntiques, wishlist } = useAntiques();
  
  const wishlistItems = allAntiques.filter(antique => wishlist.includes(antique.id));

  return (
    <div className="min-h-screen parchment-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/collection" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Collection
          </Link>
        </div>
        
        <div className="mb-10">
          <h1 className="text-3xl font-antique font-bold flex items-center">
            <Heart size={24} className="mr-3" /> Your Wishlist
          </h1>
          <p className="text-muted-foreground mt-2">
            Save your favorite antique pieces to revisit later.
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map(antique => (
              <AntiqueTile key={antique.id} antique={antique} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-lg border border-border">
            <Heart size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-antique font-semibold mb-2">Your Wishlist is Empty</h2>
            <p className="text-muted-foreground mb-6">
              Save your favorite antique pieces by clicking the heart icon.
            </p>
            <Link
              to="/collection"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Explore Collection
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
