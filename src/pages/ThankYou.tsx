import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { SEO } from '../components/SEO';



const ThankYou = () => {
    const location = useLocation();
    const state = location.state as { city?: string; propertyType?: string } | null;

    useEffect(() => {
        // Fire Meta Lead event ONLY on this page
        if (window.fbq) {
            window.fbq('track', 'Lead', {
                content_name: state?.propertyType || 'Unknown',
                content_category: 'Consultation',
                city: state?.city || 'Unknown',
                property_type: state?.propertyType || 'Unknown',
                value: 0.00,
                currency: 'INR',
            });
        }
    }, [state]);

    return (
        <div className="min-h-screen bg-brand-ivory flex items-center justify-center px-6 py-20">
            <SEO
                title="Thank You | JKfenesta Design Consultation Booked"
                description="Your free interior design consultation request has been received. Our design expert will call you within 24 hours."
                canonical="https://jkfenesta.com/thank-you-consultation"
            />
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl w-full text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                </div>

                <h1 className="text-3xl md:text-5xl font-heading text-brand-charcoal mb-4">
                    Thank You!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    We have received your request for a free design consultation.
                </p>

                <div className="bg-brand-ivory rounded-xl p-6 mb-8 text-left">
                    <h3 className="font-bold text-lg mb-4 text-brand-charcoal">What Happens Next?</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-gray-600">
                            <span className="bg-brand-pink text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                            <span>Our design expert will review your requirement.</span>
                        </li>
                        <li className="flex gap-3 text-gray-600">
                            <span className="bg-brand-pink text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                            <span>You will receive a call within <b>24 hours</b> to schedule your free consultation.</span>
                        </li>
                        <li className="flex gap-3 text-gray-600">
                            <span className="bg-brand-pink text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                            <span>Our designer will visit your home and present a personalised design plan.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/portfolio">
                        <Button variant="brand" className="w-full sm:w-auto">
                            View Portfolio <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <Button variant="outline" className="w-full sm:w-auto">
                            <Download className="w-4 h-4 mr-2" /> Download Design Guide
                        </Button>
                    </a>
                    <Link to="/">
                        <Button variant="outline" className="w-full sm:w-auto">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
