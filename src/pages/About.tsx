import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Section 1: Fixed Hero Image */}
      <div className="fixed inset-0 h-[100vh] w-full z-0 flex items-center justify-center bg-novischi-black p-4">
        <img 
          src="https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772127003/WhatsApp_Image_2026-02-25_at_12.28.52_j0ov0o.jpg" 
          alt="Novischi Studio" 
          className="max-w-5xl w-full h-auto max-h-[80vh] object-contain shadow-2xl rounded-lg"
        />
        
        {/* Gradient at the bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-novischi-black to-transparent" />
      </div>

      {/* Section 2: Scrolling Content */}
      <div className="relative mt-[100vh] bg-novischi-black border-t border-novischi-gold/10 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-lg text-novischi-gray leading-relaxed font-light"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-novischi-white uppercase tracking-tighter mb-8">A ESSÊNCIA NOVISCHI</h2>
            
            <p>
              A <strong className="text-novischi-white font-medium">NOVISCHI STORE</strong> nasceu da paixão pelas ruas e da realização de um sonho. Mais do que uma marca, somos um movimento criado para quem entende que se vestir é a forma mais pura de expressão. Unimos a força da cultura urbana à versatilidade do dia a dia.
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-novischi-white uppercase tracking-wider mb-2">Streetwear & Casual: O Melhor dos Dois Mundos</h3>
              <p>
                Acreditamos que o estilo não deve ter barreiras. Por isso, criamos peças que transitam entre o impacto do streetwear e a elegância do casual. Seja para o corre intenso na cidade ou para um momento de lazer com presença, a Novischi entrega o equilíbrio perfeito entre conforto, cortes modernos e design minimalista.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-novischi-white uppercase tracking-wider mb-2">Compromisso com o Original</h3>
              <p>
                Aqui, a autenticidade é lei. Trabalhamos exclusivamente com produtos originais, garantindo que cada peça que chega até você tenha procedência garantida e qualidade superior. Não vendemos apenas roupas; entregamos confiança e exclusividade em coleções limitadas que mantêm você à frente das tendências.
              </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-novischi-gold/20">
              <h2 className="text-3xl md:text-4xl font-bold text-novischi-white uppercase tracking-tighter mb-12 text-center">O QUE NOS MOVE</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h3 className="text-novischi-white font-bold uppercase text-xl tracking-wider">QUALIDADE PREMIUM</h3>
                  <p className="text-sm text-novischi-gray/80">Tecidos selecionados e acabamento impecável em cada costura.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-novischi-white font-bold uppercase text-xl tracking-wider">100% ORIGINAL</h3>
                  <p className="text-sm text-novischi-gray/80">Autenticidade inegociável. Garantia de procedência em todo o nosso catálogo.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-novischi-white font-bold uppercase text-xl tracking-wider">VERSATILIDADE</h3>
                  <p className="text-sm text-novischi-gray/80">Do estilo de rua ao visual casual, peças feitas para quem vive a cidade intensamente.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-novischi-white font-bold uppercase text-xl tracking-wider">COMUNIDADE</h3>
                  <p className="text-sm text-novischi-gray/80">Feito por quem respira cultura e estilo, para quem faz da moda a sua identidade.</p>
                </div>
                <div className="space-y-3 md:col-span-2 lg:col-span-1">
                  <h3 className="text-novischi-white font-bold uppercase text-xl tracking-wider">VEM PRO NOSSO MUNDO</h3>
                  <p className="text-sm text-novischi-gray/80">Rua Reginaldo Amorim dos Santos, 136, Empyreo – Leme/SP</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
