import { Utensils, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
return (
    <footer className="bg-brand-darkGreen text-brand-cream pt-16 pb-12 border-t border-brand-gold/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
            <Utensils className="h-6 w-6 text-brand-gold" />
            <span className="font-serif text-2xl font-bold tracking-wider">MANN VAASANAI</span>
            </div>
            <p className="text-brand-cream/80 text-sm leading-relaxed">
            Authentic heritage recipes crafted with earthen soul, bringing the true essence of Tamil Nadu to your table.
            </p>
            <div className="flex space-x-4 pt-2">
            <a href="#instagram" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-darkGreen transition-colors">
                <Instagram className="h-5 w-5" />
            </a>
            <a href="#facebook" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-darkGreen transition-colors">
                <Facebook className="h-5 w-5" />
            </a>
            <a href="#whatsapp" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-darkGreen transition-colors">
                <MessageCircle className="h-5 w-5" />
            </a>
            </div>
        </div>

        <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-brand-gold">Locations</h4>
            <ul className="space-y-3 text-sm text-brand-cream/80">
            <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-terracotta shrink-0 mt-0.5" />
                <span>T. Nagar, Chennai, Tamil Nadu</span>
            </li>
            <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-terracotta shrink-0 mt-0.5" />
                <span>RS Puram, Coimbatore, Tamil Nadu</span>
            </li>
            <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-terracotta shrink-0 mt-0.5" />
                <span>Koramangala, Bengaluru, Karnataka</span>
            </li>
            </ul>
        </div>

        <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-brand-cream/80">
            <li><Link to="/menu" className="hover:text-brand-gold transition-colors">Explore Menu</Link></li>
            <li><Link to="/reservation" className="hover:text-brand-gold transition-colors">Reserve a Table</Link></li>
            <li><Link to="/locations" className="hover:text-brand-gold transition-colors">Our Outlets</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Food Gallery</Link></li>
            </ul>
        </div>

        <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-brand-gold">Opening Hours</h4>
            <div className="space-y-2 text-sm text-brand-cream/80">
            <p><strong className="text-brand-cream">Monday – Sunday</strong></p>
            <p>11:00 AM – 11:00 PM</p>
            <p className="text-xs text-brand-gold mt-4 pt-4 border-t border-brand-cream/10">
                Tamil Nadu & Chettinad Fine Dining Experience
            </p>
            </div>
        </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/60">
        <p>© {new Date().getFullYear()} MANN VAASANAI. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Website Demo by <strong className="text-brand-gold font-semibold">DASH CODE</strong></p>
        </div>
    </div>
    </footer>
);
};
