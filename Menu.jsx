import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Check } from 'lucide-react';
import { useCart } from '../context/useCart';

export const Menu = () => {
const [activeCategory, setActiveCategory] = useState('All');
const [searchQuery, setSearchQuery] = useState('');
const { addToCart } = useCart();
const [addedItems, setAddedItems] = useState({});

const categories = ['All', 'Breakfast', 'Lunch', 'Specials', 'Drinks', 'Desserts'];

const menuItems = [
    // Breakfast
    { id: 1, name: 'Idli (2 pcs)', category: 'Breakfast', price: 60, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80', desc: 'Soft, fluffy steamed rice cakes served with sambar and fresh coconut chutney.' },
    { id: 2, name: 'Medhu Vadai (2 pcs)', category: 'Breakfast', price: 70, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80', desc: 'Crispy golden lentil doughnuts flavored with black pepper and curry leaves.' },
    { id: 3, name: 'Ghee Pongal', category: 'Breakfast', price: 110, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', desc: 'Comforting rice and moong dal cooked with cashews, cumin, and lots of pure cow ghee.' },
    { id: 4, name: 'Ghee Roast Dosa', category: 'Breakfast', price: 160, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80', desc: 'Crispy fermented crepe roasted generously in aromatic cow ghee.' },
    { id: 5, name: 'Masala Dosa', category: 'Breakfast', price: 140, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80', desc: 'Golden crispy dosa stuffed with spiced potato masala.' },

    // Lunch
    { id: 6, name: 'Traditional Tamil Meals', category: 'Lunch', price: 280, image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80', desc: 'Served on a banana leaf with ponni boiled rice, sambar, rasam, kootu, poriyal, appalam, and payasam.' },
    { id: 7, name: 'Mini Meals', category: 'Lunch', price: 180, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', desc: 'Compact version of our traditional banana leaf meal with rice, sambar, rasam, and poriyal.' },
    { id: 8, name: 'Vegetarian Meals', category: 'Lunch', price: 240, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', desc: 'Complete pure veg spread featuring traditional village-style gravies and seasonal vegetables.' },
    { id: 9, name: 'Non-Veg Meals', category: 'Lunch', price: 360, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', desc: 'Traditional meal served with piping hot chicken gravy and mutton kuzhambu.' },

    // Specials
    { id: 10, name: 'Chettinad Chicken', category: 'Specials', price: 380, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', desc: 'Fiery pepper-infused country chicken simmered in aromatic roasted spices.' },
    { id: 11, name: 'Mutton Chukka', category: 'Specials', price: 460, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', desc: 'Tender lamb chunks dry-roasted with shallots, curry leaves, and crushed peppercorns.' },
    { id: 12, name: 'Chicken Biryani', category: 'Specials', price: 340, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', desc: 'Seeraga samba rice cooked with tender chicken pieces, mint, and traditional stone-ground spices.' },
    { id: 13, name: 'Parotta & Salna (2 pcs)', category: 'Specials', price: 150, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80', desc: 'Flaky, layered multi-grain flatbread served with spicy country-style salna.' },

    // Drinks
    { id: 14, name: 'Filter Coffee', category: 'Drinks', price: 50, image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80', desc: 'Traditional South Indian decoction coffee brewed with fresh milk in a brass dabarah set.' },
    { id: 15, name: 'Masala Tea', category: 'Drinks', price: 45, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80', desc: 'Robust CTC tea infused with crushed ginger, cardamom, and fresh mint.' },
    { id: 16, name: 'Fresh Juices', category: 'Drinks', price: 90, image: 'https://images.unsplash.com/photo-1621506289938-a836881c7e92?auto=format&fit=crop&w=600&q=80', desc: 'Choice of fresh Tender Coconut water, Nannari Sarbath, or Lemon Mint cooler.' },

    // Desserts
    { id: 17, name: 'Elaneer Payasam', category: 'Desserts', price: 210, image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80', desc: 'Delicate tender coconut pudding infused with cardamom and condensed milk.' },
    { id: 18, name: 'Gulab Jamun (2 pcs)', category: 'Desserts', price: 90, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80', desc: 'Deep-fried khoya dumplings soaked in fragrant rose and saffron sugar syrup.' },
    { id: 19, name: 'Kesari', category: 'Desserts', price: 80, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80', desc: 'Traditional semolina sweet cooked in pure ghee with roasted cashews and saffron.' },
];

const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
});

const handleAddWithFeedback = (item) => {
    addToCart(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
    setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
};

return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">The Menu</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-green">Taste of Tamil Nadu</h1>
        <p className="text-brand-brown/80 text-lg">Explore our curated selection of authentic South Indian & Chettinad delicacies.</p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-6">
        <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-brown/50" />
            <input
            type="text"
            placeholder="Search dishes or ingredients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white pl-12 pr-4 py-3.5 rounded-full border border-brand-brown/15 focus:outline-none focus:border-brand-terracotta shadow-sm text-sm"
            />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
            <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-brand-green text-brand-cream shadow-md' : 'bg-white text-brand-brown/80 hover:bg-brand-green/10 border border-brand-brown/10'}`}
            >
                {cat}
            </button>
            ))}
        </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
            <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-brown/10 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
            <div>
                <div className="h-56 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-brand-green text-brand-gold font-bold px-3.5 py-1 rounded-full text-sm shadow-md">
                    ₹{item.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-cream/90 backdrop-blur-sm text-brand-brown text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                </div>
                </div>
                <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold text-brand-green">{item.name}</h3>
                <p className="text-brand-brown/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button
                onClick={() => handleAddWithFeedback(item)}
                className={`w-full py-3 rounded-2xl font-medium text-sm flex items-center justify-center space-x-2 transition-all shadow-sm ${addedItems[item.id] ? 'bg-emerald-600 text-white' : 'bg-brand-terracotta hover:bg-brand-terracotta/90 text-white'}`}
                >
                {addedItems[item.id] ? (
                    <>
                    <Check className="h-4 w-4" />
                    <span>Added to Feast</span>
                    </>
                ) : (
                    <>
                    <Plus className="h-4 w-4" />
                    <span>Add to Feast</span>
                    </>
                )}
                </button>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </div>
);
};
