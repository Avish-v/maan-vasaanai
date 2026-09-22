import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Back to Home', to: '/', primary: true },
  { label: 'Explore the Menu', to: '/menu', primary: false },
  { label: 'Reserve a Table', to: '/reservation', primary: false },
];

export function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto text-brand-green">
          <Compass className="h-10 w-10" />
        </div>

        <div className="space-y-4">
          <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">
            Error 404
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-green">
            This table is not set
          </h1>
          <p className="text-brand-brown/80 text-lg">
            The page you were looking for has left the kitchen. It may have been moved, or the link
            was mistyped.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                link.primary
                  ? 'w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-terracotta text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-terracotta/90 transition-colors shadow-md'
                  : 'w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white border border-brand-brown/15 text-brand-green px-7 py-3.5 rounded-full font-medium hover:bg-brand-green/5 transition-colors'
              }
            >
              <span>{link.label}</span>
              {link.primary && <ArrowRight className="h-4 w-4" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
