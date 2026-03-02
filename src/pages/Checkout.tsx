import { useState, FormEvent, ChangeEvent } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { Loader2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { items, cartTotal } = useCart();
  
  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Address & Shipping State
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    number: '',
    complement: ''
  });
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [isLoadingShipping, setIsLoadingShipping] = useState(false);
  const [shippingError, setShippingError] = useState('');

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setCep(value);
      if (value.length === 8) {
        fetchAddress(value);
      } else {
        setShippingCost(null);
        setShippingError('');
      }
    }
  };

  const fetchAddress = async (cepValue: string) => {
    setIsLoadingShipping(true);
    setShippingError('');
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
      const data = await response.json();

      if (data.erro) {
        setShippingError('CEP não encontrado.');
        setShippingCost(null);
        return;
      }

      setAddress(prev => ({
        ...prev,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf
      }));

      await calculateShipping(cepValue);
    } catch (error) {
      setShippingError('Erro ao buscar CEP.');
    } finally {
      setIsLoadingShipping(false);
    }
  };

  const calculateShipping = async (cepDestino: string) => {
    // Simulate API payload as requested
    const payload = {
      cep: cepDestino,
      subtotal: cartTotal,
      itens_do_carrinho: items
    };
    console.log("Calculando frete com:", payload);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Simulated shipping cost (always charge shipping)
    // Adding fixed fee of R$ 5.00 as requested
    const baseShipping = 25.00;
    const additionalFee = 5.00;
    setShippingCost(baseShipping + additionalFee);
  };

  const handleWhatsAppCheckout = (e: FormEvent) => {
    e.preventDefault();

    if (shippingCost === null) {
      setShippingError('Informe um CEP válido para calcular o frete.');
      return;
    }

    if (!personalInfo.name || !personalInfo.email || !personalInfo.phone || !address.street || !address.number || !address.neighborhood || !address.city || !address.state) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const productsList = items.map(item => 
      `- ${item.name} | Tam: ${item.selectedSize} | Qtd: ${item.quantity} | ${formatCurrency(item.price)}`
    ).join('\n');

    const total = cartTotal + (shippingCost || 0);

    const message = `*NOVO PEDIDO - NOVISCHI STORE*

*Cliente:* ${personalInfo.name}
*Telefone:* ${personalInfo.phone}
*Email:* ${personalInfo.email}

*Endereço de Entrega:*
${address.street}, ${address.number} ${address.complement ? `- ${address.complement}` : ''}
${address.neighborhood} - ${address.city}/${address.state}
CEP: ${cep}

*Pedido:*
${productsList}

*Subtotal:* ${formatCurrency(cartTotal)}
*Frete:* ${formatCurrency(shippingCost || 0)}
*TOTAL:* ${formatCurrency(total)}

Gostaria de finalizar o pagamento!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/19997011227?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-novischi-black pt-32 pb-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-novischi-white uppercase mb-4">Seu carrinho está vazio</h2>
        <Link to="/shop" className="text-novischi-gray hover:text-novischi-white underline">
          Voltar a comprar
        </Link>
      </div>
    );
  }

  const total = cartTotal + (shippingCost || 0);

  return (
    <div className="bg-novischi-black min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-novischi-white uppercase tracking-tighter mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleWhatsAppCheckout} className="space-y-8">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-novischi-white uppercase tracking-wider border-b border-novischi-gold/20 pb-2">Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required 
                    placeholder="Nome Completo" 
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    required 
                    type="email" 
                    placeholder="E-mail" 
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    required 
                    placeholder="Telefone" 
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-novischi-white uppercase tracking-wider border-b border-novischi-gold/20 pb-2">Endereço de Entrega</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <input 
                      required 
                      placeholder="CEP" 
                      value={cep}
                      onChange={handleCepChange}
                      maxLength={8}
                      className="w-full bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                    />
                    {isLoadingShipping && (
                      <div className="absolute right-3 top-3">
                        <Loader2 className="animate-spin text-novischi-gold" size={20} />
                      </div>
                    )}
                  </div>
                  {shippingError && <p className="text-red-500 text-xs md:col-span-3">{shippingError}</p>}
                  
                  <input 
                    required 
                    placeholder="Rua" 
                    value={address.street}
                    onChange={(e) => setAddress({...address, street: e.target.value})}
                    className="md:col-span-2 bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    required 
                    placeholder="Número" 
                    value={address.number}
                    onChange={(e) => setAddress({...address, number: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    placeholder="Complemento" 
                    value={address.complement}
                    onChange={(e) => setAddress({...address, complement: e.target.value})}
                    className="md:col-span-2 bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    required 
                    placeholder="Bairro" 
                    value={address.neighborhood}
                    onChange={(e) => setAddress({...address, neighborhood: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    required 
                    placeholder="Cidade" 
                    value={address.city}
                    onChange={(e) => setAddress({...address, city: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                  <input 
                    required 
                    placeholder="Estado" 
                    value={address.state}
                    onChange={(e) => setAddress({...address, state: e.target.value})}
                    className="bg-novischi-dark border border-novischi-gray/20 text-novischi-white p-3 rounded focus:outline-none focus:border-novischi-gold transition-colors" 
                  />
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <button 
                type="submit" 
                className="w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#128C7E] transition-colors text-lg flex items-center justify-center gap-3 rounded"
              >
                <MessageCircle size={24} />
                Finalizar Pedido no WhatsApp
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-novischi-dark p-6 rounded-lg h-fit border border-novischi-gray/20 sticky top-24">
            <h3 className="text-xl font-bold text-novischi-white uppercase tracking-wider mb-6 border-b border-novischi-gray/20 pb-4">Resumo do Pedido</h3>
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="w-16 h-20 bg-novischi-black rounded overflow-hidden flex-shrink-0">
                    <img src={item.image[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-novischi-white text-sm font-medium">{item.name}</h4>
                    <p className="text-novischi-gray text-xs">Tam: {item.selectedSize} | Qtd: {item.quantity}</p>
                    <p className="text-novischi-white text-sm font-bold mt-1">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 border-t border-novischi-gray/20 pt-4">
              <div className="flex justify-between text-novischi-gray text-sm">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-novischi-gray text-sm">
                <span>Frete</span>
                <span className={shippingCost === 0 ? "text-novischi-gold" : "text-novischi-white"}>
                  {shippingCost === null ? 'Calcular...' : shippingCost === 0 ? 'Grátis' : formatCurrency(shippingCost)}
                </span>
              </div>
              <div className="flex justify-between text-novischi-white text-xl font-bold pt-4 border-t border-novischi-gray/20 mt-4">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
