import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/useCart';

export const Navbar = () => {
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const { totalItems, setIsCartOpen } = useCart();
const location = useLocation();

useEffect(() => {
    const handleScroll = () => {
    setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Locations', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
];

return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-green/95 backdrop-blur-md shadow-lg py-3 text-brand-cream' : 'bg-gradient-to-b from-brand-green/80 to-transparent py-5 text-brand-cream'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
        <Utensils className="h-7 w-7 text-brand-gold group-hover:rotate-12 transition-transform" />
        <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-brand-cream">MANN VAASANAI</span>
            <span className="text-[10px] tracking-widest text-brand-gold uppercase">The Taste of Tamil Nadu</span>
        </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
            <Link
            key={link.name}
            to={link.path}
            className={`relative text-sm font-medium tracking-wide transition-colors hover:text-brand-gold ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-cream/90'}`}
            >
            {link.name}
            {location.pathname === link.path && (
                <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold" />
            )}
            </Link>
        ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
        <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 bg-brand-cream/10 rounded-full hover:bg-brand-cream/25 transition-colors"
            aria-label="Cart"
        >
            <ShoppingBag className="h-5 w-5 text-brand-cream" />
            {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand-terracotta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {totalItems}
            </span>
            )}
        </button>

        <Link
            to="/reservation"
            className="hidden sm:inline-flex items-center space-x-2 bg-brand-terracotta text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-terracotta/90 transition-all shadow-md hover:scale-105"
        >
            <Calendar className="h-4 w-4" />
            <span>Book Table</span>
        </Link>

        <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-cream hover:text-brand-gold"
        >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
        </div>
    </div>

      {/* Mobile Menu */}
    <AnimatePresence>
        {mobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-green border-t border-brand-cream/10"
        >
            <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
                <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-brand-cream/10 text-brand-gold' : 'text-brand-cream hover:bg-brand-cream/5'}`}
                >
                {link.name}
                </Link>
            ))}
            <Link
                to="/reservation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-4 flex items-center justify-center space-x-2 bg-brand-terracotta text-white py-3 rounded-full font-medium"
            >
                <Calendar className="h-4 w-4" />
                <span>Book a Table</span>
            </Link>
            </div>
        </motion.div>
        )}
    </AnimatePresence>
    </nav>
);
};
