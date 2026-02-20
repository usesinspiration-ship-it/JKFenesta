import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';



export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            // Show banner if no choice has been made
            setIsVisible(true);
        } else if (consent === 'true') {
            // If previously accepted, initialize pixel
            initializePixel();
        }
    }, []);

    const initializePixel = () => {
        // @ts-ignore
        if (window.fbq) return; // Prevent double initialization

        // Meta Pixel Code
        // @ts-ignore
        !function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        // Replace 'YOUR-PIXEL-ID' with your actual Pixel ID
        if (window.fbq) {
            window.fbq('consent', 'grant');
            window.fbq('init', 'YOUR-PIXEL-ID'); // Replace with actual Pixel ID
            window.fbq('track', 'PageView');
        };
    };

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
        initializePixel();
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[100] p-4 md:p-6 border-t border-gray-100 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 pr-8">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        We use cookies and similar technologies (including the Meta Pixel) to personalise content, measure ads, and improve your experience. By clicking "Accept", you consent to our use of cookies as described in our <Link to="/privacy-policy" className="text-brand-pink underline hover:text-brand-pink/80">Privacy Policy</Link>.
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <Button variant="outline" onClick={handleDecline} className="text-gray-600 border-gray-300 hover:bg-gray-50">
                        Decline
                    </Button>
                    <Button variant="brand" onClick={handleAccept} className="shadow-md">
                        Accept Cookies
                    </Button>
                </div>
            </div>
        </div>
    );
};
