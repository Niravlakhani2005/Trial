import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6">
            Books That Changed <span className="text-[#8B7355]">Lives</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Real stories from our aesthetic reader community. See how books transformed their mindset.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#eae6df] shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B7355] to-[#D4AF37] flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="text-6xl text-[#8B7355] opacity-30 mb-4">"</div>
                <p className="text-lg md:text-xl text-[#111111] leading-relaxed mb-6 font-medium">
                  {testimonials[currentIndex].text}
                </p>
                <div>
                  <div className="font-bold text-[#111111] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#666666]">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].age}
                  </div>
                  <div className="text-[#8B7355] text-sm font-medium mt-1">
                    📚 {testimonials[currentIndex].books}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full border border-[#eae6df] flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft size={20} className="text-[#111111]" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#8B7355]' : 'bg-[#eae6df]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full border border-[#eae6df] flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <ChevronRight size={20} className="text-[#111111]" />
            </button>
          </div>
        </div>

        {/* Instagram-style grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-[#f4f4f4] to-[#eae6df] rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="text-4xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                {i === 1 ? '📖' : i === 2 ? '✨' : i === 3 ? '💭' : '🌱'}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Story</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;