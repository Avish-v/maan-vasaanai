import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Lightbox = ({ image, onClose }) => {
return (
    <AnimatePresence>
    {image && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
        >
        <button
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/25 transition-colors z-50"
        >
            <X className="h-6 w-6" />
        </button>
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
        >
            <img src={image.url} alt={image.title} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="font-serif text-2xl font-bold">{image.title}</h3>
            <p className="text-sm text-brand-gold">{image.category}</p>
            </div>
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
);
};
