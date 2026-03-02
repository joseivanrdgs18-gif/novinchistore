import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && product.image.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
      }, 1200); // Change image every 1.2 seconds
    } else {
      setCurrentImageIndex(0); // Reset to first image when not hovered
    }
    return () => clearInterval(interval);
  }, [isHovered, product.image.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-novischi-dark relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image[currentImageIndex]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </Link>
        
        {/* Carousel Controls */}
        {product.image.length > 1 && isHovered && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1 z-10">
              {product.image.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 pointer-events-none">
          {product.isNew && (
            <span className="bg-novischi-gold text-novischi-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
              Novo
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-novischi-gold-dark text-novischi-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
              Hot
            </span>
          )}
        </div>

        {/* Quick Add Button (Desktop) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            // Default to first size for quick add, or open modal (simplified here)
            addToCart(product, product.sizes[0]);
          }}
          className="absolute bottom-0 left-0 right-0 bg-novischi-gold text-novischi-black py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-novischi-gold-dark z-20"
        >
          <ShoppingBag size={16} />
          Adicionar
        </button>
      </div>
      
      <div className="mt-2 md:mt-4 flex flex-col md:flex-row md:justify-between md:items-start gap-1">
        <div className="min-w-0">
          <h3 className="text-[10px] md:text-sm text-novischi-white font-medium uppercase tracking-wide truncate">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="text-[10px] md:text-sm text-novischi-gray truncate">{product.category}</p>
        </div>
        <p className="text-[10px] md:text-sm font-bold text-novischi-white whitespace-nowrap">{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
