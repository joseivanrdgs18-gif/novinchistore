import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Get unique sizes from all products
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes))).sort();
  const categories = [
    'Camisa Ayudarme',
    'Calça Casual',
    'Calça Alfaiataria',
    'Calça Jogger',
    'Bermuda em Linho',
    'Camisa em Tricô',
    'Camiseta Gola Média',
    'Shorts Alfaiataria',
    'Camisa de Linho',
    'Camisa TOTANKA',
    'Sandália Birken'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category Filter
      if (categoryFilter && product.category !== categoryFilter) return false;
      
      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      // Size Filter
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes.some(size => selectedSizes.includes(size));
        if (!hasSize) return false;
      }

      return true;
    });
  }, [categoryFilter, priceRange, selectedSizes]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const updateCategory = (cat: string | null) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="bg-novischi-black min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-novischi-white uppercase tracking-tighter">Loja</h1>
            <p className="text-novischi-gray mt-2">
              {filteredProducts.length} produtos encontrados
            </p>
          </div>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-novischi-white border border-novischi-gold/20 px-4 py-2 rounded hover:bg-novischi-gold hover:text-novischi-black transition-colors md:hidden"
          >
            <Filter size={18} /> Filtros
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="text-novischi-white font-bold uppercase tracking-wider mb-4 text-sm">Categorias</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => updateCategory(null)}
                    className={`text-sm hover:text-novischi-white transition-colors ${!categoryFilter ? 'text-novischi-white font-bold' : 'text-novischi-gray'}`}
                  >
                    Todas
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => updateCategory(cat)}
                      className={`text-sm hover:text-novischi-white transition-colors ${categoryFilter === cat ? 'text-novischi-white font-bold' : 'text-novischi-gray'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-novischi-white font-bold uppercase tracking-wider mb-4 text-sm">Preço</h3>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-novischi-gold"
              />
              <div className="flex justify-between text-xs text-novischi-gray mt-2">
                <span>R$ 0</span>
                <span>R$ {priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="text-novischi-white font-bold uppercase tracking-wider mb-4 text-sm">Tamanhos</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-10 h-10 flex items-center justify-center border text-xs font-medium transition-colors ${
                      selectedSizes.includes(size) 
                        ? 'bg-novischi-gold text-novischi-black border-novischi-gold' 
                        : 'bg-transparent text-novischi-gray border-novischi-gray/20 hover:border-novischi-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="fixed inset-0 z-50 bg-novischi-dark p-6 md:hidden overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-novischi-white uppercase">Filtros</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="text-novischi-white">
                    <X size={24} />
                  </button>
                </div>
                
                {/* Mobile Filter Content (Duplicate of Desktop for simplicity) */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-novischi-white font-bold uppercase tracking-wider mb-4">Categorias</h3>
                    <ul className="space-y-3">
                      <li>
                        <button 
                          onClick={() => { updateCategory(null); setIsFilterOpen(false); }}
                          className={`text-base ${!categoryFilter ? 'text-novischi-white font-bold' : 'text-novischi-gray'}`}
                        >
                          Todas
                        </button>
                      </li>
                      {categories.map(cat => (
                        <li key={cat}>
                          <button 
                            onClick={() => { updateCategory(cat); setIsFilterOpen(false); }}
                            className={`text-base ${categoryFilter === cat ? 'text-novischi-white font-bold' : 'text-novischi-gray'}`}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-novischi-white font-bold uppercase tracking-wider mb-4">Preço (Máx)</h3>
                    <input 
                      type="range" 
                      min="0" 
                      max="500" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-novischi-gold h-2 bg-novischi-dark rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-right text-novischi-white mt-2 font-mono">R$ {priceRange[1]}</div>
                  </div>

                  <div>
                    <h3 className="text-novischi-white font-bold uppercase tracking-wider mb-4">Tamanhos</h3>
                    <div className="flex flex-wrap gap-3">
                      {allSizes.map(size => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-colors ${
                            selectedSizes.includes(size) 
                              ? 'bg-novischi-gold text-novischi-black border-novischi-gold' 
                              : 'bg-transparent text-novischi-gray border-novischi-gray/20'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full bg-novischi-gold text-novischi-black py-4 font-bold uppercase tracking-wider mt-8 hover:bg-novischi-gold-dark"
                  >
                    Ver Resultados
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-novischi-gray text-lg">Nenhum produto encontrado com esses filtros.</p>
                <button 
                  onClick={() => {
                    setSearchParams({});
                    setPriceRange([0, 500]);
                    setSelectedSizes([]);
                  }}
                  className="mt-4 text-novischi-white underline underline-offset-4 hover:text-novischi-gold"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
