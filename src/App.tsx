import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { HomePage } from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Portfolio from './pages/Portfolio';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { CookieConsent } from './components/CookieConsent';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thank-you-consultation" element={<ThankYou />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<Terms />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
