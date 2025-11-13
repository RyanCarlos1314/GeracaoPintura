import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos Silva",
    carModel: "BMW 320i 2020",
    avatar: "CS",
    rating: 5,
    text: "Polimento ficou impecável! Parece que o carro saiu da concessionária. Profissionalismo de alto nível e atenção aos detalhes.",
  },
  {
    name: "Ana Paula Rodrigues",
    carModel: "Corolla 2021",
    avatar: "AP",
    rating: 5,
    text: "Vitrificação cerâmica superou minhas expectativas. Carro sempre brilhando mesmo após semanas. Recomendo demais!",
  },
  {
    name: "Roberto Mendes",
    carModel: "Golf GTI 2019",
    avatar: "RM",
    rating: 5,
    text: "Serviço excepcional do início ao fim. A revitalização dos faróis ficou perfeita. Voltarei com certeza!",
  },
  {
    name: "Juliana Costa",
    carModel: "Civic Si 2022",
    avatar: "JC",
    rating: 5,
    text: "Detalhamento interno impecável. Eliminaram completamente os odores e manchas. Carro ficou como novo!",
  },
  {
    name: "Marcos Oliveira",
    carModel: "Amarok 2020",
    avatar: "MO",
    rating: 5,
    text: "Cristalização da pintura ficou incrível. A proteção realmente funciona, água escorre sem deixar marcas. Top demais!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            O Que Dizem <span className="text-gradient-red">Nossos Clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-metallic p-8 rounded-lg shadow-card hover:shadow-red-glow transition-all duration-300 border border-border hover:border-primary group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Avatar className="border-2 border-primary">
                  <AvatarFallback className="bg-primary text-white font-bold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold font-orbitron group-hover:text-primary transition-smooth">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.carModel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
