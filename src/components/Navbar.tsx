import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Reviews", href: "/#reviews" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms-of-service" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  };

  const scrollToConsultation = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("lead-form-container")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("lead-form-container")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isAnchorLink = (href: string) => href.startsWith("/#");

  const isHomePage = location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 px-6 py-4 transition-all duration-300",
          scrolled || !isHomePage
            ? "bg-white/95 shadow-md py-2 backdrop-blur-sm"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="JKfenesta Logo" className="h-14 md:h-18 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              isAnchorLink(link.href) ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "font-medium transition-colors hover:text-brand-pink cursor-pointer",
                    scrolled || !isHomePage ? "text-brand-charcoal" : "text-brand-charcoal md:text-white/90 md:hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-medium transition-colors hover:text-brand-pink cursor-pointer",
                    scrolled || !isHomePage ? "text-brand-charcoal" : "text-brand-charcoal md:text-white/90 md:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
            <Button
              variant="brand"
              className="rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              onClick={scrollToConsultation}
            >
              Book Free Design Consultation
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden transition-colors",
              scrolled || !isHomePage ? "text-brand-charcoal" : "text-brand-charcoal md:text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-ivory flex flex-col items-center justify-center gap-8 text-2xl font-heading animate-in slide-in-from-right">
          <button
            className="absolute top-8 right-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>
          {links.map((link) =>
            isAnchorLink(link.href) ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-brand-pink transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-pink transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
          <Button
            variant="brand"
            size="xl"
            className="mt-4 shadow-xl"
            onClick={scrollToConsultation}
          >
            Book Free Design Consultation
          </Button>
        </div>
      )}
    </>
  );
}
