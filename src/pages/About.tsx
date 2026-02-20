import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Home, Award, Clock, Palette } from "lucide-react";
import { SEO } from '../components/SEO';
import { Button } from "../components/ui/button";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <SEO
                title="About Us | JKfenesta Interior Design"
                description="Learn about JKfenesta's journey in transforming Mumbai homes. Our team of expert designers delivers premium interiors with a 45-day guarantee."
                canonical="https://jkfenesta.com/about"
            />
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-pink/10 text-brand-pink px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        About JKfenesta
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading mb-6 text-brand-charcoal">
                        Creating <span className="text-brand-pink italic">Extraordinary</span> Spaces
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        JKfenesta is a premium interior design and execution brand serving Mumbai, Navi Mumbai, and Thane. We transform houses into luxury homes with guaranteed timelines, transparent pricing, and decade-long warranties.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { number: "9,020+", label: "Homes Delivered" },
                        { number: "10", label: "Year Warranty" },
                        { number: "45", label: "Day Delivery" },
                        { number: "4.6★", label: "Client Rating" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                            <div className="text-3xl md:text-4xl font-heading text-brand-pink mb-2">{stat.number}</div>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Our Story */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading text-brand-charcoal mb-6">
                            Our <span className="text-brand-pink italic">Story</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Founded with a vision to make luxury interiors accessible, JKfenesta has grown into one of the most trusted interior design brands in Mumbai. We believe that every home deserves world-class design — without the stress, delays, or hidden costs.
                            </p>
                            <p>
                                Our in-house team of experienced designers, project managers, and skilled craftsmen work together to deliver end-to-end interior solutions. From modular kitchens and wardrobes to complete home makeovers, we handle everything under one roof.
                            </p>
                            <p>
                                What sets us apart is our commitment to transparency and accountability. Every project comes with a fixed timeline, a detailed cost breakdown, and a 10-year warranty on modular products.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Award, title: "Premium Quality", text: "Factory-grade modular products built to last." },
                            { icon: Clock, title: "On-Time Delivery", text: "45-day guaranteed move-in timeline." },
                            { icon: Palette, title: "Expert Designers", text: "Dedicated design consultants for every project." },
                            { icon: Home, title: "End-to-End", text: "Full-home interiors, renovation, and civil work." },
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-ivory rounded-2xl p-6 group hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-pink/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-pink" />
                                </div>
                                <h4 className="font-bold text-brand-charcoal mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brand Identity Note */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-20">
                    <h2 className="text-2xl font-heading text-brand-charcoal mb-4">About Our Brand</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        <strong>JKfenesta</strong> is the primary brand identity for all our interior design and execution services. We provide the manufacturing and supply-chain backbone for our projects directly.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        When you work with JKfenesta, you get the best of both worlds — the personalised attention of a boutique design studio and the reliability of an established enterprise. All communications, contracts, and warranties are issued under the JKfenesta brand.
                    </p>
                </div>

                {/* Why Choose Us */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading text-brand-charcoal mb-4">
                        Why Homeowners <span className="text-brand-pink italic">Choose Us</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {[
                        "No Hidden Costs — Transparent quotations with detailed breakdowns",
                        "10-Year Warranty on all modular products",
                        "45-Day Move-in Guarantee with penalty clause",
                        "Dedicated Project Manager for every client",
                        "450+ Apartments delivered across Mumbai",
                        "Premium materials sourced from top brands",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-brand-ivory p-5 rounded-xl">
                            <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Team CTA */}
                <div className="bg-brand-charcoal rounded-3xl p-8 md:p-12 text-center text-white">
                    <div className="w-16 h-16 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h2 className="text-3xl font-heading mb-4">Meet Our Design Team</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Our team of 50+ experienced designers, architects, and project managers are ready to bring your vision to life. Book a free consultation to get started.
                    </p>
                    <Link to="/#consultation">
                        <Button variant="brand" size="lg" className="shadow-xl">
                            Book Free Design Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
