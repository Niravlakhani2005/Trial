import React from 'react';
import { X, Gift } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-in slide-in-from-bottom duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift size={28} className="text-white" />
          </div>

          <h3 className="text-2xl font-bold text-[#111111] mb-4">
            Still thinking? 🤔
          </h3>

          <p className="text-[#666666] mb-6 leading-relaxed">
            Here's 10% off your first combo to get you started on your reading journey! 
            <br />
            <span className="text-[#8B7355] font-semibold">Because great minds deserve great books.</span>
          </p>

          <div className="bg-gradient-to-r from-[#f8f6f3] to-[#eae6df] rounded-2xl p-4 mb-6">
            <div className="text-xs text-[#666666] uppercase tracking-wide mb-1">Use Code</div>
            <div className="text-2xl font-bold text-[#111111] tracking-wider">FIRSTREAD10</div>
            <div className="text-xs text-[#8B7355] font-medium">Valid for next 15 minutes</div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-[#111111] text-white py-4 rounded-full font-semibold hover:bg-[#8B7355] transition-colors">
              Claim 10% OFF & Shop Now 🚀
            </button>
            <button
              onClick={onClose}
              className="w-full text-[#666666] py-2 text-sm hover:text-[#111111] transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;