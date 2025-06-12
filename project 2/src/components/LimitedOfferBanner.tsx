import React, { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';

const LimitedOfferBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#8B7355] to-[#D4AF37] text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex items-center gap-4">
          <Clock size={20} />
          <span className="font-semibold">
            📦 Flash Sale: Get ₹20 off when you pay online • COD = higher costs, let's go digital ✨
          </span>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
            {formatTime(timeLeft)}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default LimitedOfferBanner;