import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { SEO } from '../components/SEO';



const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePhoneClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact', { method: 'phone' });
        }
    };

    const handleWhatsAppClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact', { method: 'whatsapp' });
        }
    };

    return (
        <div className="pt-24 pb-16 px-6">
            <SEO
                title="Contact JKfenesta | Free Interior Design Consultation Mumbai"
                description="Reach out to JKfenesta for your premium interior design project in Mumbai. Call, WhatsApp, or visit our experience center in Andheri East."
                canonical="https://jkfenesta.com/contact"
            />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading mb-4 text-brand-charcoal">
                        Get In <span className="text-brand-pink italic">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to transform your space? Reach out to us — we'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-heading text-brand-charcoal mb-6">Contact Information</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-brand-pink" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal mb-1">Phone</h4>
                                        <a
                                            href="tel:+919326460479"
                                            onClick={handlePhoneClick}
                                            className="text-gray-600 hover:text-brand-pink transition-colors text-lg"
                                        >
                                            +91 93264 60479
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                                        <MessageCircle className="w-5 h-5 text-brand-pink" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal mb-1">WhatsApp</h4>
                                        <a
                                            href="https://wa.me/919326460479"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={handleWhatsAppClick}
                                            className="text-gray-600 hover:text-brand-pink transition-colors text-lg"
                                        >
                                            +91 93264 60479
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-brand-pink" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal mb-1">Email</h4>
                                        <a
                                            href="mailto:
contactus@
jkfenesta.com"
                                            className="text-gray-600 hover:text-brand-pink transition-colors text-lg"
                                        >

                                            contactus@
                                            jkfenesta.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-brand-pink" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal mb-1">Office Address</h4>
                                        <p className="text-gray-600">
                                            3/B, 1st Floor, Asad Compound,<br />
                                            Opp. Mukund Hospital, Andheri Kurla Road,<br />
                                            Marol Pipeline, Andheri East,<br />
                                            Mumbai - 400059
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-brand-pink" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal mb-1">Working Hours</h4>
                                        <p className="text-gray-600">
                                            Mon – Sat: 10:00 AM – 7:00 PM<br />
                                            Sunday: By Appointment
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Quick CTA */}
                        <div className="bg-brand-charcoal rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-heading mb-3">Prefer a Quick Call?</h3>
                            <p className="text-gray-300 mb-6">
                                Speak directly with our design consultant. No waiting, no formalities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="tel:+919326460479" onClick={handlePhoneClick} className="flex-1">
                                    <Button variant="brand" className="w-full">
                                        <Phone className="w-4 h-4 mr-2" /> Call Now
                                    </Button>
                                </a>
                                <a
                                    href="https://wa.me/919326460479"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleWhatsAppClick}
                                    className="flex-1"
                                >
                                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-charcoal">
                                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15081.9333550674!2d72.875!3d19.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87c14e062c3%3A0x673981882570085a!2sAndheri%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="JKfenesta Office Location"
                            ></iframe>
                        </div>

                        <div className="bg-brand-ivory rounded-2xl p-8">
                            <h3 className="text-xl font-heading text-brand-charcoal mb-4">Visit Our Experience Center</h3>
                            <p className="text-gray-600 mb-4">
                                Walk through our state-of-the-art design studio and experience premium materials, live kitchen setups, and wardrobe demos before you commit.
                            </p>
                            <a href="#consultation" onClick={(e) => { e.preventDefault(); document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <Button variant="brand" className="w-full sm:w-auto">
                                    Book Free Design Consultation
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
