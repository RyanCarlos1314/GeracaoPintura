import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const results = [
  {
    image: beforeAfter1,
    title: "Polimento e Restauração",
    description: "Pintura completamente restaurada",
  },
  {
    image: beforeAfter2,
    title: "Vitrificação Cerâmica",
    description: "Brilho intenso e proteção duradoura",
  },
  {
    image: beforeAfter3,
    title: "Revitalização de Faróis",
    description: "Transparência e claridade recuperadas",
  },
];

const BeforeAfterSection = () => {
  return (
    <section id="resultados" className="py-20 md:py-32 bg-metallic">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Resultados que <span className="text-gradient-red">Falam por Si</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Veja a transformação que realizamos em diversos veículos. 
            Cada trabalho é feito com dedicação e atenção aos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 border-primary/20 hover:border-primary shadow-card hover:shadow-red-glow transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
              
              {/* Overlay with labels */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-muted/90 backdrop-blur-sm text-foreground px-3 py-1 rounded text-sm font-semibold">
                  ANTES
                </span>
                <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </span>
              </div>

              {/* Bottom info */}
              <div className="bg-card/95 backdrop-blur-sm p-4 border-t border-border">
                <h3 className="font-bold font-orbitron text-lg mb-1 group-hover:text-primary transition-smooth">
                  {result.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer ver seu carro com esse resultado? Entre em contato!
          </p>
          <a
            href="https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20de%20estética%20automotiva."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold shadow-red-glow transition-smooth hover:scale-105"
          >
            Ver Mais Resultados
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
