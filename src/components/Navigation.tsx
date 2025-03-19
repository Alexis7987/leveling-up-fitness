
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Menu, 
  X,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', name: 'Accueil', icon: <Home className="h-5 w-5" /> },
    { path: '/shop', name: 'Boutique', icon: <ShoppingBag className="h-5 w-5" /> },
    { path: '/affiliate', name: 'Affiliation', icon: <DollarSign className="h-5 w-5" /> },
    { path: '/donation', name: 'Soutenir', icon: <Users className="h-5 w-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-solo-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <Trophy className="h-8 w-8 text-solo-highlight mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight">
                Leveling Up
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {links.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className={
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                        : "text-solo-text hover:bg-solo-primary/30"
                    }
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile navigation toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-solo-text hover:bg-solo-primary/30"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-solo-dark/95 backdrop-blur-lg shadow-lg md:hidden"
          >
            <div className="px-4 py-2 space-y-2">
              {links.map((link) => (
                <Link key={link.path} to={link.path} className="block">
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                        : "text-solo-text hover:bg-solo-primary/30"
                    }`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
