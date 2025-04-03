
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-antique font-bold text-primary-foreground mb-4">AntiqueVista</h2>
            <p className="mb-6">
              Curating exceptional antique pieces from around the world, preserving history and sharing stories of craftsmanship through the ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-antique font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-primary-foreground transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/featured" className="hover:text-primary-foreground transition-colors">
                  Featured Pieces
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-primary-foreground transition-colors">
                  History & Provenance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-antique font-semibold mb-4 text-primary-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Antique Lane, Historic District, London, UK</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+44 (0) 1234 567890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@antiquevista.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Monday-Saturday: 10am-6pm<br />Sunday: By appointment only</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-antique font-semibold mb-4 text-primary-foreground">Newsletter</h3>
            <p className="mb-4">
              Subscribe to receive updates on new acquisitions, events, and antique insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-primary-foreground text-foreground focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} AntiqueVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
