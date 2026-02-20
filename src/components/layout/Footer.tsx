import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';



export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/images/logo.webp" alt="JKfenesta Logo" className="h-12 w-auto" />
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Elevating lifestyles through bespoke interior solutions. From concept to reality, we create spaces that inspire.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-heading mb-8">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/designs" className="hover:text-white transition-colors">Design Gallery</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/get-quote" className="hover:text-white transition-colors">Get Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-heading mb-8">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Full Home Interior</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Modular Kitchen</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bedroom Interiors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Office Interiors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Renovation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-heading mb-8">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-pink shrink-0" />
              <span>3/B, 1st Floor, Asad Compound, Opp. Mukund Hospital, Andheri Kurla Road, Marol Pipeline, Andheri East, Mumbai - 400059</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-pink shrink-0" />
              <span>+91 93264 60479</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-pink shrink-0" />
              <span>
                contactus@
                jkfenesta.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; 2024 JKfenesta Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
}
