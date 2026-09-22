import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';

export const CartDrawer = () => {
const { cart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, subtotal } = useCart();
const navigate = useNavigate();

return (
    <AnimatePresence>
    {isCartOpen && (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
        />
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col"
        >
            <div className="p-6 bg-brand-green text-brand-cream flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-brand-gold" />
                <h2 className="text-xl font-serif font-bold">Your Feast Order</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="h-6 w-6" />
            </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto text-brand-green">
                    <ShoppingBag className="h-10 w-10" />
                </div>
                <p className="text-brand-brown/70 font-medium">Your cart is feeling empty!</p>
                <button
                    onClick={() => { setIsCartOpen(false); navigate('/menu'); }}
                    className="inline-flex items-center space-x-2 bg-brand-terracotta text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-terracotta/90"
                >
                    <span>Explore Menu</span>
                    <ArrowRight className="h-4 w-4" />
                </button>
                </div>
            ) : (
                cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-brand-brown/10">
                    <div className="flex-1 pr-4">
                    <h4 className="font-serif font-bold text-brand-brown">{item.name}</h4>
                    <p className="text-sm text-brand-terracotta font-semibold mt-0.5">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-brand-brown/20 rounded-lg overflow-hidden bg-brand-cream/50">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-brand-brown/10 text-brand-brown">
                        <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-brand-brown/10 text-brand-brown">
                        <Plus className="h-3.5 w-3.5" />
                        </button>
                    </div>
                    </div>
                </div>
                ))
            )}
            </div>

            {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-brand-brown/10 space-y-4">
                <div className="flex items-center justify-between text-lg font-serif font-bold text-brand-brown">
                <span>Subtotal</span>
                <span className="text-brand-terracotta">₹{subtotal}</span>
                </div>
                <p className="text-xs text-brand-brown/60 text-center">Taxes & delivery calculated at checkout (Demo Mode)</p>
                <div className="flex space-x-3">
                <button onClick={clearCart} className="p-3 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors">
                    <Trash2 className="h-5 w-5" />
                </button>
                <button
                    onClick={() => {
                    alert('Frontend Demo Notice: Online ordering is simulated.');
                    }}
                    className="flex-1 bg-brand-green text-brand-cream py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-brand-darkGreen transition-colors shadow-md"
                >
                    <span>Proceed to Order (Demo)</span>
                    <ArrowRight className="h-4 w-4" />
                </button>
                </div>
            </div>
            )}
        </motion.div>
        </>
    )}
    </AnimatePresence>
);
};
