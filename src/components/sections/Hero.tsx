import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/hero.webp" alt="Beautiful Interiors" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/40 via-brand-orange/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl" data-aos="fade-right">
          <h1 className="text-6xl md:text-8xl font-heading text-white mb-8 leading-tight">
            Beautiful Interiors, <br /><span className="italic text-brand-peach">Thoughtfully</span> Designed
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            End-to-end interior solutions for modern homes. We transform your vision into a living masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact">
              <Button className="bg-gradient-brand text-white px-10 py-8 rounded-full font-bold text-lg shadow-2xl h-auto">
                Get Free Design Consultation
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="glass text-brand-charcoal px-10 py-8 rounded-full font-bold text-lg hover:bg-white transition-all h-auto border-none bg-white/20 backdrop-blur-md">
                View Designs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}