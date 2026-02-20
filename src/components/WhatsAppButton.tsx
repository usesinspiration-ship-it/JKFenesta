import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "919326460479"; // Your actual number
    const message = encodeURIComponent("Hi, I'm interested in interior design services for my home.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-5 z-50 md:bottom-8 md:right-8 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-white fill-current" />

                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>

                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                    Chat with us!
                </span>
            </div>
        </a>
    );
}
