import { Wrench, Sparkles, Shield, Sun } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Polimento Técnico",
    description: "Remoção de riscos e restauração do brilho original com técnicas profissionais",
  },
  {
    icon: Sparkles,
    title: "Vitrificação Cerâmica",
    description: "Proteção duradoura e efeito espelhado que mantém seu carro impecável",
  },
  {
    icon: Shield,
    title: "Detalhamento Completo",
    description: "Limpeza profunda interna e externa com atenção aos mínimos detalhes",
  },
  {
    icon: Sun,
    title: "Proteção UV",
    description: "Tratamento contra raios solares e intempéries para preservação da pintura",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-metallic">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Excelência em <span className="text-gradient-red">Estética Automotiva</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Com mais de uma década de experiência, transformamos a aparência do seu veículo 
            com técnicas profissionais e produtos de alta qualidade. Nossa paixão por carros 
            se reflete em cada detalhe do nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-red-glow transition-all duration-300 hover:scale-105 border border-border hover:border-primary group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-3 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
