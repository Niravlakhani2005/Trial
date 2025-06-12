import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookCombos from './components/BookCombos';
import SinglePicks from './components/SinglePicks';
import WhyBuyFromUs from './components/WhyBuyFromUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import LimitedOfferBanner from './components/LimitedOfferBanner';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#f8f6f3] text-[#111111]">
        <LimitedOfferBanner />
        <Header onCartClick={() => setShowCart(true)} />
        <Hero />
        <BookCombos />
        <SinglePicks />
        <WhyBuyFromUs />
        <Testimonials />
        <Footer />
        
        {showExitIntent && (
          <ExitIntentPopup onClose={() => setShowExitIntent(false)} />
        )}
        
        {showCart && (
          <Cart onClose={() => setShowCart(false)} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;