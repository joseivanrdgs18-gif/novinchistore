import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter(p => p.isNew || p.isBestSeller).slice(0, 4);

  return (
    <div className="bg-novischi-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-novischi-black">
          <img
            src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772144406/Gemini_Generated_Image_lmwtgmlmwtgmlmwt_v8u8mn.png"
            alt="Streetwear Collection"
            className="w-full h-full object-contain md:object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-novischi-black via-novischi-black/40 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-4 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-novischi-gold text-novischi-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-novischi-gold-dark transition-colors"
            >
              Ver Coleção <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-10 md:py-20 bg-novischi-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* 1. Camisa Ayudarme */}
            <Link to="/shop?category=Camisa Ayudarme" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772053486/WhatsApp_Image_2026-02-25_at_18.02.12_g30v6l.jpg"
                alt="Camisa Ayudarme"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all">Camisa Ayudarme</h3>
              </div>
            </Link>

            {/* 2. Calça Casual */}
            <Link to="/shop?category=Calça Casual" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772055080/WhatsApp_Image_2026-02-25_at_18.30.43_wdyhqh.jpg"
                alt="Calça Casual"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all">Calça Casual</h3>
              </div>
            </Link>

            {/* 3. Calça Alfaiataria */}
            <Link to="/shop?category=Calça Alfaiataria" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772055233/WhatsApp_Image_2026-02-25_at_18.33.10_krtcgi.jpg"
                alt="Calça Alfaiataria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all">Calça Alfaiataria</h3>
              </div>
            </Link>

            {/* 4. Calça Jogger */}
            <Link to="/shop?category=Calça Jogger" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.36_mumibo.jpg"
                alt="Calça Jogger"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all">Calça Jogger</h3>
              </div>
            </Link>

            {/* 4. Bermuda Em Linho */}
            <Link to="/shop?category=Bermuda em Linho" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772060161/WhatsApp_Image_2026-02-25_at_17.38.34_k0minw.jpg"
                alt="Bermuda Em Linho"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Bermuda em Linho</h3>
              </div>
            </Link>

            {/* 5. Camisa em Tricô */}
            <Link to="/shop?category=Camisa em Tricô" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772061218/WhatsApp_Image_2026-02-25_at_17.39.03_madnga.jpg"
                alt="Camisa em Tricô"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Camisa em Tricô</h3>
              </div>
            </Link>

            {/* 6. Camiseta Gola Média */}
            <Link to="/shop?category=Camiseta Gola Média" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772110045/WhatsApp_Image_2026-02-25_at_17.39.54_wth05x.jpg"
                alt="Camiseta Gola Média"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Camiseta Gola Média</h3>
              </div>
            </Link>

            {/* 7. Shorts Alfaiataria */}
            <Link to="/shop?category=Shorts Alfaiataria" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772115580/WhatsApp_Image_2026-02-25_at_21.08.36_m5cccy.jpg"
                alt="Shorts Alfaiataria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Shorts Alfaiataria</h3>
              </div>
            </Link>

            {/* 8. Camisa de Linho */}
            <Link to="/shop?category=Camisa de Linho" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772115580/WhatsApp_Image_2026-02-25_at_21.08.59_kzzlrh.jpg"
                alt="Camisa de Linho"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Camisa de Linho</h3>
              </div>
            </Link>

            {/* 9. Camisa TOTANKA */}
            <Link to="/shop?category=Camisa TOTANKA" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772242130/WhatsApp_Image_2026-02-26_at_21.06.00_xuhpcl.jpg"
                alt="Camisa TOTANKA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Camisa TOTANKA</h3>
              </div>
            </Link>

            {/* 9. Sandália Birken */}
            <Link to="/shop?category=Sandália Birken" className="group relative h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772238879/WhatsApp_Image_2026-02-26_at_21.12.40_r9hj9w.jpg"
                alt="Sandália Birken"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-novischi-white uppercase tracking-tighter border-b-2 border-transparent group-hover:border-novischi-white transition-all text-center px-4">Sandália Birken</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-novischi-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-novischi-white uppercase tracking-tighter mb-2">Destaques</h2>
              <p className="text-novischi-gray">As peças mais cobiçadas do momento.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-novischi-white hover:text-novischi-gold transition-colors uppercase text-sm font-bold tracking-wider">
              Ver tudo <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-block border border-novischi-gold text-novischi-white px-8 py-3 uppercase font-bold tracking-wider hover:bg-novischi-gold hover:text-novischi-black transition-colors">
              Ver tudo
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee / Banner */}
      <div className="bg-novischi-gold py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">Enviamos para todo o Brasil</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">Parcelamento em até 6X</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">NOVISCHI STORE</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">LOJA ABERTA DE SAGUNDA A SABADO</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          
          {/* Duplicate for seamless loop */}
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">Enviamos para todo o Brasil</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">Parcelamento em até 12x</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">NOVISCHI STORE</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">LOJA ABERTA DE SAGUNDA A SABADO</span>
          <span className="text-2xl font-bold text-novischi-black uppercase tracking-widest mx-8">•</span>
        </div>
      </div>
    </div>
  );
}
