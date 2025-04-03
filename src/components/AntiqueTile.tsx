
import React from 'react';
import { Link } from 'react-router-dom';
import { Antique } from '../data/antiques';
import { Heart } from 'lucide-react';
import { useAntiques } from '../context/AntiqueContext';

interface AntiqueTileProps {
  antique: Antique;
}

const AntiqueTile: React.FC<AntiqueTileProps> = ({ antique }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useAntiques();
  const inWishlist = isInWishlist(antique.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(antique.id);
    } else {
      addToWishlist(antique.id);
    }
  };

  return (
    <Link to={`/antique/${antique.id}`} className="block transition-transform duration-300 hover:-translate-y-1">
      <div className="antique-card group">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={antique.imageUrl}
            alt={antique.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <button 
            onClick={toggleWishlist}
            className={`absolute top-3 right-3 p-2 rounded-full ${
              inWishlist 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-background/80 text-foreground hover:text-accent'
            } transition-colors duration-200 z-10`}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
          </button>
          
          <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="flex gap-2 flex-wrap">
              <span className="inline-block bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                {antique.era}
              </span>
              <span className="inline-block bg-background/80 text-foreground text-xs px-2 py-1 rounded">
                {antique.material}
              </span>
              <span className="inline-block bg-background/80 text-foreground text-xs px-2 py-1 rounded">
                {antique.origin}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-antique font-semibold line-clamp-1">{antique.name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{antique.year}</p>
          <p className="text-sm line-clamp-2">{antique.description}</p>
          {antique.price && (
            <p className="mt-2 text-primary font-semibold">{antique.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AntiqueTile;
