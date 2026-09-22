import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from '../components/Lightbox';

export const Gallery = () => {
const [selectedImage, setSelectedImage] = useState(null);

const images = [
    { title: 'Traditional Banana Leaf Meal', category: 'Lunch', url: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Crispy Ghee Roast Dosa', category: 'Breakfast', url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Chettinad Chicken Specialty', category: 'Specials', url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80' },
    { title: 'South Indian Filter Coffee', category: 'Drinks', url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Restaurant Interior Ambience', category: 'Ambience', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Traditional Tamil Dining Setup', category: 'Culture', url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Modern Restaurant Bar & Seating', category: 'Ambience', url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Mutton Chukka Feast', category: 'Specials', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80' },
];

return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">Visual Feast</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-green">Our Gallery</h1>
        <p className="text-brand-brown/80 text-lg">A glimpse into our culinary artistry, traditional dining rituals, and modern ambience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedImage(img)}
            className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-brand-green"
            >
            <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-wider">{img.category}</span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">{img.title}</h3>
            </div>
            </motion.div>
        ))}
        </div>
    </div>

    <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
);
};
