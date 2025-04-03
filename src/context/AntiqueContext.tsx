
import React, { createContext, useContext, useState } from 'react';
import { Antique, Era, Material, Origin, antiques, eras, materials, origins, filterAntiques } from '../data/antiques';

interface AntiqueContextType {
  allAntiques: Antique[];
  filteredAntiques: Antique[];
  eras: Era[];
  materials: Material[];
  origins: Origin[];
  wishlist: string[];
  filters: {
    era: string | null;
    material: string | null;
    origin: string | null;
    search: string;
  };
  setFilters: (filters: any) => void;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const AntiqueContext = createContext<AntiqueContextType | undefined>(undefined);

export const AntiqueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    era: null,
    material: null,
    origin: null,
    search: '',
  });

  const filteredAntiques = filterAntiques({
    era: filters.era || undefined,
    material: filters.material || undefined,
    origin: filters.origin || undefined,
    search: filters.search || undefined,
  });

  const addToWishlist = (id: string) => {
    setWishlist((prev) => [...prev, id]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((itemId) => itemId !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.includes(id);
  };

  const value = {
    allAntiques: antiques,
    filteredAntiques,
    eras,
    materials,
    origins,
    wishlist,
    filters,
    setFilters,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return <AntiqueContext.Provider value={value}>{children}</AntiqueContext.Provider>;
};

export const useAntiques = () => {
  const context = useContext(AntiqueContext);
  if (context === undefined) {
    throw new Error('useAntiques must be used within an AntiqueProvider');
  }
  return context;
};
