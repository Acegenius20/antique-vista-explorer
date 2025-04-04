
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Heart, ArrowRight } from 'lucide-react';
import { useAntiques } from '../context/AntiqueContext';
import { Antique } from '../data/antiques';
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Antique[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlist, setFilters, allAntiques } = useAntiques();
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (searchValue.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchValue.toLowerCase();
    const results = allAntiques.filter(
      antique => 
        antique.name.toLowerCase().includes(query) || 
        antique.description.toLowerCase().includes(query) ||
        antique.era.toLowerCase().includes(query) ||
        antique.material.toLowerCase().includes(query) ||
        antique.origin.toLowerCase().includes(query)
    ).slice(0, 5);  // Limit to first 5 results
    
    setSearchResults(results);
  }, [searchValue, allAntiques]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev: any) => ({ ...prev, search: searchValue }));
    if (location.pathname !== '/collection') {
      navigate('/collection');
    }
    setIsSearchOpen(false);
  };

  const handleSearchItemSelect = (antiqueId: string) => {
    navigate(`/antique/${antiqueId}`);
    setIsSearchOpen(false);
    setSearchValue('');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Featured', path: '/featured' },
    { name: 'History', path: '/history' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-background/90 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-antique font-bold text-primary">AntiqueVista</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-foreground/80 hover:text-primary transition-colors duration-200 font-medium ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search and Wishlist */}
          <div className="hidden md:flex items-center space-x-4">
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <button className="px-4 py-2 pr-10 rounded-md bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary relative min-w-[250px] text-left">
                  <span className="text-muted-foreground">
                    {searchValue || "Search antiques..."}
                  </span>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <Search size={18} />
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[300px]" align="end">
                <div ref={searchRef}>
                  <Command>
                    <form onSubmit={handleSearch}>
                      <CommandInput
                        placeholder="Search antiques..."
                        value={searchValue}
                        onValueChange={setSearchValue}
                      />
                    </form>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {searchResults && searchResults.length > 0 && (
                      <CommandGroup heading="Suggestions">
                        {searchResults.map((antique) => (
                          <CommandItem
                            key={antique.id}
                            value={antique.id}
                            onSelect={() => handleSearchItemSelect(antique.id)}
                            className="cursor-pointer"
                          >
                            <div className="flex items-center w-full">
                              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mr-2">
                                <img 
                                  src={antique.imageUrl} 
                                  alt={antique.name}
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div className="flex-1 truncate">
                                <p className="text-sm font-medium">{antique.name}</p>
                                <p className="text-xs text-muted-foreground truncate">{antique.era}, {antique.origin}</p>
                              </div>
                              <ArrowRight size={14} className="flex-shrink-0 text-muted-foreground" />
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                    {searchValue.trim() !== "" && (
                      <CommandGroup>
                        <CommandItem 
                          onSelect={() => {
                            handleSearch(new Event('submit') as any);
                          }}
                          className="cursor-pointer"
                        >
                          <Search className="mr-2 h-4 w-4" />
                          <span>Search for "{searchValue}"</span>
                        </CommandItem>
                      </CommandGroup>
                    )}
                  </Command>
                </div>
              </PopoverContent>
            </Popover>

            <Link to="/wishlist" className="relative p-2 text-foreground hover:text-primary transition-colors">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-xs font-semibold text-accent-foreground w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === link.path ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search antiques..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-md bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  <Search size={18} />
                </button>
              </form>

              <Link 
                to="/wishlist" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} />
                <span>Wishlist ({wishlist.length})</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
