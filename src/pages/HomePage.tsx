import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Banknote, Layers, Clock, Users, Star, CheckCircle2 } from "lucide-react";
import heroImg from "../assets/hero.webp";
import kitchenImg from "../assets/kitchen.webp";
import bedroomImg from "../assets/bedroom.webp";
import livingImg from "../assets/living.webp";
import wardrobeImg from "../assets/wardrobe.webp";
import officeImg from "../assets/office.webp";
import { Button } from "../components/ui/button";
import { LeadForm } from "../components/LeadForm";
import { SEO } from '../components/SEO';




const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function HomePage() {
  const pricingRef = useRef<HTMLElement>(null);
  const pricingTracked = useRef(false);

  // ViewContent tracking when pricing section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !pricingTracked.current) {
            pricingTracked.current = true;
            if (window.fbq) {
              window.fbq('track', 'ViewContent', {
                content_name: 'Pricing Section',
                content_category: 'Landing Page',
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="JKfenesta | Luxury Interior Design in Mumbai"
        description="Transform your home with JKfenesta — premium interior design in Mumbai. 45-day delivery guarantee, 10-year warranty, transparent pricing. Get a free design consultation today."
        canonical="https://jkfenesta.com/"
      />
      {/* Hero Section */}
      <section id="consultation" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg}
            alt="Luxury Interior Design by JKfenesta"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Hero Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-6"
          >
            <div className="inline-block bg-brand-pink/20 text-brand-pink px-4 py-1 rounded-full text-sm font-semibold mb-2 border border-brand-pink/30">
              Premium Interiors in Mumbai & Navi Mumbai
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight">
              Luxury Interior Design <br />
              <span className="text-brand-peach italic">in Mumbai</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Transform your home with <b>45-day guaranteed delivery</b> and <b>10-year warranty</b>. Join 9,020+ happy homeowners.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                "45-Day Move-in Guarantee",
                "10-Year Warranty on Modular Products",
                "No Hidden Costs – Transparent Pricing",
                "9,020+ Homes Delivered",
                "Premium Design Studios",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-8 hidden md:block"
            >
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex -space-x-3">
                  {[
                    { i: "AS", c: "bg-brand-pink" },
                    { i: "RV", c: "bg-blue-500" },
                    { i: "PK", c: "bg-green-500" },
                    { i: "VM", c: "bg-purple-500" }
                  ].map((u, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full ${u.c} border-2 border-brand-charcoal flex items-center justify-center text-xs font-bold text-white shadow-sm`}>
                      {u.i}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-brand-charcoal flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    9k+
                  </div>
                </div>
                <span>Trusted by 9,020+ families across Mumbai</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lead Form */}
          <motion.div
            id="lead-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-20 px-6 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading mb-4 text-brand-charcoal">
              Transparent <span className="text-brand-pink italic">Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unbeatable value for premium designs. Customised to your budget.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Package 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-brand-pink/30 transition-all group">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Essential 2 BHK</h3>
              <div className="text-4xl font-heading text-brand-pink mb-6">₹3.57L <span className="text-lg text-gray-400 font-sans font-normal">*onwards</span></div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Modular Kitchen</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Wardrobes</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> TV Unit</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Shoe Rack</li>
              </ul>
              <a href="#consultation">
                <Button variant="outline" className="w-full border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white">Check Detail Cost</Button>
              </a>
            </motion.div>

            {/* Package 2 */}
            <motion.div variants={fadeInUp} className="bg-brand-charcoal text-white rounded-3xl p-8 shadow-xl transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Premium 3 BHK</h3>
              <div className="text-4xl font-heading text-brand-peach mb-6">₹5.45L <span className="text-lg text-white/50 font-sans font-normal">*onwards</span></div>
              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" /> Premium Modular Kitchen</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" /> Floor-to-Ceiling Wardrobes</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" /> Premium TV Unit & Foyer</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" /> False Ceiling & Lighting</li>
              </ul>
              <a href="#consultation">
                <Button variant="brand" className="w-full shadow-lg">Get Quote</Button>
              </a>
            </motion.div>

            {/* Package 3 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-brand-pink/30 transition-all group">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Luxury Villa</h3>
              <div className="text-4xl font-heading text-brand-pink mb-6">Custom <span className="text-lg text-gray-400 font-sans font-normal">Pricing</span></div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> End-to-End Interiors</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Civil Work & Painting</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Custom Furniture</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Smart Home Automation</li>
              </ul>
              <a href="#consultation">
                <Button variant="outline" className="w-full border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white">Talk to Designer</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warranty / Why Us Section */}
      <section id="warranty" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading mb-6">
              Why <span className="text-brand-pink italic">JKfenesta</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring excellence, transparency, and innovation to every project.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "10-Year Warranty", text: "Quality that lasts a decade." },
              { icon: Banknote, title: "Transparent Pricing", text: "No hidden costs, ever." },
              { icon: Layers, title: "End-to-End Execution", text: "We handle everything for you." },
              { icon: Clock, title: "45-Day Delivery", text: "Guaranteed delivery timelines." },
              { icon: Users, title: "Expert Designers", text: "Top-tier design professionals." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-brand-ivory p-8 rounded-[2rem] text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-pink/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-brand-pink" />
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section — Moved ABOVE Portfolio for trust with cold traffic */}
      <section id="reviews" className="py-20 px-6 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading mb-4">
              ⭐ 4.6 Client <span className="text-brand-pink italic">Satisfaction</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rated <b>4.6/5</b> by happy homeowners across Mumbai.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                text: "Transformed our 3BHK into a luxury haven. The attention to detail was spot on! Delivered in 42 days.",
                name: "Anjali Sharma",
                loc: "Bandra West",
              },
              {
                text: "The modular kitchen they designed is beautiful and functional. My favorite part of the house.",
                name: "Rahul Verma",
                loc: "South Mumbai",
              },
              {
                text: "Transparent pricing and exceptional designs. No hidden costs at all. Highly recommend JKfenesta.",
                name: "Priya Kapoor",
                loc: "Navi Mumbai",
              },
              {
                text: "From concept to completion in 40 days. The wardrobe and TV unit are magazine-worthy. Best decision we made!",
                name: "Vikram Mehta",
                loc: "Powai",
              },
              {
                text: "JKfenesta redesigned our villa with stunning contemporary interiors. Their 10-year warranty gives real peace of mind.",
                name: "Sneha Gupta",
                loc: "Andheri West",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 rounded-[2rem] hover:-translate-y-1 hover:shadow-lg transition-all border border-transparent hover:border-brand-pink/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-brand-orange">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-charcoal">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.loc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 px-6 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading mb-4 text-brand-charcoal">
              Our <span className="text-brand-pink italic">Expertise</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1: Design Services */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎨</span>
                <h3 className="text-2xl font-bold text-brand-charcoal">Design Services</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Bespoke modular kitchens",
                  "Custom wardrobe solutions",
                  "Architectural lighting design",
                  "Premium flooring installation",
                  "Electrical system integration",
                  "Structural enhancements",
                  "Sculptural false ceilings",
                  "Artisan wall treatments"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-brand-pink shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Investment Benefits */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💰</span>
                <h3 className="text-2xl font-bold text-brand-charcoal">Investment<br />Benefits</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3 text-sm">
                  <span className="text-brand-pink shrink-0">—</span>
                  <span>Flexible financing options through premier financial partners with customized EMI solutions</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="text-brand-pink shrink-0">—</span>
                  <span>Complete cost transparency with detailed itemization and no surprise additions</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Assurance */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🛡️</span>
                <h3 className="text-2xl font-bold text-brand-charcoal">Assurance</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3 text-sm">
                  <span className="text-brand-pink shrink-0">—</span>
                  <span>Comprehensive 10-year warranty on all modular installations and premium fixtures</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="text-brand-pink shrink-0">—</span>
                  <span>Extended 1-year on-site service coverage for painting, electrical, plumbing and finishing work</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
          >
            <div>
              <div className="inline-block bg-brand-pink/10 text-brand-pink px-3 py-1 rounded-full text-xs font-bold mb-2">
                DELIVERED 450+ APARTMENTS
              </div>
              <h2 className="text-3xl md:text-5xl font-heading mb-4">Our Latest <span className="italic text-brand-pink">Work</span></h2>
              <p className="text-gray-600">Explore homes we've recently handed over.</p>
            </div>
            <Link to="/portfolio">
              <Button variant="outline" className="border-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-colors">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { img: kitchenImg, title: "2 BHK, Andheri West – Modern Modular Kitchen", text: "Acrylic Finish / L-Shaped" },
              { img: livingImg, title: "3 BHK, Juhu – Luxury Living Room", text: "Contemporary Style" },
              { img: bedroomImg, title: "2 BHK, Thane – Master Bedroom", text: "Minimalist Design" },
              { img: wardrobeImg, title: "3 BHK, Bandra – Walk-in Wardrobe", text: "Glass & Wood Finish" },
              { img: officeImg, title: "Office, BKC – Executive Space", text: "Productive Interiors", span: "lg:col-span-2" },
            ].map((style, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`group relative rounded-[2rem] overflow-hidden shadow-sm h-[300px] hover:shadow-xl transition-all ${style.span || ""}`}
              >
                <img
                  src={style.img}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-xl font-bold text-white mb-1">{style.title}</h3>
                  <p className="text-white/80 text-sm">{style.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-brand-ivory">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-heading mb-4 text-brand-charcoal">
              Frequently Asked <span className="text-brand-pink italic">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                q: "How long does a typical interior project take?",
                a: "We guarantee delivery within 45 days for end-to-end modular interiors. For implementing civil work and custom changes, timeline may vary slightly based on scope."
              },
              {
                q: "Do you provide a warranty on your products?",
                a: "Yes! We offer a comprehensive 10-year warranty on all modular furniture (kitchens, wardrobes) and a 1-year service warranty on on-site work."
              },
              {
                q: "What is your starting price package?",
                a: "Our packages start from ₹3.5 Lakhs for a standard 2 BHK, which includes modular kitchen, wardrobes, TV unit, and essential furniture."
              },
              {
                q: "which areas in Mumbai do you serve?",
                a: "We serve all major areas across Mumbai and MMR, including South Mumbai, Bandra, Juhu, Andheri, Powai, Thane, and Navi Mumbai."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
