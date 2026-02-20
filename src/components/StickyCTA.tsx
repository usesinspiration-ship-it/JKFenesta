import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export function MobileStickyCTA() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToForm = () => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const formElement = document.getElementById("lead-form-container");
                if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const formElement = document.getElementById("lead-form-container");
            if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:hidden animate-in slide-in-from-bottom duration-500">
            <Button
                onClick={scrollToForm}
                variant="brand"
                className="w-full text-lg font-bold shadow-lg"
            >
                Book Free Design Consultation
            </Button>
        </div>
    );
}
