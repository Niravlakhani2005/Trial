import React from 'react';
import { Sparkles, BookOpen, CreditCard, Truck } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Curated for Modern Readers",
    description: "Every book is handpicked by our team of Gen Z readers and productivity experts."
  },
  {
    icon: Sparkles,
    title: "Exclusive Book Combos",
    description: "Unique combinations you won't find anywhere else, designed to maximize your growth."
  },
  {
    icon: CreditCard,
    title: "Pay Online & Get ₹20 OFF",
    description: "Support small business and save money. Prepaid orders get instant discounts."
  },
  {
    icon: Truck,
    title: "COD Available Across India",
    description: "Cash on delivery option available, but we love you more when it's prepaid 💖"
  }
];

const WhyBuyFromUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6">
            Why Buy From <span className="text-[#8B7355]">Us?</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            We're not just another bookstore. We're your reading companions on the journey to becoming your best self.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-2xl p-8 border border-[#eae6df] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#111111] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8B7355] transition-colors duration-300">
                  <feature.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#111111] mb-4 group-hover:text-[#8B7355] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-[#666666] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Building Section */}
        <div className="mt-16 bg-gradient-to-r from-[#f8f6f3] to-[#eae6df] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#111111] mb-4">
            📦 Support Small Business
          </h3>
          <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
            Pay online & save ₹20. COD increases costs for all. Let's go digital together and build something beautiful ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#eae6df]">
              <span className="text-sm font-medium text-[#111111]">💳 Razorpay</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#eae6df]">
              <span className="text-sm font-medium text-[#111111]">📱 GPay</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#eae6df]">
              <span className="text-sm font-medium text-[#111111]">💰 Paytm</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#eae6df]">
              <span className="text-sm font-medium text-[#111111]">🏦 UPI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;