import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "./StickyCTA";
import { WhatsAppButton } from "./WhatsAppButton";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <MobileStickyCTA />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
