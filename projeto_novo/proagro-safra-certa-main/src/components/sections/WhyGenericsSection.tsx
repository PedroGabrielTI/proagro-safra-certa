import { Shield, BadgeDollarSign, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [{
  icon: Shield,
  title: "Segurança",
  description: "Trabalhamos apenas com defensivos agrícolas registrados no Brasil, aprovados após rigorosos testes de eficácia e segurança. Nada de experimentação — só o que já passou por todos os órgãos reguladores."
}, {
  icon: BadgeDollarSign,
  title: "Preço",
  description: "O princípio ativo é o mesmo das grandes marcas. O que muda é o custo por hectare na sua planilha. Sem pagar pelo marketing das multinacionais, você investe onde realmente importa."
}, {
  icon: Eye,
  title: "Transparência",
  description: "Você sabe exatamente o que está comprando: princípio ativo, concentração, condições comerciais e programação de entrega. Sem surpresas, sem letras miúdas."
}];

export function WhyGenericsSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="genericos" className="py-20 md:py-28 bg-section-gradient">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que trocar a marca famosa pelo genérico?
          </h2>
          <p className="text-lg text-muted-foreground">Mesmo princípio ativo, mesmos defensivos — o que muda é o preço na sua planilha.</p>
        </div>

        {/* Analogy */}
        <div className="max-w-2xl mx-auto mb-16 p-6 bg-card rounded-2xl shadow-card border border-border">
          <p className="text-foreground/90 text-center italic">"Assim como quem trocou Novalgina por dipirona e não voltou mais, o produtor que entende o genérico no campo não volta atrás só pela marca. A eficácia é a mesma, o que muda é quanto sobra no seu bolso."</p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" onClick={() => scrollToSection("#como-comprar")}>
            Entenda como funciona na prática →
          </Button>
        </div>
      </div>
    </section>
  );
}
