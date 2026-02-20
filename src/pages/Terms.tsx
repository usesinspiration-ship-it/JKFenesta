import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from '../components/SEO';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
            <SEO
                title="Terms of Service | JKfenesta Interior Design"
                description="Read JKfenesta's terms of service covering pricing, warranty, delivery timelines, cancellation, and governing law for all interior design projects in Mumbai."
                canonical="https://jkfenesta.com/terms-of-service"
            />
            <h1 className="text-4xl font-heading mb-4 text-brand-charcoal">Terms of Service</h1>
            <p className="text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg text-gray-600 max-w-none space-y-8">

                {/* 1 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the JKfenesta website (jkfenesta.com), you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree with any part of these terms, you must not use this website.
                    </p>
                </section>

                {/* 2 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">2. Services Offered</h2>
                    <p>JKfenesta provides the following services:</p>
                    <ul>
                        <li>Free interior design consultation (on-site and virtual).</li>
                        <li>End-to-end interior design and execution for residential and commercial spaces.</li>
                        <li>Modular kitchen, wardrobe, storage, and furniture solutions.</li>
                        <li>Civil work, painting, false ceiling, and renovation services.</li>
                    </ul>
                    <p>
                        All designs, estimates, timelines, and project scopes discussed during the free consultation are indicative and subject to the final signed contract. Actual costs may vary based on site conditions, material selections, and scope changes.
                    </p>
                </section>

                {/* 3 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">3. Pricing & Payment</h2>
                    <p>
                        Prices displayed on this website (e.g., "2 BHK from ₹3.57L onwards") are <strong>starting prices</strong> and are subject to customisation based on your requirements, material choices, and project complexity. These are not final quotations.
                    </p>
                    <ul>
                        <li>A detailed cost estimate will be provided after the on-site consultation.</li>
                        <li>Payment terms, milestones, and schedules will be outlined in the project contract.</li>
                        <li>All prices are in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise.</li>
                    </ul>
                </section>

                {/* 4 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">4. Warranty Policy</h2>
                    <p>JKfenesta provides the following warranties on completed projects:</p>
                    <ul>
                        <li><strong>10-Year Warranty</strong> on modular products (kitchens, wardrobes, TV units, shoe racks, and storage units) — covers manufacturing defects, material failure, and hardware issues.</li>
                        <li><strong>1-Year Warranty</strong> on civil work, painting, and electrical fittings — covers workmanship defects.</li>
                        <li><strong>Brand-Specific Warranty</strong> on appliances and fixtures — as per the original manufacturer's warranty terms.</li>
                    </ul>
                    <p>
                        Warranties do <strong>not</strong> cover damage caused by misuse, negligence, natural disasters, or unauthorised modifications. Warranty claims can be initiated by contacting our support team.
                    </p>
                </section>

                {/* 5 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">5. Delivery Timeline</h2>
                    <p>
                        JKfenesta offers a <strong>45-day delivery guarantee</strong> for standard projects, starting from the date of design approval and advance payment. This timeline covers:
                    </p>
                    <ul>
                        <li>Design finalisation and material procurement.</li>
                        <li>Factory production and quality checks.</li>
                        <li>On-site installation and final handover.</li>
                    </ul>
                    <p>
                        Delays caused by client-side changes, approval delays, or force majeure events are excluded from the 45-day guarantee. Custom or large-scale villa projects may have extended timelines as agreed in the contract.
                    </p>
                </section>

                {/* 6 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">6. Financing Disclaimer</h2>
                    <p>
                        JKfenesta does <strong>not</strong> directly offer financing, EMI, or loan services. Any references to financing options on this website or during consultations are for informational purposes only.
                    </p>
                    <ul>
                        <li>Financing, if available, is facilitated through third-party banking partners and NBFCs.</li>
                        <li>Loan approval, interest rates, EMI amounts, and repayment terms are determined solely by the financing partner.</li>
                        <li>JKfenesta is not responsible for loan approvals, rejections, or any disputes arising from third-party financing arrangements.</li>
                    </ul>
                    <p>
                        Clients are advised to independently verify all financing terms before entering into any credit arrangement.
                    </p>
                </section>

                {/* 7 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">7. Free Consultation</h2>
                    <p>
                        The free design consultation offered through this website is provided at no cost and with no obligation to proceed with a project. The consultation includes an initial discussion of your requirements and a preliminary design direction.
                    </p>
                    <p>
                        Detailed 3D renders, itemised quotations, and material samples are provided as part of the formal project engagement process and may require a design booking fee.
                    </p>
                </section>

                {/* 8 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">8. Intellectual Property</h2>
                    <p>
                        All content on this website — including text, images, designs, portfolio photographs, logos, and branding — is the intellectual property of JKfenesta Interiors and may not be reproduced, copied, or distributed without prior written permission.
                    </p>
                </section>

                {/* 9 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">9. Limitation of Liability</h2>
                    <p>
                        While we strive for accuracy, JKfenesta does not warrant that all information on this website is error-free. We are not liable for any direct, indirect, or consequential damages arising from the use of this website or reliance on its content.
                    </p>
                    <p>
                        Project-specific liabilities, compensation, and dispute resolution processes are governed by the signed project contract.
                    </p>
                </section>

                {/* 10 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">10. Cancellation & Refund</h2>
                    <p>
                        Cancellation and refund policies are outlined in the individual project contract. Generally:
                    </p>
                    <ul>
                        <li>Design booking fees are non-refundable once design work has commenced.</li>
                        <li>Project cancellations after production has started may incur material and manufacturing costs.</li>
                        <li>Refund timelines and amounts are determined on a case-by-case basis.</li>
                    </ul>
                </section>

                {/* 11 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">11. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of India. Any disputes arising from these terms or the use of this website shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                    </p>
                </section>

                {/* 12 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">12. Modifications</h2>
                    <p>
                        We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the website after changes constitutes acceptance.
                    </p>
                </section>

                {/* 13 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">13. Contact</h2>
                    <p>For questions about these terms, contact us:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:
contactus@
jkfenesta.com" className="text-brand-pink">
                            contactus@
                            jkfenesta.com</a></li>
                        <li><strong>Phone:</strong> <a href="tel:+919326460479" className="text-brand-pink">+91 93264 60479</a></li>
                        <li><strong>Address:</strong> 3/B, 1st Floor, Asad Compound, Opp. Mukund Hospital, Andheri Kurla Road, Marol Pipeline, Andheri East, Mumbai - 400059</li>
                    </ul>
                </section>

                <div className="mt-12 pt-8 border-t flex gap-6">
                    <Link to="/" className="text-brand-pink underline">Back to Home</Link>
                    <Link to="/privacy-policy" className="text-brand-pink underline">Privacy Policy</Link>
                    <Link to="/contact" className="text-brand-pink underline">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Terms;
