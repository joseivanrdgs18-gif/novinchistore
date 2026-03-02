import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-novischi-dark border-l border-novischi-gold/10 z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-novischi-gold/10">
              <h2 className="text-xl font-bold text-novischi-white uppercase tracking-wider">Seu Carrinho</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-novischi-gray hover:text-novischi-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-novischi-black flex items-center justify-center">
                    <ShoppingBagIcon className="w-8 h-8 text-novischi-gray" />
                  </div>
                  <p className="text-novischi-gray">Seu carrinho está vazio.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-novischi-white underline underline-offset-4 hover:text-novischi-gold"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-novischi-black rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-novischi-white font-medium text-sm line-clamp-2">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-novischi-gray hover:text-red-400 transition-colors ml-2"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-novischi-gray text-xs mt-1">Tamanho: {item.selectedSize}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-novischi-gold/20 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-1 text-novischi-gray hover:text-novischi-white"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2 text-sm text-novischi-white min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="p-1 text-novischi-gray hover:text-novischi-white"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-novischi-white font-medium">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-novischi-gold/10 bg-novischi-black/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-novischi-gray text-sm uppercase tracking-wider">Subtotal</span>
                  <span className="text-xl font-bold text-novischi-white">{formatCurrency(cartTotal)}</span>
                </div>
                <p className="text-novischi-gray text-xs mb-6 text-center">
                  Frete e impostos calculados no checkout.
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-novischi-gold text-novischi-black text-center py-4 font-bold uppercase tracking-wider hover:bg-novischi-gold-dark transition-colors"
                >
                  Finalizar Compra
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
