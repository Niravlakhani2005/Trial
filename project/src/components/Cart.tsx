import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  
  const totalPrice = getTotalPrice();
  const discount = paymentMethod === 'online' ? 20 : 0;
  const finalPrice = totalPrice - discount;

  const handleCheckout = () => {
    // In a real app, this would integrate with payment gateway
    alert(`Checkout with ${paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}\nTotal: ₹${finalPrice}`);
  };

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={16} />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={28} className="text-[#8B7355]" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-4">Your Cart is Empty</h3>
            <p className="text-[#666666] mb-6">Start building your reading collection with our curated combos!</p>
            <button
              onClick={onClose}
              className="w-full bg-[#111111] text-white py-3 rounded-full font-semibold hover:bg-[#8B7355] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative">
        <div className="sticky top-0 bg-white p-6 border-b border-[#eae6df] flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#111111]">Your Cart ({items.length})</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.type}`} className="bg-[#f8f6f3] rounded-2xl p-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-20 bg-gradient-to-br from-[#8B7355] to-[#D4AF37] rounded-lg flex-shrink-0"></div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#111111] mb-1">
                      {item.type === 'combo' ? item.name : item.title}
                    </h3>
                    {item.type === 'combo' && item.books && (
                      <p className="text-sm text-[#666666] mb-2">
                        {item.books.join(', ')}
                      </p>
                    )}
                    {item.type === 'single' && (
                      <p className="text-sm text-[#666666] mb-2">{item.author}</p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-semibold text-[#111111] w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-[#111111]">₹{item.price * item.quantity}</div>
                        <button
                          onClick={() => removeItem(item.id, item.type)}
                          className="text-xs text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 bg-white p-6 border-t border-[#eae6df]">
          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#111111] mb-3">Payment Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod('online')}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'online'
                    ? 'border-[#8B7355] bg-[#8B7355]/10'
                    : 'border-[#eae6df] bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className={paymentMethod === 'online' ? 'text-[#8B7355]' : 'text-[#666666]'} />
                  <div className="text-left">
                    <div className={`font-semibold ${paymentMethod === 'online' ? 'text-[#8B7355]' : 'text-[#111111]'}`}>
                      Online Payment
                    </div>
                    <div className="text-xs text-green-600 font-medium">Save ₹20</div>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-[#8B7355] bg-[#8B7355]/10'
                    : 'border-[#eae6df] bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Banknote size={20} className={paymentMethod === 'cod' ? 'text-[#8B7355]' : 'text-[#666666]'} />
                  <div className="text-left">
                    <div className={`font-semibold ${paymentMethod === 'cod' ? 'text-[#8B7355]' : 'text-[#111111]'}`}>
                      Cash on Delivery
                    </div>
                    <div className="text-xs text-[#666666]">Available</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-[#666666]">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Online Payment Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}
            <div className="flex justify-between text-xl font-bold text-[#111111] pt-2 border-t border-[#eae6df]">
              <span>Total</span>
              <span>₹{finalPrice}</span>
            </div>
          </div>

          {paymentMethod === 'online' && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-3 mb-4">
              <p className="text-sm text-green-700 font-medium">
                💖 Support small business: pay online & save ₹20
              </p>
            </div>
          )}

          <button
            onClick={handleCheckout}
            className="w-full bg-[#111111] text-white py-4 rounded-full font-semibold hover:bg-[#8B7355] transition-colors flex items-center justify-center gap-2"
          >
            {paymentMethod === 'online' ? (
              <>
                <CreditCard size={20} />
                Pay Online - ₹{finalPrice}
              </>
            ) : (
              <>
                <Banknote size={20} />
                Order with COD - ₹{finalPrice}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;