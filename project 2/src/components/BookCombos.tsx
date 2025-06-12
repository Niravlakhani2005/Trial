import React from 'react';
import { useCart } from '../context/CartContext';
import { bookCombos } from '../data/books';

const BookCombos: React.FC = () => {
  const { addItem } = useCart();

  return (
    <section id="combos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6">
            Curated Book <span className="text-[#8B7355]">Combos</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Thoughtfully paired books that work better together. Save money, save time, transform faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookCombos.map((combo) => (
            <div key={combo.id} className="group relative">
              <div className="bg-gradient-to-br from-white to-[#f8f6f3] rounded-3xl p-6 border border-[#eae6df] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3 bg-[#8B7355] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Save ₹{combo.originalPrice - combo.price}
                </div>

                {/* Combo Preview */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f4f4f4] to-[#eae6df] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="flex space-x-2">
                    {combo.books.slice(0, 3).map((_, index) => (
                      <div 
                        key={index}
                        className={`w-12 h-16 rounded-md shadow-lg ${
                          index === 0 ? 'bg-[#8B7355]' : 
                          index === 1 ? 'bg-[#D4AF37]' : 'bg-[#111111]'
                        } opacity-${90 - index * 20}`}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 text-2xl opacity-60">📖</div>
                  <div className="absolute bottom-4 left-4 text-lg opacity-40">✨</div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#8B7355] transition-colors">
                    {combo.name}
                  </h3>
                  
                  <div className="space-y-1">
                    {combo.books.map((book, index) => (
                      <div key={index} className="text-sm text-[#666666] flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#8B7355] rounded-full"></div>
                        {book}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[#111111]">₹{combo.price}</span>
                        <span className="text-lg text-[#999999] line-through">₹{combo.originalPrice}</span>
                      </div>
                      <div className="text-xs text-[#8B7355] font-medium">
                        {Math.round(((combo.originalPrice - combo.price) / combo.originalPrice) * 100)}% OFF
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => addItem({ ...combo, type: 'combo' })}
                      className="bg-[#111111] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B7355] transition-all duration-300 hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCombos;