import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShieldCheck } from "lucide-react";

export function LeadForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        propertyType: "2 BHK",
        whatsappConsent: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, whatsappConsent: e.target.checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call — Lead pixel event fires on ThankYou page, not here
        setTimeout(() => {
            console.log("Lead Submitted:", formData);
            setLoading(false);
            navigate("/thank-you-consultation", {
                state: {
                    city: formData.city,
                    propertyType: formData.propertyType,
                },
            });
        }, 1000);
    };

    const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all";

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-md w-full mx-auto" id="lead-form">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-heading text-brand-charcoal mb-2">
                    Get Free Design Consultation
                </h3>
                <p className="text-gray-500 text-sm">
                    No charges for consultation. We respond within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        required
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        required
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 93264 60479"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        required
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City / Location</label>
                    <input
                        required
                        id="city"
                        type="text"
                        name="city"
                        placeholder="e.g. Mumbai, Andheri West"
                        value={formData.city}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className={`${inputClasses} bg-white`}
                    >
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                        <option value="Villa">Villa</option>
                        <option value="Office">Office</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={formData.whatsappConsent}
                        onChange={handleCheckboxChange}
                        className="mt-1 w-4 h-4 text-brand-pink rounded border-gray-300 focus:ring-brand-pink"
                    />
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                        I agree to receive WhatsApp updates about my project and offers.
                    </span>
                </label>

                <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full text-lg py-6 font-bold shadow-lg hover:shadow-xl transition-all"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Get Free Design Consultation"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Your data is 100% secure. Privacy Protected.</span>
                </div>

                <p className="text-[10px] text-center text-gray-400 mt-2">
                    This site uses cookies and similar technologies (Meta Pixel) for analytics and personalised ads.{" "}
                    <a href="/privacy-policy" className="underline hover:text-brand-pink">Privacy Policy</a>
                </p>
            </form>
        </div>
    );
}
