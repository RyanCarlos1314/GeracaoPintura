import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-geracao-pintura.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Geração Pintura" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Estética automotiva premium com mais de 10 anos de experiência. 
              Transformamos a aparência do seu veículo com padrão profissional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-orbitron text-lg mb-4 text-primary">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold font-orbitron text-lg mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Rua das Oficinas, 123<br />Centro - Curitiba/PR
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5541999999999" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  (41) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20de%20estética%20automotiva."
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@geracaopintura.com.br" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  contato@geracaopintura.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Hours and Social */}
          <div>
            <h3 className="font-bold font-orbitron text-lg mb-4 text-primary">Horário de Funcionamento</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div className="text-muted-foreground text-sm">
                <p>Seg-Sex: 8h às 18h</p>
                <p>Sábado: 8h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
            
            <h4 className="font-semibold font-orbitron text-sm mb-3 text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/geracaopintura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com/@geracaopintura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20de%20estética%20automotiva."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Geração Pintura. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
