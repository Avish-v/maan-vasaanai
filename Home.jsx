import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { ArrowRight, Star, Award, Heart, ChefHat, Sparkles } from 'lucide-react';

export const Home = () => {
const signatureDishes = [
    { name: 'Chettinad Chicken', price: 380, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', desc: 'Fiery pepper-infused country chicken simmered in aromatic roasted spices.' },
    { name: 'Mutton Chukka', price: 460, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', desc: 'Tender lamb chunks dry-roasted with shallots, curry leaves, and crushed peppercorns.' },
    { name: 'Ghee Roast Dosa', price: 160, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80', desc: 'Crispy fermented crepe roasted generously in pure country cow ghee.' },
    { name: 'Elaneer Payasam', price: 210, image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80', desc: 'Delicate tender coconut pudding infused with cardamom and condensed milk.' },
];

const reviews = [
    { name: 'Karthik Subramanian', role: 'Food Critic', comment: 'Mann Vaasanai brings back childhood memories. The Chettinad spices are authentic and unmatched anywhere else in Chennai!', rating: 5 },
    { name: 'Ananya Ramesh', role: 'Regular Diner', comment: 'The ambiance is modern yet deeply rooted in Tamil culture. Their Elaneer Payasam is absolute magic.', rating: 5 },
    { name: 'Vikramaditya Rao', role: 'Chef & Enthusiast', comment: 'Impeccable flavors! The Mutton Chukka had the exact right balance of pepper and tenderness.', rating: 5 },
];

return (
    <div className="min-h-screen bg-brand-cream text-brand-brown">
      {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0 opacity-40">
        <img
            src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1920&q=80"
            alt="Tamil Nadu Feast"
            className="w-full h-full object-cover scale-105 animate-pulse duration-1000"
        />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen via-brand-green/60 to-transparent z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-20">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-brand-gold/20 border border-brand-gold/40 px-4 py-1.5 rounded-full text-brand-gold text-xs font-semibold tracking-widest uppercase"
        >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Authentic Heritage Dining</span>
        </motion.div>

    <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-brand-cream"
        >
            MANN VAASANAI
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif italic text-2xl sm:text-3xl text-brand-gold tracking-wide"
        >
            "The Taste of Tamil Nadu."
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
            <Link
            to="/menu"
            className="w-full sm:w-auto bg-brand-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-brand-terracotta/90 transition-all shadow-lg flex items-center justify-center space-x-2 group text-base"
            >
            <span>Explore Menu</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
            to="/reservation"
            className="w-full sm:w-auto bg-brand-cream/10 border border-brand-cream/30 text-brand-cream px-8 py-4 rounded-full font-medium hover:bg-brand-cream/20 transition-all backdrop-blur-sm text-base"
            >
            Reserve a Table
            </Link>
        </motion.div>
        </div>
    </section>

      {/* Restaurant Story Section */}
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">Our Roots</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-green leading-tight">
            Rooted in tradition, crafted for modern palates.
            </h2>
            <p className="text-brand-brown/80 leading-relaxed text-base sm:text-lg">
            Mann Vaasanai (The Scent of Soil) is born from a deep reverence for ancestral kitchens across Tamil Nadu. From the fiery spice markets of Chettinad to the fragrant coconut groves of Madurai and the coastal breeze of Chennai, we bring you recipes passed down through generations—reimagined with contemporary finesse.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-brand-terracotta pl-4">
                <h4 className="font-serif text-2xl font-bold text-brand-green">100%</h4>
                <p className="text-sm text-brand-brown/70">Authentic Cold-Pressed Oils & Spices</p>
            </div>
            <div className="border-l-2 border-brand-terracotta pl-4">
                <h4 className="font-serif text-2xl font-bold text-brand-green">3 Cities</h4>
                <p className="text-sm text-brand-brown/70">Chennai, Coimbatore & Bengaluru</p>
            </div>
            </div>
            <div>
            <Link to="/about" className="inline-flex items-center space-x-2 font-semibold text-brand-terracotta hover:underline pt-2">
                <span>Read our full story</span>
                <ArrowRight className="h-4 w-4" />
            </Link>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80" alt="Tamil Banana Leaf Meal" className="rounded-3xl shadow-xl object-cover h-80 w-full" />
            <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80" alt="South Indian Spices" className="rounded-3xl shadow-xl object-cover h-80 w-full mt-8" />
        </div>
        </div>
    </section>

      {/* Signature Dishes */}
    <section className="py-24 bg-brand-green text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">Culinary Masterpieces</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold">Signature Dishes</h2>
            <p className="text-brand-cream/80 text-lg">Handcrafted specialties that define the soul of Tamil Nadu cuisine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish, index) => (
            <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-darkGreen rounded-3xl overflow-hidden shadow-xl border border-brand-cream/10 group flex flex-col justify-between"
            >
                <div>
                <div className="h-56 overflow-hidden relative">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-brand-terracotta text-white font-bold px-3 py-1 rounded-full text-sm">
                    ₹{dish.price}
                    </div>
                </div>
                <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-brand-cream">{dish.name}</h3>
                    <p className="text-brand-cream/70 text-sm leading-relaxed">{dish.desc}</p>
                </div>
                </div>
                <div className="px-6 pb-6">
                <Link to="/menu" className="w-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-darkGreen text-brand-cream py-2.5 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 transition-all">
                    <span>Order in Menu</span>
                </Link>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    </section>

      {/* Why Customers Love Us */}
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">The Mann Vaasanai Promise</span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-green">Why Our Guests Love Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-brand-brown/10 text-center space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-terracotta/10 rounded-2xl flex items-center justify-center mx-auto text-brand-terracotta">
            <Award className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-green">Authentic Chettinad Spices</h3>
            <p className="text-brand-brown/70 text-sm leading-relaxed">Sourced directly from native spice growers in Karaikudi and Sivagangai to ensure genuine aroma.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-brand-brown/10 text-center space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-terracotta/10 rounded-2xl flex items-center justify-center mx-auto text-brand-terracotta">
            <ChefHat className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-green">Master Heritage Chefs</h3>
            <p className="text-brand-brown/70 text-sm leading-relaxed">Our culinary team brings decades of heirloom cooking expertise from traditional Tamil households.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-brand-brown/10 text-center space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-terracotta/10 rounded-2xl flex items-center justify-center mx-auto text-brand-terracotta">
            <Heart className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-green">Warm Tamil Hospitality</h3>
            <p className="text-brand-brown/70 text-sm leading-relaxed">Experience 'Virundhombal'—our traditional ethos of treating guests with warmth and utmost care.</p>
        </div>
        </div>
    </section>

      {/* Chef Section */}
    <section className="py-20 bg-brand-green/5 border-y border-brand-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" alt="Master Chef" className="rounded-3xl shadow-2xl object-cover h-[450px] w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand-green text-brand-cream p-6 rounded-3xl shadow-xl hidden sm:block">
                <p className="font-serif text-3xl font-bold text-brand-gold">25+ Years</p>
                <p className="text-xs tracking-wider uppercase">Culinary Mastery</p>
            </div>
            </div>
            <div className="space-y-6">
            <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">Meet The Mastermind</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-green">Chef Murugesan</h2>
            <p className="text-brand-brown/80 leading-relaxed text-base sm:text-lg">
                "Cooking is not just about combining ingredients; it is about respecting the soil, the season, and the heritage. At Mann Vaasanai, every dish tells the story of Tamil Nadu's vibrant culinary canvas."
            </p>
            <p className="text-brand-brown/70 text-sm">
                With over two decades spent mastering temple feasts and Chettinad mansions, Chef Murugesan leads our kitchens with passion and uncompromising authenticity.
            </p>
            </div>
        </div>
        </div>
    </section>

      {/* Customer Reviews */}
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">Testimonials</span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-green">What Food Lovers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-brand-brown/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
                <div className="flex space-x-1">
                {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                ))}
                </div>
                <p className="text-brand-brown/80 italic text-base">"{rev.comment}"</p>
            </div>
            <div className="flex items-center space-x-3 pt-4 border-t border-brand-brown/10">
                <div className="w-10 h-10 rounded-full bg-brand-green text-brand-cream font-serif font-bold flex items-center justify-center">
                {rev.name[0]}
                </div>
                <div>
                <h4 className="font-serif font-bold text-brand-green">{rev.name}</h4>
                <p className="text-xs text-brand-terracotta">{rev.role}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
    </section>

      {/* Reservation CTA Banner */}
    <section className="py-20 bg-brand-green text-brand-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="font-serif text-4xl sm:text-6xl font-bold">Ready to Experience the Feast?</h2>
        <p className="text-brand-cream/80 text-lg max-w-2xl mx-auto">
            Reserve your table today at Chennai, Coimbatore, or Bengaluru and immerse yourself in the authentic tastes of Tamil Nadu.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
            to="/reservation"
            className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-brand-terracotta/90 transition-all shadow-xl text-base"
            >
            Book Your Table Now
            </Link>
            <Link
            to="/menu"
            className="bg-brand-cream/10 border border-brand-cream/30 text-brand-cream px-8 py-4 rounded-full font-medium hover:bg-brand-cream/20 transition-all text-base"
            >
            View Full Menu
            </Link>
        </div>
        </div>
    </section>
    </div>
);
};
