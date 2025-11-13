import { Sparkles, Shield, Droplets, Wind, Car, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Polimento Espelhado",
    description: "Restauração do brilho original e remoção profunda de arranhões e marcas de oxidação",
  },
  {
    icon: Shield,
    title: "Vitrificação Cerâmica",
    description: "Proteção de longa duração com efeito hidrofóbico e resistência a riscos",
  },
  {
    icon: Droplets,
    title: "Cristalização de Pintura",
    description: "Selagem avançada que cria uma camada protetora contra intempéries",
  },
  {
    icon: Car,
    title: "Detalhamento Interno",
    description: "Higienização profunda de estofados, painel, carpetes e todos os detalhes internos",
  },
  {
    icon: Wind,
    title: "Higienização de Ar-condicionado",
    description: "Eliminação de bactérias, fungos e odores com equipamentos especializados",
  },
  {
    icon: Lightbulb,
    title: "Revitalização de Faróis",
    description: "Polimento e proteção de faróis opacos, devolvendo transparência e brilho",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Nossos <span className="text-gradient-red">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Oferecemos uma gama completa de serviços de estética automotiva com tecnologia 
            de ponta e profissionais qualificados para deixar seu carro impecável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-metallic p-8 rounded-lg shadow-card hover:shadow-red-glow transition-all duration-300 hover:scale-105 border border-border hover:border-primary group cursor-pointer"
            >
              <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce shadow-red-glow">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
