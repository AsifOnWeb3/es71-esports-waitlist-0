import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm border-2 border-purple-500/40 rounded-full px-4 py-2 shadow-lg shadow-purple-500/10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img src="/finalll-logo.svg" alt="ES71 ESPORTS" className="w-16 h-16 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300" />
              <span className="text-lg font-play font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300">
                ES71 ESPORTS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/team"
                className={`px-4 py-2 rounded-full transition-all duration-300 font-play font-medium hover-this ${
                  location.pathname === '/team'
                    ? 'bg-purple-500 text-white'
                    : 'text-purple-300 hover:text-white hover:bg-purple-500/20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]'
                }`}
              >
                Team
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-purple-400 hover:text-purple-300 transition-colors hover-this"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-2xl p-4"
            >
              <Link
                to="/team"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 font-play font-medium hover-this ${
                  location.pathname === '/team'
                    ? 'bg-purple-500 text-white'
                    : 'text-purple-300 hover:text-white hover:bg-purple-500/20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]'
                }`}
              >
                Team
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;