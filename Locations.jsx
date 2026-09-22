import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export const Locations = () => {
const outlets = [
    {
    city: 'Chennai',
    address: '42, Dr. Radhakrishnan Salai, T. Nagar, Chennai, Tamil Nadu 600017',
    phone: '+91 44 2811 5500',
    hours: '11:00 AM – 11:00 PM (Mon-Sun)',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80',
    },
    {
    city: 'Coimbatore',
    address: '18, TV Swamy Road West, RS Puram, Coimbatore, Tamil Nadu 641002',
    phone: '+91 422 2544 8800',
    hours: '11:00 AM – 11:00 PM (Mon-Sun)',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
    city: 'Bengaluru',
    address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
    phone: '+91 80 4122 9900',
    hours: '11:00 AM – 11:00 PM (Mon-Sun)',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    },
];

return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">Our Outlets</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-green">Visit Mann Vaasanai</h1>
        <p className="text-brand-brown/80 text-lg">Experience our warm hospitality and authentic Tamil Nadu ambience across three vibrant cities.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {outlets.map((outlet, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-brown/10 flex flex-col justify-between">
            <div>
                <div className="h-60 overflow-hidden relative">
                <img src={outlet.image} alt={outlet.city} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-brand-green text-brand-gold font-serif font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
                    {outlet.city}
                </div>
                </div>
                <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3 text-brand-brown/80">
                    <MapPin className="h-5 w-5 text-brand-terracotta shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{outlet.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-brand-brown/80">
                    <Phone className="h-5 w-5 text-brand-terracotta shrink-0" />
                    <span className="text-sm">{outlet.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-brand-brown/80">
                    <Clock className="h-5 w-5 text-brand-terracotta shrink-0" />
                    <span className="text-sm">{outlet.hours}</span>
                </div>
                </div>
            </div>
            <div className="p-6 pt-0">
                <a
                href="#directions"
                onClick={(e) => { e.preventDefault(); alert(`Frontend Demo: Opening map directions for ${outlet.city}`); }}
                className="w-full bg-brand-green/10 hover:bg-brand-green hover:text-brand-cream text-brand-green py-3 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 transition-all"
                >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
                </a>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
);
};
