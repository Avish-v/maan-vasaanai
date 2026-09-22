import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Reservation = () => {
const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    branch: 'Chennai (T. Nagar)',
    date: '',
    time: '19:00',
    guests: '2',
    specialRequest: '',
});

const [submitted, setSubmitted] = useState(false);

const branches = [
    'Chennai (T. Nagar)',
    'Coimbatore (RS Puram)',
    'Bengaluru (Koramangala)',
];

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
};

return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
        <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">Table Reservation</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-green">Book Your Experience</h1>
        <p className="text-brand-brown/80 text-lg">Secure your table at any of our outlets and enjoy authentic hospitality.</p>
        </div>

        {submitted ? (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 sm:p-16 rounded-3xl shadow-xl border border-brand-brown/10 text-center space-y-6"
        >
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="h-10 w-10" />
            </div>
            <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green">Table Reserved Successfully!</h2>
            <p className="text-brand-terracotta font-medium text-sm">Frontend Demonstration Notice</p>
            </div>
            <p className="text-brand-brown/70 max-w-md mx-auto text-base">
            Thank you, <strong className="text-brand-green">{formData.name}</strong>! Your table for <strong className="text-brand-green">{formData.guests} guests</strong> at our <strong className="text-brand-green">{formData.branch}</strong> branch on <strong className="text-brand-green">{formData.date}</strong> at <strong className="text-brand-green">{formData.time}</strong> has been logged in frontend state.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-green text-brand-cream px-8 py-3.5 rounded-full font-medium hover:bg-brand-darkGreen transition-colors"
            >
                Make Another Reservation
            </button>
            <Link
                to="/menu"
                className="bg-brand-terracotta text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-terracotta/90 transition-colors"
            >
                Explore Menu
            </Link>
            </div>
        </motion.div>
        ) : (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-brand-brown/10 space-y-8"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-green">Full Name *</label>
                <input
                type="text"
                required
                placeholder="Karthik R."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-green">Mobile Number *</label>
                <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-green">Email Address *</label>
                <input
                type="email"
                required
                placeholder="karthik@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-green">Select Branch *</label>
                <select
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                >
                {branches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-green flex items-center space-x-1">
                <CalendarIcon className="h-4 w-4 text-brand-terracotta" />
                  <span>Date *</span>
                </label>
                <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-green flex items-center space-x-1">
                <Clock className="h-4 w-4 text-brand-terracotta" />
                  <span>Time *</span>
                </label>
                <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                >
                <option value="12:00">12:00 PM (Lunch)</option>
                <option value="13:00">01:00 PM (Lunch)</option>
                <option value="14:00">02:00 PM (Lunch)</option>
                <option value="19:00">07:00 PM (Dinner)</option>
                <option value="20:00">08:00 PM (Dinner)</option>
                <option value="21:00">09:00 PM (Dinner)</option>
                </select>
            </div>

            <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-brand-green flex items-center space-x-1">
                <Users className="h-4 w-4 text-brand-terracotta" />
                  <span>Number of Guests *</span>
                </label>
                <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl px-4 py-3 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                >
                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
                </select>
            </div>

            <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-brand-green">Special Requests or Dietary Requirements</label>
                <textarea
                rows="3"
                placeholder="E.g., High chair needed, anniversary seating, mild spice preference..."
                value={formData.specialRequest}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                className="w-full bg-brand-cream/50 border border-brand-brown/20 rounded-xl p-4 text-brand-brown focus:outline-none focus:border-brand-terracotta text-sm"
                />
            </div>
            </div>

            <div className="pt-4">
            <button
                type="submit"
                className="w-full bg-brand-terracotta text-white py-4 rounded-2xl font-medium hover:bg-brand-terracotta/90 transition-all shadow-lg text-base"
            >
                Confirm Table Reservation
            </button>
            <p className="text-xs text-brand-brown/60 text-center mt-3">
                * Frontend Demonstration: No real table booking is placed on a live backend server.
            </p>
            </div>
        </motion.form>
        )}
    </div>
    </div>
);
};
