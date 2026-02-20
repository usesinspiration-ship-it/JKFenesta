import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Designs', href: '/designs' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Get Quote', href: '/get-quote' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 px-6 py-6 transition-all duration-300",
          isScrolled && "py-2 bg-white/90 shadow-sm backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/images/logo.webp" alt="JKfenesta Logo" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium hover:text-brand-pink transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-brand text-white hover:opacity-90 transition-opacity rounded-full px-6">
                Get Free Consultation
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-brand-charcoal"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-ivory flex flex-col items-center justify-center gap-8 text-2xl font-heading">
          <button
            className="absolute top-8 right-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-brand-pink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button className="bg-gradient-brand text-white px-8 py-6 rounded-full text-lg h-auto">
              Get Consultation
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}