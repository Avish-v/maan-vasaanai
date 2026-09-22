import { Award, Heart, Sparkles } from 'lucide-react';

const VALUES = [
  {
    icon: Sparkles,
    title: 'Pure Ingredients',
    description: 'No artificial colors, preservatives, or tasting powders.',
  },
  {
    icon: Award,
    title: 'Heirloom Recipes',
    description: 'Sourced directly from native households across Tamil Nadu.',
  },
  {
    icon: Heart,
    title: 'Virundhombal',
    description: 'Treating every guest with traditional Tamil warmth.',
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <span className="text-brand-terracotta font-semibold text-sm tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-green">
            The Essence of Mann Vaasanai
          </h1>
          <p className="text-brand-brown/80 text-lg max-w-2xl mx-auto">
            Celebrating the rich heritage of Tamil Nadu cooking through modern fine dining.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-brand-brown/10 space-y-8">
          <div className="prose prose-lg max-w-none text-brand-brown/80 space-y-6 leading-relaxed">
            <p>
              <strong className="text-brand-green font-serif text-2xl">Mann Vaasanai</strong>
              —translating literally to &ldquo;The Scent of Soil&rdquo;—captures that magical,
              earthy fragrance when the first monsoon showers strike the sun-baked plains of Tamil
              Nadu. It is this very nostalgia, warmth, and purity that we bring to your dining
              experience.
            </p>
            <p>
              Founded with a mission to preserve heirloom recipes that date back centuries, our
              kitchens honor the traditional clay pot (<em>man paanai</em>), freshly ground
              stone-pounded spices, and cold-pressed sesame and groundnut oils. From the fiery
              Chettinad pepper gravies of Sivagangai to the comforting coconut-rich stews of Madurai
              and coastal delicacies of Chennai, every recipe is a tribute to our soil.
            </p>
            <h3 className="font-serif text-3xl font-bold text-brand-green pt-4">
              Our Modern Dining Philosophy
            </h3>
            <p>
              While our recipes are deeply traditional, our spaces are designed for the modern
              connoisseur. We blend minimalist contemporary architecture with subtle Tamil cultural
              nuances—brass accents, banana leaf motifs, and soft lighting that mimics village
              twilight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-brown/10">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center space-y-2 p-4">
                <value.icon className="h-8 w-8 text-brand-terracotta mx-auto" />
                <h4 className="font-serif font-bold text-brand-green text-lg">{value.title}</h4>
                <p className="text-xs text-brand-brown/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
