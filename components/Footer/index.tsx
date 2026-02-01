import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-12 px-4  mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl font-bold tracking-tighter">
            <span className="text-blue-500">STORE</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Sua melhor escolha para compras online. Entregamos em todo o Brasil
            com segurança e agilidade.
          </p>
          <div className="flex gap-4 mt-2">
            <Instagram
              size={20}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            />
            <Facebook
              size={20}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            />
            <Twitter
              size={20}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold">Links Rápidos</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Início
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Todos os Produtos
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Termos de Uso
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Privacidade
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold">Atendimento</h3>
          <div className="text-sm space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-500" />
              <span>suporte@store.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-500" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-blue-500 flex-shrink-0" />
              <span>Av. Paulista, 1000 - São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 STORE. Todos os direitos reservados.</p>
        <div className="flex gap-6 italic">
          <span>CNPJ: 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
