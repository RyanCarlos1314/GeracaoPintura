import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white mb-4">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Agende Hoje Mesmo</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white leading-tight">
            Agende Agora Seu
            <br />
            <span className="text-primary-light">Atendimento Personalizado</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Cuidamos do seu carro como se fosse nosso. Entre em contato e descubra 
            como podemos transformar a aparência do seu veículo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="hero"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-red-glow group"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-background font-semibold"
            >
              <a
                href="https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20de%20estética%20automotiva."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full" />
              <span className="text-sm">Orçamento Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full" />
              <span className="text-sm">Atendimento Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full" />
              <span className="text-sm">Produtos Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
