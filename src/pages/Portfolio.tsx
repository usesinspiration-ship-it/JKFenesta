import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Maximize2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import kitchenImg from "../assets/kitchen.webp";
import bedroomImg from "../assets/bedroom.webp";
import livingImg from "../assets/living.webp";
import wardrobeImg from "../assets/wardrobe.webp";
import officeImg from "../assets/office.webp";
import heroImg from "../assets/hero.webp";
import { SEO } from '../components/SEO';

// Mock Data with Gallery
const projects = [
    {
        id: 1,
        img: kitchenImg,
        category: "Modular Kitchen",
        title: "L-Shaped Acrylic Kitchen",
        location: "Andheri West, Lokhandwala",
        gallery: [kitchenImg, livingImg, heroImg, officeImg]
    },
    {
        id: 2,
        img: livingImg,
        category: "Living Room",
        title: "Modern Contemporary Living",
        location: "South Mumbai, Marine Drive",
        gallery: [livingImg, bedroomImg, wardrobeImg, kitchenImg]
    },
    {
        id: 3,
        img: bedroomImg,
        category: "Bedroom",
        title: "Minimalist Master Bedroom",
        location: "Navi Mumbai, Palm Beach Road",
        gallery: [bedroomImg, officeImg, heroImg, livingImg]
    },
    {
        id: 4,
        img: wardrobeImg,
        category: "Wardrobe",
        title: "Glass Front Walk-in Closet",
        location: "Bandra West, Pali Hill",
        gallery: [wardrobeImg, bedroomImg, kitchenImg, livingImg]
    },
    {
        id: 5,
        img: officeImg,
        category: "Commercial",
        title: "Executive Office Space",
        location: "Powai",
        gallery: [officeImg, heroImg, bedroomImg, wardrobeImg]
    },
    {
        id: 6,
        img: heroImg,
        category: "Living Room",
        title: "Luxury Villa Lounge",
        location: "Juhu, Tara Road",
        gallery: [heroImg, livingImg, kitchenImg, bedroomImg]
    },
];

const Portfolio = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <div className="pt-24 pb-16 px-6 bg-brand-ivory min-h-screen">
            <SEO
                title="Portfolio | JK Fenesta Interior Design Projects"
                description="Explore JK Fenesta's stunning interior design portfolio. View our completed projects including modern living rooms, luxury bedrooms, modular kitchens, and more."
                canonical="https://jkfenesta.com/portfolio"
            />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-6xl font-heading text-brand-charcoal mb-6">
                        Our <span className="text-brand-pink italic">Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Click on any project to view its gallery.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative items-start">

                    {/* Projects List / Grid */}
                    <motion.div
                        layout
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`w-full grid gap-6 ${selectedId ? 'lg:w-1/3 grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
                    >
                        {projects.map((project) => (
                            <motion.div
                                layout
                                layoutId={`card-${project.id}`}
                                key={project.id}
                                onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border-2 transform-gpu ${selectedId === project.id ? 'border-brand-pink' : 'border-transparent'}`}
                            >
                                <div className={`${selectedId ? 'h-48' : 'h-[300px]'} relative overflow-hidden transition-all duration-500 transform-gpu`}>
                                    <motion.img
                                        layoutId={`img-${project.id}`}
                                        src={project.img}
                                        alt={project.title}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-charcoal uppercase tracking-wide">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-pink transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink"></span>
                                        {project.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Detail View (Gallery) */}
                    <AnimatePresence mode="wait">
                        {selectedId && selectedProject && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-[60] overflow-y-auto bg-white p-6 lg:p-8 lg:static lg:z-auto lg:w-2/3 lg:overflow-visible lg:rounded-[2.5rem] lg:shadow-2xl lg:sticky lg:top-24 lg:border lg:border-gray-100"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h2 className="text-3xl font-heading text-brand-charcoal mb-2">{selectedProject.title}</h2>
                                        <p className="text-brand-pink font-medium">{selectedProject.category} • {selectedProject.location}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => setSelectedId(null)} className="hover:bg-gray-100 rounded-full">
                                        <X className="w-6 h-6 text-gray-500" />
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedProject.gallery.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05, zIndex: 10 }}
                                            className="relative rounded-xl overflow-hidden shadow-md h-64 cursor-zoom-in group"
                                        >
                                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <Maximize2 className="text-white w-8 h-8 drop-shadow-md" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <Link to="/contact">
                                        <Button variant="brand" className="shadow-lg hover:shadow-brand-pink/50">
                                            Inquire About This Project <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
