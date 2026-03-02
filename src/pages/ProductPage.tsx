import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { Minus, Plus, ShoppingBag, Truck, ShieldCheck, X, Ruler } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) {
    return <div className="min-h-screen bg-novischi-black flex items-center justify-center text-novischi-white">Produto não encontrado.</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho.');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
  };

  const allowedCategoriesForSizeGuide = [
    'Camisa Ayudarme',
    'Camisa em Tricô',
    'Camiseta Gola Média',
    'Camisa de Linho'
  ];

  const showSizeGuide = allowedCategoriesForSizeGuide.includes(product.category);

  return (
    <div className="bg-novischi-black min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-novischi-dark rounded-lg overflow-hidden">
              <img 
                src={product.image[selectedImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.image.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.image.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-[3/4] bg-novischi-dark rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === idx ? 'border-novischi-gold' : 'border-transparent hover:border-novischi-gold/50'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-novischi-gray text-sm uppercase tracking-wider mb-2">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-novischi-white uppercase tracking-tighter mb-4 font-display">{product.name}</h1>
            <p className="text-2xl font-medium text-novischi-white mb-8">{formatCurrency(product.price)}</p>
            
            <p className="text-novischi-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-novischi-white font-bold uppercase text-sm tracking-wider">Tamanho</span>
                {showSizeGuide && (
                  <button 
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-novischi-gray text-xs underline hover:text-novischi-white transition-colors flex items-center gap-1"
                  >
                    <Ruler size={14} />
                    Guia de medidas
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 flex items-center justify-center border text-sm font-bold transition-all ${
                      selectedSize === size 
                        ? 'bg-novischi-gold text-novischi-black border-novischi-gold' 
                        : 'bg-transparent text-novischi-gray border-novischi-gray/20 hover:border-novischi-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-novischi-gray/20 w-32 justify-between px-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-novischi-gray hover:text-novischi-white"
                >
                  <Minus size={16} />
                </button>
                <span className="text-novischi-white font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-novischi-gray hover:text-novischi-white"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-novischi-gold text-novischi-black font-bold uppercase tracking-wider hover:bg-novischi-gold-dark transition-colors flex items-center justify-center gap-2 py-4"
              >
                <ShoppingBag size={20} />
                Adicionar ao Carrinho
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 border-t border-novischi-gold/20 pt-8">
              <div className="flex items-center gap-4">
                <Truck className="text-novischi-gray" size={24} />
                <div>
                  <h4 className="text-novischi-white font-bold text-sm uppercase">Frete Grátis</h4>
                  <p className="text-novischi-gray text-xs">Para compras acima de R$ 299,00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-novischi-gray" size={24} />
                <div>
                  <h4 className="text-novischi-white font-bold text-sm uppercase">Garantia de Qualidade</h4>
                  <p className="text-novischi-gray text-xs">Troca grátis em até 7 dias</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSizeGuideOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl relative"
              >
                <button 
                  onClick={() => setIsSizeGuideOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10"
                >
                  <X size={24} />
                </button>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <Ruler className="text-black" size={28} />
                    <div>
                      <h2 className="text-2xl font-bold text-black uppercase tracking-tight">TABELA DE MEDIDAS</h2>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Illustration */}
                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                      <div className="relative w-48 h-56">
                        {/* Simple T-Shirt SVG Representation */}
                        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
                          <path 
                            d="M25,10 L35,5 L65,5 L75,10 L95,30 L85,40 L75,30 L75,110 L25,110 L25,30 L15,40 L5,30 Z" 
                            fill="white" 
                            stroke="#e5e7eb" 
                            strokeWidth="1"
                          />
                          {/* Neck */}
                          <path d="M35,5 Q50,15 65,5" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                          
                          {/* Width Arrow */}
                          <line x1="28" y1="60" x2="72" y2="60" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
                          <text x="50" y="55" textAnchor="middle" fontSize="6" fill="#2563eb" fontWeight="bold">Largura (peito)</text>
                          
                          {/* Length Arrow */}
                          <line x1="85" y1="5" x2="85" y2="110" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
                          <text x="92" y="60" textAnchor="middle" fontSize="6" fill="#2563eb" fontWeight="bold" transform="rotate(90, 92, 60)">Comprimento</text>

                          <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                              <polygon points="0 0, 6 2, 0 4" fill="#2563eb" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                      <div className="mt-4 text-xs text-gray-500 space-y-1">
                        <p className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <strong>Largura:</strong> Medir de uma axila até a outra.
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <strong>Comprimento:</strong> Do ombro até a barra.
                        </p>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-black block"></span>
                        Medidas em centímetros (cm)
                      </h3>
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-100 text-gray-700 uppercase font-bold text-xs">
                            <tr>
                              <th className="px-4 py-3 border-b border-gray-200">Tamanho</th>
                              <th className="px-4 py-3 border-b border-gray-200">Largura</th>
                              <th className="px-4 py-3 border-b border-gray-200">Comprimento</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 font-bold text-gray-900">P</td>
                              <td className="px-4 py-3 text-gray-600">56 cm</td>
                              <td className="px-4 py-3 text-gray-600">76 cm</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 font-bold text-gray-900">M</td>
                              <td className="px-4 py-3 text-gray-600">60 cm</td>
                              <td className="px-4 py-3 text-gray-600">83 cm</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 font-bold text-gray-900">G</td>
                              <td className="px-4 py-3 text-gray-600">63 cm</td>
                              <td className="px-4 py-3 text-gray-600">83 cm</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 font-bold text-gray-900">GG</td>
                              <td className="px-4 py-3 text-gray-600">65 cm</td>
                              <td className="px-4 py-3 text-gray-600">84 cm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-4 italic">
                        * As medidas podem variar em até 2cm para mais ou para menos.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
