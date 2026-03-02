import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-novischi-dark border-t border-novischi-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-novischi-white uppercase tracking-tighter mb-4">
              NOVISCHI STORE<span className="text-novischi-gold">.</span>
            </h2>
            <p className="text-novischi-gray text-sm leading-relaxed">
              Streetwear autêntico para quem vive a cidade. Qualidade premium e design exclusivo.
            </p>
          </div>
          
          <div>
            <h3 className="text-novischi-white font-bold uppercase tracking-wider text-sm mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-novischi-gray hover:text-novischi-gold text-sm transition-colors">Loja</Link></li>
              <li><Link to="/about" className="text-novischi-gray hover:text-novischi-gold text-sm transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contact" className="text-novischi-gray hover:text-novischi-gold text-sm transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-novischi-white font-bold uppercase tracking-wider text-sm mb-6">Ajuda</h3>
            <ul className="space-y-4">
              <li><Link to="/policy" className="text-novischi-gray hover:text-novischi-gold text-sm transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/policy" className="text-novischi-gray hover:text-novischi-gold text-sm transition-colors">Trocas e Devoluções</Link></li>
              <li><Link to="/contact" className="text-novischi-gray hover:text-novischi-gold text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-novischi-white font-bold uppercase tracking-wider text-sm mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-novischi-gray hover:text-novischi-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-novischi-gray hover:text-novischi-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-novischi-gray hover:text-novischi-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-novischi-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-novischi-gray text-xs">
            © {new Date().getFullYear()} NOVISCHI STORE. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {/* Payment Icons Placeholder */}
            <div className="h-6 w-10 bg-novischi-black border border-novischi-gold/20 rounded"></div>
            <div className="h-6 w-10 bg-novischi-black border border-novischi-gold/20 rounded"></div>
            <div className="h-6 w-10 bg-novischi-black border border-novischi-gold/20 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
