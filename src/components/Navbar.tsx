
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Heart } from 'lucide-react';
import { useAntiques } from '../context/AntiqueContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();
  const { wishlist, setFilters } = useAntiques();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev: any) => ({ ...prev, search: searchValue }));
    if (location.pathname !== '/collection') {
      window.location.href = '/collection';
    }
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
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search antiques..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="px-4 py-2 pr-10 rounded-md bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <Search size={18} />
              </button>
            </form>

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
