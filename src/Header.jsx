'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <>
      <header className="flex justify-between items-center py-6 px-4 max-w-7xl mx-auto w-full relative">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary tracking-wide"
        >
          Dibakar Biswas
        </motion.h1>

        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                whileHover={{ scale: 1.05, color: "#00eeff" }}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  item === "Home"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-text-dark hover:text-primary"
                }`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            )
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-primary">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a] border-b border-gray-800 absolute top-[72px] left-0 w-full z-50"
          >
            <nav className="flex flex-col max-w-7xl mx-auto">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 text-sm font-medium transition-colors border-b border-gray-800 ${
                    item === "Home"
                      ? "text-primary bg-[#111] border-l-4 border-l-primary"
                      : "text-text-dark hover:text-primary hover:bg-[#111]"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
