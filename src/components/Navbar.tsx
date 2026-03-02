import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Loja', path: '/shop' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-novischi-dark/90 backdrop-blur-md border-b border-novischi-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo Section (Left) */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-novischi-white font-display uppercase pt-1">
              NOVISCHI STORE<span className="text-novischi-gold">.</span>
            </h1>
          </Link>

          {/* Right Side: Nav + Icons */}
          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-novischi-gold uppercase tracking-wider",
                      location.pathname === link.path ? "text-novischi-gold" : "text-novischi-gray"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button className="text-novischi-gray hover:text-novischi-gold transition-colors hidden sm:block">
                <User size={20} />
              </button>
              <button 
                className="text-novischi-gray hover:text-novischi-gold transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-novischi-gold text-novischi-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden text-novischi-gray hover:text-novischi-gold"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-novischi-dark border-b border-novischi-gold/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-novischi-gray hover:text-novischi-gold hover:bg-novischi-black rounded-md uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
