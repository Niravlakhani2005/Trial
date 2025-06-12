import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { singleBooks, categories } from '../data/books';

const SinglePicks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addItem } = useCart();

  const filteredBooks = selectedCategory === 'All' 
    ? singleBooks 
    : singleBooks.filter(book => book.category === selectedCategory);

  return (
    <section id="singles" className="py-20 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6">
            Single <span className="text-[#8B7355]">Picks</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Handpicked bestsellers, new releases, and Gen Z favorites. One book, endless possibilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#111111] text-white'
                  : 'bg-white/60 backdrop-blur-sm text-[#111111] hover:bg-white border border-[#eae6df]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#eae6df] hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Book Cover */}
                <div className="aspect-[3/4] bg-gradient-to-br from-[#f4f4f4] to-[#eae6df] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className={`w-16 h-20 rounded-md shadow-lg ${
                    book.id % 3 === 0 ? 'bg-[#8B7355]' : 
                    book.id % 3 === 1 ? 'bg-[#D4AF37]' : 'bg-[#111111]'
                  }`}></div>
                  
                  {/* Bestseller Badge */}
                  {book.bestseller && (
                    <div className="absolute top-2 left-2 bg-[#8B7355] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Bestseller
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-[#111111] group-hover:text-[#8B7355] transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-[#666666]">{book.author}</p>
                    <div className="text-xs text-[#8B7355] font-medium">{book.category}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-[#111111]">₹{book.price}</div>
                    <button 
                      onClick={() => addItem({ ...book, type: 'single' })}
                      className="bg-[#111111] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#8B7355] transition-all duration-300 hover:scale-105"
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

export default SinglePicks;