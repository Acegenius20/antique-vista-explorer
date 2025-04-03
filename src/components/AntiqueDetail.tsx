
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Maximize, Plus, Minus } from 'lucide-react';
import { getAntiqueById } from '../data/antiques';
import { useAntiques } from '../context/AntiqueContext';

interface AntiqueDetailProps {
  id: string;
}

const AntiqueDetail: React.FC<AntiqueDetailProps> = ({ id }) => {
  const antique = getAntiqueById(id);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useAntiques();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  if (!antique) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">Antique not found</h2>
        <p className="mt-4">The antique you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const inWishlist = isInWishlist(antique.id);
  
  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(antique.id);
    } else {
      addToWishlist(antique.id);
    }
  };

  // Collect all images
  const allImages = [antique.imageUrl, ...(antique.additionalImages || [])];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    
    // Calculate position as percentage of container
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <a href="/collection" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Collection
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image section */}
        <div className="space-y-4">
          <div 
            className={`relative overflow-hidden rounded-lg border border-border ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={handleZoom}
            onMouseMove={handleMouseMove}
          >
            <div 
              className={`aspect-square bg-card ${isZoomed ? 'overflow-hidden' : ''}`} 
            >
              <img
                src={allImages[currentImageIndex]}
                alt={antique.name}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      }
                    : undefined
                }
              />
            </div>
            
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full text-foreground transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full text-foreground transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoom();
              }}
              className="absolute bottom-4 right-4 bg-background/80 hover:bg-background p-2 rounded-full text-foreground transition-colors"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              <Maximize size={18} />
            </button>
          </div>
          
          {allImages.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-primary' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={image} alt={`${antique.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-antique font-bold">{antique.name}</h1>
            <p className="text-muted-foreground mt-1">{antique.year} • {antique.era}</p>
          </div>

          {antique.price && (
            <div className="text-2xl font-semibold text-primary">{antique.price}</div>
          )}

          <div className="flex flex-wrap gap-4">
            <div className="bg-muted px-4 py-2 rounded-md">
              <span className="text-sm text-muted-foreground">Origin</span>
              <p className="font-medium">{antique.origin}</p>
            </div>
            <div className="bg-muted px-4 py-2 rounded-md">
              <span className="text-sm text-muted-foreground">Material</span>
              <p className="font-medium">{antique.material}</p>
            </div>
            {antique.condition && (
              <div className="bg-muted px-4 py-2 rounded-md">
                <span className="text-sm text-muted-foreground">Condition</span>
                <p className="font-medium">{antique.condition}</p>
              </div>
            )}
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="text-xl font-antique font-semibold mb-3">Description</h2>
            <p className="text-foreground/90 leading-relaxed">
              {antique.longDescription || antique.description}
            </p>
          </div>

          {antique.dimensions && (
            <div>
              <h2 className="text-xl font-antique font-semibold mb-2">Dimensions</h2>
              <p>{antique.dimensions}</p>
            </div>
          )}

          {antique.provenance && (
            <div>
              <h2 className="text-xl font-antique font-semibold mb-2">Provenance</h2>
              <p className="text-foreground/90">{antique.provenance}</p>
            </div>
          )}

          <div className="flex space-x-4 pt-4">
            <button
              onClick={toggleWishlist}
              className={`flex items-center justify-center px-4 py-2 rounded-md border ${
                inWishlist
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'bg-background hover:bg-muted border-border'
              }`}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={18} className="mr-2" fill={inWishlist ? "currentColor" : "none"} />
              {inWishlist ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </button>

            <button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors">
              Inquire About This Piece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiqueDetail;
