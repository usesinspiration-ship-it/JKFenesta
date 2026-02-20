import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from '../components/SEO';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
            <SEO
                title="Privacy Policy | JKfenesta Interior Design"
                description="Learn how JKfenesta collects, uses, and protects your personal data. Read our full privacy policy including WhatsApp consent and Meta Pixel tracking disclosures."
                canonical="https://jkfenesta.com/privacy-policy"
            />
            <h1 className="text-4xl font-heading mb-4 text-brand-charcoal">Privacy Policy</h1>
            <p className="text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg text-gray-600 max-w-none space-y-8">

                {/* 1 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">1. Introduction</h2>
                    <p>
                        JKfenesta Interiors ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you visit our website, fill out forms, or interact with us via phone, WhatsApp, or email.
                    </p>
                </section>

                {/* 2 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">2. Information We Collect</h2>
                    <p>We collect the following types of information:</p>
                    <h4 className="font-bold text-brand-charcoal mt-4">a) Personal Information (provided by you)</h4>
                    <ul>
                        <li><strong>Full Name</strong> — to address you and personalise your consultation.</li>
                        <li><strong>Phone Number</strong> — to contact you for scheduling consultations and project updates. Your phone number may also be used to reach you via WhatsApp (with your consent).</li>
                        <li><strong>Email Address</strong> — to send consultation confirmations, design proposals, and promotional updates.</li>
                        <li><strong>City / Location</strong> — to assign a local design consultant and provide region-specific pricing.</li>
                        <li><strong>Property Type</strong> (2 BHK, 3 BHK, Villa, Office, etc.) — to prepare relevant design suggestions and cost estimates.</li>
                    </ul>

                    <h4 className="font-bold text-brand-charcoal mt-4">b) Automatically Collected Data</h4>
                    <ul>
                        <li>Browser type, device information, and IP address.</li>
                        <li>Pages visited, time spent, and referral sources.</li>
                        <li>Data collected via cookies and the Meta (Facebook) Pixel.</li>
                    </ul>
                </section>

                {/* 3 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">3. How We Use Your Phone Number</h2>
                    <p>Your phone number is used specifically to:</p>
                    <ul>
                        <li>Call you to schedule your free design consultation.</li>
                        <li>Send project updates, appointment reminders, and follow-ups.</li>
                        <li>Reach you on WhatsApp for quicker communication (only if you have opted in via the consent checkbox on our form).</li>
                    </ul>
                    <p>
                        We do <strong>not</strong> sell, rent, or share your phone number with third-party telemarketers. Your number is only shared with our internal design team and project managers.
                    </p>
                </section>

                {/* 4 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">4. WhatsApp Communication</h2>
                    <p>
                        If you check the WhatsApp consent box on our consultation form, you agree to receive messages from JKfenesta on WhatsApp. These messages may include:
                    </p>
                    <ul>
                        <li>Consultation booking confirmations.</li>
                        <li>Design progress updates and site visit schedules.</li>
                        <li>Promotional offers, seasonal discounts, and new service announcements.</li>
                    </ul>
                    <p>
                        <strong>Opting out:</strong> You can opt out of WhatsApp messages at any time by replying "STOP" or by contacting us at <a href="mailto:
contactus@
jkfenesta.com" className="text-brand-pink">
                            contactus@
                            jkfenesta.com</a>. Opting out will not affect your ongoing project or consultation.
                    </p>
                </section>

                {/* 5 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">5. Cookies, Meta Pixel & Ads Tracking</h2>
                    <p>
                        This site uses cookies and similar tracking technologies to analyse traffic, improve user experience, and serve personalised advertisements.
                    </p>

                    <h4 className="font-bold text-brand-charcoal mt-4">a) What is the Meta Pixel?</h4>
                    <p>
                        The Meta (Facebook) Pixel is a piece of JavaScript code installed on our website that helps us measure the effectiveness of our advertising campaigns. It tracks actions such as page views, form submissions, and button clicks.
                    </p>

                    <h4 className="font-bold text-brand-charcoal mt-4">b) What data does the Meta Pixel collect?</h4>
                    <ul>
                        <li>Pages you view on our site (e.g., pricing section, portfolio).</li>
                        <li>Whether you submitted a consultation form (Lead event).</li>
                        <li>Click actions on phone numbers and WhatsApp links (Contact event).</li>
                        <li>Non-personally identifiable data such as browser type, device, and general location.</li>
                    </ul>

                    <h4 className="font-bold text-brand-charcoal mt-4">c) How is this data used?</h4>
                    <ul>
                        <li>To measure ad performance on Meta platforms (Facebook, Instagram).</li>
                        <li>To create custom audiences and lookalike audiences for targeted advertising.</li>
                        <li>To show you relevant JKfenesta ads on social media.</li>
                        <li>To optimise our marketing spend and improve our services.</li>
                    </ul>

                    <h4 className="font-bold text-brand-charcoal mt-4">d) Event parameters</h4>
                    <p>
                        Certain events may include additional parameters such as your city, property type, and estimated project value. These parameters help us serve more relevant ads and improve our service matching.
                    </p>

                    <p className="mt-4">
                        You can manage your cookie preferences in your browser settings. To opt out of Meta's data collection, visit <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-brand-pink">Facebook Ad Preferences</a>.
                    </p>
                </section>

                {/* 6 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">6. How We Use Your Information</h2>
                    <p>We use the personal data you provide to:</p>
                    <ul>
                        <li>Provide free interior design consultations and site assessments.</li>
                        <li>Prepare personalised design proposals and cost estimates.</li>
                        <li>Send project updates via phone, email, SMS, or WhatsApp (with consent).</li>
                        <li>Improve our website, services, and advertising campaigns.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </section>

                {/* 7 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">7. Data Sharing</h2>
                    <p>We do <strong>not</strong> sell or rent your personal information. We may share your data with:</p>
                    <ul>
                        <li><strong>Internal team:</strong> Design consultants, project managers, and support staff.</li>
                        <li><strong>Meta Platforms:</strong> Anonymised event data via the Meta Pixel for ad measurement.</li>
                        <li><strong>Service providers:</strong> Email/SMS delivery services that operate under strict data agreements.</li>
                        <li><strong>Legal authorities:</strong> Only when required by law.</li>
                    </ul>
                </section>

                {/* 8 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">8. Data Retention</h2>
                    <p>
                        We retain your personal information for as long as necessary to fulfil the consultation and service delivery process, or for a maximum period of <strong>3 years</strong> from your last interaction with us — whichever is shorter. After this period, your data is securely deleted from our systems.
                    </p>
                    <p>
                        You may request deletion of your data at any time by contacting us at <a href="mailto:
contactus@
jkfenesta.com" className="text-brand-pink">
                            contactus@
                            jkfenesta.com</a>.
                    </p>
                </section>

                {/* 9 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">9. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Request access to the personal data we hold about you.</li>
                        <li>Request correction or deletion of your personal data.</li>
                        <li>Withdraw consent for WhatsApp communications at any time.</li>
                        <li>Opt out of cookie-based tracking via browser settings.</li>
                    </ul>
                </section>

                {/* 10 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">10. Security</h2>
                    <p>
                        We use industry-standard security measures to protect your data, including encrypted form submissions and secure data storage. However, no method of online transmission is 100% secure.
                    </p>
                </section>

                {/* 11 */}
                <section>
                    <h2 className="text-2xl font-heading text-brand-charcoal">11. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
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
                    <Link to="/terms-of-service" className="text-brand-pink underline">Terms of Service</Link>
                    <Link to="/contact" className="text-brand-pink underline">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
