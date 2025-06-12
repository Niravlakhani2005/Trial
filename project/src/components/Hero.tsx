import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae6df] to-[#f4f4f4]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#8B7355] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse opacity-40 delay-300"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-[#8B7355] rounded-full animate-pulse opacity-50 delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#eae6df]">
              <Sparkles size={16} className="text-[#8B7355]" />
              <span className="text-sm font-medium text-[#111111]">Curated for Modern Readers</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Books That
              <br />
              <span className="text-[#8B7355]">Build Your</span>
              <br />
              Mind.
            </h1>
            
            <p className="text-xl text-[#666666] mb-8 max-w-lg">
              Feel productive while you scroll. Choose your next favorite book combo and transform your thinking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-[#111111] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8B7355] transition-all duration-300 flex items-center justify-center gap-2">
                Explore Combos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/80 backdrop-blur-sm text-[#111111] px-8 py-4 rounded-full font-semibold hover:bg-white border border-[#eae6df] transition-all duration-300">
                Buy Single Books
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div>
                <div className="text-2xl font-bold text-[#111111]">10K+</div>
                <div className="text-sm text-[#666666]">Happy Readers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#111111]">500+</div>
                <div className="text-sm text-[#666666]">Book Titles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#111111]">50+</div>
                <div className="text-sm text-[#666666]">Curated Combos</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border border-[#eae6df] shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f4f4f4] to-[#eae6df] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-20 bg-[#8B7355] rounded-md mb-4 mx-auto opacity-80"></div>
                  <div className="w-12 h-16 bg-[#D4AF37] rounded-md mb-4 mx-auto opacity-60"></div>
                  <div className="w-14 h-18 bg-[#111111] rounded-md mx-auto opacity-40"></div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-xs">📚</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#8B7355] rounded-full shadow-lg flex items-center justify-center">
                <span className="text-xs text-white">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;