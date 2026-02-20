import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-ivory text-center px-6">
            <h1 className="text-9xl font-heading text-brand-pink opacity-20 select-none">404</h1>
            <div className="-mt-12 mb-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading text-brand-charcoal mb-4">
                    Page Not Found
                </h2>
                <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
                    Oops! The page you are looking for seems to have been moved or doesn't exist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <Button variant="brand" size="lg" className="w-full sm:w-auto shadow-lg">
                            <Home className="w-4 h-4 mr-2" /> Back to Home
                        </Button>
                    </Link>
                    <Link to="/portfolio">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto border-brand-charcoal hover:bg-brand-charcoal hover:text-white">
                            <ArrowLeft className="w-4 h-4 mr-2" /> View Our Work
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
