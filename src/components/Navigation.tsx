
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
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const links = [
    { path: '/', name: 'Accueil', icon: <Home className="h-7 w-7" /> },
    { path: '/shop', name: 'Boutique', icon: <ShoppingBag className="h-7 w-7" /> },
    { path: '/affiliate', name: 'Affiliation', icon: <DollarSign className="h-7 w-7" /> },
    { path: '/donation', name: 'Soutenir', icon: <Users className="h-7 w-7" /> },
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
          scrolled ? 'bg-solo-dark/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <Trophy className="h-10 w-10 text-solo-highlight mr-2" />
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight">
                Leveling Up
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-5">
              {links.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className={`py-6 px-5 ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                        : "text-solo-text hover:bg-solo-primary/30"
                    }`}
                    size="lg"
                  >
                    {link.icon}
                    <span className="ml-2 text-lg font-medium">{link.name}</span>
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
                className="text-solo-text hover:bg-solo-primary/30 h-14 w-14"
              >
                {isOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
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
            className="fixed top-20 left-0 right-0 z-40 bg-solo-dark/95 backdrop-blur-lg shadow-lg md:hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link key={link.path} to={link.path} className="block">
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className={`w-full justify-start py-6 ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                        : "text-solo-text hover:bg-solo-primary/30"
                    }`}
                    size="lg"
                  >
                    {link.icon}
                    <span className="ml-3 text-xl">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fixed bottom navigation for mobile */}
      {isMobile && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-solo-dark/95 backdrop-blur-lg shadow-lg md:hidden z-40 border-t border-solo-accent/20"
        >
          <div className="grid grid-cols-4 gap-1 py-2">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="block">
                <div 
                  className={`flex flex-col items-center justify-center py-2 ${
                    location.pathname === link.path
                      ? "text-solo-highlight"
                      : "text-solo-text/70"
                  }`}
                >
                  {link.icon}
                  <span className="text-xs mt-1">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-20"></div>
      
      {/* Bottom spacer for mobile navigation */}
      {isMobile && <div className="h-20"></div>}
    </>
  );
};

export default Navigation;
