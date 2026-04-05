import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons/Icons';

interface NavigationProps {
  onJoinClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Signals', href: '#signals' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[rgba(5,6,11,0.85)] backdrop-blur-xl border-b border-[rgba(244,246,255,0.06)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="font-mono text-sm font-medium text-[#F4F6FF] uppercase tracking-[0.15em] hover:text-[#2D6BFF] transition-colors"
            >
              Alpha Wave
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-[#A7AEBF] hover:text-[#F4F6FF] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onJoinClick}
                className="px-5 py-2.5 rounded-full border border-[#2D6BFF] text-sm text-[#F4F6FF] hover:bg-[#2D6BFF] hover:glow-blue transition-all duration-300"
              >
                Join
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F4F6FF]"
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-[rgba(5,6,11,0.95)] backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-display font-medium text-[#F4F6FF] hover:text-[#2D6BFF] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onJoinClick();
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 px-8 py-3 rounded-full bg-[#2D6BFF] text-[#F4F6FF] font-medium"
          >
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
