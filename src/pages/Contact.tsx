import { MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-novischi-black min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-novischi-white uppercase tracking-tighter mb-12 font-display">Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xl text-novischi-gray mb-8 font-light">
              Tem alguma dúvida sobre seu pedido, produtos ou quer apenas trocar uma ideia? Entre em contato com a gente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-novischi-dark p-3 rounded-full">
                  <Phone className="text-novischi-white" size={24} />
                </div>
                <div>
                  <h3 className="text-novischi-white font-bold uppercase text-sm tracking-wider mb-1">WhatsApp</h3>
                  <p className="text-novischi-gray">(19) 99701-1227</p>
                  <p className="text-novischi-gray text-xs mt-1">Seg a Sex, das 9h às 18h.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-novischi-dark p-3 rounded-full">
                  <MapPin className="text-novischi-white" size={24} />
                </div>
                <div>
                  <h3 className="text-novischi-white font-bold uppercase text-sm tracking-wider mb-1">Endereço</h3>
                  <p className="text-novischi-gray">Rua Reginaldo Amorim dos Santos, 136</p>
                  <p className="text-novischi-gray">Empyreo – Leme/SP</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
