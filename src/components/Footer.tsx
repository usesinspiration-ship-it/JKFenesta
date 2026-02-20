import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.webp";

export function Footer() {
  const handlePhoneClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { method: 'phone' });
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* About */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="JKfenesta Logo" className="h-12 w-auto" />
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Elevating lifestyles through bespoke interior solutions. From concept to reality, we create spaces that inspire. Serving Mumbai, Navi Mumbai, and Thane.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com/jkfenesta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/jkfenesta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/jkfenesta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/jkfenesta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-heading mb-8">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/#reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-heading mb-8">Our Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white transition-colors cursor-default">Full Home Interior</li>
            <li className="hover:text-white transition-colors cursor-default">Modular Kitchen</li>
            <li className="hover:text-white transition-colors cursor-default">Bedroom Interiors</li>
            <li className="hover:text-white transition-colors cursor-default">Office Interiors</li>
            <li className="hover:text-white transition-colors cursor-default">Renovation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-heading mb-8">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-pink shrink-0" />
              <span>3/B, 1st Floor, Asad Compound, Opp. Mukund Hospital, Andheri Kurla Road, Marol Pipeline, Andheri East, Mumbai - 400059</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-pink shrink-0" />
              <a href="tel:+919326460479" onClick={handlePhoneClick} className="hover:text-white transition-colors">
                +91 93264 60479
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-pink shrink-0" />
              <a href="mailto:
contactus@jkfenesta.com" className="hover:text-white transition-colors">

                contactus@jkfenesta.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} JKfenesta Interiors. All rights reserved.
          <span className="mx-2">|</span>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <span className="mx-2">|</span>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </p>
      </div>
    </footer>
  );
}
