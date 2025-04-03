
import React, { useState, useEffect } from 'react';
import { useAntiques } from '../context/AntiqueContext';
import AntiqueTile from '../components/AntiqueTile';
import { Search, Filter, X } from 'lucide-react';

const Collection = () => {
  const { filteredAntiques, eras, materials, origins, filters, setFilters } = useAntiques();
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    // Update search in filters when searchTerm changes
    const timeoutId = setTimeout(() => {
      setFilters((prev: any) => ({ ...prev, search: searchTerm }));
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm, setFilters]);

  const handleEraChange = (era: string | null) => {
    setFilters((prev: any) => ({ ...prev, era }));
  };

  const handleMaterialChange = (material: string | null) => {
    setFilters((prev: any) => ({ ...prev, material }));
  };

  const handleOriginChange = (origin: string | null) => {
    setFilters((prev: any) => ({ ...prev, origin }));
  };

  const clearFilters = () => {
    setFilters({ era: null, material: null, origin: null, search: '' });
    setSearchTerm('');
  };

  const hasActiveFilters = filters.era || filters.material || filters.origin || filters.search;

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-antique font-bold mb-4">Antique Collection</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our curated collection of rare and exquisite antiques from around the world. Each piece has been carefully selected for its historical significance, craftsmanship, and beauty.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters for Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-antique font-semibold">Filters</h2>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Era</h3>
                  <div className="space-y-2">
                    {eras.map((era) => (
                      <div key={era} className="flex items-center">
                        <input
                          type="radio"
                          id={`era-${era}`}
                          name="era"
                          checked={filters.era === era}
                          onChange={() => handleEraChange(era)}
                          className="mr-2"
                        />
                        <label htmlFor={`era-${era}`} className="text-sm cursor-pointer">
                          {era}
                        </label>
                      </div>
                    ))}
                    <div className="flex items-center mt-1">
                      <input
                        type="radio"
                        id="era-all"
                        name="era"
                        checked={filters.era === null}
                        onChange={() => handleEraChange(null)}
                        className="mr-2"
                      />
                      <label htmlFor="era-all" className="text-sm cursor-pointer">
                        All Eras
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Material</h3>
                  <div className="space-y-2">
                    {materials.map((material) => (
                      <div key={material} className="flex items-center">
                        <input
                          type="radio"
                          id={`material-${material}`}
                          name="material"
                          checked={filters.material === material}
                          onChange={() => handleMaterialChange(material)}
                          className="mr-2"
                        />
                        <label htmlFor={`material-${material}`} className="text-sm cursor-pointer">
                          {material}
                        </label>
                      </div>
                    ))}
                    <div className="flex items-center mt-1">
                      <input
                        type="radio"
                        id="material-all"
                        name="material"
                        checked={filters.material === null}
                        onChange={() => handleMaterialChange(null)}
                        className="mr-2"
                      />
                      <label htmlFor="material-all" className="text-sm cursor-pointer">
                        All Materials
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Origin</h3>
                  <div className="space-y-2">
                    {origins.map((origin) => (
                      <div key={origin} className="flex items-center">
                        <input
                          type="radio"
                          id={`origin-${origin}`}
                          name="origin"
                          checked={filters.origin === origin}
                          onChange={() => handleOriginChange(origin)}
                          className="mr-2"
                        />
                        <label htmlFor={`origin-${origin}`} className="text-sm cursor-pointer">
                          {origin}
                        </label>
                      </div>
                    ))}
                    <div className="flex items-center mt-1">
                      <input
                        type="radio"
                        id="origin-all"
                        name="origin"
                        checked={filters.origin === null}
                        onChange={() => handleOriginChange(null)}
                        className="mr-2"
                      />
                      <label htmlFor="origin-all" className="text-sm cursor-pointer">
                        All Origins
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center text-foreground bg-card px-4 py-2 rounded-md border border-border"
            >
              <Filter size={18} className="mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {Object.values(filters).filter(Boolean).length}
                </span>
              )}
            </button>
            
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Mobile Filters Modal */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden">
              <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-background border-l border-border overflow-y-auto">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Era</h3>
                    <div className="space-y-2">
                      {eras.map((era) => (
                        <div key={era} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-era-${era}`}
                            name="era-mobile"
                            checked={filters.era === era}
                            onChange={() => handleEraChange(era)}
                            className="mr-2"
                          />
                          <label htmlFor={`mobile-era-${era}`} className="text-sm cursor-pointer">
                            {era}
                          </label>
                        </div>
                      ))}
                      <div className="flex items-center mt-1">
                        <input
                          type="radio"
                          id="mobile-era-all"
                          name="era-mobile"
                          checked={filters.era === null}
                          onChange={() => handleEraChange(null)}
                          className="mr-2"
                        />
                        <label htmlFor="mobile-era-all" className="text-sm cursor-pointer">
                          All Eras
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Material</h3>
                    <div className="space-y-2">
                      {materials.map((material) => (
                        <div key={material} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-material-${material}`}
                            name="material-mobile"
                            checked={filters.material === material}
                            onChange={() => handleMaterialChange(material)}
                            className="mr-2"
                          />
                          <label htmlFor={`mobile-material-${material}`} className="text-sm cursor-pointer">
                            {material}
                          </label>
                        </div>
                      ))}
                      <div className="flex items-center mt-1">
                        <input
                          type="radio"
                          id="mobile-material-all"
                          name="material-mobile"
                          checked={filters.material === null}
                          onChange={() => handleMaterialChange(null)}
                          className="mr-2"
                        />
                        <label htmlFor="mobile-material-all" className="text-sm cursor-pointer">
                          All Materials
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Origin</h3>
                    <div className="space-y-2">
                      {origins.map((origin) => (
                        <div key={origin} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-origin-${origin}`}
                            name="origin-mobile"
                            checked={filters.origin === origin}
                            onChange={() => handleOriginChange(origin)}
                            className="mr-2"
                          />
                          <label htmlFor={`mobile-origin-${origin}`} className="text-sm cursor-pointer">
                            {origin}
                          </label>
                        </div>
                      ))}
                      <div className="flex items-center mt-1">
                        <input
                          type="radio"
                          id="mobile-origin-all"
                          name="origin-mobile"
                          checked={filters.origin === null}
                          onChange={() => handleOriginChange(null)}
                          className="mr-2"
                        />
                        <label htmlFor="mobile-origin-all" className="text-sm cursor-pointer">
                          All Origins
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-border">
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search antiques..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap gap-2">
                {filters.era && (
                  <div className="bg-muted px-3 py-1 rounded-full flex items-center text-sm">
                    <span>Era: {filters.era}</span>
                    <button
                      onClick={() => handleEraChange(null)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.material && (
                  <div className="bg-muted px-3 py-1 rounded-full flex items-center text-sm">
                    <span>Material: {filters.material}</span>
                    <button
                      onClick={() => handleMaterialChange(null)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.origin && (
                  <div className="bg-muted px-3 py-1 rounded-full flex items-center text-sm">
                    <span>Origin: {filters.origin}</span>
                    <button
                      onClick={() => handleOriginChange(null)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.search && (
                  <div className="bg-muted px-3 py-1 rounded-full flex items-center text-sm">
                    <span>Search: {filters.search}</span>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setFilters((prev: any) => ({ ...prev, search: '' }));
                      }}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {filteredAntiques.length > 0 ? (
              <>
                <p className="mb-4 text-muted-foreground">
                  Showing {filteredAntiques.length} {filteredAntiques.length === 1 ? 'item' : 'items'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAntiques.map(antique => (
                    <AntiqueTile key={antique.id} antique={antique} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl font-medium mb-2">No antiques found</p>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
